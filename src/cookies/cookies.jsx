import { Cookies } from "react-cookie";
const cookies = new Cookies();
export const setCookie = ( key, value ) => {
  return cookies.set(key, value);
};
export const getCookie = (v) => {
  return cookies.get(v);
};
export const removeCookie = (v) => {
  return cookies.remove(v);
};