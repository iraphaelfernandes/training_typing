// src/components/ThemeDropdown.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import ThemeDropdown from "./ThemeDropdown";
import ThemeProvider from "../context/ThemeContext";

const meta: Meta<typeof ThemeDropdown> = {
  title: "Components/ThemeDropdown",
  component: ThemeDropdown,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          "A dropdown component that allows users to select and preview different theme options. Each theme option displays color indicators for background, primary text, and secondary text colors.",
      },
    },
    // This helps to show the dropdown state in Storybook
    actions: {
      handles: ["click button", "click li"],
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ThemeDropdown>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Default state of the theme dropdown component.",
      },
    },
  },
};

export const OpenState: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Theme dropdown in its open state, showing all available theme options.",
      },
    },
    pseudo: { hover: true, focus: true, active: true },
  },
  play: async ({ canvasElement }) => {
    // Find and click the dropdown button to open it
    const button = canvasElement.querySelector("button");
    if (button) {
      button.click();
    }
  },
};
