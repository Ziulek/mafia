import "react-native-get-random-values";
import { Stack } from "expo-router";
import * as Sentry from "@sentry/react-native";
import i18n from "../lang/i18n";

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

import { registerStorybook } from "@sherlo/react-native-storybook";
import Storybook from "../.storybook";
import { ReactNode } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import Toast from "react-native-toast-message";
import toastConfig from "@/gameConfig/Toast.config";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { I18nextProvider } from "react-i18next";

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

Sentry.init({
  dsn: "https://9e3b32c19bc48dfbe851eb294d150966@o4507945824813061.ingest.de.sentry.io/4507945836806224",
  debug: false, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});

function CommonProviders({ children }: { children: ReactNode }) {
  return (
    <ApolloProvider client={client}>
      <TamaguiProvider config={tamaguiConfig}>
        <I18nextProvider i18n={i18n}>
          <SafeAreaProvider>
            <KeyboardProvider>
              <GestureHandlerRootView>
                <StatusBar translucent={true} />
                {children}
                <Toast config={toastConfig} />
              </GestureHandlerRootView>
            </KeyboardProvider>
          </SafeAreaProvider>
        </I18nextProvider>
      </TamaguiProvider>
    </ApolloProvider>
  );
}

function RootLayout() {
  return (
    <CommonProviders>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="index"
          options={{
            animation: "none",
          }}
        />
      </Stack>
    </CommonProviders>
  );
}

export default Sentry.wrap(RootLayout);

registerStorybook(() => (
  <CommonProviders>
    <Storybook />
  </CommonProviders>
));
