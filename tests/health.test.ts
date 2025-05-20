import { describe, test, expect } from "bun:test";
import supertest from "supertest";

const app = supertest("http://localhost:8000");

describe("Health Endpoint", () => {
  test("GET /health", async () => {
    // 1. Hit Endpoint and store the Response into variable `response`
    const response = await app.get("/health");
    // 2. Assertion
    expect(response.statusCode).toBe(200);
    expect(response.body["success"]).toBe(true);
    expect(response.body["message"]).toBe("OK");
  });
});
