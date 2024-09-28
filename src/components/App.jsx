
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";

function App() {
  return (
    <>
      <Switch>
        <Route path="/aboutus" component={AboutUs}></Route>
        <Route path="/" exact component={Home}></Route>
      </Switch>
    </>
  );
}

export default App;
