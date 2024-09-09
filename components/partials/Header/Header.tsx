import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  ReduceMotion,
  runOnJS,
} from "react-native-reanimated";
import { colors } from "@/theme/colors";
import Text from "../../base/Text/Text";
import SelectListItem from "@/components/base/SelectListItem/SelectListItem";
import { SwitchListItem } from "@/components/base/SwitchListItem/SwitchListItem";
import { NumberListItem } from "@/components/base/NumberListItem/NumberListItem";
import AvailableRolesConfig from "@/gameConfig/AvailableRoles.config";
import NumberOfMafiaConfig from "@/gameConfig/NumberOfMafia.config";
import { AdditionalRole } from "@/components/types/AdditionalRole";

type HeaderProps = {
  mode: "host" | "player";
  gameStage: "waitingForPlayers" | "game" | "result";
  players: number;
  gameCode: string;
  // Host
  isSwitchOn: boolean;
  setIsSwitchOn: (isOn: boolean) => void;
  numberOfMafia: number;
  setNumberOfMafia: (value: number) => void;
  additionalRoles: AdditionalRole[];
  setAdditionalRoles: Dispatch<SetStateAction<AdditionalRole[]>>;
  // Winner
  winner?: "mafia" | "police";
};

export const Header = ({
  mode,
  gameStage,
  players,
  gameCode,
  // Host
  isSwitchOn,
  setIsSwitchOn,
  numberOfMafia,
  setNumberOfMafia,
  additionalRoles,
  setAdditionalRoles,
  // Winner
  winner,
}: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const translateY = useSharedValue(0);
  const config = {
    duration: 1000,
    easing: Easing.inOut(Easing.cubic),
    reduceMotion: ReduceMotion.Never,
  };

  const [displayedGameStage, setDisplayedGameStage] = useState(gameStage);

  const animateVisibility = (visible: boolean) => {
    translateY.value = withTiming(
      visible ? 0 : gameStage === "result" ? -100 : -400,
      config,
      (finished) => {
        if (finished) {
          runOnJS(setDisplayedGameStage)(gameStage);
        }
      }
    );
  };

  useEffect(() => {
    if (gameStage === "result") {
      setDisplayedGameStage(gameStage);
      animateVisibility(true);
    } else {
      animateVisibility(gameStage !== "game");
    }
  }, [gameStage]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const renderContent = () => {
    if (displayedGameStage === "waitingForPlayers") {
      if (mode === "host") {
        return (
          <>
            <View style={styles.text}>
              <Text size="headline">Game Code: </Text>
              <Text size="headline" isBold={true}>
                {gameCode}
              </Text>
            </View>
            <View style={styles.text}>
              <Text size="headline">Players: </Text>
              <Text size="headline" isBold={true}>
                {players.toString()}
              </Text>
            </View>
            <View style={styles.items}>
              <SelectListItem
                items={AvailableRolesConfig}
                isMultiSelected={true}
                value={additionalRoles}
                setValue={setAdditionalRoles}
              />
              <NumberListItem
                title="Number of Mafia"
                value={numberOfMafia}
                setValue={setNumberOfMafia}
                min={NumberOfMafiaConfig.min}
                max={NumberOfMafiaConfig.max}
              />
              <SwitchListItem
                title="Reveal roles after death"
                isOn={isSwitchOn}
                setIsOn={setIsSwitchOn}
              />
            </View>
          </>
        );
      } else if (mode === "player") {
        return (
          <>
            <View style={styles.text}>
              <Text size="headline">Game Code: </Text>
              <Text size="headline" isBold={true}>
                {gameCode}
              </Text>
            </View>
            <View style={styles.text}>
              <Text size="headline">Players: </Text>
              <Text size="headline" isBold={true}>
                {players.toString()}
              </Text>
            </View>
            <View style={styles.text}>
              <Text size="headline" isBold={true}>
                Waiting for players
              </Text>
            </View>
          </>
        );
      }
    } else if (displayedGameStage === "result" && winner) {
      return (
        <View style={styles.text}>
          <Text size="headline" isBold={true}>{`${winner
            .charAt(0)
            .toUpperCase()}${winner.slice(1)}`}</Text>
          <Text size="headline"> wins!</Text>
        </View>
      );
    }
    return null;
  };

  return (
    <Animated.View
      style={[styles.header, { paddingTop: insets.top * 2.2 }, animatedStyle]}
    >
      <View style={styles.container}>{renderContent()}</View>
    </Animated.View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30,
    zIndex: 100,
    width: "100%",
  },
  container: {
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "85%",
    gap: 15,
  },
  text: {
    flexDirection: "row",
    alignItems: "center",
  },
  items: { alignItems: "center", gap: 15 },
});
