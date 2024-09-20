import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCaretDown, FaBars } from "react-icons/fa";

export default function NavBar() {
  const [servicesDropdownVisible, setServicesDropdownVisible] = useState(false);
  const [sModeDropdownVisible, setSModeDropdownVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // const handleMouseOverServices = () => setServicesDropdownVisible(true);
  // const handleMouseOutServices = () => setServicesDropdownVisible(false);
  // const handleMouseOverSMode = () => setSModeDropdownVisible(true);
  // const handleMouseOutSMode = () => setSModeDropdownVisible(false);

  //Checking if the device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); //Adjust width as neccessary
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize, checkMobile");
  }, []);

  const toggleServicesDropdown = () =>
    setServicesDropdownVisible(!servicesDropdownVisible);
  const toggleSModeDropdown = () =>
    setSModeDropdownVisible(!sModeDropdownVisible);

  const handleMouseOverServices = () =>
    !isMobile && setServicesDropdownVisible(true);
  const handleMouseOutServices = () =>
    !isMobile && setServicesDropdownVisible(false);
  const handleMouseOverSMode = () => !isMobile && setSModeDropdownVisible(true);
  const handleMouseOutSMode = () => !isMobile && setSModeDropdownVisible(false);

  return (
    <div>
      <div className="container w-screen bg-primary fixed top-0">
        <div className="content w-11/18 flex justify-between items-center text-white px-24">
          <Link to="/" className="logo w-24 flex items-center">
            <img
              src="../../assets/images/logo.png"
              alt="Company Logo"
              className="w-full "
            />
            <p className="text-3xl text-secondary">BrightLogistics</p>
          </Link>
          <FaBars className="mobile-menu hidden" id="mobile-cta" />

          <nav className="navigation w-6/12 ">
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
              <li className="link linkdrop">
                <div
                  className="links flex items-center hover:text-secondary"
                  onMouseOver={handleMouseOverServices}
                  onMouseOut={handleMouseOutServices}
                  onClick={!isMobile ? toggleServicesDropdown : null}>
                  services
                  <FaCaretDown className="fa-caret-down" />
                </div>
                {servicesDropdownVisible && (
                  <ul
                    className="dropdown absolute bg-tertiary"
                    id="dropdown-ul">
                    <li className="dropdown-link">
                      <Link
                        to="/domestic"
                        className="links hover:text-secondary">
                        Domestic Logistics
                      </Link>
                    </li>
                    <li className="dropdown-link">
                      <Link
                        to="/coperate"
                        className="links hover:text-secondary">
                        Coperate Logistics
                      </Link>
                    </li>
                    <li className="dropdown-link">
                      <Link
                        to="/overseas"
                        className="links hover:text-secondary">
                        Overseas Shipping
                      </Link>
                    </li>
                    <li className="dropdown-link">
                      <Link
                        to="/ecommerce"
                        className="links hover:text-secondary">
                        E-commerce Logistics
                      </Link>
                    </li>
                    <li className="dropdown-link">
                      <Link
                        to="/pet-transport"
                        className="links hover:text-secondary">
                        Pet Transport
                      </Link>
                    </li>
                    <li className="dropdown-link">
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
              <li className="link linkdrop">
                <div
                  className="links flex items-center hover:text-secondary"
                  onMouseOver={handleMouseOverSMode}
                  onMouseOut={handleMouseOutSMode}
                  onClick={!isMobile ? toggleSModeDropdown : null}>
                  S-Mode
                  <FaCaretDown className="fa-caret-down" />
                </div>
                {sModeDropdownVisible && (
                  <ul
                    className="dropdown absolute bg-secondary "
                    id="dropdown-ul">
                    <li className="dropdown-link">
                      <Link
                        to="/airfreight"
                        className="links hover:text-tertiary">
                        Air Freight
                      </Link>
                    </li>
                    <li className="dropdown-link">
                      <Link
                        to="/oceanfrieght"
                        className="links hover:text-tertiary">
                        Ocean Freight
                      </Link>
                    </li>
                    <li className="dropdown-link">
                      <Link
                        to="/land-transport"
                        className="links hover:text-tertiary">
                        Land Transport
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="link hover:text-tertiary">
                <Link to="/faqs" className="links">
                  Faqs
                </Link>
              </li>
              <li className="link hover:text-tertiary">
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
