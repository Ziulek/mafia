import Header from "@/components/base/Header/Header";
import { StyleSheet, View } from "react-native";
import Text from "../../base/Text/Text";

type HeaderResultProps = {
  winner: "mafia" | "police" | "Error";
  isVisible: boolean;
  onHeaderHeightChange: (height: number) => void;
};

export const HeaderResult = ({
  winner = "Error",
  isVisible,
  onHeaderHeightChange,
}: HeaderResultProps) => {
  return (
    <Header isVisible={isVisible} onHeaderHeightChange={onHeaderHeightChange}>
      <View style={styles.container}>
        <View style={styles.inlineText}>
          <Text size="headline" isBold={true}>{`${winner
            .charAt(0)
            .toUpperCase()}${winner.slice(1)}`}</Text>
          <Text size="headline"> wins!</Text>
        </View>
      </View>
    </Header>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 30,
  },
  inlineText: {
    flexDirection: "row",
    alignItems: "center",
  },
});
