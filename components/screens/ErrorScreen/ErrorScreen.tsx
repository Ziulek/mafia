import Button from "@/components/base/Button/Button";

import StartScreen from "@/components/partials/StartScreen/StartScreen";
import { useTranslation } from "react-i18next";

interface ErrorScreenProps {
  onPress: () => void;
  errorMessage: string;
}

const ErrorScreen: React.FC<ErrorScreenProps> = ({ onPress, errorMessage }) => {
  const { t } = useTranslation();
  return (
    <StartScreen image="error" text={errorMessage}>
      <Button color="back" onPress={onPress}>
        {t("errorScreen/backButton")}
      </Button>
    </StartScreen>
  );
};

export default ErrorScreen;
