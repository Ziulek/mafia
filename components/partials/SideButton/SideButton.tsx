import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "@/components/base/Icon/Icon";
import { colors } from "@/theme/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export type SideButtonProps = {
  icon: "arrowLeft" | "account";
  onPress: () => void;
};

const SideButton = ({ onPress, icon }: SideButtonProps) => {
  const insets = useSafeAreaInsets();

  const ContainerStyles = {
    ...styles.container,
    top: insets.top + 15,
  };

  return (
    <TouchableOpacity style={ContainerStyles} onPress={() => onPress()}>
      <Icon name={icon} size="big" />
    </TouchableOpacity>
  );
};

export default SideButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 5,
    zIndex: 100,
  },
});
