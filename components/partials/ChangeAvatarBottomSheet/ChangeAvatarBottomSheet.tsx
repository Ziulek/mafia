import React, { useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import { BottomSheet } from "../../base/BottomSheet/BottomSheet";
import AnimatedCharacterAvatar from "../AnimatedCharacterAvatar/AnimatedCharacterAvatar";
import { Character } from "@/components/base/CharacterAvatar/CharacterAvatar";

type ChangeAvatarBottomSheetProps = {
  nickname: string;
  onKick: () => void;
  onKill: () => void;
};

export const ChangeAvatarBottomSheet = ({
  nickname,
  onKick,
  onKill,
}: ChangeAvatarBottomSheetProps) => {
  const [showBottomSheet, setShowBottomSheet] = useState(true);

  const AllAvailableCharacters: Character[] = [
    "M1",
    "M2",
    "M3",
    "M4",
    "F1",
    "F2",
    "F3",
    "F4",
  ];

  const flatListRef = useRef<FlatList>(null);

  const handleAvatarPress = (index: number) => {
    flatListRef.current?.scrollToIndex({
      index,
      animated: true,
      viewPosition: 0.5, // Centers the item in the middle
    });
  };

  useEffect(() => {
    // Ensure FlatList has time to render before scrolling to index
    setTimeout(() => {
      flatListRef.current?.scrollToIndex({
        index: 0,
        animated: true,
        viewPosition: 0.5, // Centers the first item in the middle
      });
    }, 100); // Adjust the timeout duration if needed
  }, []);

  return (
    <BottomSheet
      title={nickname}
      handleClose={() => setShowBottomSheet(false)}
      isVisible={showBottomSheet}
    >
      <FlatList
        ref={flatListRef}
        data={AllAvailableCharacters}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false} // Disables user scrolling
        contentContainerStyle={styles.contentContainer} // Add padding to the start and end
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <AnimatedCharacterAvatar
              character={item}
              role="mafia" // or any default role
              isDead={false} // or any default state
              onPress={() => handleAvatarPress(index)} // Scrolls to the clicked avatar
              mode="pressable" // or any default mode
              nickname="Lorem Ipsum Dupol"
            />
          </View>
        )}
      />
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: Dimensions.get("window").width * 0.225, // Adjust this value based on the width of the items to center them correctly
    backgroundColor: "#fff",
  },
  itemContainer: {
    width: Dimensions.get("window").width * 0.45, // Ensure the width matches the items' width
    alignItems: "center",
  },
});
