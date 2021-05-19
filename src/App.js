import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { home, store } from "./utils/globals";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Switch>
          <Route exact path={home} component={Home} />
          <Route exact path={store} component={Store} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
