import Header from "@/components/base/Header/Header";
import { SwitchListItem } from "@/components/base/SwitchListItem/SwitchListItem";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

import Text from "../../base/Text/Text";
import SelectListItem from "@/components/base/SelectListItem/SelectListItem";

type HeaderLobbyHostProps = {
  players: number;
  gameCode: string;
  isVisible: boolean;
};

export const HeaderLobbyHost = ({
  players,
  gameCode,
  isVisible,
}: HeaderLobbyHostProps) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const items = [
    { label: "Detective", value: "detective" },
    { label: "Medic", value: "medic" },
    { label: "Serial Killer", value: "serial killer" },
    { label: "Medium", value: "medium" },
  ];

  return (
    <Header isVisible={isVisible}>
      <View style={styles.box}>
        <View style={styles.container}>
          <View style={styles.inlineText}>
            <Text size="headline">Game Code: </Text>
            <Text size="headline" isBold={true}>
              {gameCode}
            </Text>
          </View>
          <View style={styles.inlineText}>
            <Text size="headline">Players: </Text>
            <Text size="headline" isBold={true}>
              {players.toString()}
            </Text>
          </View>
        </View>

        <View style={styles.itemsStyle}>
          <SelectListItem items={items} isMultiSelected={true} />
          <SwitchListItem
            title="Reveal roles after death "
            isOn={isSwitchOn}
            setIsOn={setIsSwitchOn}
          />
        </View>
      </View>
    </Header>
  );
};

const styles = StyleSheet.create({
  box: {
    paddingHorizontal: 30,
  },
  container: {
    marginVertical: 30,
    alignItems: "center",
  },
  inlineText: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemsStyle: { alignItems: "center", gap: 15 },
});
