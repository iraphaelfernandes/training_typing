// src/components/Countdown.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import Countdown from "./Countdown";
import ThemeProvider from "../context/ThemeContext";

const meta: Meta<typeof Countdown> = {
  title: "Components/Countdown",
  component: Countdown,
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
          "A countdown timer component that displays minutes and seconds in a formatted way. The component automatically resets when mounted and adapts its styling based on the current theme.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    countdown: {
      control: { type: "number" },
      description: "Time in milliseconds for the countdown",
    },
    reset: {
      description: "Function to reset the countdown timer",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Countdown>;

// Mock reset function
const mockReset = () => console.log("Reset called");

export const Default: Story = {
  args: {
    countdown: 125000, // 2 minutes and 5 seconds
    reset: mockReset,
  },
};

export const LessThanOneMinute: Story = {
  args: {
    countdown: 45000, // 45 seconds
    reset: mockReset,
  },
};

export const AlmostZero: Story = {
  args: {
    countdown: 5000, // 5 seconds
    reset: mockReset,
  },
};

export const ZeroState: Story = {
  args: {
    countdown: 0,
    reset: mockReset,
  },
};
