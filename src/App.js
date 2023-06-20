import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import AppRoute from "./routes/AppRoute";
import { SharedStateProvider } from "./store";
// import "./assets/scss/theme.scss";
import "./assets/scss/theme.scss";
import { React } from "react";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <SharedStateProvider>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppRoute />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </SharedStateProvider>
  );
}

export default App;
