import React from "react";
import { View, Text } from "react-native";
import {
  BaseToast,
  ErrorToast,
  ToastConfigParams,
} from "react-native-toast-message";
import { colors } from "@/theme/colors";

const toastConfig = {
  customToast: ({ text1, props }: ToastConfigParams<any>) => (
    <View
      style={{
        height: 60,
        width: "80%",
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{text1}</Text>
      <Text>{props?.uuid}</Text>
    </View>
  ),
};

export default toastConfig;
