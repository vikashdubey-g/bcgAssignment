import { ThemeProvider } from "@mui/material";
import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import theme from "./theme/theme";
const Home = lazy(() => import("./pages/Home"));
const MailBox = lazy(() => import("./pages/MailBox"));

export const PageRoutes = {
  home: "/",
  mailBox: "/mailBox",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path={PageRoutes.home} component={Home} />
          <Route exact path={PageRoutes.mailBox} component={MailBox} />
        </Switch>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
