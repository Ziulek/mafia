import {
  NICKNAME_MAX_LENGTH,
  NICKNAME_MIN_LENGTH,
} from "@/gameConfig/inputLengths.config";

const correctNickname = (nickname: string) => {
  // Define the minimum and maximum length for the nickname
  const minLength = NICKNAME_MIN_LENGTH;
  const maxLength = NICKNAME_MAX_LENGTH;

  if (nickname.length < 1) {
    return {
      isValid: true,
      message: "",
    };
  }

  // Check the length of the nickname
  if (nickname.length < minLength) {
    return {
      isValid: false,
      message: `Nickname is too short. It should be at least ${minLength} characters long.`,
    };
  }

  if (nickname.length > maxLength) {
    return {
      isValid: false,
      message: `Nickname is too long. It should be no more than ${maxLength} characters long.`,
    };
  }

  // Define a regular expression to match only letters and numbers
  const validPattern = /^[a-zA-Z0-9 ]+$/;

  // Test if the nickname matches the pattern
  if (!validPattern.test(nickname)) {
    return {
      isValid: false,
      message: "Nickname can only contain letters, numbers and spaces.",
    };
  }

  // If all checks pass, the nickname is valid
  return {
    isValid: true,
    message: "Nickname is correct.",
  };
};

export default correctNickname;
