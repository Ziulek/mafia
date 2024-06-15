import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import {
  Character,
  Role,
} from "@/components/base/CharacterAvatar/CharacterAvatar";
import AnimatedCharacterAvatar from "../AnimatedCharacterAvatar/AnimatedCharacterAvatar";

type AvatarGridItem = {
  character: Character;
  role: Role;
  nickname?: string;
  isDead: boolean;
};

type AvatarGridProps = {
  mode: "default" | "revealed" | "pressable";
  onPressItem: (item: AvatarGridItem) => void;
  items: AvatarGridItem[];
};

const AvatarGrid = ({ mode, onPressItem, items }: AvatarGridProps) => {
  const renderItem = ({ item }: { item: AvatarGridItem }) => (
    <View style={styles.avatarContainer}>
      <AnimatedCharacterAvatar
        character={item.character}
        role={item.role}
        nickname={item.nickname}
        isDead={item.isDead}
        onPress={() => onPressItem(item)}
        mode={mode}
      />
    </View>
  );

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      contentContainerStyle={styles.grid}
      columnWrapperStyle={styles.column}
    />
  );
};

const styles = StyleSheet.create({
  grid: {
    justifyContent: "center",
    // paddingHorizontal: "10%",
    backgroundColor: "green",
  },
  avatarContainer: {
    width: "45%",
    aspectRatio: 1,
    // marginHorizontal: "2.5%",
    marginVertical: 10,
    backgroundColor: "blue",
  },
  column: {
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "red",
    borderColor: "purple",
    // borderWidth: 10,
  },
});

export default AvatarGrid;
