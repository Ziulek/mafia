import {
  NICKNAME_MAX_LENGTH,
  NICKNAME_MIN_LENGTH,
} from "@/gameConfig/inputLengths.config";

const correctNickname = (nickname: string, t: (key: string) => string) => {
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
      message: t("nickname/tooShort").replace("{minLength}", `${minLength}`),
    };
  }

  if (nickname.length > maxLength) {
    return {
      isValid: false,
      message: t("nickname/tooLong").replace("{maxLength}", `${maxLength}`),
    };
  }

  // Define a regular expression to match only letters and numbers
  const validPattern = /^[a-zA-Z0-9 ]+$/;

  // Test if the nickname matches the pattern
  if (!validPattern.test(nickname)) {
    return {
      isValid: false,
      message: t("nickname/invalidCharacters"),
    };
  }

  // If all checks pass, the nickname is valid
  return {
    isValid: true,
    message: t("nickname/correct"),
  };
};

export default correctNickname;
