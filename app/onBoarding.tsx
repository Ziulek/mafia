import { useState, type ReactElement } from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";
import Button from "@/components/base/Button/Button";
import OnBoardingScreen from "@/components/screens/onBoardingScreen/onBoardingScreen";

export default (): ReactElement => {
  const router = useRouter();
  const [nickname, setNickname] = useState<string>("");
  return (
    <OnBoardingScreen
      nickname={nickname}
      setNickname={setNickname}
      onPress={() => router.replace(`joinOrHost?nickname=${nickname}`)}
    />
  );
};

// <View
//   style={{
//     flex: 1,
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//   }}
// >
//   <Button color="accent" onPress={() => router.replace("joinOrHost")}>
//     Continue to Join or Host
//   </Button>
// </View>
