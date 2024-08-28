import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "@/components/base/Icon/Icon";

export type SideButtonProps = {
  icon: "arrowLeft" | "account";
  onPress: () => void;
};

const SideButton = ({ onPress, icon }: SideButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress()}>
      <Icon name={icon} size="big" />
    </TouchableOpacity>
  );
};

export default SideButton;

const styles = StyleSheet.create({
  container: {
    // justifyContent: "center",
    // alignItems: "center",
    // width: 50,
    // height: 50,

    // borderBottomRightRadius: 67,
    // borderTopRightRadius: 67,
    // borderRadius: 67.492,
    // borderWidth: 2,
    // borderLeftWidth: 0,
    // borderColor: colors.accent,

    position: "absolute",
    // backgroundColor: colors.accent,
    left: -30,
    top: 10,
    // marginTop: "5%",
    // marginLeft: "5%",

    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 8,
    // },
    // shadowOpacity: 0.35,
    // shadowRadius: 13.5,
  },
});
