import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {
  FaApple,
  FaArrowRight,
  FaBagShopping,
  FaClock,
  FaGooglePlay,
  FaHouse,
  FaMicrochip,
  FaPeopleGroup,
  FaSwatchbook,
} from "react-icons/fa6";

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
      <section className="my-24">
        <p className="px-24 text-3xl max-w-[550px] pb-20">
          We take the
          <span className="text-secondary"> burden of logistics off you</span>
        </p>
        <div className="px-24 flex gap-9">
          <div>
            <FaMicrochip className="text-black text-4xl" />
            <h2 className="font-bold py-6">Latest Technology</h2>
            <p>
              Technology and its application are fundamental at BLI. We
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
              BLI is the solution to efficient last-mile delivery. As a
              merchant, you only have to think about selling your products while
              BL delivers to your customers worldwide.
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

      {/* Section-6 Starts Here */}
      <section className="  bg-black ">
        <div className="flex gap-52 justify-items-end items-center px-24 pt-24 pb-24">
          <div className="">
            <p className=" text-3xl text-white max-w-[400px] pb-20">
              BLI, the app for Local and International shipping
            </p>

            <div className="flex gap-4">
              <div className="flex items-center gap-2 bg-primary p-2 rounded-md">
                <FaApple className="text-white text-2xl" />
                <p className="text-white text-[.9em] max-w-[125px] ">
                  Download on the{" "}
                  <span className="font-bold text-[1.3em]">App Store</span>
                </p>
              </div>
              <div className="flex items-center gap-2 bg-white p-2 rounded-md">
                <FaGooglePlay className="text-black text-2xl" />
                <p className="text-black text-[.9em] max-w-[125px] ">
                  Get it on{" "}
                  <span className="font-bold text-[1.3em]">GooglePlay</span>
                </p>
              </div>
            </div>
          </div>

          {/* Image is here */}
          <img
            src="https://refurbiphones.ie/wp-content/uploads/2021/12/apple-iphone-13-black-unlocked-mobile-phone.png"
            alt="A Phone Image"
            className="w-[40%] rounded-[50%]"
          />
          {/* End of Image is here */}
        </div>
      </section>
      {/* Section-6 Ends Here */}

      {/* Section-7 Starts Here */}
      <section className=" ">
        <h3 className="text-center font-bold text-3xl pt-24">
          Logistic Solutions
        </h3>
        <div className="px-24 flex gap-[7em] py-20 ">
          <div className="">
            <p className="text-xl pb-4 text-tertiary">
              The Information is Readily Apparent.
            </p>

            <div className="icon-container max-w-[550px]">
              <div className="flex items-center pb-5 gap-4">
                <FaBagShopping className="text-secondary text-3xl" />
                <div className="desc-div">
                  <h3 className="parcel">8706+ Parcel Delivered</h3>
                  <p className="sub-desc">
                    Swift and secure delivery, enhanced storage solution
                  </p>
                </div>
              </div>
              <div className="flex items-center pb-5 gap-4">
                <FaPeopleGroup className="text-secondary text-[2.5em]" />
                <div className="desc-div">
                  <h3 className="parcel">3300+ Satisfied Clients</h3>
                  <p className="sub-desc">
                    Across the globe, we have contented customers who vouch for
                    us through positive testimonials.
                  </p>
                </div>
              </div>
              <div className="flex items-center pb-5 gap-4">
                <FaHouse className="text-secondary text-4xl" />
                <div className="desc-div">
                  <h3 className="parcel">107+ Branches Accross</h3>
                  <p className="sub-desc">
                    The extensive network of our global branches facilitates
                    seamless communication with you.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Input Form Starts Here */}
          <form action="">
            <div className="form-content">
              <p className="text-md font-bold pb-3">Get a Free Quote</p>
              <div className="form-block">
                <div className="pb-5">
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="Enter your fullname"
                    className="text-[.9em] border-2  w-[30vw] p-2"
                  />
                  <br />
                </div>
                <div className="pb-5">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    autoComplete="on"
                    className="text-[.9em] border-2  w-[30vw] p-2"
                  />
                </div>

                <div className="pb-5">
                  <input
                    type="tel"
                    id="tel"
                    name="tel"
                    placeholder="Enter your number"
                    className="text-[.9em] border-2  w-[30vw] p-2"
                  />
                  <br />
                </div>
                <div className="pb-5">
                  <textarea
                    className="text-[.9em] border-2  w-[30vw] p-2"
                    name="message"
                    id="message"
                    placeholder="Leave a message"
                    rows={5}
                    cols={4}
                  />
                </div>
              </div>

              <button className="bg-secondary p-1 w-[7vw] text-white font-bold hover:bg-primary">
                Submit
              </button>
            </div>
          </form>
          {/* Input Form Ends Here */}
        </div>
      </section>
      {/* Section-7 Ends Here */}

      {/* Section-8 Starts Here Testimonial Section */}
      <section className="bg-tertiary">
        <p className="text-white font-bold text-center py-24 text-3xl">
          Our Testimonials
        </p>

        <div className="px-24 flex justify-between w-[100%] pb-32">
          <div className="relative bg-white px-3 rounded-md w-[33%]">
            <img
              src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="
              alt=""
              className="absolute  top-[-12%] left-[34%] w-[30%] rounded-[50%]"
            />

            <p className="text-black pb-6 pt-20">
              "I rely solely on BrightLogistics for all of my shipping needs. My
              customers have come to expect the outstanding shipping and
              handling of their merchandise."
            </p>
            <h3 className="font-bold text-[1.2em]">Peter Drane</h3>
            <p className="text-secondary text-[.9em]">HR, VK Communications</p>
          </div>
          <div className="relative bg-white px-3 rounded-md w-[33%]">
            <img
              src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg"
              alt=""
              className="absolute  top-[-12%] left-[34%] w-[30%] rounded-[50%]"
            />

            <p className="text-black pb-6 pt-20">
              "I'd like to express my gratitude to you and your logistics team.
              Over time, I've developed a strong sense of reliance on the
              BrightLogistics team, especially during my end-of-the-day tasks."
            </p>
            <h3 className="font-bold text-[1.2em]">Anabella Mark</h3>
            <p className="text-secondary pb-2">CEO, MkDev</p>
          </div>
          <div className="relative bg-white px-3 rounded-md w-[33%]">
            <img
              src="https://i0.wp.com/media.premiumtimesng.com/wp-content/files/2024/03/image0-4.jpeg?fit=1032%2C688&ssl=1"
              alt=""
              className="absolute  top-[-12%] left-[34%] w-[30%] rounded-[50%]"
            />
            <p className="text-black pb-6 pt-20">
              "I have never regretted my reliability on BrightLogistics for all
              my shipping requirements. My customers have grown accustomed to
              the exceptional shipping and handling of their goods."
            </p>
            <h3 className="font-bold text-[1.2em]">Maxwell Parks</h3>
            <p className="text-secondary pb-2">GMD, ServOil</p>
          </div>
        </div>
      </section>
      {/* Section-8 Ends Here Testimonial Section */}

      {/* Footer Starts Here  */}
      <Footer />
      {/* Footer Ends Here  */}
    </div>
  );
}
