import { Chip } from "components/Chip";
import type { ChangeEvent } from "react";
import { forwardRef, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { CustomButton, HiddenInputFile, InputFileContainer } from "./styles";

export interface InputFileProps {
  name?: string;
  accept?: string;
  files?: File[];
  multiple?: boolean;
  onClick: () => void;
  onRemove?: (file: File, index: number) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputFile = forwardRef<HTMLInputElement, InputFileProps>(
  ({ name, files, onClick, onRemove, onChange, ...args }, ref) => {
    const { t } = useTranslation();

    const details = useMemo(() => {
      switch (true) {
        case !!files?.length:
          return files!.map((file, index) => (
            <Chip key={index} onClose={() => onRemove?.(file, index)}>
              {file.name}
            </Chip>
          ));
        case !!name:
          return <p>{name}</p>;
        default:
          return <p>{t("inputFile.description")}</p>;
      }
    }, [name, files, onRemove, t]);

    return (
      <InputFileContainer>
        <div>{details}</div>
        <CustomButton bordered onClick={onClick}>
          {t("inputFile.button")}
        </CustomButton>
        <HiddenInputFile
          ref={ref}
          onChange={onChange}
          accept={args.accept}
          multiple={args.multiple}
        />
      </InputFileContainer>
    );
  }
);

export default InputFile;
