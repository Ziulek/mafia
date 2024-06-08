import React, { MutableRefObject, useMemo } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import GorhomBottomSheet from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

type BottomSheetProps = {
  title: string;
  bottomSheetRef: MutableRefObject<GorhomBottomSheet | null>;
  handleClose: () => void;
  handleClosePress: () => void;
  children: React.ReactNode;
};

export const BottomSheet = ({
  title,
  bottomSheetRef,
  handleClose,
  handleClosePress,
  children,
}: BottomSheetProps) => {
  const snapPoints = useMemo(() => ["45%"], []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <TouchableOpacity style={styles.background} onPress={handleClosePress} />
      <GorhomBottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backgroundStyle={{ backgroundColor: "#EAECD6", borderRadius: 25 }}
        handleIndicatorStyle={styles.indicator}
        onClose={handleClose}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.text}>{title}</Text>
          <View style={styles.childrenContianer}>{children}</View>
        </View>
      </GorhomBottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    // jak jest kolor to miga jak się pojawia (???)
    // backgroundColor: "rgba(132, 132, 132, 0.377)",
    height: "100%",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  background: {
    flex: 1,
    backgroundColor: "transparent",
  },
  indicator: {
    width: 35,
    backgroundColor: "#8D8D8D",
    marginVertical: 12,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  text: {
    fontWeight: "bold",
    fontSize: 30,
    marginVertical: 30,
  },
  childrenContianer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
