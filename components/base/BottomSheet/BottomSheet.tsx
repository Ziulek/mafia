import React, { MutableRefObject, useEffect, useMemo, useRef } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import GorhomBottomSheet from "@gorhom/bottom-sheet";

type BottomSheetProps = {
  title: string;
  handleClose: () => void;
  isVisible: boolean;
  children?: React.ReactNode;
};

export const BottomSheet = ({
  title,
  handleClose,
  isVisible,
  children,
}: BottomSheetProps) => {
  const snapPoints = useMemo(() => ["45%"], []);

  const bottomSheetRef = useRef<GorhomBottomSheet>(null);

  useEffect(() => {
    if (bottomSheetRef) {
      if (isVisible) {
        bottomSheetRef.current?.expand();
      } else {
        bottomSheetRef.current?.close();
      }
    }
  }, [isVisible, bottomSheetRef]);

  return (
    <View style={styles.container} pointerEvents="box-none">
      {isVisible && (
        <TouchableOpacity style={styles.background} onPress={handleClose} />
      )}
      <GorhomBottomSheet
        ref={bottomSheetRef}
        index={isVisible ? 0 : -1}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
