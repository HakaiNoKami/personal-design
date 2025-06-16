import { EyeIcon, EyeOffIcon, SearchIcon } from "assets";
import type { InputHTMLAttributes } from "react";
import { forwardRef, useCallback, useEffect, useMemo, useState } from "react";
import type { MaskVariant } from "utils";
import { applyCustomMask, applyMask, generateUID } from "utils";
import type { InputStyleProps } from "./styles";
import { AddonContent, Container, InputContent } from "./styles";

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    InputStyleProps {
  value?: string | number;
  defaultValue?: string | number;
  mask?: MaskVariant;
  customMask?: string;
  addon?: string;
  noAutoComplete?: boolean;
  onSearch?: () => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ fullWidth, noAutoComplete, customMask, ...args }, ref) => {
    const { maxLength, addon } = args;
    const { type, value, defaultValue, mask } = args;
    const { onChange, onSearch } = args;

    const [showPassword, setShowPassword] = useState(false);
    const [currentLength, setCurrentLength] = useState(0);

    const searchIcon = useMemo(() => {
      if (type === "search") return <SearchIcon onClick={() => onSearch?.()} />;
    }, [type, onSearch]);

    const passwordIcon = useMemo(() => {
      if (type === "password" && showPassword)
        return <EyeOffIcon onClick={() => setShowPassword(!showPassword)} />;
      else if (type === "password")
        return <EyeIcon onClick={() => setShowPassword(!showPassword)} />;
    }, [showPassword, type]);

    const inputType = useMemo(() => {
      if (showPassword || type === "search") return "text";
      return type;
    }, [showPassword, type]);

    const onMask = useCallback(
      (current: any) => {
        if (mask) return applyMask(`${current}`, mask);
        if (customMask) return applyCustomMask(`${current}`, customMask);
        return current;
      },
      [mask, customMask]
    );

    const currentDefaultValue = useMemo(() => {
      if (defaultValue !== undefined) return onMask(defaultValue);
    }, [defaultValue, onMask]);

    useEffect(() => {
      if (maxLength && (value ?? currentDefaultValue))
        setCurrentLength(`${value ?? currentDefaultValue}`.length);
    }, [maxLength, value, currentDefaultValue]);

    return (
      <Container fullWidth={fullWidth}>
        <InputContent readOnly={args.readOnly}>
          {searchIcon}
          <input
            {...args}
            ref={ref}
            type={inputType}
            defaultValue={currentDefaultValue}
            autoComplete={noAutoComplete ? generateUID() : undefined}
            onChange={(e) => {
              const current = `${e.target.value}`;
              if (mask || customMask) e.target.value = onMask(current);
              if (maxLength) setCurrentLength(current.length);
              onChange?.(e);
            }}
          />
          {passwordIcon}
          {addon && <AddonContent>{addon}</AddonContent>}
        </InputContent>
        {maxLength && (
          <span>
            {currentLength}/{maxLength}
          </span>
        )}
      </Container>
    );
  }
);

export default Input;
