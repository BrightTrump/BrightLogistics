import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { FaArrowRight, FaClock, FaMicrochip, FaSwatchbook } from "react-icons/fa6";


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
      <section className="mx-24 absolute bottom-[-17%] md:bottom-[-12%] w-[90%] flex items-center ">
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
      <section className="mx-24 mt-[10em]">
        <h3 className="text-center font-bold text-4xl pb-7">What We Offer</h3>
        <div className="flex justify-between flex-wrap w-[98%] h-[85vh]">
          <div className="relative">
            <div className="w-[27vw] h-[40vh]">
              <img
                src="../../assets/images/shipping11.png"
                alt=""
                className="w-[100%] h-[100%]"
              />
            </div>
            <Link
              to="/landtransport"
              className="absolute bottom-[5.8%] hover:bg-tertiary bg-secondary font-bold p-2 text-white">
              Domestic Logistics
            </Link>
          </div>
          <div className="relative">
            <div className="w-[27vw] h-[40vh]">
              <img
                src="../../assets/images/shipping6.jfif"
                alt="A Picture is here"
                className="w-[100%] h-[100%]"
              />
            </div>
            <Link
              to="/storage"
              className="absolute bottom-[5.8%] hover:bg-tertiary bg-secondary font-bold p-2 text-white">
              Coporate Shipping
            </Link>
          </div>
          <div className="relative">
            <div className="w-[27vw] h-[40vh]">
              <img
                src="../../assets/images/shipping7.webp"
                alt=""
                className="w-[100%] h-[100%]"
              />
            </div>
            <Link
              to="/airfreight"
              className="absolute bottom-[5.8%] hover:bg-tertiary bg-secondary font-bold p-2 text-white">
              Overseas Shipping
            </Link>
          </div>

          <div className="relative">
            <div className="w-[27vw] h-[40vh]">
              <img
                src="../../assets/images/shipping12.jpg"
                alt=""
                className="w-[100%] h-[100%]"
              />
            </div>
            <Link
              to="/separatedelivery"
              className="absolute bottom-[5.8%] hover:bg-tertiary bg-secondary font-bold p-2 text-white">
              E-commerce Logistics
            </Link>
          </div>
          <div className="relative">
            <div className="w-[27vw] h-[40vh]">
              <img
                src="../../assets/images/shipping13.jpg"
                alt=""
                className="w-[100%] h-[100%]"
              />
            </div>
            <Link
              to="/pettransport"
              className="absolute bottom-[5.8%] hover:bg-tertiary bg-secondary font-bold p-2 text-white">
              Pet Transport
            </Link>
          </div>
          <div className="relative">
            <div className="w-[27vw] h-[40vh]">
              <img
                src="../../assets/images/shipping9.webp"
                alt="A Cargo"
                className="w-[100%] h-[100%]"
              />
            </div>
            <Link
              to="/oceanfrieght"
              className="absolute bottom-[5.8%] hover:bg-tertiary bg-secondary font-bold p-2 text-white">
              Separate Delivery
            </Link>
          </div>
        </div>
      </section>
      {/* Section-3 Ends Here */}

      {/* Section-4 Starts Here */}
      <section className="mt-16 pb-36 bg-black ">
        <h3 className="text-center font-bold text-4xl text-white pt-24 pb-12">
          Shipping Solutions
        </h3>
        <div className="relative px-24 flex gap-9 ">
          <div className="w-[95vw] h-[52vh]">
            <img
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpcHBpbmd8ZW58MHx8MHx8fDA%3D"
              alt=""
              className="w-[100%] h-[100%]"
            />
            <p className="absolute bottom-[0.8%] bg-primary text-white w-[39.1vw] px-1 ">
              We've had the pleasure of experiencing the exceptional service
              provided by BrightLogistics in ocean transportation. We're excited
              to enhance our shipping collaboration with you all.
            </p>
          </div>
          <div className=" max-w-[50%] text-justify leading-7">
            <p className="text-gray-500 text-[1em]">
              When time is of the essence, we excel in orchestrating accelerated
              services with guaranteed delivery timelines. Regardless of the
              intricacy of your logistical requirements, our skilled team and
              specialized equipment are poised to ensure the successful
              fulfillment of your obligations.
            </p>

            <div className="py-3">
              <h3 className="text-white text-[1.2em]">Punctual Delivery</h3>
              <p className="text-gray-500 text-[1em]">
                In addition to providing supply chain solutions, we have a team
                of specialized professionals catering to various industries.
                With the ever-changing demand and market dynamics, our proactive
                and adaptable teams ensure the provision of the flexible
                services you depend on.
              </p>
            </div>

            <div className="">
              <h3 className="text-white text-[1.2em]">
                Round-the-clock Online Assistance
              </h3>
              <p className="text-gray-500 text-[1em]">
                24/7 Customer Support System, available at all times
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Section-4 Ends Here */}

      {/* Section-5 Starts Here */}
      <section className="">
        <p className="px-24 pt-24 text-3xl max-w-[550px] pb-20">
          We take the
          <span className="text-secondary"> burden of logistics off you</span>
        </p>
        <div className="px-24 flex gap-9">
          <div>
            <FaMicrochip className="text-black text-4xl" />
            <h2 className="font-bold py-6">Latest Technology</h2>
            <p>
              Technology and its application are fundamental at BL. We
              understand the role of technology in providing an exceptional
              customer experience. For this reason, our processes, products and
              services are built around modern technology to help us deliver
              your shipments cheaper, safely and at the speed of light.
            </p>
          </div>
          <div>
            <FaSwatchbook className="text-black text-4xl" />
            <h2 className="font-bold py-6">Social Commerce</h2>
            <p>
              Pivotal to successful social commerce transactions is the ability
              for the end-user to receive items where and when needed. With an
              unmatched route network spanning urban and rural communalities,
              GIGL is the solution to efficient last-mile delivery. As a
              merchant, you only have to think about selling your products while
              GIGL delivers to your customers worldwide.
            </p>
          </div>
          <div>
            <FaClock className="text-black text-4xl" />
            <h2 className="font-bold py-6">Guaranteed Delivery</h2>
            <p>
              We are conscious of the relationship between time and money and
              utilize our resources optimally to meet your delivery needs. Our
              service commitment to you is hassle-free delivery. We are large
              enough to efficiently handle deliveries for large corporations yet
              small enough to deploy innovative delivery solutions that help
              small businesses.
            </p>
          </div>
        </div>
      </section>
      {/* Section-5 Ends Here */}
    </div>
  );
}
