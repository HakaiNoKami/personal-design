import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { useMap } from "hooks";
import type { ChangeEvent } from "react";
import { useCallback, useRef, useState } from "react";
import { InputFile } from "./InputFile";

const meta: Meta<typeof InputFile> = {
  title: "Components/InputFile",
  component: InputFile,
  tags: ["autodocs"],
  argTypes: {
    name: {
      type: "string",
      control: "text",
      description: "Nome do campo de entrada de arquivos",
    },
    descriptionText: {
      type: "string",
      control: "text",
      description: "Descrição do campo de entrada de arquivos",
    },
    buttonText: {
      type: "string",
      control: "text",
      description: "Texto do bottão que aciona o campo de entrada de arquivos",
    },
    accept: {
      type: "string",
      control: "text",
      description: "Formatos aceitos pelo campo de entrada de arquivos",
    },
    files: {
      description: "Lista de arquivos no campo de entrada de arquivos",
    },
    multiple: {
      type: "boolean",
      control: "boolean",
      description:
        "Deve permitir tratar mais de um arquivo no campo de entrada de arquivos",
    },
    onClick: {
      type: "function",
      description: "Método acionado ao clicar no botão",
    },
    onRemove: {
      type: "function",
      description:
        "Método acionado ao clicar no '✖' dentro do detalhe de cada arquivo adicionado",
    },
    onChange: {
      type: "function",
      description: "Método acionado ao selecionar algum arquivo",
    },
  },
};

export default meta;

type Story = StoryObj<typeof InputFile>;

export const Default: Story = {
  render: (args) => {
    const [file, setFile] = useState<File>();
    const inputRef = useRef<HTMLInputElement>(null);

    const onClick = useCallback(() => {
      inputRef.current?.click();
      action("onClick")();
    }, []);

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      setFile(e.target.files?.[0]);
      action("onChange")();
    }, []);

    return (
      <InputFile
        {...args}
        ref={inputRef}
        name={file?.name}
        onClick={onClick}
        onChange={onChange}
      />
    );
  },
  args: {
    name: "Default input file",
    descriptionText: "Description input file",
    buttonText: "Button input file",
    accept: "",
    multiple: false,
    onClick: action("onClick"),
    onChange: action("onChange"),
  },
};

export const Multiple: Story = {
  render: (args) => {
    const [files, { add, remove }] = useMap<string, File>();
    const inputRef = useRef<HTMLInputElement>(null);

    const onClick = useCallback(() => {
      inputRef.current?.click();
      action("onClick")();
    }, []);

    const onRemove = useCallback((file: File) => {
      remove(file.name);
      action("onRemove")();
    }, []);

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      Array.from(e.target.files ?? []).map((file) => add(file.name, file));
      action("onChange")();
    }, []);

    return (
      <InputFile
        {...args}
        ref={inputRef}
        onClick={onClick}
        onRemove={onRemove}
        onChange={onChange}
        files={Array.from(files?.values() ?? [])}
      />
    );
  },
  args: {
    name: "Multiple input file",
    descriptionText: "Description input file",
    buttonText: "Button input file",
    accept: "",
    files: [],
    multiple: true,
    onClick: action("onClick"),
    onRemove: action("onRemove"),
    onChange: action("onChange"),
  },
};
