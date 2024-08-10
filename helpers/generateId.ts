import CryptoJS from "crypto-js";

const generateId = () => {
  // Generate a random value (based on current time and a random number)
  const randomValue = `${new Date().getTime()}-${Math.random()}`;

  // Create a hash using SHA-256
  const hash = CryptoJS.SHA256(randomValue).toString(CryptoJS.enc.Hex);

  // Convert the hash to an integer, and get a 5-digit number by taking the modulus with 100000
  const fiveDigitId = Math.abs(parseInt(hash, 16) % 100000)
    .toString()
    .padStart(5, "0");

  return fiveDigitId;
};

export default generateId;
