import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import AnimatedCharacterAvatar from "../AnimatedCharacterAvatar/AnimatedCharacterAvatar";
import { Character } from "@/components/types/Characters";
import { Role } from "@/components/types/Role";
import { Mode } from "@/components/types/mode";

type AvatarGridItem = {
  character: Character;
  role: Role;
  nickname: string;
  isDead: boolean;
};

type AvatarGridProps = {
  mode: Mode;
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
  },
  avatarContainer: {
    width: "45%",
    aspectRatio: 1,
    // marginHorizontal: "2.5%",
    marginVertical: 10,
  },
  column: {
    width: "100%",
    justifyContent: "space-between",

    // borderWidth: 10,
  },
});

export default AvatarGrid;
