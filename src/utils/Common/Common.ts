import type { RefObject } from "react";

export const exitElement =
  (ref: RefObject<HTMLElement | null>, callback?: () => void) => (e: Event) => {
    const equalsTarget = e.target === ref?.current;
    const containsTarget = ref?.current?.contains(e.target as Node);
    if (!equalsTarget && !containsTarget) callback?.();
  };

export const generateUID = () => {
  const numToBase16 = (num: number) => Math.floor(num).toString(16);
  return (
    numToBase16(Date.now() / 1000) +
    " ".repeat(16).replace(/./g, () => numToBase16(Math.random() * 16))
  );
};
