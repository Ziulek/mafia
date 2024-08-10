import { colors } from "@/theme/colors";

export const handleBorderColor = (
  mode: string,
  role: string,
  isDead: boolean,
  avatarSelect?: boolean
) => {
  let newColor;

  if (isDead) {
    newColor = colors.dead;
  } else if (avatarSelect) {
    newColor = "white";
  } else {
    switch (mode) {
      case "default":
        newColor = colors.primary;
        break;
      case "revealed":
        if (role === "police") {
          newColor = colors.police;
        } else if (role === "mafia") {
          newColor = colors.mafia;
        } else if (role === "detective") {
          newColor = colors.detective;
        } else {
          newColor = colors.primary;
        }
        break;

      default:
        newColor = colors.primary;
        break;
    }
  }
  return newColor;
};

export const handleNicknameColor = (mode: string, isDead: boolean) => {
  let newColor: "white" | "black";

  if (isDead) {
    newColor = "white";
  } else if (mode !== "revealed") {
    newColor = "black";
  } else {
    newColor = "white";
  }
  return newColor;
};
