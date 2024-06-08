import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import React, { ReactNode, useMemo, useRef } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

type BottomSheetProps = {
  title: string;
  content: ReactNode;
};

export const BottomSheetComponent = ({ title, content }: BottomSheetProps) => {
  const snapPoints = useMemo(() => ["55%"], []);

  console.log(content);

  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleOpenPress = () => bottomSheetRef.current?.expand();
  const handleClosePress = () => bottomSheetRef.current?.close();

  return (
    <View style={styles.container}>
      <Button title="Open" onPress={handleOpenPress} />
      <Button title="Close" onPress={handleClosePress} />
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backgroundStyle={{ backgroundColor: "#EAECD6" }}
        handleIndicatorStyle={styles.indicator}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.text}>{title}</Text>
          {content}
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey",
  },
  indicator: {
    width: 35,
    backgroundColor: "#8D8D8D",
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
  },
  text: {
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 40,
  },
});
