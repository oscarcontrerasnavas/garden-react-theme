import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { home } from "./utils/globals";
import Home from "./pages/Home";
import Header from "./components/Header";
import Modal from "./components/Modal";
import { useSelector } from "react-redux";
import { selectModal } from "./features/products/productsSlice";

function App() {
  const modal = useSelector(selectModal);

  return (
    <div className="App">
      <Modal modal={modal} />
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
