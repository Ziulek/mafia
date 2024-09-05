import React, { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import {
  useSharedValue,
  withTiming,
  Easing,
  ReduceMotion,
} from "react-native-reanimated";
import AnimatedCharacterAvatar from "../AnimatedCharacterAvatar/AnimatedCharacterAvatar";
import { Mode } from "@/components/types/Mode";
import { Player } from "@/components/types/Player";

type AvatarGridProps = {
  avatarGridMode: Mode;
  onPressItem: (item: Player) => void;
  items: Player[];
};

const AvatarGrid = ({
  avatarGridMode,
  onPressItem,
  items,
}: AvatarGridProps) => {
  const revealRolesAnimation = useSharedValue(0);

  const configFlip = {
    duration: 1000,
    easing: Easing.linear,
    reduceMotion: ReduceMotion.Never,
  };

  useEffect(() => {
    if (avatarGridMode === "revealed") {
      revealRolesAnimation.value = withTiming(1, configFlip);
    } else {
      revealRolesAnimation.value = withTiming(0, configFlip);
    }
  }, [avatarGridMode]);

  const renderItem = ({ item }: { item: Player }) => (
    <View style={styles.avatarContainer}>
      <AnimatedCharacterAvatar
        revealRolesAnimation={revealRolesAnimation}
        character={item.character}
        role={item.role}
        nickname={item.nickname}
        isDead={item.isDead}
        onPress={() => onPressItem(item)}
        isPressable={avatarGridMode === "pressable"}
      />
    </View>
  );

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={styles.column}
      contentContainerStyle={styles.contentContainer}
      ListHeaderComponent={<View style={styles.headerFooter} />}
      ListFooterComponent={<View style={styles.headerFooter} />}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 200, // Adds space to allow first/last items to scroll to center
    paddingHorizontal: 20,
  },
  avatarContainer: {
    marginVertical: 10,
  },
  column: {
    width: "100%",
    justifyContent: "space-between",
  },
  headerFooter: {
    height: 200, // Adjust this value to control the scroll range
  },
});

export default AvatarGrid;
