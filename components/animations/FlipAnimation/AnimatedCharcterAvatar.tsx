import {
  Character,
  CharacterAvatar,
  Role,
} from "@/components/CharacterAvatar/CharacterAvatar";
import CharacterNickname from "@/components/CharacterNickname/CharacterNickname";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  ReduceMotion,
} from "react-native-reanimated";

type AnimatedCharacterAvatarProps = {
  character: Character;
  role: Role;
  nickname?: string;
  state: "default" | "revealed" | "dead";
};

export const AnimatedCharacterAvatar = ({
  character,
  role,
  nickname,
  state,
}: AnimatedCharacterAvatarProps) => {
  const [activeCharacter, setActiveCharacter] = useState<Character>(character);
  const [activeRole, setActiveRole] = useState<Role>(role);
  const [borderColor, setBorderColor] = useState("#EAECD6");
  const rotate = useSharedValue(0);
  const flipDuration = 500;
  const configFlip = {
    duration: flipDuration,
    easing: Easing.linear,
    reduceMotion: ReduceMotion.System,
  };
  const configState = {
    duration: 250,
    easing: Easing.linear,
    reduceMotion: ReduceMotion.System,
  };

  const FlipAnimationStyles = useAnimatedStyle(() => {
    const rotateValue = interpolate(rotate.value, [0, 1], [0, 90]);
    return {
      flexShrink: 1,
      transform: [
        {
          rotateY: `${rotateValue}deg`,
        },
      ],
    };
  });

  const styles = StyleSheet.create({
    border: {
      borderRadius: 999,
      borderWidth: 45,
      borderColor: borderColor,
    },
  });

  const isFirstRender = useRef(true);

  const handleBorderColor = (state: string, role: string) => {
    let newColor;
    switch (state) {
      case "default":
        newColor = "#EAECD6";
        break;
      case "revealed":
        if (role === "police") {
          newColor = "blue";
        } else if (role === "mafia") {
          newColor = "red";
        } else if (role === "detective") {
          newColor = "cyan";
        } else {
          newColor = "#EAECD6";
        }
        break;
      case "dead":
        newColor = "#000";
        break;
      default:
        newColor = "#EAECD6";
        break;
    }
    return newColor;
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const startRotation = () => {
      rotate.value = withTiming(1, configFlip);
    };
    const finishRotation = () => {
      rotate.value = withTiming(0, configFlip);
    };

    startRotation();
    setTimeout(() => {
      setActiveCharacter(character);
      setActiveRole(role);
      setBorderColor(handleBorderColor(state, role));
      finishRotation();
    }, flipDuration);
  }, [character, role, state]);

  return (
    <Animated.View style={FlipAnimationStyles}>
      <View style={styles.border}>
        <CharacterAvatar character={activeCharacter} role={activeRole} />
      </View>
      {nickname && <CharacterNickname nickname={nickname} />}
    </Animated.View>
  );
};

export default AnimatedCharacterAvatar;
