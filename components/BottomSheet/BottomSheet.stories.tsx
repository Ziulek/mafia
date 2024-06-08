import type { Meta, StoryObj } from "@storybook/react";
import { BottomSheet } from "./BottomSheet";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";
import { TouchableOpacity, View } from "react-native";
import { Button } from "../Button/Button";
import StoryDecorator from "@/decorators/StoryDecorator";
import { useState } from "react";

const meta: Meta<typeof BottomSheet> = {
  component: BottomSheet,
  // decorators: [StoryDecorator],
};

export default meta;

type Story = StoryObj<typeof meta>;

// Functional component to encapsulate the content
const Content = () => {
  <ButtonGroup>
    <View style={{ gap: 20, width: "100%" }}>
      <Button key="1" color="kill" onPress={() => {}}>
        {"Kill Player"}
      </Button>
      <Button key="2" color="secondary" onPress={() => {}}>
        {"Kick Player"}
      </Button>
      <Button key="3" color="back" onPress={() => {}}>
        {"Cancel"}
      </Button>
    </View>
  </ButtonGroup>;
};

// Use functional component in the story args
export const Test: Story = {
  args: {
    title: "Lorem Ipsum Dupol",
    // content: <Content />,
  },
};

export const Default: Story = {
  render: () => {
    const [showBottomSheet, setShowBottomSheet] = useState(false);
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          style={{ width: 200, height: 50, backgroundColor: "red" }}
          onPress={() => setShowBottomSheet(true)}
        />
        {showBottomSheet && (
          <BottomSheet
            title="Lorem Ipsum Dupol"
            handleClose={() => setShowBottomSheet(false)}
          >
            <ButtonGroup>
              <Button color="kill" onPress={() => {}}>
                {"Kill Player"}
              </Button>
              <Button color="secondary" onPress={() => {}}>
                {"Kick Player"}
              </Button>
              <Button color="back" onPress={() => setShowBottomSheet(false)}>
                {"Cancel"}
              </Button>
            </ButtonGroup>
          </BottomSheet>
        )}
      </View>
    );
  },
};

// import type { Meta, StoryObj } from "@storybook/react";
// import { useEffect, useState } from "react";
// import { BottomSheetComponent } from "./BottomSheet";
// import { ButtonGroup } from "../ButtonGroup/ButtonGroup";
// import { View } from "react-native";
// import { Button } from "../Button/Button";

// const meta: Meta<typeof BottomSheetComponent> = {
//   component: BottomSheetComponent,
//   title: "Components/BottomSheet",
// };

// export default meta;

// type Story = StoryObj<typeof meta>;

// const Content = () => (
//   <ButtonGroup>
//     <View style={{ gap: 20, width: "100%" }}>
//       <Button key="1" color="kill" onPress={() => {}}>
//         {"Kill Player"}
//       </Button>
//       <Button key="2" color="secondary" onPress={() => {}}>
//         {"Kick Player"}
//       </Button>
//       <Button key="3" color="back" onPress={() => {}}>
//         {"Cancel"}
//       </Button>
//     </View>
//   </ButtonGroup>
// );

// // Story component that manages initial render
// const BottomSheetStory = () => {
//   const [isReady, setIsReady] = useState(false);

//   useEffect(() => {
//     // Simulate environment readiness, you can replace this with real checks
//     setTimeout(() => {
//       setIsReady(true);
//     }, 1000); // Adjust delay as needed
//   }, []);

//   return (
//     <BottomSheetComponent
//       title="Lorem Ipsum Dupol"
//       content={isReady ? <Content /> : null} // Conditionally render content
//     />
//   );
// };

// export const Default: Story = {
//   render: () => <BottomSheetStory />,
// };
