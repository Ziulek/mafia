import SelectListItem from "@/components/Test/Test";
import Header from "@/components/base/Header/Header";
import { SwitchListItem } from "@/components/base/SwitchListItem/SwitchListItem";
import { useState } from "react";
// import { View } from "react-native";
import { Text, View } from "react-native";
// import Text from "../../base/Text/Text";

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
  return (
    <Header isVisible={isVisible}>
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
    // <Header isVisible={isVisible}>
    //   <View style={styles.container}>
    //     <View style={styles.inlineText}>
    //       <Text size="headline">Game Code: </Text>
    //       <Text size="headline" isBold={true}>
    //         {gameCode}
    //       </Text>
    //     </View>
    //     <View style={styles.inlineText}>
    //       <Text size="headline">Players: </Text>
    //       <Text size="headline" isBold={true}>
    //         {players.toString()}
    //       </Text>
    //     </View>
    //     <View style={{ marginTop: 15 }}>
    //       <Text size="headline" isBold={true}>
    //         Waiting for players...
    //       </Text>
    //     </View>
    //   </View>
    // </Header>
  );
};

{
  /* <Header isVisible={isVisible}>
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
</Header> */
}
