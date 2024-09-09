import { colors } from "@/theme/colors";
import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated, Dimensions, Platform } from "react-native";

type PageIndicatorProps = {
  currentPage: number;
};
const height = Dimensions.get("window").height;

const PageIndicator: React.FC<PageIndicatorProps> = ({ currentPage }) => {
  const widthAnim = useRef([
    new Animated.Value(40),
    new Animated.Value(15),
  ]).current;
  const colorAnim = useRef([
    new Animated.Value(1),
    new Animated.Value(0),
  ]).current;

  useEffect(() => {
    animateIndicator(0, currentPage === 0);
    animateIndicator(1, currentPage === 1);
  }, [currentPage]);

  const animateIndicator = (index: number, isActive: boolean) => {
    Animated.timing(widthAnim[index], {
      toValue: isActive ? 40 : 15,
      duration: 300,
      useNativeDriver: false,
    }).start();

    Animated.timing(colorAnim[index], {
      toValue: isActive ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const interpolateColor = (animValue: Animated.Value) =>
    animValue.interpolate({
      inputRange: [0, 1],
      outputRange: [colors.back, colors.isDisabled],
    });

  return (
    <View style={styles.container}>
      {widthAnim.map((anim, index) => (
        <Animated.View
          key={index}
          style={[
            styles.indicator,
            {
              width: anim,
              backgroundColor: interpolateColor(colorAnim[index]),
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 10,
    bottom: Platform.OS === "ios" ? 110 : 70,
  },
  indicator: {
    height: 4,
    borderRadius: 5,
    marginHorizontal: 2,
  },
});

export default PageIndicator;
