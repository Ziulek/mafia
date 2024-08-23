export const GAME_CODE_LENGTH = 8;

const correctGameCode = (gameCode: string) => {
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
      message: `Game Code is too short. It should be ${minLength} characters long.`,
    };
  }

  if (gameCode.length > maxLength) {
    return {
      isValid: false,
      message: `Game Code is too long. It should be no more than ${maxLength} characters long.`,
    };
  }

  // Define a regular expression to match only letters and numbers
  const validPattern = /^[a-zA-Z0-9]+$/;

  // Test if the gameCode matches the pattern
  if (!validPattern.test(gameCode)) {
    return {
      isValid: false,
      message: "Game Code can only contain letters and numbers.",
    };
  }

  // If all checks pass, the Game Code is valid
  return {
    isValid: true,
    message: "Game Code is correct.",
  };
};

export default correctGameCode;
