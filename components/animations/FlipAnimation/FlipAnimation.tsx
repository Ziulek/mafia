import React, { ReactNode, useEffect } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { opacity } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

export type FlipAnimationProps = {
  children: ReactNode;
};

export const FlipAnimation = ({ children }: FlipAnimationProps) => {
  const config = {
    duration: 1000,
  };
  const rotate = useSharedValue(0);
  const frontAnimatedStyles = useAnimatedStyle(() => {
    const rotateValue = interpolate(rotate.value, [0, 1], [0, 180]);
    return {
      transform: [
        {
          rotateY: withTiming(`${rotateValue}deg`, config),
        },
      ],
    };
  });

  // useEffect(() => {
  //   rotate.value = withTiming(((rotate.value = 1 ? 0 : 1), config ));
  // }, [children]);

  return (
    <>
      <Animated.View style={frontAnimatedStyles}>{children}</Animated.View>
      <TouchableOpacity
        onPress={() => {
          rotate.value = rotate.value = 1 ? 0 : 1;
        }}
      >
        {"button"}
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "purple",
    borderRadius: 8,
  },
  text: { color: "white" },
});
