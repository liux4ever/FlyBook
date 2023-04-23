import Koa from "koa";

const app = new Koa();

const port: number = 8089
app.listen(port, () => {
  console.log("success")
});