import React from "react";
import { Meta, ComponentStory } from "@storybook/react";
import Game from "@/app/game";

// Define metadata for the Storybook story
const meta: Meta = {
  title: "Game",
  component: Game,
};

export default meta;

// Create a default story for the Game component
const Template: ComponentStory<typeof Game> = () => <Game />;

export const Default = Template.bind({});
Default.args = {};
