import { userLoginParams } from "./types";

export const login = async function (userLoginInfo: userLoginParams) {
  console.log(userLoginInfo);
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = {
        token: "token"
      }
      resolve(user);
    }, 2000);
  })
}