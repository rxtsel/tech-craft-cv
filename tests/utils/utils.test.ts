import { generateInitials } from "@/lib/utils";
import { describe, it, expect } from "vitest";

describe("User generate initials name", () => {
  it("should return an array with 2 uppercase letters", () => {
    expect(generateInitials("John Doe")).toEqual("JD");
  });

  it("should return 2 letters if don't have other words", () => {
    expect(generateInitials("John")).toEqual("JO");
  });

  it("should return 2 letters for default if name is empty", () => {
    expect(generateInitials("")).toEqual("AN");
  });
});
