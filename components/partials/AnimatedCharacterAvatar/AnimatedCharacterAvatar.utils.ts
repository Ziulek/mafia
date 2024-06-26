export const handleBorderColor = (
  mode: string,
  role: string,
  isDead: boolean,
  avatarSelect?: boolean
) => {
  let newColor;

  if (isDead) {
    newColor = "#000";
  } else if (avatarSelect) {
    newColor = "white";
  } else {
    switch (mode) {
      case "default":
        newColor = "#EAECD6";
        break;
      case "revealed":
        if (role === "police") {
          newColor = "#208197";
        } else if (role === "mafia") {
          newColor = "#A14141";
        } else if (role === "detective") {
          newColor = "#284e93";
        } else {
          newColor = "#EAECD6";
        }
        break;

      default:
        newColor = "#EAECD6";
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
