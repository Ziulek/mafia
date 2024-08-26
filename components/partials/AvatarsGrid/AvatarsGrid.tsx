import React, { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSharedValue, withTiming, Easing } from "react-native-reanimated";
import AnimatedCharacterAvatar from "../AnimatedCharacterAvatar/AnimatedCharacterAvatar";
import { Mode } from "@/components/types/Mode";
import { Player } from "@/components/types/Player";

type AvatarGridProps = {
  mode: Mode;
  onPressItem: (item: Player) => void;
  items: Player[];
};

const AvatarGrid = ({ mode, onPressItem, items }: AvatarGridProps) => {
  // Handle reveal roles animation
  const revealRolesAnimation = useSharedValue(0);

  useEffect(() => {
    if (mode === "revealed") {
      revealRolesAnimation.value = withTiming(1, {
        duration: 1000,
        easing: Easing.linear,
      });
    } else {
      revealRolesAnimation.value = withTiming(0, {
        duration: 1000,
        easing: Easing.linear,
      });
    }
  }, [mode]);

  const renderItem = ({ item }: { item: Player }) => (
    <View style={styles.avatarContainer}>
      <AnimatedCharacterAvatar
        revealRolesAnimation={revealRolesAnimation}
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
      columnWrapperStyle={styles.column}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    marginVertical: 10,
  },
  column: {
    width: "100%",
    justifyContent: "space-between",
  },
});

export default AvatarGrid;
