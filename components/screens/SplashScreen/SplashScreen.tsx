import React from "react";
import { StyleSheet, View, Animated, Easing } from "react-native";
import Svg, { Path } from "react-native-svg";
import Text from "@/components/base/Text/Text";
import { colors } from "@/theme/colors";

const SplashScreen = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperTextContainer}>
        <Text size="startScreenSubtitle">Welcome to </Text>
        <Text size="startScreenHeadline" isBold={true}>
          Mafia
        </Text>
      </View>

      <View style={styles.bottomContainer}>
        <AnimatedLoader />
        <View style={styles.textContainer}>
          <Text size="headline" isBold={true}>
            Mafia
          </Text>
          <Text size="headline"> is making a meeting </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  upperTextContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  bottomContainer: {
    alignItems: "center",
  },
});

const AnimatedLoader = () => {
  const spinValue = new Animated.Value(0);

  // Set up the animation
  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 2600,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  ).start();

  // Interpolate the animated value to rotate from 0 to 360 degrees
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  return (
    <Animated.View style={{ transform: [{ rotate: spin }] }}>
      <Svg height="140" width="140" viewBox="0 0 200 200">
        <Path
          d="M86.3 21.3c-4.6 1.1-5.5 1.8-8.6 6.2-6.5 9.6-17.4 15.8-29.9 17.1-5.9.6-6.5.9-9.7 5-5.5 6.8-10.1 14.7-12.6 21.5l-2.2 6.3 3.1 6.5c2.8 5.9 3.1 7.5 3.1 16.1 0 8.6-.3 10.2-3.1 16.1l-3.1 6.5 2.2 6.3c2.5 6.8 7.1 14.7 12.6 21.5 3.2 4.1 3.8 4.4 9.7 5 12.5 1.3 23.4 7.5 29.9 17.1 3.1 4.4 4 5.1 8.6 6.2 6.7 1.4 20.7 1.4 27.4 0 4.6-1.1 5.5-1.8 8.6-6.2 6.5-9.6 17.8-16 30.1-17.2 5.7-.5 6.3-.8 9.5-4.9 5.5-6.8 10.1-14.7 12.6-21.5l2.2-6.3-3.1-6.5c-2.8-5.9-3.1-7.5-3.1-16.1 0-8.6.3-10.2 3.1-16.1l3.1-6.5-2.2-6.3c-2.5-6.8-7.1-14.7-12.6-21.5-3.2-4.1-3.8-4.4-9.7-5-12.5-1.3-23.4-7.5-29.9-17.1-3.1-4.4-4-5.1-8.6-6.2-2.9-.6-9-1.1-13.7-1.1-4.7 0-10.8.5-13.7 1.1zM111 33.4c13.8 9.1 10.6 31.1-5.3 35.5-15.5 4.4-29-9.1-24.8-24.7 1.4-5.1 7.5-11.7 12.3-13.1 5.3-1.6 13.5-.6 17.8 2.3zM64.5 56.9C71.3 59.9 77 68.2 77 75c0 3.7-2.4 9.4-5.3 12.7C59.3 101.8 37 93.7 37 75c0-14.5 14.5-24.1 27.5-18.1zm86.3-.4c7.5 3.2 12.2 10.2 12.2 18.2-.1 18.9-22.2 27.2-34.7 13-2.9-3.3-5.3-9-5.3-12.7 0-3.7 2.4-9.4 5.3-12.7 5.9-6.7 14.8-9 22.5-5.8zm-45.9 34.9c6.7 3.5 6.5 14.3-.4 17.4-9.1 4.1-17.9-5.1-13.1-13.7 2.6-4.7 8.4-6.3 13.5-3.7zm-41.1 15.2c13 5.4 16.9 20.8 7.9 31.1-12.4 14.1-34.7 6-34.7-12.7 0-14.2 14-23.8 26.8-18.4zm87-.1c16.3 6.9 16.3 30.1 0 37-7.7 3.2-16.6.9-22.5-5.8-2.9-3.3-5.3-9-5.3-12.7 0-3.7 2.4-9.4 5.3-12.7 5.9-6.7 14.8-9 22.5-5.8zM111 133.4c13.8 9.1 10.6 31.1-5.3 35.5-15.5 4.4-29-9.1-24.8-24.7 1.4-5.1 7.5-11.7 12.3-13.1 5.3-1.6 13.5-.6 17.8 2.3z"
          fill={colors.secondary}
        />
      </Svg>
    </Animated.View>
  );
};

export default SplashScreen;