import { type ReactElement } from "react";
import { View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import Button from "@/components/base/Button/Button";
import Text from "@/components/base/Text/Text";

export default (): ReactElement => {
  const router = useRouter();
  const { errorMessage } = useLocalSearchParams<{ errorMessage: string }>();

  return (
    <View>
      <Text size="headline">{`The error occurred with this message: ${errorMessage}`}</Text>

      <Button
        onPress={() => {
          router.replace("/joinOrHost");
        }}
        color="primary"
      >
        Back
      </Button>
    </View>
  );
};
