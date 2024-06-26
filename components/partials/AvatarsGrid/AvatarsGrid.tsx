import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AnimatedCharacterAvatar from "../AnimatedCharacterAvatar/AnimatedCharacterAvatar";
import { Mode } from "@/components/types/Mode";
import { Player } from "@/components/types/Player";
import { SharedValue } from "react-native-reanimated";

type AvatarGridProps = {
  mode: Mode;
  revealRolesAnimation: SharedValue<number>;
  onPressItem: (item: Player) => void;
  items: Player[];
};

const AvatarGrid = ({
  mode,
  onPressItem,
  items,
  revealRolesAnimation,
}: AvatarGridProps) => {
  const renderItem = ({ item }: { item: Player }) => (
    <View style={styles.avatarContainer}>
      <AnimatedCharacterAvatar
        revealRolesAnimation={
          mode === "revealed" ? revealRolesAnimation : undefined
        }
        character={item.character}
        role={item.role}
        nickname={item.nickname}
        isDead={item.isDead}
        onPress={() => onPressItem(item)}
        isPressable={mode === "pressable"}
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
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  grid: {
    justifyContent: "center",
    // paddingTop: 230,
    // paddingHorizontal: "10%",
  },
  avatarContainer: {
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
