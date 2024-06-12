import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { TamaguiProvider, createTamagui } from "@tamagui/core"; // or 'tamagui'
import { config } from "@tamagui/config/v3";

// you usually export this from a tamagui.config.ts file
const tamaguiConfig = createTamagui(config);

// make TypeScript type everything based on your config
type Conf = typeof tamaguiConfig;
declare module "@tamagui/core" {
  // or 'tamagui'
  interface TamaguiCustomConfig extends Conf {}
}

export default function RootLayout() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <GestureHandlerRootView>
        <Stack screenOptions={{ headerShown: false }} />
      </GestureHandlerRootView>
    </TamaguiProvider>
  );
}
