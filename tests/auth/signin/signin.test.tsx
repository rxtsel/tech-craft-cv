import { expect, it, describe, beforeEach, afterEach } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import SignInPage from "@/app/(views)/auth/signin/page";

describe("Sign in page", () => {
  beforeEach(() => {
    render(<SignInPage />);
  });

  afterEach(cleanup);

  it("Should show login buttons", () => {
    expect(screen.getByText(/continue with github/i)).toBeDefined();
    expect(screen.getByText(/continue with google/i)).toBeDefined();
  });

  it("Should show login form", () => {
    expect(screen.getByPlaceholderText(/email/i)).toBeDefined();
  });

  it("Should show validate message error when email is empty and form is submit", async () => {
    const btnSubmit = screen.getByRole("button", { name: /sign in/i });

    // Submit form
    fireEvent.click(btnSubmit);

    await new Promise(r => setTimeout(r, 100));

    // Validate message error
    expect(screen.getByText(/invalid email/i)).toBeDefined();
  });
});
