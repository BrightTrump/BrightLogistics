import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <div>
      <footer className="bg-black bg-cover bg-no-repeat">
        <div className="px-24 pt-24 flex justify-between items-baseline w-[95%]">
          <div className="w-[30vw]">
            {/* Company Logo/Description Starts Here */}
            <img
              className="w-[7vw]"
              src="../assets/images/logo.png"
              alt="Company Logo"
            />
            <Link to="#" className="text-white text-[1.3em] font-bold">
              BrightLogistics
            </Link>

            <p className="max-w-[350px] italic text-tertiary pt-8">
              Our foremost commitment is to guarantee the success of your
              business via a streamlined and expedited delivery system. We
              achieve your business's triumph through a responsive and swift
              delivery approach.
            </p>
            {/* Company Logo/Description Ends Here */}

            {/* Social Media Icons Starts Here */}
            <div className="icon">
              <ul className="flex gap-4 w-[12vw]">
                <li className="py-10">
                  <Link to="#" target="_blank">
                    <FaFacebook className="text-secondary text-3xl rounded-md bg-white p-1 hover:text-tertiary" />
                  </Link>
                </li>
                <li className="py-10">
                  <Link to="#" target="_blank">
                    <FaTwitter className="text-secondary text-3xl rounded-md bg-white p-1 hover:text-tertiary" />
                  </Link>
                </li>
                <li className="py-10">
                  <Link to="#" target="_blank">
                    <FaInstagram className="text-secondary text-3xl rounded-md bg-white p-1 hover:text-tertiary" />
                  </Link>
                </li>
                <li className="py-10">
                  <Link to="#" target="_blank">
                    <FaLinkedin className="text-secondary text-3xl rounded-md bg-white p-1 hover:text-tertiary" />
                  </Link>
                </li>
              </ul>
            </div>
            {/* Social Media Icons Ends Here */}

            {/* Comapny mail Starts Here */}
            <div className="">
              <Link
                to="mailto:support@brightlogistics.com"
                target="_blank"
                className="text-white hover:text-secondary">
                support@brightlogistics.com
              </Link>
            </div>
            {/* Comapny mail Ends Here */}
          </div>

          {/* Company Links Starts Here */}
          <div className="text-white">
            <div className="">
              <h3 className="font-bold text-[1.2em] pb-8">Company</h3>
              <ul className="text-[.8em] text-tertiary">
                <li className="pb-3">
                  <Link className="hover:text-secondary" to="/">
                    Home
                  </Link>
                </li>
                <li className="pb-3">
                  <Link className="hover:text-secondary" to="/aboutus">
                    About Us
                  </Link>
                </li>
                <li className="pb-3">
                  <Link className="hover:text-secondary" to="/tracking">
                    Tracking
                  </Link>
                </li>
                <li className="pb-3">
                  <Link to="/faqs" className="hover:text-secondary" >
                    Faqs
                  </Link>
                </li>
                <li className="pb-3">
                  <Link to="/contactus" className="hover:text-secondary" >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Company Links Ends Here */}

          {/* Customers Assistance Links Starts Here */}
          <div className="text-white">
            <h3 className="font-bold text-[1.2em] pb-8">Services</h3>
            <ul className="text-[.8em] text-tertiary">
              <li className="pb-3">
                <Link to="/domesticlogistics" className="hover:text-secondary">
                  Domestic Logistics
                </Link>
              </li>
              <li className="pb-3">
                <Link to="/coporatelogistics" className="hover:text-secondary">
                  Coporate Logistics
                </Link>
              </li>
              <li className="pb-3">
                <Link to="overseashipping" className="hover:text-secondary">
                  Oversea Shipping
                </Link>
              </li>
              <li className="pb-3">
                <Link to="ecommercelogistics" className="hover:text-secondary">
                  E-commerce Logistics
                </Link>
              </li>
              <li className="pb-3">
                <Link to="pettransport" className="hover:text-secondary">
                  Pet Transport
                </Link>
              </li>
              <li className="pb-3">
                <Link to="separatedelivery" className="hover:text-secondary">
                  Separate Delivery
                </Link>
              </li>
            </ul>
          </div>
          {/* Customers Assistance Links Ends Here */}

          {/* Nexted Links Starts Here */}
          <div className="text-white">
            <h3 className="font-bold text-[1.2em] pb-8">Shipping Mode</h3>
            <ul className="text-[.8em] text-tertiary">
              <li className="pb-3">
                <Link to="/airfreight" className="hover:text-secondary">
                  Air Freight
                </Link>
              </li>
              <li className="pb-3">
                <Link to="/oceanfreight" className="hover:text-secondary">
                  Ocean Freight
                </Link>
              </li>
              <li className="pb-3">
                <Link to="/landtransport" className="hover:text-secondary">
                  Land Transport
                </Link>
              </li>
            </ul>
          </div>
          {/* Nexted Links Ends Here */}
        </div>

        <p className="text-white text-center pt-20">
          &copy; 2019 - <span></span>
          BrightLogistics All Rights Reserved
        </p>
      </footer>
    </div>
  );
}
