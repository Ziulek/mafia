import type { ReactElement } from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";
import Button from "@/components/base/Button/Button";

export default (): ReactElement => {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 15,
      }}
    >
      <Button color="accent" onPress={() => router.replace("game?mode=host")}>
        Continue to game(host)
      </Button>
      <Button color="accent" onPress={() => router.replace("join")}>
        Continue to Join
      </Button>
    </View>
  );
};
