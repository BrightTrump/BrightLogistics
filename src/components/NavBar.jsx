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
      <div className="w-full bg-primary fixed top-0">
        <div className="w-[98%] px-24 flex justify-between items-center text-white">
          <Link to="/" className="logo w-24 flex items-center">
            <img
              src="../../assets/images/logo.png"
              alt="Company Logo"
              className="w-full "
            />
            <p className="text-3xl text-secondary">BrightLogistics</p>
          </Link>
          <FaBars className="mobile-menu hidden" id="mobile-cta" />

          <nav className="navigation w-6/12 pointe">
            <img
              id="mobile-exit"
              className="mobile-menu-exit hidden"
              src="images/exit.svg"
              alt="Close Navigation"
            />

            <ul className="primary-nav flex justify-between">
              <li className="link current hover:text-secondary">
                <Link to="/" className="links">
                  Home
                </Link>
              </li>
              <li className="link hover:text-secondary">
                <Link to="/aboutus" className="links ">
                  About Us
                </Link>
              </li>
              <li
                className="link linkdrop"
                onMouseOver={showServicesDropdown}
                onMouseOut={hideServicesDropdown}
                onClick={!isMobile ? toggleServicesDropdown : null}>
                <button className="links flex items-center hover:text-secondary">
                  Services
                  <FaCaretDown className="fa-caret-down" />
                </button>
                {servicesDropdownVisible && (
                  <ul
                    className="dropdown mt-1 p-4 absolute bg-tertiary text-[1em] w-[20vw] h-[40vh] pointer"
                    id="dropdown-ul"
                    onMouseOver={showServicesDropdown} //Keep dropdown open when hovering over the dropdown
                    onMouseOut={hideServicesDropdown} //Close dropdown when moving mouse out of dropdown services
                  >
                    <li className="dropdown-link pb-3 hover:text-secondary ">
                      <Link to="/domestic" className="links  ">
                        Domestic Logistics
                      </Link>
                    </li>
                    <li className="dropdown-link pb-3 hover:text-secondary">
                      <Link to="/coperate" className="links ">
                        Coperate Logistics
                      </Link>
                    </li>
                    <li className="dropdown-link pb-3 hover:text-secondary">
                      <Link to="/overseas" className="links">
                        Overseas Shipping
                      </Link>
                    </li>
                    <li className="dropdown-link pb-3">
                      <Link
                        to="/ecommerce"
                        className="links hover:text-secondary">
                        E-commerce Logistics
                      </Link>
                    </li>
                    <li className="dropdown-link pb-3">
                      <Link
                        to="/pet-transport"
                        className="links hover:text-secondary">
                        Pet Transport
                      </Link>
                    </li>
                    <li className="dropdown-link pb-3">
                      <Link
                        to="/separate-delivery"
                        className="links hover:text-secondary">
                        Separate Delivery
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="link hover:text-secondary">
                <Link to="/tracking" className="links">
                  Tracking
                </Link>
              </li>
              <li
                className="link linkdrop"
                onMouseOver={showSModeDropdown}
                onMouseOut={hideSModeDropdown}
                onClick={!isMobile ? toggleSModeDropdown : null}>
                <button className="links flex items-center hover:text-secondary">
                  S-Mode
                  <FaCaretDown className="fa-caret-down" />
                </button>
                {sModeDropdownVisible && (
                  <ul
                    className="dropdown mt-1 p-4 absolute bg-tertiary text-[1em] w-[18vw] h-[20vh] pointer"
                    id="dropdown-ul"
                    onMouseOver={showSModeDropdown} //Keep dropdown open when hovering over the dropdown
                    onMouseOut={hideSModeDropdown} //Close dropdown when moving mouse out of dropdown
                  >
                    <li className="dropdown-link pb-3 hover:text-secondary">
                      <Link to="/airfreight" className="links">
                        Air Freight
                      </Link>
                    </li>
                    <li className="dropdown-link pb-3 hover:text-secondary">
                      <Link to="/oceanfrieght" className="links">
                        Ocean Freight
                      </Link>
                    </li>
                    <li className="dropdown-link pb-3 hover:text-secondary">
                      <Link to="/land-transport" className="links">
                        Land Transport
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="link hover:text-secondary">
                <Link to="/faqs" className="links">
                  Faqs
                </Link>
              </li>
              <li className="link hover:text-secondary">
                <Link to="/contact" className="links">
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* <ul className="secondary-nav">
              <li className="login">
                <Link to="/tracking" className="login-cta">
                  Track Parcel
                </Link>
              </li>
            </ul> */}
          </nav>
        </div>
      </div>
    </div>
  );
}
