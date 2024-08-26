import Header from "@/components/base/Header/Header";
import { SwitchListItem } from "@/components/base/SwitchListItem/SwitchListItem";
import { StyleSheet, View } from "react-native";
import Text from "../../base/Text/Text";
import SelectListItem from "@/components/base/SelectListItem/SelectListItem";
import { NumberListItem } from "@/components/base/NumberListItem/NumberListItem";
import NumberOfMafiaConfig from "@/gameConfig/NumberOfMafiaConfig";
import AvailableRolesConfig from "@/gameConfig/AvailableRolesConfig";

import { Dispatch, SetStateAction } from "react";
import { AdditionalRole } from "@/components/types/AdditionalRole";

type HeaderLobbyHostProps = {
  players: number;
  gameCode: string;
  isVisible: boolean;
  isSwitchOn: boolean;
  setIsSwitchOn: (isOn: boolean) => void;
  numberOfMafia: number;
  setNumberOfMafia: (value: number) => void;
  selectedRoles: AdditionalRole[];
  setSelectedRoles: Dispatch<SetStateAction<AdditionalRole[]>>;
};

export const HeaderLobbyHost = ({
  players,
  gameCode,
  isVisible,
  isSwitchOn,
  setIsSwitchOn,
  numberOfMafia,
  setNumberOfMafia,
  selectedRoles,
  setSelectedRoles,
}: HeaderLobbyHostProps) => {
  return (
    <Header isVisible={isVisible}>
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
        <SelectListItem
          items={AvailableRolesConfig}
          isMultiSelected={true}
          value={selectedRoles}
          setValue={setSelectedRoles}
        />

        <NumberListItem
          title="Number of Mafia"
          value={numberOfMafia}
          setValue={setNumberOfMafia}
          min={NumberOfMafiaConfig.min}
          max={NumberOfMafiaConfig.max}
        />

        <SwitchListItem
          title="Reveal roles after death"
          isOn={isSwitchOn}
          setIsOn={setIsSwitchOn}
        />
      </View>
    </Header>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    alignItems: "center",
  },
  inlineText: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemsStyle: { alignItems: "center", gap: 15, maxWidth: "85%" },
});
