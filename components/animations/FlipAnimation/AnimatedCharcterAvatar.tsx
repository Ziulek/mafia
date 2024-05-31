import {
  Character,
  CharacterAvatar,
  Role,
} from "@/components/CharacterAvatar/CharacterAvatar";
import CharacterNickname from "@/components/CharacterNickname/CharacterNickname";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  ReduceMotion,
} from "react-native-reanimated";

type AnimatedCharcterAvatarProps = {
  character: Character;
  role: Role;
  nickname?: string;
  state: "default" | "dead" | "pressable" | "selected";
};

export const AnimatedCharcterAvatar = ({
  character,
  role,
  nickname,
  state,
}: AnimatedCharcterAvatarProps) => {
  const [activeCharacter, setActiveCharacter] = useState<Character>(character);
  const [activeRole, setActiveRole] = useState<Role>(role);
  const rotate = useSharedValue(0);
  const borderWidth = useSharedValue(0);
  const overlayOpacity = useSharedValue(0);
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
      transform: [
        {
          rotateY: `${rotateValue}deg`,
        },
      ],
    };
  });

  const StateAnimationStyles = useAnimatedStyle(() => {
    return {
      borderWidth: borderWidth.value,
      borderColor: "#32a534",
      borderRadius: 9999,
    };
  });

  const OverlayAnimationStyles = useAnimatedStyle(() => {
    return {
      opacity: overlayOpacity.value,
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "rgb(0, 0, 0)",
      borderRadius: 9999,
    };
  });

  const isFirstRender = useRef(true);

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
      finishRotation();
    }, flipDuration);
  }, [character, role]);

  useEffect(() => {
    if (state === "selected") {
      borderWidth.value = withTiming(12, configState);
    } else {
      borderWidth.value = withTiming(0, configState);
    }
    if (state === "dead") {
      overlayOpacity.value = withTiming(0.6, configState);
    } else {
      overlayOpacity.value = withTiming(0, configState);
    }
  }, [state]);

  return (
    <Animated.View style={FlipAnimationStyles}>
      <Animated.View style={StateAnimationStyles}>
        <CharacterAvatar character={activeCharacter} role={activeRole} />
        <Animated.View style={OverlayAnimationStyles} />
        {nickname && <CharacterNickname nickname={nickname} />}
      </Animated.View>
    </Animated.View>
  );
};

export default AnimatedCharcterAvatar;
