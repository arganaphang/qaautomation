import { Elysia } from "elysia";

// http://localhost:8000/health
const app = new Elysia()
  .get("/health", () => {
    return { success: true, message: "OK" };
  })
  .listen(8000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
