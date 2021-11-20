import React from "react";
import { ThemeProvider } from "styled-components";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Router from "./routes";
import light from "./styles/themes/light";
import { store, persistor } from "./store";
import { DailyProvider } from "./hooks/daily";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={light}>
        <PersistGate loading={null} persistor={persistor}>
          <DailyProvider>
            <Router />
          </DailyProvider>
          <StatusBar style="light" backgroundColor="#362E70" />
        </PersistGate>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
