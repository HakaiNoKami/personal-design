import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "components/Button";
import { Form } from "components/Form";
import { FormGroup } from "components/FormGroup";
import { Grid } from "components/Grid";
import { useCallback, useState } from "react";
import Radio from "./Radio";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
  tags: ["autodocs"],
  argTypes: {
    label: {
      type: "string",
      control: "text",
      description: "Rótulo do campo radio",
    },
    name: {
      type: "string",
      control: "text",
      description: "Nome do campo radio",
    },
    value: {
      type: "string",
      control: "text",
      description: "Valor do campo radio",
    },
    defaultChecked: {
      type: "boolean",
      control: "boolean",
      description: "Valor inicial do campo (caso não queira controlar o radio)",
    },
    checked: {
      type: "boolean",
      control: "boolean",
      description: "Valor do campo (caso queira controlar o radio)",
    },
    onChange: {
      type: "function",
      description: "Método acionado ao selecionar um radio",
    },
    noWrap: {
      type: "boolean",
      control: "boolean",
      description:
        "Deve manter o texto sempre a frente do radio, sem quebrar a linha",
    },
    maxContent: {
      type: "boolean",
      control: "boolean",
      description: "Deve manter o tamanho de acordo com o conteúdo",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Uncontrolled: Story = {
  render: (args) => {
    return (
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          console.log(formData.get("option"));
        }}
        spacing={1.6}
      >
        <FormGroup label="Options">
          <Grid container spacing={1.6}>
            <Grid item>
              <Radio {...args} label="Option 1" value={1} />
            </Grid>
            <Grid item>
              <Radio {...args} defaultChecked label="Option 2" value={2} />
            </Grid>
            <Grid item>
              <Radio {...args} label="Option 3" value={3} />
            </Grid>
          </Grid>
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    );
  },
  args: {
    label: "Uncontrolled label",
    name: "option",
    value: 0,
    defaultChecked: false,
    onChange: action("onChange"),
    noWrap: true,
    maxContent: false,
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [option, setOption] = useState(2);

    const onChange = useCallback((value: string | number) => {
      setOption(value as number);
      action("onChange")();
    }, []);

    return (
      <FormGroup label="Options">
        <Grid container spacing={1.6}>
          <Grid item>
            <Radio
              {...args}
              value={1}
              label="Option 1"
              onChange={onChange}
              checked={1 === option}
            />
          </Grid>
          <Grid item>
            <Radio
              {...args}
              value={2}
              label="Option 2"
              onChange={onChange}
              checked={2 === option}
            />
          </Grid>
          <Grid item>
            <Radio
              {...args}
              value={3}
              label="Option 3"
              onChange={onChange}
              checked={3 === option}
            />
          </Grid>
        </Grid>
      </FormGroup>
    );
  },
  args: {
    label: "Controlled label",
    name: "Option",
    defaultChecked: false,
    onChange: action("onChange"),
    noWrap: true,
    maxContent: false,
  },
};
