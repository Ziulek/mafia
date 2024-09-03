import React from "react";
import { StyleSheet, View } from "react-native";
import { ToastConfigParams } from "react-native-toast-message";
import { colors } from "@/theme/colors";
import Text from "@/components/base/Text/Text";

const toastConfig = {
  customToast: ({ text1, text2 }: ToastConfigParams<any>) => (
    <View style={styles.customToast_container}>
      <Text size="headline" color="black">{`${text1}`}</Text>
      <Text size="subtitle" color="grey">{`${text2}`}</Text>
      {/* <Text size="subtitle">{props?.uuid}</Text> */}
    </View>
  ),
};

const styles = StyleSheet.create({
  customToast_container: {
    backgroundColor: colors.primary,
    height: 70,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default toastConfig;
