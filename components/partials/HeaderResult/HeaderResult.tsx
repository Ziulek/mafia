import Header from "@/components/base/Header/Header";
import { StyleSheet, View } from "react-native";
import Text from "../../base/Text/Text";

type HeaderResultProps = {
  winner: "mafia" | "police";
  isVisible: boolean;
};

export const HeaderResult = ({ winner, isVisible }: HeaderResultProps) => {
  return (
    <Header isVisible={isVisible}>
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
