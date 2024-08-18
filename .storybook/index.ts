import AsyncStorage from "@react-native-async-storage/async-storage";
import { view } from "./storybook.requires";
import { getStorybook } from "@sherlo/react-native-storybook";

const StorybookUIRoot = getStorybook(view, {
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },
});

export default StorybookUIRoot;
