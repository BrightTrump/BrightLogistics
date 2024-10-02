import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCaretDown, FaBars } from "react-icons/fa";

export default function NavBar() {
  const [servicesDropdownVisible, setServicesDropdownVisible] = useState(false);
  const [sModeDropdownVisible, setSModeDropdownVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // const showServicesDropdown = () => setServicesDropdownVisible(true);
  // const hideServicesDropdown = () => setServicesDropdownVisible(false);
  // const showSModeDropdown = () => setSModeDropdownVisible(true);
  // const hideSModeDropdown = () => setSModeDropdownVisible(false);

  //Checking if the device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); //Adjust width as neccessary
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleServicesDropdown = () =>
    setServicesDropdownVisible(!servicesDropdownVisible);
  const toggleSModeDropdown = () =>
    setSModeDropdownVisible(!sModeDropdownVisible);

  //Show Services dropdown
  const showServicesDropdown = () =>
    !isMobile && setServicesDropdownVisible(true);

  //Hide Services dropdown
  const hideServicesDropdown = () =>
    !isMobile && setServicesDropdownVisible(false);

  //Show SMode dropdown
  const showSModeDropdown = () => !isMobile && setSModeDropdownVisible(true);

  //Show SMode dropdown
  const hideSModeDropdown = () => !isMobile && setSModeDropdownVisible(false);

  return (
    <div>
      <div className="z-10 w-full bg-primary fixed top-0 ">
        <div className="w-[98%] h-[12vh]  flex justify-between items-center mx-auto max-w-[87%] text-white">
          <Link to="/" className="logo w-16 flex items-center">
            <img
              src="../../assets/images/logo.png"
              alt="Company Logo"
              className="w-full "
            />
            <p className="text-2xl text-secondary">BrightLogistics</p>
          </Link>
          <FaBars className="mobile-menu hidden" id="mobile-cta" />

          <nav className="w-[60%] pointer flex justify-between items-center">
            <img
              id="mobile-exit"
              className="mobile-menu-exit hidden"
              src="images/exit.svg"
              alt="Close Navigation"
            />

            <ul className="flex justify-between w-[85%]">
              <li className="hover:text-secondary">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-secondary">
                <Link to="/aboutus" className=" ">
                  About Us
                </Link>
              </li>
              <li
                className="relative"
                onMouseOver={showServicesDropdown}
                onMouseOut={hideServicesDropdown}
                onClick={!isMobile ? toggleServicesDropdown : null}>
                <button className=" flex items-center hover:text-secondary">
                  Services
                  <FaCaretDown className="fa-caret-down" />
                </button>
                {servicesDropdownVisible && (
                  <ul
                    className=" mt-1 p-4 absolute bg-white text-black text-[1em] w-[20vw] h-[45vh] pointer"
                    onMouseOver={showServicesDropdown} //Keep dropdown open when hovering over the dropdown
                    onMouseOut={hideServicesDropdown} //Close dropdown when moving mouse out of dropdown services
                  >
                    <li className="pb-5 hover:text-secondary ">
                      <Link to="/domesticlogistics">Domestic Logistics</Link>
                    </li>
                    <li className="pb-5 hover:text-secondary">
                      <Link to="/coporatelogistics">Coporate Logistics</Link>
                    </li>
                    <li className="pb-5 hover:text-secondary">
                      <Link to="/overseasshipping">Overseas Shipping</Link>
                    </li>
                    <li className="pb-5  hover:text-secondary">
                      <Link to="/ecommercelogistics">E-commerce Logistics</Link>
                    </li>
                    <li className="pb-5  hover:text-secondary">
                      <Link to="/pettransport">Pet Transport</Link>
                    </li>
                    <li className="pb-5  hover:text-secondary">
                      <Link to="/walletaddedservices">Wallet and Added Services</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="link hover:text-secondary">
                <Link to="/tracking">Tracking</Link>
              </li>
              <li
                className="relative"
                onMouseOver={showSModeDropdown}
                onMouseOut={hideSModeDropdown}
                onClick={!isMobile ? toggleSModeDropdown : null}>
                <button className=" flex items-center hover:text-secondary">
                  S-Mode
                  <FaCaretDown className="fa-caret-down" />
                </button>
                {sModeDropdownVisible && (
                  <ul
                    className="dropdown mt-1 p-4 absolute bg-white text-black text-[1em] w-[18vw] h-[24vh] pointer"
                    onMouseOver={showSModeDropdown} //Keep dropdown open when hovering over the dropdown
                    onMouseOut={hideSModeDropdown} //Close dropdown when moving mouse out of dropdown
                  >
                    <li className="pb-5 hover:text-secondary">
                      <Link to="/airfreight">Air Freight</Link>
                    </li>
                    <li className="pb-5 hover:text-secondary">
                      <Link to="/oceanfrieght">Ocean Freight</Link>
                    </li>
                    <li className="pb-5 hover:text-secondary">
                      <Link to="/land-transport">Land Transport</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="link hover:text-secondary">
                <Link to="/faqs">Faqs</Link>
              </li>
              <li className="link hover:text-secondary">
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>

            <ul className="">
              <li className="">
                <Link
                  to="/signin"
                  className="bg-secondary p-3 w-[20%] font-bold rounded-md hover:bg-tertiary">
                  Sign In
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
