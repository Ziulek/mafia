import RoleCard from "@/components/base/RoleCard/RoleCard";
import { Mode } from "@/components/types/Mode";
import { Role } from "@/components/types/Role";
import React from "react";
import { View, StyleSheet } from "react-native";

type InfoTabProps = {
  mode: Mode;
  playerRole?: Role;
  selectedRoles?: Role[];
};

const InfoTab: React.FC<InfoTabProps> = ({
  mode = "player",
  playerRole = "police",
  selectedRoles = ["police", "mafia"],
}) => {
  return (
    <View style={styles.container}>
      {mode === "host" && selectedRoles ? (
        selectedRoles.map((role, index) => <RoleCard key={index} role={role} />)
      ) : (
        <RoleCard role={playerRole} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});

export default InfoTab;
