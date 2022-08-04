import { Switch, Route } from "react-router-dom";
import ExchangeRate from "./pages/ExchangeRate";
import Home from "./pages/Home";
import Stocks from "./pages/Stocks";
function App() {


  return (
    <Switch>
      <Route path="/stocks">
        <Stocks />
      </Route>
      <Route path="/exchange">
        <ExchangeRate />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
      
  );
}

export default App;
