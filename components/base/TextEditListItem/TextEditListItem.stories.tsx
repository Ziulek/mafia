import type { Meta, StoryObj } from "@storybook/react";
import StoryDecorator from "@/decorators/StoryDecorator";
import { useState } from "react";
import { TextEditListItem } from "./TextEditListItem";

const meta: Meta<typeof TextEditListItem> = {
  component: TextEditListItem,
  decorators: [StoryDecorator],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [text, setText] = useState("");

    return (
      <TextEditListItem
        placeholder="Your nickname"
        text={text}
        setText={setText}
      />
    );
  },
};
export const FilledInput: Story = {
  render: () => {
    const [text, setText] = useState(
      "Lorem Ipsum Dupol Lorem Ipsum Dupol Lorem Ipsum Dupol"
    );

    return (
      <TextEditListItem
        placeholder="Your nickname"
        text={text}
        setText={setText}
      />
    );
  },
};
