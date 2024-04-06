import { v4 as uuid } from "uuid";

export const useDeviceDetails = () => {
  const device = localStorage.getItem("device");
  if (!device) localStorage.setItem("device", uuid());
};
