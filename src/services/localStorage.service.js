import { isJson } from "../utils/utils";

export const persistToken = (token) => {
  if (token) localStorage.setItem("accessToken", JSON.stringify(token));
};

export const readToken = () => {
  const accessToken = localStorage.getItem("accessToken") || null;
  return isJson(accessToken) ? JSON.parse(accessToken) : null;
};

export const persistUser = (user) => {
  if (user) localStorage.setItem("user", JSON.stringify(user));
};

export const readUser = () => {
  const userStr = localStorage.getItem("user");
  return userStr ? JSON.parse(userStr) : null;
};

export const readDeviceDetails = () => {
  const device = localStorage.getItem("device") || null;
  return isJson(device) ? JSON.parse(device) : null;
};

export const setDeviceDetails = (deviceInfo) => {
  return localStorage.setItem("device", JSON.stringify(deviceInfo));
};

export const deleteToken = () => localStorage.removeItem("accessToken");
export const deleteAccessToken = () => localStorage.removeItem("accessToken");
export const deleteRefreshToken = () => localStorage.removeItem("refreshToken");
export const deleteTokenExpires = () =>
  localStorage.removeItem("tokenExpiresIn");
export const deleteUser = () => localStorage.removeItem("user");
