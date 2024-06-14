import SelectListItem from "@/components/Test/Test";
import Header from "@/components/base/Header/Header";
import { SwitchListItem } from "@/components/base/SwitchListItem/SwitchListItem";
import { useState } from "react";
import { Text, View } from "react-native";

type HeaderLobbyHostProps = {
  players: number;
  gameCode: string;
};

export const HeaderLobbyHost = ({
  players,
  gameCode,
}: HeaderLobbyHostProps) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  return (
    <Header>
      <View
        style={{
          marginVertical: 50,
          alignItems: "center",
          paddingHorizontal: 25,
          gap: 20,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 30 }}>
            Game Code:
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              {" "}
              {gameCode}
            </Text>
          </Text>
          <Text style={{ fontSize: 30 }}>
            Players:
            <Text style={{ fontSize: 30, fontWeight: "bold" }}> {players}</Text>
          </Text>
        </View>
        <View style={{ gap: 20 }}>
          <SelectListItem />
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
