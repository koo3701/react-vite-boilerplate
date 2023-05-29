import { Application, Router } from "oak";
import { sleep } from "https://deno.land/x/sleep@v1.2.1/mod.ts";

const router = new Router();

router.get("/", async (ctx) => {
  await sleep(2);
  ctx.response.body = { message: "Hello World!" };
  ctx.response.status = 200;
});

export const app = new Application();
app.use(router.routes());
app.listen({ port: 3000 });
