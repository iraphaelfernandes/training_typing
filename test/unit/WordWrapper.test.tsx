import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import WordWrapper from "../../src/components/WordWrapper";

describe("WordWrapper", () => {
  it("should render focus instruction when not focused", () => {
    const setFocused = () => {
      return false;
    };

    render(
      <WordWrapper focused={false} setFocused={setFocused}>
        Test Content
      </WordWrapper>
    );

    const element = screen.getByText("Focus to start typing");
    expect(element).toBeDefined();
    // Check the class using className property
    expect(element.parentElement?.className).toContain("opacity-100");
  });
});
