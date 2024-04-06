// import logo from './logo.svg';
// import './App.css';

import React, { useEffect } from "react";
import { ConfigProvider } from "antd";

import { HelmetProvider } from "react-helmet-async";
import deDe from "antd/lib/locale/de_DE";
import enUS from "antd/lib/locale/en_US";
import GlobalStyle from "./styles/GlobalStyle";
//import io from "socket.io-client";
//import 'typeface-montserrat';
//import 'typeface-lato';
import { AppRouter } from "./router/AppRouter";
import { useLanguage } from "./hooks/useLanguage";
import { useAutoNightMode } from "./hooks/useAutoNightMode";
import { usePWA } from "./hooks/usePWA";
import { useThemeWatcher } from "./hooks/useThemeWatcher";
import { useAppSelector } from "./hooks/reduxHooks";
import { themeObject } from "./styles/themes/themeVariables";
//import { useDeviceDetails } from "./hooks/useDeviceDetails";
import Chat from "./components/socket/chat/Chat";

//const socket = io.connect(process.env.REACT_APP_SOCKET_SERVER_URL);

const App = () => {
  const { language } = useLanguage();
  const theme = useAppSelector((state) => state?.theme?.theme || "light");

  // var reconnection = true,
  //   reconnectionDelay = 5000,
  //   reconnectionTry = 0;

  // function initClient() {
  //   connectClient();
  // }

  // function connectClient() {
  //   var socket = "";
  //   socket = io.connect(process.env.REACT_APP_SOCKET_SERVER_URL);

  //   socket.on("connect", function (e) {
  //     routesClient(socket);
  //   });

  //   socket.on("connect_error", function (e) {
  //     reconnectionTry++;
  //     console.log("Reconnection attempt #" + reconnectionTry);
  //   });

  //   return false;
  // }

  // function routesClient(socket) {
  //   console.log("connected");
  //   console.log(socket);

  //   socket.on("connectedSocketId", function (e) {
  //     console.log(`Here Id ${e}`);
  //     socket.emit("connectedSocketId", e);
  //   });

  //   socket.on("disconnect", function () {
  //     socket.disconnect();
  //     console.log("client disconnected");
  //     if (reconnection === true) {
  //       setTimeout(function () {
  //         console.log("client trying reconnect");
  //         connectClient();
  //       }, reconnectionDelay);
  //     }
  //   });

  //   return false;
  // }
  //useDeviceDetails();
  usePWA();
  useAutoNightMode();
  useThemeWatcher();

  useEffect(() => {
    //initClient();
  }, []);

  return (
    <>
      <meta
        name="theme-color"
        content={themeObject[theme || "light"].primary}
      />
      <GlobalStyle />
      <HelmetProvider>
        <ConfigProvider
          locale={language === "en" ? enUS : deDe}
          theme={themeObject[theme || "light"]}
        >
          <AppRouter />
        </ConfigProvider>
      </HelmetProvider>
    </>
  );
};

export default App;

// import { useEffect } from "react";
// import io from "socket.io-client";
// const socket = io.connect("http://localhost:4002");

// function App() {
//   function sendMessage() {
//     console.log("Button clicked");
//     socket.emit("send_message", { message: "Hello from client" });
//   }
//   useEffect(() => {
//     socket.on("receive_message", (data) => {
//       alert(data.message);
//     });
//   }, [socket]);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <div className="App">
//           <input placeholder="Message" />
//           <button onClick={sendMessage}>Send message</button>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;
