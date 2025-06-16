import type { ChangeEvent, TextareaHTMLAttributes } from "react";
import { forwardRef, useEffect, useState } from "react";
import type { TextareaStyleProps } from "./styles";
import { Container, TextareaContent } from "./styles";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    TextareaStyleProps {
  value?: string;
  defaultValue?: string;
  maxLength?: number;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ onChange, ...args }, ref) => {
    const { maxLength, value, defaultValue } = args;

    const [currentLength, setCurrentLength] = useState(0);

    useEffect(() => {
      if (maxLength && (value || defaultValue)) {
        setCurrentLength(`${value ?? defaultValue}`.length);
      }
    }, [maxLength, value, defaultValue]);

    return (
      <Container>
        <TextareaContent
          {...args}
          ref={ref}
          rows={args.rows ?? 3}
          onChange={(e) => {
            if (maxLength) setCurrentLength(e.target.value.length);
            onChange?.(e);
          }}
        />
        {maxLength && (
          <span>
            {currentLength}/{maxLength}
          </span>
        )}
      </Container>
    );
  }
);

export default Textarea;
