import React, { useRef } from "react";
import { Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import { BottomSheet } from "../../base/BottomSheet/BottomSheet";
import AnimatedCharacterAvatar from "../AnimatedCharacterAvatar/AnimatedCharacterAvatar";
import { Character } from "@/components/types/Characters";

type ChangeAvatarBottomSheetProps = {
  nickname?: string;
  isVisible: boolean;
  setIsVisible: (e: boolean) => void;
  onCharacterSelected: (character: Character) => void;
};

const { width } = Dimensions.get("window");

export const ChangeAvatarBottomSheet = ({
  nickname = "No Nick Found",
  isVisible,
  setIsVisible,
  onCharacterSelected,
}: ChangeAvatarBottomSheetProps) => {
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

  const carouselRef = useRef<Carousel<Character>>(null);

  const handleSnapToItem = (index: number) => {
    const snappedItem = AllAvailableCharacters[index];
    console.log("Snapped to:", snappedItem);
    onCharacterSelected(snappedItem);
    // You can use snappedItem as needed here
  };

  return (
    <BottomSheet
      title={nickname}
      handleClose={() => setIsVisible(false)}
      isVisible={isVisible}
    >
      <Carousel
        ref={carouselRef}
        data={AllAvailableCharacters}
        renderItem={({ item }) => {
          return (
            <AnimatedCharacterAvatar
              character={item}
              role="mafia"
              isPressable
              avatarSelect={true}
            />
          );
        }}
        sliderWidth={width}
        itemWidth={width * 0.4}
        layout="default"
        loop={true}
        inactiveSlideScale={0.8}
        inactiveSlideOpacity={0.7}
        inactiveSlideShift={-10}
        onSnapToItem={handleSnapToItem}
      />
    </BottomSheet>
  );
};
