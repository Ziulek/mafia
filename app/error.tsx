import { type ReactElement } from "react";

import { useLocalSearchParams, useRouter } from "expo-router";

import ErrorScreen from "@/components/screens/ErrorScreen/ErrorScreen";

export default (): ReactElement => {
  const router = useRouter();
  const { errorMessage } = useLocalSearchParams<{ errorMessage: string }>();

  return (
    <ErrorScreen
      onPress={() => {
        router.replace("/joinOrHost");
      }}
      errorMessage={errorMessage}
    />
  );
};
