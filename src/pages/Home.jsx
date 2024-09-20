import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
  return (
    <div>
      {/* Header Starts Here */}
      <header className="navbar">
        <NavBar />
      </header>
      {/* Header Ends Here */}

      {/* Section-1 Starts Here */}
      <div className="mt-20 px-24 content-center bg-[url(https://odysseyuae.com/wp-content/uploads/2019/06/slider-2.jpg)] bg-cover h-svh  ">
        <p className="provide pt-8 text-5xl text-center">
          Provide Your Tracking ID To Track Your Shipment Progress.
        </p>
        <div className="input-track-div flex justify-center mt-5">
          <form method="post" action="" className="flex rounded-lg w-5/18">
            <input
              type="text"
              name="tracking_id"
              id="c4"
              placeholder="Enter Your Tracking ID"
              autoComplete="on"
              className="tracking-box p-2 w-80 text-center"
              required
            />

            <button
              className="track-cta flex items-center bg-secondary text-white px-2 py-1 hover:bg-tertiary font-bold"
              type="submit"
              name="">
              Track Your Parcel
              <FaArrowRight className="text-white font-bold" />
            </button>
          </form>
        </div>
      </div>
      {/* Section-1 Ends Here */}

      {/* Section-2 Starts Here */}
      <section className="section-1 px-24">
        <div className="parent">
          <div className="sub-parent waves" id="wave">
            <p className="desc">Logistics Network</p>
            <Link to="/aboutus" className="learn-cta ctas" id="cta">
              Learn More <FaArrowRight className="learn-icon" />
            </Link>
          </div>
          <div className="sub-parent waves" id="wave">
            <p className="desc">Dispersion</p>
            <Link to="" className="learn-cta ctas" id="cta">
              Learn More <FaArrowRight className="learn-icon" />
            </Link>
          </div>
          <div className="sub-parent waves" id="wave">
            <p className="desc">Fleet Express</p>
            <Link to="" className="learn-cta ctas" id="cta">
              Learn More <FaArrowRight className="learn-icon" />
            </Link>
          </div>
          <div className="sub-parent waves" id="wave">
            <p className="desc">Mobility</p>
            <Link to="" className="learn-cta ctas" id="cta">
              Learn More <FaArrowRight className="learn-icon" />
            </Link>
          </div>
        </div>
      </section>
      {/* Section-1 Ends Here */}

      {/* Section-2 Starts Here */}
      <section className="section-2 px-24">
        <h3 className="sol">Our Offer</h3>
        <div className="parent-div">
          <div className="sub-parent">
            <div className="img-div">
              <img
                src="../../assets/images/shipping6.jfif"
                alt="A Picture is here"
              />
            </div>
            <Link to="/storage" className="sol-cta">
              Storage Facility
            </Link>
          </div>
          <div className="sub-parent">
            <div className="img-div">
              <img src="../../assets/images/shipping9.webp" alt="A Cargo" />
            </div>
            <Link to="/oceanfrieght" className="sol-cta">
              Maritime Cargo Transport
            </Link>
          </div>
          <div className="sub-parent">
            <div className="img-div">
              <img src="../../assets/images/shipping7.webp" alt="" />
            </div>
            <Link to="/airfreight" className="sol-cta">
              Air Cargo
            </Link>
          </div>
          <div className="sub-parent">
            <div className="img-div">
              <img src="../../assets/images/shipping11.png" alt="" />
            </div>
            <Link to="/landtransport" className="sol-cta">
              Land Transport
            </Link>
          </div>
          <div className="sub-parent">
            <div className="img-div">
              <img src="../../assets/images/shipping12.jpg" alt="" />
            </div>
            <Link to="/separatedelivery" className="sol-cta">
              Separate Delivery
            </Link>
          </div>
          <div className="sub-parent">
            <div className="img-div">
              <img src="../../assets/images/shipping13.jpg" alt="" />
            </div>
            <Link to="/pettransport" className="sol-cta">
              Pet Transport
            </Link>
          </div>
        </div>
      </section>
      {/* Section-2 Ends Here */}
    </div>
  );
}
