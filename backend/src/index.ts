import Koa from "koa";
import routesInstaller from "./routes";
import bodyParser from "koa-bodyparser";
import KoaCORS from "@koa/cors";
const app = new Koa();
// 处理跨域
app.use(KoaCORS());
// 处理请求体
app.use(bodyParser());
routesInstaller(app);
const port: number = 8089
app.listen(port, () => {
  console.log("success")
});