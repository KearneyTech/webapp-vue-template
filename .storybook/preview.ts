import { type Preview, setup } from "@storybook/vue3";
import type { App } from 'vue';
import { createPinia } from 'pinia';

import '../src/assets/style.css';

const pinia = createPinia();

setup((app: App) => {
  app.use(pinia);
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
