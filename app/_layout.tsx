import "react-native-get-random-values";
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
import { AUTH_TYPE, AuthOptions, createAuthLink } from "aws-appsync-auth-link";
import { createSubscriptionHandshakeLink } from "aws-appsync-subscription-link";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("es6-promise").polyfill();
require("isomorphic-fetch");

// you usually export this from a tamagui.config.ts file
const tamaguiConfig = createTamagui(config);

const url =
  "https://2m3u7nxlhzbmvk4gzkve6cuxd4.appsync-api.eu-central-1.amazonaws.com/graphql";

const API_KEY = "da2-bsiqyvwd5bgmppv632neuwch2a";

const httpLink = new HttpLink({
  uri: url,
});

// Error handling (optional)
const errorLink = onError(({ graphqlErrors, networkError }: any) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }: any) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const auth: AuthOptions = {
  type: AUTH_TYPE.API_KEY,
  apiKey: API_KEY,
};

const linkParams = {
  url,
  region: "eu-central-1",
  auth,
};

const link = from([
  errorLink,
  createAuthLink(linkParams),
  createSubscriptionHandshakeLink(linkParams, httpLink),
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache({
    typePolicies: {
      GameState: {
        keyFields: ["gameCode"],
      },
    },
  }),
  headers: {
    "x-api-key": API_KEY,
  },
});

// make TypeScript type everything based on your config
type Conf = typeof tamaguiConfig;
declare module "@tamagui/core" {
  // or 'tamagui'
  interface TamaguiCustomConfig extends Conf {}
}

export default function RootLayout() {
  return (
    <ApolloProvider client={client}>
      <TamaguiProvider config={tamaguiConfig}>
        <GestureHandlerRootView>
          <Stack screenOptions={{ headerShown: true }}>
            <Stack.Screen
              name="game"
              options={{
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="index"
              options={{
                animation: "none",
              }}
            />
          </Stack>
        </GestureHandlerRootView>
      </TamaguiProvider>
    </ApolloProvider>
  );
}
