import "@axa-fr/design-system-slash-css/dist/common/icons.scss";
import "@axa-fr/design-system-slash-css/dist/common/tokens.css";
import type { Preview } from "@storybook/html";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ["autodocs"],
};

export default preview;
