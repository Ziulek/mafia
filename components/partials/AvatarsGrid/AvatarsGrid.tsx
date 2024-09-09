import React, { useEffect } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  ReduceMotion,
} from "react-native-reanimated";
import AnimatedCharacterAvatar from "../AnimatedCharacterAvatar/AnimatedCharacterAvatar";
import { Mode } from "@/components/types/Mode";
import { Player } from "@/components/types/Player";
import { AvatarGridMode } from "@/components/types/AvatarGridMode";
import { Stage } from "@/components/types/Stage";

type AvatarGridProps = {
  gameStage: Stage;
  mode: Mode;
  avatarGridMode: AvatarGridMode;
  showRolesAfterDeath: boolean;
  onPressItem: (item: Player) => void;
  items: Player[];
};

const height = Dimensions.get("window").height;

const AvatarGrid = ({
  gameStage,
  mode,
  avatarGridMode,
  showRolesAfterDeath,
  onPressItem,
  items,
}: AvatarGridProps) => {
  const revealRolesAnimation = useSharedValue(0);
  const paddingTop = useSharedValue(
    mode === "host" ? height * 0.23 : height * 0.17
  );
  const headerHeight = useSharedValue(
    mode === "host" ? height * 0.23 : height * 0.17
  );

  const configFlip = {
    duration: 1000,
    easing: Easing.linear,
    reduceMotion: ReduceMotion.Never,
  };
  const configPadding = {
    duration: 1000,
    easing: Easing.linear,
    reduceMotion: ReduceMotion.Never,
  };

  useEffect(() => {
    let calculatedHeight: number;

    if (gameStage === "result") {
      calculatedHeight = height * 0.11;
    } else if (gameStage === "game") {
      calculatedHeight = height * 0.07;
    } else {
      if (mode === "host") {
        calculatedHeight = height * 0.23;
      } else {
        calculatedHeight = height * 0.17;
      }
    }

    paddingTop.value = withTiming(calculatedHeight, configPadding);
    headerHeight.value = withTiming(calculatedHeight, configPadding);
  }, [gameStage, mode]);

  const animatedContentContainerStyle = useAnimatedStyle(() => {
    return {
      paddingTop: paddingTop.value,
    };
  });

  const animatedHeaderStyle = useAnimatedStyle(() => {
    return {
      height: headerHeight.value,
    };
  });

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
        showRolesAfterDeath={showRolesAfterDeath}
        gameStage={gameStage}
      />
    </View>
  );

  return (
    <Animated.FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={styles.column}
      style={animatedContentContainerStyle}
      contentContainerStyle={styles.contentContainer}
      ListHeaderComponent={<Animated.View style={animatedHeaderStyle} />}
      ListFooterComponent={<View style={styles.footer} />}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: height * 0.12,
    paddingHorizontal: 20,
  },
  avatarContainer: {
    marginVertical: 10,
  },
  column: {
    width: "100%",
    justifyContent: "space-between",
  },
  footer: {
    height: height * 0.12,
  },
});

export default AvatarGrid;
