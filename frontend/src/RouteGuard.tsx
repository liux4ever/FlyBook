import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom";

export default function RouteGuard() {
  // 根路由
  const navigate = useNavigate();
  useEffect(() => {
    // 判断当前用户登录
    // const isLogin = false;
    // if(!isLogin) {
    //   navigate("/login");
    // }
  },[]);

  return (
    <Outlet />
  )
}