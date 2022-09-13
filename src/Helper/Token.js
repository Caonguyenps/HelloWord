import Cookies from "universal-cookie";
const cookies = new Cookies();

export const saveToken = (accessToken, refreshToken) => {
  cookies.set("accessToken", "accessToken", { path: "/" });
  cookies.set("refreshToken", "refreshToken", { path: "/" });
  return cookies;
};
