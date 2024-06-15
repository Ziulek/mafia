import type { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";
import { Text } from "react-native";
import OpenController from "@/decorators/OpenController";

const meta: Meta<typeof Header> = {
  component: Header,
  render: (args) => {
    return (
      <OpenController
        renderContent={(isVisible) => (
          <Header {...args} isVisible={isVisible}>
            <Text style={{ fontSize: 30, marginVertical: 50 }}>
              Mafia wins!
            </Text>
          </Header>
        )}
      />
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// export const LongText: Story = {
//   render: () => (
//     <Header>
//       <View style={{ marginVertical: 50, alignItems: "center" }}>
//         <Text style={{ fontSize: 30 }}>Game Code: 420xdlol</Text>
//         <Text style={{ fontSize: 30 }}>Players:7</Text>
//         <Text style={{ fontSize: 30, fontWeight: "bold" }}>
//           Waiting for players
//         </Text>
//       </View>
//     </Header>
//   ),
// };

// export const BigComponent: Story = {
//   render: () => (
//     <Header>
//       <ButtonGroup>
//         <Button color="kill" onPress={() => {}}>
//           {"Kill Player"}
//         </Button>
//         <Button color="secondary" onPress={() => {}}>
//           {"Kick Player"}
//         </Button>
//         <Button color="back" onPress={() => {}}>
//           {"Cancel"}
//         </Button>
//       </ButtonGroup>
//     </Header>
//   ),
// };
