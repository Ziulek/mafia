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

import { CharacterAvatar } from "@/components/base/CharacterAvatar/CharacterAvatar";
import CharacterNickname from "@/components/base/CharacterNickname/CharacterNickname";
import { Character } from "@/components/types/Characters";
import { Role } from "@/components/types/Role";
import { Stage } from "@/components/types/Stage";

export type AnimatedCharacterAvatarProps = {
  character: Character;
  role?: Role;
  nickname?: string;
  isDead?: boolean;
  revealRolesAnimation?: SharedValue<number>;
  onPress?: () => void;
  isPressable?: boolean;
  showRolesAfterDeath?: boolean;
  gameStage?: Stage;
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
  showRolesAfterDeath = false,
  gameStage = "game",
  avatarSelect = false,
}: AnimatedCharacterAvatarProps) => {
  const configFlip = {
    duration: 1000,
    easing: Easing.linear,
    reduceMotion: ReduceMotion.Never,
  };
  const rotate = useSharedValue(0);
  const deadRotate = useSharedValue(0);
  deadRotate.value = withTiming(isDead ? 1 : 0, configFlip);

  const statefulStyles = StyleSheet.create({
    defaultBorder: {
      borderColor: handleBorderColor(
        "default",
        role,
        false,
        showRolesAfterDeath,
        avatarSelect
      ),
    },
    revealedBorder: {
      borderColor: handleBorderColor("revealed", role, false),
    },
    deadBorder: {
      borderColor: handleBorderColor(
        "default",
        role,
        true,
        showRolesAfterDeath
      ),
    },
  });

  const frontAnimatedStyles = useAnimatedStyle(() => {
    let rotateValue;

    if (
      (revealRolesAnimation?.value === 0 ||
        revealRolesAnimation === undefined) &&
      rotate.value === 0
    ) {
      rotateValue = interpolate(deadRotate.value, [1, 0], [180, 360]);
    } else {
      rotateValue = interpolate(
        revealRolesAnimation?.value === 0 || revealRolesAnimation === undefined
          ? rotate.value
          : revealRolesAnimation.value,
        [0, 1],
        [0, 180]
      );
    }
    return {
      transform: [
        {
          rotateY: `${rotateValue}deg`,
        },
      ],
    };
  }, [revealRolesAnimation, isDead]);

  const backAnimatedStyles = useAnimatedStyle(() => {
    const rotateValue = interpolate(
      revealRolesAnimation?.value === 0 || revealRolesAnimation === undefined
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

  const deadAnimatedStyles = useAnimatedStyle(() => {
    if (gameStage === "result")
      return {
        transform: [
          {
            rotateY: `180deg`,
          },
        ],
      };
    let rotateValue;
    rotateValue = interpolate(deadRotate.value, [0, 1], [180, 360]);

    if (deadRotate.value >= 1) {
      rotateValue = interpolate(
        revealRolesAnimation?.value === 0 || revealRolesAnimation === undefined
          ? rotate.value
          : revealRolesAnimation.value,
        [0, 1],
        [360, 540]
      );
    }
    return {
      transform: [
        {
          rotateY: `${rotateValue}deg`,
        },
      ],
    };
  }, [revealRolesAnimation, isDead]);

  return (
    <TouchableHighlight
      style={{ borderRadius: 999 }}
      underlayColor={"transparent"}
      onPress={onPress}
      delayLongPress={300}
      onLongPress={() => {
        if (rotate.value === 0 && isPressable) {
          rotate.value = withTiming(1, configFlip);
        }
      }}
      onPressIn={() => {
        if (rotate.value > 0 && isPressable) {
          rotate.value = withTiming(1, configFlip);
        }
      }}
      onPressOut={() => {
        if (isPressable) {
          rotate.value = withTiming(0, configFlip);
        }
      }}
      // disabled={!isPressable}
      testID={`avatar-${character}`}
    >
      <View>
        {/* default */}
        <Animated.View
          style={[styles.frontCard, styles.card, frontAnimatedStyles]}
        >
          <View style={[statefulStyles.defaultBorder, styles.border]}>
            <CharacterAvatar character={character} role={"police"} />
          </View>

          {nickname && (
            <CharacterNickname
              nickname={nickname}
              color={handleNicknameColor("default", false)}
            />
          )}
        </Animated.View>
        {/* revealed */}
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
        {/* dead */}
        <Animated.View
          style={[styles.frontCard, styles.card, deadAnimatedStyles]}
        >
          <View style={[statefulStyles.deadBorder, styles.border]}>
            <CharacterAvatar character={character} role={role} isDead={true} />
          </View>
          {nickname && (
            <CharacterNickname
              nickname={nickname}
              color={handleNicknameColor("revealed", true)}
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
