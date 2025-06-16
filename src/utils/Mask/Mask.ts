type MaskOptionProps = {
  reverse?: boolean;
};

export type MaskVariant =
  | "date"
  | "cnpj"
  | "cpf"
  | "ddd"
  | "dddPhone"
  | "decimal"
  | "number"
  | "phone"
  | "textOnly"
  | "time"
  | "zipCode";

const reverseString = (text: string) => text.split("").reverse().join("");

const patternToMask = (
  value: string,
  pattern: string,
  option?: MaskOptionProps
) => {
  const req = pattern.replace(/[^#]/g, "").length;

  let position = 0;
  let newValue = value;
  let newPattern = pattern;

  if (option?.reverse) {
    newValue = reverseString(newValue.slice(0, req));
    newPattern = reverseString(newPattern);
  }

  const replaceResult = newPattern
    .replace(/(#{1,})|(\*{1,})/g, (element) => {
      if (element.includes("*") && newValue.length <= req) return "";
      const length = element.length;
      const result = newValue.slice(position, position + length);
      position += length;
      return result;
    })
    .replace(/(\W{1,})$/, "");

  return option?.reverse ? reverseString(replaceResult) : replaceResult;
};

export const applyCustomMask = (value: string, mask: string) => {
  if (!value || !mask) return value;

  const current = value.replace(/\D/g, "");
  const replaceMask = mask.replace(/\d/g, "#");

  return patternToMask(current, replaceMask);
};

export const applyMask = (value: string, variant: MaskVariant) => {
  if (!value) return value;

  const numbers = value.replace(/\D/g, "");

  const texts = value.replace(/[^a-zA-ZÀ-ÿ\s\-.']/g, "");

  switch (variant) {
    case "date":
      return patternToMask(numbers, "##/##/####");
    case "cnpj":
      return patternToMask(numbers, "##.###.###/####-##");
    case "cpf":
      return patternToMask(numbers, "###.###.###-##");
    case "ddd":
      return patternToMask(numbers, "##");
    case "dddPhone":
      return patternToMask(numbers, "(##) *####-####");
    case "decimal":
      return patternToMask(numbers, "###.###.###.###,##", { reverse: true });
    case "phone":
      return patternToMask(numbers, "*####-####");
    case "time":
      return patternToMask(numbers, "##:##:##");
    case "zipCode":
      return patternToMask(numbers, "#####-###");
    case "number":
      return numbers;
    case "textOnly":
      return texts;
    default:
      return value;
  }
};

export const removeMask = (value: string, variant?: MaskVariant) => {
  if (!value) return value;

  switch (variant) {
    case "decimal":
      return value.replace(".", "").replace(",", ".");
    default:
      return value.replace(/\D/g, "");
  }
};
