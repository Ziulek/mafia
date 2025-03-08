import React from "react";
import StartScreen from "@/components/partials/StartScreen/StartScreen";
import Button from "@/components/base/Button/Button";
import { useTranslation } from "react-i18next";

interface JoinOrHostScreenProps {
  onJoinPress: () => void; // Type for the onJoinPress prop
  onHostPress: () => void; // Type for the onHostPress prop
}

const JoinOrHostScreen: React.FC<JoinOrHostScreenProps> = ({
  onJoinPress,
  onHostPress,
}) => {
  const { t } = useTranslation();

  return (
    <StartScreen
      image="mafia"
      text={t("joinOrHostScreen/subtitle")}
      sideButton="account"
    >
      <Button
        color="accent"
        isBold={true}
        onPress={onJoinPress}
        testID="join-or-host-screen-join-game-button"
      >
        {t("joinOrHostScreen/joinGame")}
      </Button>
      <Button
        color="accent"
        isBold={true}
        onPress={onHostPress}
        testID="join-or-host-screen-host-game-button"
      >
        {t("joinOrHostScreen/hostGame")}
      </Button>
    </StartScreen>
  );
};

export default JoinOrHostScreen;
