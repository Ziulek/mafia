import { CharacterAvatar } from "@/components/base/CharacterAvatar/CharacterAvatar";
import CharacterNickname from "@/components/base/CharacterNickname/CharacterNickname";
import { Character } from "@/components/types/Characters";
import { Role } from "@/components/types/Role";
import { Mode } from "@/components/types/Mode";
import React, { useEffect, useRef, useState } from "react";
import { Dimensions, StyleSheet, TouchableHighlight, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  ReduceMotion,
  SharedValue,
} from "react-native-reanimated";
import {
  handleBorderColor,
  handleNicknameColor,
} from "./AnimatedCharacterAvatar.utils";

export type AnimatedCharacterAvatarProps = {
  character: Character;
  role?: Role;
  nickname?: string;
  isDead?: boolean;
  revealRolesAnimation?: SharedValue<number>;
  onPress?: () => void;
  isPressable?: boolean;
  avatarSelect?: boolean;
};

const width = Dimensions.get("window").width * 0.4;

export const AnimatedCharacterAvatar = ({
  character,
  role = "police",
  nickname,
  isDead = false,
  revealRolesAnimation,
  onPress,
  isPressable,
  avatarSelect,
}: AnimatedCharacterAvatarProps) => {
  const [wasPressed, setWasPressed] = useState(false);
  const rotate = useSharedValue(0);
  const flipDuration = 500;

  const configFlip = {
    duration: 1000,
    easing: Easing.linear,
    reduceMotion: ReduceMotion.System,
  };

  const statefulStyles = StyleSheet.create({
    defaultBorder: {
      borderRadius: 999,
      borderWidth: width / 9,
      borderColor: handleBorderColor("default", role, isDead, avatarSelect),
    },
    revealedBorder: {
      borderRadius: 999,
      borderWidth: width / 9,
      borderColor: handleBorderColor("revealed", role, isDead, avatarSelect),
    },
  });

  const frontAnimatedStyles = useAnimatedStyle(() => {
    const rotateValue = interpolate(
      revealRolesAnimation ? revealRolesAnimation.value : rotate.value,
      [0, 1],
      [0, 180]
    );
    return {
      transform: [
        {
          rotateY: `${rotateValue}deg`,
        },
      ],
    };
  }, [revealRolesAnimation]);

  const backAnimatedStyles = useAnimatedStyle(() => {
    const rotateValue = interpolate(
      revealRolesAnimation ? revealRolesAnimation.value : rotate.value,
      [0, 1],
      [180, 360]
    );
    return {
      transform: [
        {
          rotateY: `${rotateValue}deg`,
        },
      ],
    };
  }, [revealRolesAnimation]);

  return (
    <TouchableHighlight
      style={{ borderRadius: 9999, backgroundColor: "transparent" }}
      onPress={onPress}
      delayLongPress={300}
      onLongPress={() => {
        if (rotate.value === 0) {
          rotate.value = withTiming(1, configFlip);
        }
      }}
      onPressIn={() => {
        if (rotate.value > 0) {
          rotate.value = withTiming(1, configFlip);
        }
      }}
      onPressOut={() => {
        rotate.value = withTiming(0, configFlip);
      }}
      disabled={isPressable}
    >
      <View>
        <Animated.View style={[styles.frontcard, frontAnimatedStyles]}>
          <View style={{ width: width, aspectRatio: 1 }}>
            <View style={statefulStyles.defaultBorder}>
              <CharacterAvatar
                character={character}
                role={"police"}
                isDead={isDead}
              />
            </View>
            {nickname && (
              <CharacterNickname
                nickname={nickname}
                color={handleNicknameColor("default", isDead)}
              />
            )}
          </View>
        </Animated.View>

        <Animated.View style={[styles.backCard, backAnimatedStyles]}>
          <View style={{ width: width, aspectRatio: 1 }}>
            <View style={statefulStyles.revealedBorder}>
              <CharacterAvatar
                character={character}
                role={role}
                isDead={isDead}
              />
            </View>
            {nickname && (
              <CharacterNickname
                nickname={nickname}
                color={handleNicknameColor("revealed", isDead)}
              />
            )}
          </View>
        </Animated.View>
      </View>
    </TouchableHighlight>
  );
};

export default AnimatedCharacterAvatar;
const styles = StyleSheet.create({
  frontcard: {
    position: "absolute",
    backfaceVisibility: "hidden",
    backgroundColor: "transparent",
  },
  backCard: {
    backfaceVisibility: "hidden",
    backgroundColor: "transparent",
  },
});
