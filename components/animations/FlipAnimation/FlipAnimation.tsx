import {
  Character,
  CharacterAvatar,
  Role,
} from "@/components/CharacterAvatar/CharacterAvatar";
import React, { useEffect, useRef, useState } from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  ReduceMotion,
} from "react-native-reanimated";

type FlipAnimationProps = {
  character: Character;
  CharacterRole: Role;
};
// animated Character Avatar
export const FlipAnimation = ({
  character,
  CharacterRole,
}: FlipAnimationProps) => {
  const [activeCharacter, setActiveCharacter] = useState<Character>(character);
  const rotate = useSharedValue(0);
  const animationDuration = 500;
  const config = {
    duration: animationDuration,
    easing: Easing.linear,
    reduceMotion: ReduceMotion.System,
  };

  const frontAnimatedStyles = useAnimatedStyle(() => {
    const rotateValue = interpolate(rotate.value, [0, 1], [0, 90]);
    return {
      transform: [
        {
          rotateY: `${rotateValue}deg`,
        },
      ],
    };
  });

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    }

    const startRotation = () => {
      rotate.value = withTiming(1, config);
    };
    const finishRotation = () => {
      rotate.value = withTiming(0, config);
    };

    startRotation();
    setTimeout(() => {
      setActiveCharacter(character);
      finishRotation();
    }, animationDuration);
  }, [character]);

  return (
    <Animated.View style={frontAnimatedStyles}>
      <CharacterAvatar
        character={activeCharacter}
        role={CharacterRole}
        nickname="placeholder"
      />
    </Animated.View>
  );
};

export default FlipAnimation;
