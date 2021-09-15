import React from "react";
import { ThemeProvider } from "styled-components";

import Router from "./routes";
import light from "./styles/themes/light";

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
