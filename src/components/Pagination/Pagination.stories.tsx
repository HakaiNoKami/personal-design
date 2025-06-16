import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { useCallback, useState } from "react";
import Pagination from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  argTypes: {
    page: {
      type: "number",
      control: "number",
      description: "Página atual na paginação",
    },
    total: {
      type: "number",
      control: "number",
      description: "Total de itens na lista na paginação",
    },
    limit: {
      type: "number",
      control: "number",
      description: "Limitie de itens por página da lista na paginação",
    },
    onChange: {
      type: "function",
      description: "Método acionado ao trocar de página na paginação",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: (args) => {
    const [page, setPage] = useState(args.page);

    const onChange = useCallback((page: number) => {
      setPage(page);
      action("onChange")();
    }, []);

    return <Pagination {...args} page={page} onChange={onChange} />;
  },
  args: {
    page: 1,
    total: 100,
    limit: 10,
    onChange: action("onChange"),
  },
};
