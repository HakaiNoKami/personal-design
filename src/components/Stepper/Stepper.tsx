import type { StepProps } from "components/Step";
import type { ReactNode } from "react";
import {
  Children,
  isValidElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { StepperStyleProps } from "./styles";
import {
  ChildrensContent,
  Container,
  TitleItem,
  TitlesContent,
} from "./styles";

export interface StepperProps extends Omit<StepperStyleProps, "isActive"> {
  children: ReactNode;
  step?: number;
  onChange?: (step: number) => void;
}

export const Stepper = ({
  children,
  step,
  direction,
  hasScroll,
  onChange,
  ...args
}: StepperProps) => {
  const [internalStep, setInternalStep] = useState(step ?? 0);

  const currentStep = useMemo(() => step ?? internalStep, [step, internalStep]);

  const childrens = useMemo(
    () =>
      Children.map(children, (child) => {
        if (isValidElement<StepProps>(child)) return child;
      }),
    [children]
  );

  const onClick = useCallback(
    (newStep: number) => {
      internalStep !== newStep && setInternalStep(newStep);
    },
    [internalStep]
  );

  const titles = useMemo(
    () =>
      childrens?.map((child, index) => {
        const isActive = index === currentStep;
        return (
          <TitleItem
            key={index}
            isActive={isActive}
            onClick={() => !isActive && onClick(index)}
          >
            {child.props.title}
          </TitleItem>
        );
      }),

    [childrens, currentStep, direction, onClick]
  );

  const currentChildren = useMemo(
    () => childrens?.[currentStep],
    [childrens, currentStep]
  );

  useEffect(() => {
    if (internalStep !== step) onChange?.(internalStep);
  }, [internalStep, step, onChange]);

  return (
    <Container {...args}>
      <TitlesContent direction={direction}>{titles}</TitlesContent>
      <ChildrensContent hasScroll={hasScroll}>
        {currentChildren}
      </ChildrensContent>
    </Container>
  );
};

export default Stepper;
