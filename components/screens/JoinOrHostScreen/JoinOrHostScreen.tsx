import React from "react";
import StartScreen from "@/components/partials/StartScreen/StartScreen";
import Button from "@/components/base/Button/Button";
import { colors } from "@/theme/colors";
import { StyleSheet } from "react-native";

interface JoinOrHostScreenProps {
  onJoinPress: () => void; // Type for the onJoinPress prop
  onHostPress: () => void; // Type for the onHostPress prop
}

const JoinOrHostScreen: React.FC<JoinOrHostScreenProps> = ({
  onJoinPress,
  onHostPress,
}) => {
  return (
    <StartScreen image="mafia" text="Host your own game or join an existing">
      <Button color="accent" isBold={true} onPress={onJoinPress}>
        Join Game
      </Button>
      <Button color="accent" isBold={true} onPress={onHostPress}>
        Host New Game
      </Button>
    </StartScreen>
  );
};

export default JoinOrHostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    backgroundColor: "grey",
    height: 300,
    width: 250,
  },
});
