import { Chip } from "components/Chip";
import type {
  MultiOptionProps,
  MultiOptionValue,
} from "components/MultiOption";
import { SelectAllOption } from "components/MultiOption";
import { NoOption } from "components/Option";
import type { ReactNode } from "react";
import {
  Children,
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { exitElement } from "utils";
import type { MultiSelectStyleProps } from "./styles";
import {
  ArrowIcon,
  ChipsContent,
  Container,
  InputFilter,
  MultiSelectContent,
  OptionsContent,
} from "./styles";

export interface MultiSelectProps extends Omit<MultiSelectStyleProps, "open"> {
  children: ReactNode;
  placeholder?: string;
  defaultValue?: MultiOptionValue[];
  value?: MultiOptionValue[];
  showChips?: boolean;
  readOnly?: boolean;
  onChange?: (value: MultiOptionValue[]) => void;
  onBlur?: (value: MultiOptionValue[]) => void;
}

export const MultiSelect = ({
  children,
  placeholder,
  defaultValue = [],
  value,
  showChips,
  disabled,
  readOnly,
  onChange,
  onBlur,
  ...args
}: MultiSelectProps) => {
  const [filter, setFilter] = useState("");
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<Set<MultiOptionValue>>(
    new Set(defaultValue)
  );
  const { t } = useTranslation();
  const ref = useRef<HTMLButtonElement>(null);
  const filterRef = useRef<HTMLInputElement>(null);

  const hasPermission = useMemo(
    () => !disabled && !readOnly,
    [disabled, readOnly]
  );

  const selectPlaceholder = useMemo(() => {
    if (!filter && !value?.length && !internalValue.size) return placeholder;
  }, [filter, value, internalValue, placeholder]);

  const onMultiSelect = useCallback(
    (valueOption: MultiOptionValue, isSelected?: boolean) => {
      const currentValue = new Set(value ?? internalValue);
      isSelected
        ? currentValue.delete(valueOption)
        : currentValue.add(valueOption);
      onChange?.(Array.from(currentValue));
      if (value === undefined) setInternalValue(currentValue);
    },
    [value, internalValue, onChange]
  );

  const validateValue = useCallback(
    (currentValue: MultiOptionValue) =>
      value?.includes(currentValue) ?? internalValue.has(currentValue),
    [value, internalValue]
  );

  const options = useMemo(
    () =>
      Children.map(children, (child) => {
        if (isValidElement<MultiOptionProps>(child)) {
          return cloneElement(child, {
            onClick: (value: MultiOptionValue, selected?: boolean) => {
              onMultiSelect(value, selected);
              child.props.onClick?.(value, selected);
            },
            selected: validateValue(child.props.value),
          });
        }
      }),
    [children, validateValue, onMultiSelect]
  );

  const text = useMemo(() => {
    const currentText = new Set<ReactNode>();
    options?.forEach(
      ({ props }) =>
        validateValue(props.value) && currentText.add(props.children)
    );
    return currentText;
  }, [options, validateValue]);

  const filteredOptions = useMemo(() => {
    const currentFilter = filter.trim()?.toLocaleLowerCase();

    if (currentFilter)
      return options?.filter(({ props }) =>
        props.children?.toLocaleLowerCase().includes(currentFilter)
      );

    return options;
  }, [options, filter]);

  const onSelectAll = useCallback(() => {
    const currentValue = new Set(value ?? internalValue);
    if (currentValue.size) currentValue.clear();
    else filteredOptions?.forEach(({ props }) => currentValue.add(props.value));

    onChange?.(Array.from(currentValue));

    if (value === undefined) setInternalValue(currentValue);
  }, [value, internalValue, filteredOptions, onChange]);

  const onToggle = useCallback(
    (open: boolean) => {
      setOpen(open);
      setFilter("");

      if (!open) onBlur?.(value ?? Array.from(internalValue));
    },
    [value, internalValue, onBlur]
  );

  useEffect(() => {
    const hide = exitElement(ref, () => open && onToggle(false));
    document.documentElement.addEventListener("click", hide);
    return () => document.documentElement.removeEventListener("click", hide);
  }, [open, onToggle]);

  useEffect(() => {
    const hide = (e: KeyboardEvent) =>
      e.key === "Escape" && open && onToggle(false);
    document.addEventListener("keydown", hide, false);
    return () => document.removeEventListener("keydown", hide, false);
  }, [open, onToggle]);

  useEffect(() => {
    if (open) filterRef.current?.focus();
    else filterRef.current?.blur();
  }, [open, filterRef]);

  return (
    <Container {...args}>
      <MultiSelectContent
        ref={ref}
        disabled={disabled}
        onClick={() => hasPermission && onToggle(!open)}
      >
        <ArrowIcon open={open} />
        {!filter && !!text?.size && <p>{Array.from(text).join(", ")}</p>}
        <InputFilter
          value={filter}
          ref={filterRef}
          readOnly={!hasPermission}
          placeholder={selectPlaceholder}
          onKeyUp={(e) => e.preventDefault()}
          onChange={(e) => setFilter(e.target.value)}
        />
        <OptionsContent open={open} direction={args.direction}>
          {filteredOptions?.length ? (
            <>
              <SelectAllOption onClick={onSelectAll} text={t("select.all")} />
              {filteredOptions}
            </>
          ) : (
            <NoOption text={t("select.noOption")} />
          )}
        </OptionsContent>
      </MultiSelectContent>
      {showChips && text !== undefined && (
        <ChipsContent>
          {Array.from(text).map((value, index) => (
            <Chip key={index}>{value}</Chip>
          ))}
        </ChipsContent>
      )}
    </Container>
  );
};

export default MultiSelect;
