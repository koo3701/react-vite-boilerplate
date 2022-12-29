import { superoak } from "superoak";
import { app } from "../src/mod.ts";

/* ルート(/)へのリクエストのテスト */
Deno.test('it should return "Hello World!" with status code 200', async () => {
  const correct = { message: "Hello World!" };

  const request = await superoak(app);
  await request.get("/").expect(200).expect(correct);
});
