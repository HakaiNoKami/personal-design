import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "components/Form";
import { FormGroup } from "components/FormGroup";
import { Grid } from "components/Grid";
import type { ChangeEvent } from "react";
import { useCallback, useState } from "react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    value: {
      type: "string",
      control: "text",
      description: "Valor do campo de entrada (caso queira controlar o input)",
    },
    defaultValue: {
      type: "string",
      control: "text",
      description:
        "Valor do campo de entrada (caso não queira controlar o input)",
    },
    onChange: {
      type: "function",
      description: "Método acionado ao editar o conteúdo do campo de entrada",
    },
    mask: {
      control: "select",
      options: [
        "date",
        "cnpj",
        "cpf",
        "ddd",
        "dddPhone",
        "decimal",
        "number",
        "phone",
        "textOnly",
        "time",
        "zipCode",
      ],
      description: "Máscaras permitidas para o campo de entrada",
    },
    customMask: {
      type: "string",
      control: "text",
      description: "Máscara customizada (ex: 99.999-999)",
    },
    maxLength: {
      type: "number",
      control: "number",
      description: "Número máximo de caracteres permitidos",
    },
    addon: {
      type: "string",
      control: "text",
      description: "Texto lateral adicional para o campo de entrada",
    },
    noAutoComplete: {
      type: "boolean",
      control: "boolean",
      description:
        "Deve impedir o campo de se auto completar com informações pré-preenchidas no navegador",
    },
    onSearch: {
      type: "function",
      description:
        "Método acionado ao clicar no ícone de pesquisa no campo input do tipo 'search'",
    },
    fullWidth: {
      type: "boolean",
      control: "boolean",
      description: "Deve ocupar o tamanho máximo da caixa",
    },
    readOnly: {
      type: "boolean",
      control: "boolean",
      description: "Deve permitir apenas a leitura do campo",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Uncontrolled: Story = {
  args: {
    defaultValue: "uncontrolled",
    onChange: action("onChange"),
    noAutoComplete: true,
    onSearch: action("onSearch"),
    fullWidth: false,
    readOnly: false,
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      action("onChange")();
    }, []);

    return <Input {...args} value={value} onChange={onChange} />;
  },
  args: {
    value: "controlled",
    onChange: action("onChange"),
    maxLength: 100,
    noAutoComplete: true,
    fullWidth: false,
    readOnly: false,
  },
};

export const Mask: Story = {
  args: {
    defaultValue: "1234567890",
    onChange: action("onChange"),
    mask: "zipCode",
    noAutoComplete: false,
    fullWidth: false,
    readOnly: false,
  },
};

export const CustomMask: Story = {
  args: {
    defaultValue: "1234567890",
    onChange: action("onChange"),
    customMask: "1.2.34.567-890",
    addon: "Ex",
    noAutoComplete: false,
    fullWidth: false,
    readOnly: false,
  },
};

export const DifferentTypes: Story = {
  render: (args) => {
    return (
      <Form>
        <Grid container spacing={1.6}>
          <Grid item xs={4}>
            <FormGroup label="Default">
              <Input {...args} type="text" />
            </FormGroup>
          </Grid>
          <Grid item xs={4}>
            <FormGroup label="Password">
              <Input {...args} type="password" />
            </FormGroup>
          </Grid>
          <Grid item xs={4}>
            <FormGroup label="Search">
              <Input {...args} type="search" />
            </FormGroup>
          </Grid>
        </Grid>
      </Form>
    );
  },
  args: {
    defaultValue: "Test 123",
    onChange: action("onChange"),
    noAutoComplete: false,
    onSearch: action("onSearch"),
    fullWidth: true,
    readOnly: false,
  },
};
