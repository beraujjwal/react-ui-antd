import { isJson } from "./utils";
export default function AuthHeader() {
  const accessToken = localStorage.getItem("accessToken");
  const device = localStorage.getItem("device");

  const token = isJson(accessToken) ? JSON.parse(accessToken) : null;

  const deviceDetails = isJson(device) ? JSON.parse(device) : null;

  if (token?.accessToken) {
    return {
      Authorization: `${token?.tokenType} ${token?.accessToken}`,
      "Content-type": "application/json",
      "X-Device-Id": deviceDetails?.deviceId,
    };
  } else {
    return {
      "Content-type": "application/json",
      "X-Device-Id": deviceDetails?.deviceId,
    };
  }
}
