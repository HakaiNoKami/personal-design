import { DropdownItemProps } from "components/DropdownItem";
import { Loading } from "components/Loading";
import type { ReactNode } from "react";
import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { exitElement } from "utils";
import type { DropdownStyleProps } from "./styles";
import {
  ArrowIcon,
  Container,
  DropdownContent,
  ItemsContent,
  TextContent,
} from "./styles";

export interface DropdownProps extends Omit<DropdownStyleProps, "open"> {
  children: ReactNode;
  text: ReactNode;
  icon?: ReactNode;
  loading?: boolean;
  hideArrow?: boolean;
}

export const Dropdown = ({
  children,
  text,
  icon,
  loading = false,
  hideArrow = false,
  disabled,
  ...args
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const options = useMemo(
    () =>
      Children.map(children ?? [], (child) => {
        if (isValidElement<DropdownItemProps>(child)) {
          return cloneElement(child, {
            onClick: () => {
              if (!disabled) {
                setOpen(false);
                child.props.onClick?.();
              }
            },
          });
        }
      }),
    [children, disabled]
  );

  useEffect(() => {
    const hide = exitElement(ref, () => setOpen(false));
    document.documentElement.addEventListener("click", hide);
    return () => document.documentElement.removeEventListener("click", hide);
  }, []);

  useEffect(() => {
    const hide = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", hide, false);
    return () => document.removeEventListener("keydown", hide, false);
  }, []);

  return (
    <Container ref={ref} {...args}>
      <DropdownContent
        disabled={disabled}
        bordered={args.bordered}
        outlined={args.outlined}
        onClick={() => !disabled && setOpen(!open)}
      >
        <TextContent
          centralized={args.centralized}
          positionIcon={args.positionIcon}
        >
          {icon}
          {text}
        </TextContent>
        {loading && <Loading />}
        {!loading && !hideArrow && <ArrowIcon open={open} />}
      </DropdownContent>
      <ItemsContent open={open}>{options}</ItemsContent>
    </Container>
  );
};

export default Dropdown;
