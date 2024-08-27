import { CharacterAvatar } from "@/components/base/CharacterAvatar/CharacterAvatar";
import CharacterNickname from "@/components/base/CharacterNickname/CharacterNickname";
import { Character } from "@/components/types/Characters";
import { Role } from "@/components/types/Role";
import React from "react";
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
  revealRolesAnimation: SharedValue<number>;
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
  const rotate = useSharedValue(0);

  const configFlip = {
    duration: 1000,
    easing: Easing.linear,
    reduceMotion: ReduceMotion.System,
  };

  const statefulStyles = StyleSheet.create({
    defaultBorder: {
      borderColor: handleBorderColor("default", role, isDead, avatarSelect),
    },
    revealedBorder: {
      borderColor: handleBorderColor("revealed", role, isDead, avatarSelect),
    },
  });

  const frontAnimatedStyles = useAnimatedStyle(() => {
    const rotateValue = interpolate(
      revealRolesAnimation?.value === 0
        ? rotate.value
        : revealRolesAnimation.value,
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
      revealRolesAnimation?.value === 0
        ? rotate.value
        : revealRolesAnimation.value,
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
      style={{ borderRadius: 999 }}
      underlayColor={"transparent"}
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
      disabled={!isPressable}
    >
      <View>
        <Animated.View
          style={[styles.frontCard, styles.card, frontAnimatedStyles]}
        >
          <View style={[statefulStyles.defaultBorder, styles.border]}>
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
        </Animated.View>

        <Animated.View style={[styles.card, backAnimatedStyles]}>
          <View style={[statefulStyles.revealedBorder, styles.border]}>
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
        </Animated.View>
      </View>
    </TouchableHighlight>
  );
};

export default AnimatedCharacterAvatar;
const styles = StyleSheet.create({
  frontCard: {
    position: "absolute",
  },
  card: {
    backfaceVisibility: "hidden",
    backgroundColor: "transparent",
    width: width,
    aspectRatio: 1,
  },
  border: {
    borderRadius: 999,
    borderWidth: width / 9,
  },
});
