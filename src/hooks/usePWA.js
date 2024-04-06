import { useEffect } from "react";
import { useAppDispatch } from "./reduxHooks";
import { addDeferredPrompt } from "../app/slices/pwaSlice";

export const usePWA = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      dispatch(addDeferredPrompt(e));
    };

    window.addEventListener("beforeinstallprompt", handler);
  }, [dispatch]);
};
