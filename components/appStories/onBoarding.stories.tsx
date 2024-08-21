import React from "react";
import { Meta, ComponentStory } from "@storybook/react";
import OnBoarding from "@/app/onBoarding";

// Define metadata for the Storybook story
const meta: Meta = {
  title: "OnBoarding",
  component: OnBoarding,
};

export default meta;

// Create a default story for the onBoarding component
const Template: ComponentStory<typeof OnBoarding> = () => <OnBoarding />;

export const Default = Template.bind({});
Default.args = {};
