import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import DomesticLogistics from "../pages/services/Domesticlogistics";
import CoporateLogistics from "../pages/services/CoporateLogistics";
import OverseasShipping from "../pages/services/OverseasShipping";
import EcommerceLogistics from "../pages/services/EcommerceLogistics";
import PetTransport from "./../pages/services/PetTransport";
import WalletAddedServices from "../pages/services/WalletAddedServices";
import AirFreight from './../pages/shippingmode/AirFreight';
import OceanFreight from "../pages/shippingmode/Oceanfreight";
import LandTransport from "../pages/shippingmode/LandTransport";
import Faqs from "./../pages/Faqs";

function App() {
  return (
    <>
      <Switch>
        <Route path="/faqs" component={Faqs}></Route>
        <Route path="/landtransport" component={LandTransport}></Route>
        <Route path="/oceanfreight" component={OceanFreight}></Route>
        <Route path="/airfreight" component={AirFreight}></Route>
        <Route
          path="/walletaddedservices"
          component={WalletAddedServices}></Route>
        <Route path="/pettransport" component={PetTransport}></Route>
        <Route
          path="/ecommercelogistics"
          component={EcommerceLogistics}></Route>
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
