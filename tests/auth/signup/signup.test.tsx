import { expect, it, describe, beforeEach, afterEach } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import SignUpPage from "@/app/(views)/auth/signup/page";

describe("Sign up page", () => {
  beforeEach(() => {
    render(<SignUpPage />);
  });

  afterEach(cleanup);

  it("Should show register buttons", () => {
    expect(screen.getByText(/register with github/i)).toBeDefined();
    expect(screen.getByText(/register with google/i)).toBeDefined();
  });

  it("Should show register form", () => {
    expect(screen.getByPlaceholderText(/email/i)).toBeDefined();
  });

  it("Should show validate message error when email is empty and form is submit", async () => {
    const btnSubmit = screen.getByRole("button", { name: /get started/i });

    // Submit form
    fireEvent.click(btnSubmit);

    await new Promise(r => setTimeout(r, 100));

    // Validate message error
    expect(screen.getByText(/invalid email/i)).toBeDefined();
  });
});
