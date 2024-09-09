import React from "react";
import { View, StyleSheet } from "react-native";
import { Role } from "@/components/types/Role";
import { colors } from "@/theme/colors";
import Text from "../Text/Text";

const roleStyles = {
  police: {
    roleName: "Police",
    borderColor: colors.police,
    roleDescription: "Police is tasked with identifying and eliminating mafia.",
  },
  mafia: {
    roleName: "Mafia",
    borderColor: colors.mafia,
    roleDescription: "Mafia's goal is to eliminate all non-mafia members.",
  },
  detective: {
    roleName: "Detactive",
    borderColor: colors.detective,
    roleDescription:
      "Detective investigates players each night to find Mafia members.",
  },
  medic: {
    roleName: "Medic",
    borderColor: colors.medic,
    roleDescription:
      "Medic can protect Player from being killed by Mafia members.",
  },
};

type RoleCardProps = {
  role: Role;
};

const RoleCard: React.FC<RoleCardProps> = ({ role }) => {
  const currentRoleStyles = roleStyles[role];

  return (
    <View
      style={[
        styles.card,
        {
          borderColor: currentRoleStyles?.borderColor,
          //   backgroundColor: currentRoleStyles.borderColor,
        },
      ]}
    >
      <Text size="headline" isBold={true} isTextAlignCenter={true}>
        {currentRoleStyles?.roleName}
      </Text>
      <Text size="subtitle" isTextAlignCenter={true}>
        {currentRoleStyles?.roleDescription}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 10,
    borderRadius: 40,
    padding: 15,
    marginBottom: 20,
    gap: 15,
    height: 120,
    width: "95%",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: colors.primary,
  },
});

export default RoleCard;
