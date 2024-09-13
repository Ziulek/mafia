import React, { useEffect } from "react";
import { useRouter } from "expo-router";
import getNickname from "@/helpers/getNickname";
import SplashScreen from "@/components/screens/SplashScreen/SplashScreen";
import { StatusBar } from "react-native";

const SplashScreenComponent: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const checkNickname = async () => {
      const nickname = await getNickname();

      setTimeout(() => {
        if (nickname) {
          router.replace(`/joinOrHost`);
        } else {
          router.replace(`/onBoarding`);
        }
      }, 3000);
    };

    checkNickname();
  }, [router]);

  return <SplashScreen />;
};

export default SplashScreenComponent;
