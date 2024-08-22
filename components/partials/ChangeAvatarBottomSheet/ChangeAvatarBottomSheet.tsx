import React, { useRef } from "react";
import { Dimensions, View } from "react-native";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import AnimatedCharacterAvatar from "../AnimatedCharacterAvatar/AnimatedCharacterAvatar";
import { Character } from "@/components/types/Characters";
import { BottomSheet } from "../../base/BottomSheet/BottomSheet";
import { useSharedValue } from "react-native-reanimated";

const { width } = Dimensions.get("window");

const PAGE_WIDTH = width; // Adjust the width of each page item
const PAGE_HEIGHT = 200; // Adjust the height of each page item

// Keep this as simple character identifiers
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

type ChangeAvatarBottomSheetProps = {
  currentCharacter?: Character;
  nickname?: string;
  isVisible: boolean;
  setIsVisible: (e: boolean) => void;
  onCharacterSelected: (character: Character) => void;
};

const ChangeAvatarBottomSheet: React.FC<ChangeAvatarBottomSheetProps> = ({
  currentCharacter = "M1",
  nickname = "Placeholder",
  isVisible,
  setIsVisible,
  onCharacterSelected,
}) => {
  const r = React.useRef<ICarouselInstance>(null);

  const handleSnapToItem = (index: number) => {
    const selectedCharacter = AllAvailableCharacters[index];
    console.log("Snapped to:", selectedCharacter);
    // onCharacterSelected(selectedCharacter);
  };

  return (
    <BottomSheet
      title={nickname}
      handleClose={() => setIsVisible(false)}
      isVisible={isVisible}
    >
      <Carousel
        ref={r}
        defaultIndex={AllAvailableCharacters.indexOf(currentCharacter)}
        loop={true}
        // autoPlay={true}
        width={PAGE_WIDTH / 1.8}
        height={PAGE_HEIGHT}
        style={{ width: PAGE_WIDTH }}
        data={AllAvailableCharacters}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 1,
          parallaxScrollingOffset: 50,
        }}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                // flex: 1,
                // width: PAGE_WIDTH / 3,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "red",
                // marginHorizontal: 40,
              }}
            >
              <AnimatedCharacterAvatar
                character={item}
                nickname={nickname}
                role="mafia"
                isPressable={true}
                avatarSelect={true}
              />
            </View>
          );
        }}
        onSnapToItem={handleSnapToItem}
      />
    </BottomSheet>
  );
};

export default ChangeAvatarBottomSheet;
