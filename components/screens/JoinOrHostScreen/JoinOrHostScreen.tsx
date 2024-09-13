import React, { useEffect } from "react";
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
  const { t, i18n } = useTranslation();

  useEffect(() => {
    console.log("Current language:", i18n.language);
    console.log("Loaded resources:", i18n.getDataByLanguage("en"));
  }, [i18n]);

  return (
    <StartScreen
      image="mafia"
      text={t("joinOrHostScreen/subtitle")}
      sideButton="account"
    >
      <Button color="accent" isBold={true} onPress={onJoinPress}>
        {t("joinOrHostScreen/joinGame")}
      </Button>
      <Button color="accent" isBold={true} onPress={onHostPress}>
        {t("joinOrHostScreen/hostGame")}
      </Button>
    </StartScreen>
  );
};

export default JoinOrHostScreen;
