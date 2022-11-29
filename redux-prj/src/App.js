import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import HomePage from "./component/HomePages/HomePage";
import Detail from "./component/Detail/Detail";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/details/:id">
              <Detail />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
