import type { OptionProps, OptionValue } from "components/Option";
import { NoOption } from "components/Option";
import { useMap } from "hooks";
import { useCommonText } from "providers/CommonText";
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
import { exitElement } from "utils";
import type { SelectStyleProps } from "./styles";
import {
  ArrowIcon,
  ClearIcon,
  Container,
  InputFilter,
  OptionsContent,
  SelectContent,
} from "./styles";

export interface SelectProps extends Omit<SelectStyleProps, "open"> {
  children: ReactNode;
  placeholder?: string;
  noOptionText?: string;
  defaultValue?: OptionValue;
  value?: OptionValue;
  hasClear?: boolean;
  readOnly?: boolean;
  onChange?: (value: OptionValue) => void;
}

export const Select = ({
  children,
  placeholder,
  defaultValue = "",
  value,
  direction,
  disabled,
  readOnly,
  onChange,
  ...args
}: SelectProps) => {
  const [filter, setFilter] = useState("");
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<OptionValue>(defaultValue);
  const [texts, { set }] = useMap<OptionValue, ReactNode>();
  const { select } = useCommonText();
  const ref = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLInputElement>(null);

  const hasPermission = useMemo(
    () => !disabled && !readOnly,
    [disabled, readOnly]
  );

  const currentValue = useMemo(
    () => value ?? internalValue,
    [value, internalValue]
  );

  const selectPlaceholder = useMemo(() => {
    if (!filter && currentValue === "") return placeholder;
  }, [filter, currentValue, placeholder]);

  const onToggle = useCallback(
    (open: boolean) => {
      setOpen(open);
      setFilter("");
    },
    [value, internalValue]
  );

  const onSelect = useCallback(
    (valueOption: OptionValue) => {
      onChange?.(valueOption);
      value === undefined && setInternalValue(valueOption);
      onToggle(false);
    },
    [value, onChange, onToggle]
  );

  const options = useMemo(
    () =>
      Children.map(children ?? [], (child) => {
        if (isValidElement<OptionProps>(child)) {
          return cloneElement(child, {
            onClick: (value: OptionValue) => {
              onSelect(value);
              child.props.onClick?.(value);
            },
          });
        }
      }),
    [children, onSelect]
  );

  const filteredOptions = useMemo(() => {
    const currentFilter = filter.trim().toLocaleLowerCase();

    if (currentFilter)
      return options?.filter(({ props }) =>
        props.children.trim().toLocaleLowerCase().includes(currentFilter)
      );

    return options;
  }, [options, filter]);

  useEffect(() => {
    const currentTexts = new Map();
    Children.forEach(children, (child) => {
      if (isValidElement<OptionProps>(child)) {
        currentTexts.set(child.props?.value, child.props?.children);
      }
    });
    set(currentTexts);
  }, [children, set]);

  const onClear = useCallback(
    (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
      e.stopPropagation();
      onSelect("");
    },
    [onSelect]
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
    <Container ref={ref} {...args}>
      <SelectContent
        disabled={disabled}
        onClick={() => hasPermission && onToggle(!open)}
      >
        <ArrowIcon open={open} />
        {args.hasClear && hasPermission && <ClearIcon onClick={onClear} />}
        {!filter && currentValue !== "" && <p>{texts?.get(currentValue)}</p>}
        <InputFilter
          value={filter}
          ref={filterRef}
          readOnly={!hasPermission}
          placeholder={selectPlaceholder}
          onKeyUp={(e) => e.preventDefault()}
          onChange={(e) => setFilter(e.target.value)}
        />
      </SelectContent>
      <OptionsContent open={open} direction={direction}>
        {filteredOptions?.length ? (
          filteredOptions
        ) : (
          <NoOption text={args.noOptionText ?? select?.noOption ?? ""} />
        )}
      </OptionsContent>
    </Container>
  );
};

export default Select;
