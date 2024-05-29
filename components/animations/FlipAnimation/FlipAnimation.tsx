import { CharacterAvatar } from "@/components/CharacterAvatar/CharacterAvatar";
import React, { ReactNode, useEffect, useState } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export type FlipAnimationProps = {
  children: ReactNode;
};

export const FlipAnimation = ({ children }: FlipAnimationProps) => {
  // zmiana childrena
  // rotacja 90
  // zmiana state(children)
  // rotacja nowego 90
  const [activeChildren, setActiveChildren] = useState(children);
  const rotate = useSharedValue(0);

  const frontAnimatedStyles = useAnimatedStyle(() => {
    const rotateValue = interpolate(rotate.value, [0, 1], [0, 90]);
    return {
      transform: [
        {
          rotateY: withTiming(`${rotateValue}deg`, { duration: 1000 }),
        },
      ],
    };
  });

  // useEffect(() => {
  //   rotate.value = withTiming(
  //     (rotate.value = rotate.value ? 0 : 1),
  //     {
  //       duration: 500,
  //     },
  //     (finished) => {
  //       if (finished) {
  //         setActiveChildren(children);
  //         rotate.value = withTiming((rotate.value = rotate.value ? 0 : 1), {
  //           duration: 500,
  //         });
  //       }
  //     }
  //   );
  // }, [children]);

  const backAnimatedStyles = useAnimatedStyle(() => {
    const rotateValue = interpolate(rotate.value, [1, 0], [180, 360]);
    return {
      transform: [
        {
          rotateY: withTiming(`${rotateValue}deg`, { duration: 1000 }),
        },
      ],
    };
  });
  return (
    <View style={styles.container}>
      <View>
        <Animated.View style={[styles.frontcard, frontAnimatedStyles]}>
          {activeChildren}
        </Animated.View>
        {/* <Animated.View style={[styles.backCard, backAnimatedStyles]}>
          <CharacterAvatar character="M2" />
        </Animated.View> */}
        <TouchableOpacity
          onPress={() => {
            rotate.value = rotate.value ? 0 : 1;
          }}
          style={styles.container}
        >
          <Text>button</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  frontcard: {
    // position: "absolute",
    // backfaceVisibility: "hidden",
  },
  backCard: {
    backfaceVisibility: "hidden",
  },
  button: {
    paddingHorizontal: 25,
    paddingVertical: 5,
    backgroundColor: "#8ecae6",
    marginTop: 10,
    borderRadius: 5,
  },
});
