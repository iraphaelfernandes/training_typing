import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import TimeCategory from "../../src/components/TimeCategory";
import { ThemeContext } from "../../src/context/ThemeContext";
import { Theme } from "../../src/types";

const mockThemeContext = {
  systemTheme: {
    name: "light", // Add the missing name property
    background: {
      secondary: "#f0f0f0",
    },
    text: {
      secondary: "#333333",
    },
  } as Theme, // Type assertion to Theme
  setTheme: vi.fn() as (value: Theme) => void,
};

describe("TimeCategory", () => {
  // Mock functions
  const setTime = vi.fn();
  const setLocalStorage = vi.fn();
  const restart = vi.fn();

  // Base props
  const defaultProps = {
    time: 15000,
    setTime,
    setLocalStorage,
    restart,
  };

  const renderWithTheme = (props = defaultProps) => {
    return render(
      <ThemeContext.Provider value={mockThemeContext}>
        <TimeCategory {...props} />
      </ThemeContext.Provider>
    );
  };
  it("should render all time options", () => {
    renderWithTheme();

    expect(screen.getByText("15s")).toBeDefined();
    expect(screen.getByText("30s")).toBeDefined();
    expect(screen.getByText("60s")).toBeDefined();
  });

  it("should apply correct styles to selected time", () => {
    renderWithTheme();

    const selectedTime = screen.getByText("15s");
    expect(selectedTime.className).toContain("font-bold underline");
  });

  it("should handle 30s time selection", () => {
    renderWithTheme();

    const thirtySecOption = screen.getByText("30s");
    fireEvent.click(thirtySecOption);

    expect(setTime).toHaveBeenCalledWith(30000);
    expect(setLocalStorage).toHaveBeenCalledWith("time", 30000);
    expect(restart).toHaveBeenCalled();
  });

  it("should handle 60s time selection", () => {
    renderWithTheme();

    const sixtySecOption = screen.getByText("60s");
    fireEvent.click(sixtySecOption);

    expect(setTime).toHaveBeenCalledWith(60000);
    expect(setLocalStorage).toHaveBeenCalledWith("time", 60000);
    expect(restart).toHaveBeenCalled();
  });

  it("should display timer icon", () => {
    const { container } = renderWithTheme();

    // Check if BiTimer icon is rendered
    expect(container.querySelector("svg")).toBeDefined();
  });

  it("should update styles when different time is selected", () => {
    renderWithTheme({
      ...defaultProps,
      time: 30000,
    });

    const thirtySecOption = screen.getByText("30s");
    expect(thirtySecOption.className).toContain("font-bold underline");

    const fifteenSecOption = screen.getByText("15s");
    expect(fifteenSecOption.className).not.toContain("font-bold underline");
  });
});
