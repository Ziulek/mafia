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
      }}
    >
      <Button color="accent" onPress={() => router.replace("joinOrHost")}>
        Continue to JoinOrHost
      </Button>
    </View>
  );
};
