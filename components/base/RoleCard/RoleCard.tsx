import React from "react";
import { View, StyleSheet } from "react-native";
import { Role } from "@/components/types/Role";
import { colors } from "@/theme/colors";
import Text from "../Text/Text";
import { useTranslation } from "react-i18next";

type RoleCardProps = {
  role: Role;
};

const RoleCard: React.FC<RoleCardProps> = ({ role }) => {
  const { t } = useTranslation();

  return (
    <View
      style={[
        styles.card,
        {
          borderColor: colors[role],
        },
      ]}
    >
      <Text size="headline" isBold={true} isTextAlignCenter={true}>
        {t(`roleCard/${role}Name`)}
      </Text>
      <Text size="subtitle" isTextAlignCenter={true}>
        {t(`roleCard/${role}Description`)}
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
