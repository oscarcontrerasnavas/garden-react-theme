import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { home } from "./utils/globals";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Switch>
          <Route exact path={home} component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
