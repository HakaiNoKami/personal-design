import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "components/Box";
import { Grid } from "./Grid";

const meta: Meta<typeof Grid> = {
  title: "Components/Grid",
  component: Grid,
  tags: ["autodocs"],
  argTypes: {
    children: { description: "Conteúdo do grid" },
    container: {
      type: "boolean",
      control: "boolean",
      description: "Idica que esse grid irá conter outros grids items",
    },
    spacing: {
      type: "number",
      control: "number",
      description: "Espaçamento entre os elementos do grid container",
    },
    direction: {
      control: "select",
      options: ["column-reverse", "column", "row-reverse", "row"],
      description: "Direção que os grids items estarão no grid container",
    },
    justifyContent: {
      control: "select",
      options: [
        "flex-start",
        "center",
        "flex-end",
        "space-between",
        "space-around",
        "space-evenly",
      ],
      description: "Alinhamento dos girds items no grid container",
    },
    alignItems: {
      control: "select",
      options: ["flex-start", "center", "flex-end", "stretch", "baseline"],
      description: "Alinhamento dos grids items com outros grids items",
    },
    wrap: {
      control: "select",
      options: ["nowrap", "wrap-reverse", "wrap"],
      description:
        "Flexibilidade dos grids items no grid container para manter em apenas uma linha ou permitir várias linhas",
    },
    position: {
      control: "select",
      options: ["absolute", "fixed", "relative", "static", "sticky", "initial"],
      description: "Tipo de posição do grid",
    },
    fullHeight: {
      type: "boolean",
      control: "boolean",
      description: "Deve ocupar a altura máxima da caixa",
    },
    item: {
      type: "boolean",
      control: "boolean",
      description: "Tamanho do campo em telas com pelo menos 600px de largura",
    },
    xl: {
      control: "select",
      options: [true, "auto", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "base"],
      description: "Tamanho do campo em telas com pelo menos 1500px de largura",
    },
    lg: {
      control: "select",
      options: [true, "auto", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "base"],
      description: "Tamanho do campo em telas com pelo menos 1200px de largura",
    },
    md: {
      control: "select",
      options: [true, "auto", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "base"],
      description: "Tamanho do campo em telas com pelo menos 900px de largura",
    },
    sm: {
      control: "select",
      options: [true, "auto", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "base"],
      description: "Tamanho do campo em telas com pelo menos 600px de largura",
    },
    xs: {
      control: "select",
      options: [true, "auto", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "base"],
      description: "Tamanho geral do campo",
    },
    overflowX: {
      control: "select",
      options: ["auto", "hidden", "scroll", "visible"],
      description: "Overflow no eixo X do grid item",
    },
    overflowY: {
      control: "select",
      options: ["auto", "hidden", "scroll", "visible"],
      description: "Overflow no eixo Y do grid item",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  render: (args) => {
    return (
      <Grid {...args} container>
        <Grid item xs={3}>
          <Box variant="gray">
            <p>Column xs 3</p>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box variant="gray">
            <p>Column xs 6</p>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box variant="gray">
            <p>Column xs 3</p>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box variant="gray">
            <p>Column xs 2</p>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box variant="gray">
            <p>Column xs 4</p>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box variant="gray">
            <p>Column xs 2</p>
          </Box>
        </Grid>
      </Grid>
    );
  },
  args: {
    container: true,
    spacing: 0.8,
    direction: "row",
    justifyContent: "center",
    alignItems: "baseline",
    wrap: "wrap",
    fullHeight: false,
  },
};

export const Auto: Story = {
  render: (args) => {
    return (
      <Grid container spacing={0.8} justifyContent="center">
        <Grid item>
          <Box variant="gray">
            <p>Column</p>
          </Box>
        </Grid>
        <Grid {...args}>
          <Box variant="gray">
            <p className="text-center">Column xs</p>
          </Box>
        </Grid>
        <Grid item>
          <Box variant="gray">
            <p>Column</p>
          </Box>
        </Grid>
      </Grid>
    );
  },
  args: {
    item: true,
    xs: "auto",
    sm: 8,
    md: 6,
    lg: 4,
    xl: 3,
    overflowX: "auto",
    overflowY: "auto",
  },
};
