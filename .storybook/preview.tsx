import type { Preview } from "@storybook/react";
import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";

const preview: Preview = {
  decorators: [withBackgrounds],
  parameters: {
    noSafeArea: true,
    backgrounds: {
      default: "white",
      values: [
        {
          name: "default",
          value: "#16171A",
        },
        {
          name: "white",
          value: "#fff",
        },
      ],
    },
  },
};

export default preview;
