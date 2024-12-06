/**
 * A modal component that displays typing test results and metrics.
 * Includes features for copying results and taking screenshots.
 *
 * @component
 * @param {Object} props
 * @param {number} props.totalTime - Total time taken for the typing test in milliseconds
 * @param {Object} props.history - Object containing typing history data
 * @param {string} props.history.typedHistory - The actual text typed by the user
 * @param {string} props.history.wordHistory - The target text that should have been typed
 * @param {Object} props.results - Object containing test results
 * @param {number} props.results.wpm - Words per minute
 * @param {number} props.results.cpm - Characters per minute
 * @param {number} props.results.accuracy - Accuracy percentage
 * @param {number} props.results.error - Error percentage
 *
 * @example
 * ```tsx
 * <ModalContent
 *   totalTime={10000}
 *   history={{
 *     typedHistory: "Hello world",
 *     wordHistory: "Hello world"
 *   }}
 *   results={{
 *     wpm: 60,
 *     cpm: 300,
 *     accuracy: 98.5,
 *     error: 1.5
 *   }}
 * />
 * ```
 */

import type { Meta, StoryObj } from "@storybook/react";
import ModalContent from "./ModalContent";
import ThemeProvider from "../context/ThemeContext";

const meta: Meta<typeof ModalContent> = {
  title: "Components/ModalContent",
  component: ModalContent,
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
          "A modal component that displays typing test results, including metrics like WPM, accuracy, and character counts. Includes features for copying results and taking screenshots.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ModalContent>;

// Mock data for stories
const mockHistory = {
  typedHistory: "Hello world",
  wordHistory: "Hello world",
};

const mockResults = {
  wpm: 60,
  cpm: 300,
  accuracy: 98.5,
  error: 1.5,
};

export const Default: Story = {
  args: {
    totalTime: 10000, // 10 seconds
    history: mockHistory,
    results: mockResults,
  },
};

export const LowAccuracy: Story = {
  args: {
    totalTime: 15000, // 15 seconds
    history: {
      typedHistory: "Helo wrld",
      wordHistory: "Hello world",
    },
    results: {
      wpm: 45,
      cpm: 225,
      accuracy: 70,
      error: 30,
    },
  },
};

export const HighSpeed: Story = {
  args: {
    totalTime: 5000, // 5 seconds
    history: mockHistory,
    results: {
      wpm: 120,
      cpm: 600,
      accuracy: 95,
      error: 5,
    },
  },
};

export const LongText: Story = {
  args: {
    totalTime: 30000,
    history: {
      typedHistory: "The quick brown fox jumps over the lazy dog",
      wordHistory: "The quick brown fox jumps over the lazy dog",
    },
    results: {
      wpm: 80,
      cpm: 400,
      accuracy: 92,
      error: 8,
    },
  },
};
