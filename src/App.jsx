import { ThemeProvider } from "@mui/material";
import "./App.css";
import AppRoutes from "./appRouting/AppRoutes";
import Theme from "./muiTheme/Theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
