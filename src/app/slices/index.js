import userReducer from "./userSlice";
import authReducer from "./authSlice";
import nightModeReducer from "./nightModeSlice";
import themeReducer from "./themeSlice";
import pwaReducer from "./pwaSlice";
import deviceReducer from "./deviceSlice";
import permissionReducer from "./permissionSlice";

const rootReducer = {
  auth: authReducer,
  user: userReducer,
  nightMode: nightModeReducer,
  theme: themeReducer,
  pwa: pwaReducer,
  device: deviceReducer,
  permission: permissionReducer,
};

export default rootReducer;
