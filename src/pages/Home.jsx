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
      <section className=" relative flex flex-col content-center items-center  bg-[url(https://odysseyuae.com/wp-content/uploads/2019/06/slider-2.jpg)] bg-cover h-svh  ">
        <p className=" text-4xl text-center capitalize max-w-2xl pt-64">
          Provide Your Tracking ID To Track Your shipment progress.
        </p>
        <div className="flex justify-center mt-5">
          <form method="post" action="" className="flex rounded-lg w-5/18">
            <input
              type="text"
              name="tracking_id"
              id="c4"
              placeholder="Enter Your Tracking ID"
              autoComplete="on"
              className="p-2 w-80 text-center"
              required
            />

            <button
              className="flex items-center bg-secondary text-white px-2 py-1 hover:bg-tertiary font-bold"
              type="submit"
              name="">
              Track Your Parcel
              <FaArrowRight className="text-white font-bold" />
            </button>
          </form>
        </div>
      </section>
      {/* Section-1 Ends Here */}

      {/* Section-2 Starts Here */}
      <section className="mx-24 absolute bottom-[-17%] w-[90%] flex items-center ">
        <div className="flex justify-between w-[90%]  items-center  ">
          <div
            className="bg-primary hover:bg-tertiary text-center w-[30%] p-[4em] border-2 border-gray-400 animate-pulse"
            id="wave">
            <p className="text-white font-bold pb-5">Air Freight</p>
            <Link to="/airfreight" className="text-secondary text-[.8em]">
              Read more
            </Link>
          </div>

          <div
            className="bg-primary hover:bg-tertiary text-center w-[30%] p-[4em] border-2 border-gray-400 animate-pulse"
            id="wave">
            <p className="text-white font-bold pb-5">Ocean Freight</p>
            <Link to="/oceanfreight" className="text-secondary text-[.8em]">
              Read more
            </Link>
          </div>

          <div
            className="bg-primary hover:bg-tertiary text-center w-[30%] p-[4em] border-2 border-gray-400 animate-pulse"
            id="wave">
            <p className="text-white font-bold pb-5">Land Transport</p>
            <Link to="/landtransport" className="text-secondary text-[.8em]">
              Read more
            </Link>
          </div>

          <div
            className="bg-primary hover:bg-tertiary text-center w-[30%] p-[4em] border-2 border-gray-400 animate-pulse"
            id="wave">
            <p className="text-white font-bold pb-5">Mobility</p>
            <Link to="" className="text-secondary text-[.8em]">
              Read more
            </Link>
          </div>
        </div>
      </section>
      {/* Section-2 Ends Here */}

      {/* Section-3 Starts Here */}
      <section className="mx-24 mt-[12em]">
        <h3 className="text-center font-bold text-4xl">Our Offer</h3>
        <div className="">
          <div className="">
            <div className="">
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
