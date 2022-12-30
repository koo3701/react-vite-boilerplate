import { Application, Router } from "oak";

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = { message: "Hello World!" };
  ctx.response.status = 200;
});

export const app = new Application();
app.use(router.routes());
app.listen({ port: 3000 });
