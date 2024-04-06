import { isRejectedWithValue } from "@reduxjs/toolkit";
import { Notification } from "../../services/notification.service";

/**
 * Log a warning and show a toast!
 */
export const errorLoggingMiddleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    Notification.error({ message: action.payload.message });
  }
  return next(action);
};
