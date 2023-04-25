import KoaRouter from "@koa/router";
import { login } from "../controller/userController";
import { userLoginParams } from "../controller/userController/types";
const userRouter = new KoaRouter();

userRouter.post("/login", async (ctx) => {
  console.log(ctx.request.body);
  const result = await login(ctx.request.body as userLoginParams);
  if (result) {
    ctx.body = {
      status: 200,
      message: "ok",
      data: result
    }
  } else {
    ctx.body = {
      status: 4009,
      message: "error",
      data: null
    }
  }
})

export default userRouter.routes();