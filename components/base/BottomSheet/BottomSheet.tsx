import React, { useEffect, useMemo, useRef } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import GorhomBottomSheet from "@gorhom/bottom-sheet";
import Text from "../Text/Text";
import { colors } from "@/theme/colors";

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
  const snapPoints = useMemo(() => ["40%"], []);

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
        backgroundStyle={{ backgroundColor: colors.primary, borderRadius: 25 }}
        handleIndicatorStyle={styles.indicator}
        onClose={handleClose}
      >
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text size="headline" isBold={true}>
              {title}
            </Text>
          </View>
          {children}
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
    marginVertical: 10,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 30,
    marginBottom: 20,
  },
  textContainer: {
    marginVertical: 20,
  },
});
