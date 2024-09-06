import { Role } from "@/components/types/Role";
import { colors } from "@/theme/colors";

export const handleBorderColor = (
  mode: "default" | "revealed",
  role: Role,
  isDead: boolean,
  showRolesAfterDeath?: boolean,
  avatarSelect?: boolean
) => {
  let newColor;

  if (avatarSelect) {
    newColor = "white";
  } else if (mode === "default") {
    if (!isDead) {
      // 1. Mode: "default" & isDead: false -> colors.primary
      newColor = colors.primary;
    } else if (showRolesAfterDeath) {
      // 2. Mode: "default" & isDead: true & showRolesAfterDeath: true -> colors based on roles
      if (role === "police") {
        newColor = colors.police;
      } else if (role === "mafia") {
        newColor = colors.mafia;
      } else if (role === "detective") {
        newColor = colors.detective;
      } else {
        newColor = colors.primary;
      }
    } else {
      // 2. Mode: "default" & isDead: true & showRolesAfterDeath: false -> colors.dead
      newColor = colors.dead;
    }
  } else if (mode === "revealed") {
    // 3. Mode: "revealed" -> colors based on roles
    if (role === "police") {
      newColor = colors.police;
    } else if (role === "mafia") {
      newColor = colors.mafia;
    } else if (role === "detective") {
      newColor = colors.detective;
    } else {
      newColor = colors.primary;
    }
  } else {
    newColor = colors.primary;
  }

  return newColor;
};

export const handleNicknameColor = (
  mode: "default" | "revealed",
  isDead: boolean
) => {
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
