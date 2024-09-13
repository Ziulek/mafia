import { GAME_CODE_LENGTH } from "@/gameConfig/inputLengths.config";

const correctGameCode = (gameCode: string, t: (key: string) => string) => {
  // Define the minimum and maximum length for the gameCode
  const minLength = GAME_CODE_LENGTH;
  const maxLength = GAME_CODE_LENGTH;

  if (gameCode.length < 1) {
    return {
      isValid: true,
      message: "",
    };
  }

  // Check the length of the gameCode
  if (gameCode.length < minLength) {
    return {
      isValid: false,
      message: t("gameCode/tooShort").replace("{length}", `${minLength}`),
    };
  }

  if (gameCode.length > maxLength) {
    return {
      isValid: false,
      message: t("gameCode/tooLong").replace("{length}", `${maxLength}`),
    };
  }

  // Define a regular expression to match only letters and numbers
  const validPattern = /^[a-zA-Z0-9]+$/;

  // Test if the gameCode matches the pattern
  if (!validPattern.test(gameCode)) {
    return {
      isValid: false,
      message: t("gameCode/invalidCharacters"),
    };
  }

  // If all checks pass, the Game Code is valid
  return {
    isValid: true,
    message: t("gameCode/correct"),
  };
};

export default correctGameCode;
