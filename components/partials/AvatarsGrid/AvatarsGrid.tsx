import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AnimatedCharacterAvatar from "../AnimatedCharcterAvatar/AnimatedCharcterAvatar";
import {
  Character,
  Role,
} from "@/components/base/CharacterAvatar/CharacterAvatar";

type AvatarGridItemProps = {
  character: Character;
  role: Role;
  nickname?: string;
  isDead: boolean;
};

type AvatarGridProps = {
  mode: "default" | "revealed" | "pressable";
  characters: AvatarGridItemProps[];
};

const AvatarGrid = ({ mode, characters }: AvatarGridProps) => {
  const renderItem = ({ item }: { item: AvatarGridItemProps }) => (
    <View style={styles.avatarContainer}>
      <AnimatedCharacterAvatar
        character={item.character}
        role={item.role}
        nickname={item.nickname}
        isDead={item.isDead}
        mode={mode}
      />
    </View>
  );

  return (
    <FlatList
      data={characters}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      contentContainerStyle={styles.grid}
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
    marginHorizontal: "2.5%",
    marginVertical: 10,
  },
});

export default AvatarGrid;
