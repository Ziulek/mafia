import React, { useRef, useState } from "react";
import { Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import { BottomSheet } from "../../base/BottomSheet/BottomSheet";
import AnimatedCharacterAvatar from "../AnimatedCharacterAvatar/AnimatedCharacterAvatar";
import { Character } from "@/components/types/Characters";

type ChangeAvatarBottomSheetProps = {
  nickname: string;
};

const { width } = Dimensions.get("window");

export const ChangeAvatarBottomSheet = ({
  nickname,
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

  const carouselRef = useRef<Carousel<Character>>(null);

  const handleSnapToItem = (index: number) => {
    const snappedItem = AllAvailableCharacters[index];
    console.log("Snapped to:", snappedItem);
    // You can use snappedItem as needed here
  };

  return (
    <BottomSheet
      title={nickname}
      handleClose={() => setShowBottomSheet(false)}
      isVisible={showBottomSheet}
    >
      <Carousel
        ref={carouselRef}
        data={AllAvailableCharacters}
        renderItem={({ item }) => {
          return (
            <AnimatedCharacterAvatar
              character={item}
              role="mafia"
              mode="pressable"
              nickname={nickname}
              avatarSelect={true}
            />
          );
        }}
        sliderWidth={width}
        itemWidth={width * 0.45}
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
