import React, { useEffect } from "react";
import { useRouter } from "expo-router";
import getNickname from "@/helpers/getNickname";

const NavigationHandler: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const checkNickname = async () => {
      const nickname = await getNickname();
      if (nickname) {
        router.push(`/joinOrHost`);
      } else {
        router.replace(`/onBoarding`);
      }
    };

    checkNickname();
  }, [router]);

  return null; // Render nothing as navigation happens in effect
};

export default NavigationHandler;

//splash screen
// w app.json statusbar
