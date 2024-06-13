import {
  Character,
  CharacterAvatar,
  Role,
} from "@/components/base/CharacterAvatar/CharacterAvatar";
import CharacterNickname from "@/components/base/CharacterNickname/CharacterNickname";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
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
  isDead: boolean;
  // default = shows always police form
  // revealed = shows real role
  // pressable = shows real role on press
  mode: "default" | "revealed" | "pressable";
};

export const AnimatedCharacterAvatar = ({
  character,
  role,
  nickname,
  isDead = false,
  mode,
}: AnimatedCharacterAvatarProps) => {
  const [activeCharacter, setActiveCharacter] = useState<Character>(character);
  const [activeRole, setActiveRole] = useState<Role>("police");
  const [activeDead, setActiveDead] = useState<boolean>(isDead);
  const [borderColor, setBorderColor] = useState("#EAECD6");
  const [wasPressed, setWasPressed] = useState(false);
  const rotate = useSharedValue(0);
  const flipDuration = 500;
  const configFlip = {
    duration: flipDuration,
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

  const handleBorderColor = (mode: string, role: string, isDead: boolean) => {
    let newColor;

    if (isDead) {
      newColor = "#000";
    } else {
      switch (mode) {
        case "default":
          newColor = "#EAECD6";
          break;
        case "revealed":
          if (role === "police") {
            newColor = "#208197";
          } else if (role === "mafia") {
            newColor = "#A14141";
          } else if (role === "detective") {
            newColor = "#284e93";
          } else {
            newColor = "#EAECD6";
          }
          break;
        default:
          newColor = "#EAECD6";
          break;
      }
    }
    return newColor;
  };

  const isFirstRender = useRef(true);

  const startRotation = () => {
    rotate.value = withTiming(1, configFlip);
  };
  const finishRotation = () => {
    rotate.value = withTiming(0, configFlip);
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    startRotation();
    setTimeout(() => {
      setActiveDead(isDead);
      setActiveCharacter(character);
      setActiveRole(
        mode === "default" || mode === "pressable" ? "police" : role
      );

      setBorderColor(handleBorderColor(mode, role, isDead));
      finishRotation();
    }, flipDuration);
  }, [character, role, mode, isDead]);

  const handleLongPress = () => {
    if (mode === "pressable") {
      startRotation();
      setWasPressed(true);
      setTimeout(() => {
        setActiveDead(isDead);
        setActiveCharacter(character);
        setActiveRole(role);
        setBorderColor(handleBorderColor("revealed", role, isDead));
        finishRotation();
      }, flipDuration);
    }
  };

  const handlePressOut = () => {
    if (mode === "pressable" && wasPressed) {
      setTimeout(() => {
        startRotation();
        setWasPressed(false);
        setTimeout(() => {
          setActiveDead(isDead);
          setActiveCharacter(character);
          setActiveRole("police");
          setBorderColor(handleBorderColor(mode, role, isDead));
          finishRotation();
        }, flipDuration);
      }, flipDuration);
    }
  };

  return (
    <Animated.View style={FlipAnimationStyles}>
      <TouchableHighlight
        style={{ borderRadius: 9999 }}
        delayLongPress={2000}
        onLongPress={handleLongPress}
        onPressOut={handlePressOut}
        disabled={mode === "pressable" ? false : true}
      >
        <View>
          <View style={styles.border}>
            <CharacterAvatar
              character={activeCharacter}
              role={activeRole}
              isDead={activeDead}
            />
          </View>
          {nickname && <CharacterNickname nickname={nickname} />}
        </View>
      </TouchableHighlight>
    </Animated.View>
  );
};

export default AnimatedCharacterAvatar;
