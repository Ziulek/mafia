import { useFonts } from "expo-font";

export const useCustomFonts = () => {
  const [fontsLoaded] = useFonts({
    AmericanTypewriter: require("./assets/fonts/AmericanTypewriter.ttf"),
    // Add more fonts if needed
  });

  return fontsLoaded;
};
