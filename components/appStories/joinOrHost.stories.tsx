import React from "react";
import { Meta, ComponentStory } from "@storybook/react";
import JoinOrHost from "@/app/joinOrHost";

// Define metadata for the Storybook story
const meta: Meta = {
  title: "JoinOrHost",
  component: JoinOrHost,
};

export default meta;

// Create a default story for the JoinOrHost component
const Template: ComponentStory<typeof JoinOrHost> = () => <JoinOrHost />;

export const Default = Template.bind({});
Default.args = {};
