import { expect, test, describe, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import SignInPage from "../signin/page";

describe("Sign in page", () => {
  beforeEach(() => {
    render(<SignInPage />);
  });

  test("Should show login buttons", () => {
    expect(screen.getByText("Login with GitHub")).toBeDefined();
    expect(screen.getByText("Login with Google")).toBeDefined();
  });

  test("Should show login form", () => {
    expect(screen.getAllByPlaceholderText(/email/i)).toBeDefined();
  });
});
