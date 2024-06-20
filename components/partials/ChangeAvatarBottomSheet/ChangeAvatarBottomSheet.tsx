import React, { useRef, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import { BottomSheet } from "../../base/BottomSheet/BottomSheet";
import AnimatedCharacterAvatar from "../AnimatedCharacterAvatar/AnimatedCharacterAvatar";
import { Character } from "@/components/base/CharacterAvatar/CharacterAvatar";

type ChangeAvatarBottomSheetProps = {
  nickname: string;
  onKick: () => void;
  onKill: () => void;
};

const { width } = Dimensions.get("window");

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

  const carouselRef = useRef<Carousel<Character>>(null);

  const handleAvatarPress = (index: number) => {
    carouselRef.current?.snapToItem(index);
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
        renderItem={({ item, index }) => (
          <AnimatedCharacterAvatar
            character={item}
            role="mafia" // or any default role
            isDead={false} // or any default state
            onPress={() => handleAvatarPress(index)} // Scrolls to the clicked avatar
            mode="pressable" // or any default mode
            nickname="Lorem Ipsum Dupol"
          />
        )}
        sliderWidth={width}
        itemWidth={width * 0.45}
        loop={true}
        inactiveSlideScale={0.94}
        inactiveSlideOpacity={0.7}
        enableMomentum={true}
        activeSlideAlignment={"center"}
      />
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: "center",
  },
});
