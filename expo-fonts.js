import { useFonts } from "expo-font";

export const useCustomFonts = () => {
  const [fontsLoaded] = useFonts({
    AmericanTypewriter: require("./assets/fonts/AmericanTypewriter.ttf"),
    AmericanTypewriterBold: require("./assets/fonts/AmericanTypewriterBold.ttf"),
  });

  return fontsLoaded;
};
