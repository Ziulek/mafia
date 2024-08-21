import Button from "@/components/base/Button/Button";

import StartScreen from "@/components/partials/StartScreen/StartScreen";

interface ErrorScreenProps {
  onPress: () => void;
  errorMessage: string;
}

const ErrorScreen: React.FC<ErrorScreenProps> = ({ onPress, errorMessage }) => {
  return (
    <StartScreen image="error" text={errorMessage}>
      <Button color="back" onPress={onPress}>
        Back
      </Button>
    </StartScreen>
  );
};

export default ErrorScreen;
