import React from "react";

import ArrowLeftIcon from "./Icons/ArrowLeftIcon";

import AccountIcon from "./Icons/AccountIcon";

export interface IconProps {
  name: "arrowLeft" | "account";

  size: "small" | "medium" | "big";
}
const Icon = ({ name, size }: IconProps) => {
  let IconComponent;
  let sizePx;

  switch (size) {
    case "small":
      sizePx = 16;
      break;
    case "medium":
      sizePx = 22;
      break;
    case "big":
      sizePx = 27;
      break;
  }

  switch (name) {
    case "arrowLeft":
      IconComponent = ArrowLeftIcon;
      break;

    case "account":
      IconComponent = AccountIcon;
      break;

    default:
      throw new Error(`invalid icon name: ${name}`);
  }

  return <IconComponent sizePx={sizePx} />;
};
export default Icon;
