import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import DomesticLogistics from "../pages/services/Domesticlogistics";
import CoporateLogistics from "../pages/services/CoporateLogistics";
import OverseasShipping from "../pages/services/OverseasShipping";
import EcommerceLogistics from "../pages/services/EcommerceLogistics";
import WalletAddedServices from "../pages/services/WalletAddedServices";

function App() {
  return (
    <>
      <Switch>
        <Route path="/walletaddedservices" component={WalletAddedServices}></Route>
        <Route path="/ecommercelogistics" component={EcommerceLogistics}></Route>
        <Route path="/overseasshipping" component={OverseasShipping}></Route>
        <Route path="/coporatelogistics" component={CoporateLogistics}></Route>
        <Route path="/domesticlogistics" component={DomesticLogistics}></Route>
        <Route path="/aboutus" component={AboutUs}></Route>
        <Route path="/" exact component={Home}></Route>
      </Switch>
    </>
  );
}

export default App;
