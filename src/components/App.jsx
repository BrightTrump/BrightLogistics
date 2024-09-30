import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import DomesticLogistics from "../pages/services/Domesticlogistics";

function App() {
  return (
    <>
      <Switch>
        <Route path="/domesticlogistics" component={DomesticLogistics}></Route>
        <Route path="/aboutus" component={AboutUs}></Route>
        <Route path="/" exact component={Home}></Route>
      </Switch>
    </>
  );
}

export default App;
