import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { MockedProvider } from "@apollo/client/testing";
import JoinScreen from "@/components/screens/JoinScreen/JoinScreen";
import { JOIN_GAME } from "@/GraphQL/Mutations/JoinGame";

// Mock data for the JOIN_GAME mutation
const mocks = [
  {
    request: {
      query: JOIN_GAME,
      variables: {
        gameCode: "Q6X2VCVD",
        playerId: "1234",
        nickname: "TestNickname",
      },
    },
    result: {
      data: {
        joinGame: {
          gameCode: "Q6X2VCVD",
          playerId: "2222",
          nickname: "TestNickname",
        },
      },
    },
  },
];

const meta: Meta<typeof JoinScreen> = {
  component: JoinScreen,
  title: "JoinScreen",
  decorators: [
    (Story) => (
      <MockedProvider mocks={mocks} addTypename={false}>
        <Story />
      </MockedProvider>
    ),
  ],
  argTypes: {
    gameCode: {
      control: "text",
      description: "The game code entered by the user",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Default story demonstrating JoinScreen with a default game code
export const Default: Story = {
  args: {
    gameCode: "1234",
    onPress: () => console.log("Join game pressed"),
    setGameCode: (code: string) => console.log(`Game code set to: ${code}`),
  },
};

// Story demonstrating JoinScreen with an empty game code
export const EmptyGameCode: Story = {
  args: {
    gameCode: "",
    onPress: () => console.log("Attempted to join with empty game code"),
    setGameCode: (code: string) => console.log(`Game code set to: ${code}`),
  },
};

// Story demonstrating JoinScreen with an error scenario (mocked error)
export const ErrorState: Story = {
  args: {
    gameCode: "wrong-code",
    onPress: () => console.log("Join game pressed with wrong code"),
    setGameCode: (code: string) => console.log(`Game code set to: ${code}`),
  },
};
