import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { TamaguiProvider, createTamagui } from "@tamagui/core"; // or 'tamagui'
import { config } from "@tamagui/config/v3";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

// you usually export this from a tamagui.config.ts file
const tamaguiConfig = createTamagui(config);

// make TypeScript type everything based on your config
type Conf = typeof tamaguiConfig;
declare module "@tamagui/core" {
  // or 'tamagui'
  interface TamaguiCustomConfig extends Conf {}
}

// Error handling (optional)
// const errorLink = onError(({ graphqlErrors, networkError }: any) => {
//   if (graphqlErrors) {
//     graphqlErrors.map(({ message, location, path }: any) => {
//       alert(`Graphql error ${message}`);
//     });
//   }
// });

// const link = from([
//   errorLink,
//   new HttpLink({ uri: "https://2m3u7nxlhzbmvk4gzkve6cuxd4.appsync-api.eu-central-1.amazonaws.com/graphql", headers: { 'x-api-key': 'your-appsync-api-key' } }),
// ]);

const client = new ApolloClient({
  uri: "https://2m3u7nxlhzbmvk4gzkve6cuxd4.appsync-api.eu-central-1.amazonaws.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-api-key": "#########################", // klucz jest na slaku nie chemy wrzucać go na commita
  },
  // link: link,
});

export default function RootLayout() {
  return (
    <ApolloProvider client={client}>
      <TamaguiProvider config={tamaguiConfig}>
        <GestureHandlerRootView>
          <Stack screenOptions={{ headerShown: false }} />
        </GestureHandlerRootView>
      </TamaguiProvider>
    </ApolloProvider>
  );
}
