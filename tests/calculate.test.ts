import { describe, test, expect } from "bun:test";
import { add } from "../src/calculate";

describe("Calculate", () => {
  test("Test Add", () => {
    expect(add(2, 3)).toBe(5);
  });
});
