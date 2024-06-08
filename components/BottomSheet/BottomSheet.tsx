import React, { useMemo, useRef } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import GorhomBottomSheet from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

type BottomSheetProps = {
  title: string;
  children: React.ReactNode;
  handleClose: () => void;
};

export const BottomSheet = ({
  title,
  children,
  handleClose,
}: BottomSheetProps) => {
  const snapPoints = useMemo(() => ["50%"], []);

  const bottomSheetRef = useRef<GorhomBottomSheet>(null);
  const handleOpenPress = () => bottomSheetRef.current?.expand();
  const handleClosePress = () => bottomSheetRef.current?.close();

  return (
    <GestureHandlerRootView style={styles.container}>
      <Button title="Open" onPress={handleOpenPress} />
      <Button title="Close" onPress={handleClosePress} />
      <GorhomBottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        enableContentTapGesture={true} // Enable tap gesture on background content to close
        backgroundStyle={{ backgroundColor: "#EAECD6" }}
        handleIndicatorStyle={styles.indicator}
        onClose={handleClose}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.text}>{title}</Text>
          {children}
        </View>
      </GorhomBottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(132, 132, 132, 0.377)",
    height: "100%",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  indicator: {
    width: 35,
    backgroundColor: "#8D8D8D",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginHorizontal: 20,
  },
  text: {
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 45,
  },
});
