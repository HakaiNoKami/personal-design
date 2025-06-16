export const validateURL = (text: string) => {
  const inputElement = document.createElement("input");
  inputElement.type = "url";
  inputElement.value = text;

  return inputElement.checkValidity();
};
