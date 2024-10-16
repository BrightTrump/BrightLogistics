import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

export default function OceanFreight() {
  // State to handle which FAQ is open (using an index)
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Toggle the FAQ details
  const toggleFaqDetails = (index) =>
    setOpenFaqIndex(openFaqIndex === index ? null : index); // Toggle open/close
  return (
    <div>
      {/* Header Starts Here */}
      <header>
        <NavBar />
      </header>
      {/* Header Ends Here */}

      {/* Section 1 Starts Here */}
      <section>
        <div className="bg-[url(assets/images/oceanfreight.jpeg)] bg-cover h-[77vh] text-center">
          <h2 className="text-xl text-white font-bold pt-[18em]">
            Ocean Freight
          </h2>
        </div>
      </section>
      {/* Section 1 Ends Here */}

      {/* Section 2 Starts Here */}
      <section className="px-24 py-24">
        <div className="flex justify-between w-[100%] items-center pb-[4em]">
          <div className="w-[50%]">
            <h1 className="text-6xl font-bold pb-8">Ocean Freight</h1>
            <p className="pb-3">
              BrightLogistics offers comprehensive international shipping
              solutions, handling shipments of all sizes, from full container
              loads (FCL) to less than container loads (LCL), whether
              port-to-port or door-to-door. With over two decades of expertise
              in container shipping, we specialize in FCL, LCL, and reefer
              (refrigerated) containers. Our experts tailor supply chain
              strategies to meet your unique business needs, focusing on
              improving efficiency and reducing costs for a seamless shipping
              process.
            </p>
            <p className="pb-3">
              Whether you engage in importing or exporting LCL, FCL, or charter
              shipments, rest assured that BrightLogistics is your dependable
              partner for delivering a wide range of valuable services in the
              industry. You can have confidence in our strengths:
            </p>
            <li>
              <span>
                Innovative, tailor-made EDI programs crafted for worldwide
                operational efficiency: Global EDI Solutions.
              </span>
            </li>
            <li>
              <span>
                Tailored shipping solutions crafted to accommodate your distinct
                shipping requirements.
              </span>
            </li>
            <li>
              <span>
                Whether it's from your doorstep to your destination or from one
                port to another, we provide competitive pricing and dependable
                service.
              </span>
            </li>
            <li>
              <span>
                Global Communications Network - Accessible around the clock,
                every day of the week.
              </span>
            </li>
            <li>
              <span>
                Entrust your Customs Brokerage needs to us with absolute
                assurance – Our dedicated team collaborates closely with you to
                guarantee meticulous and precise handling of customs
                regulations, tariffs, and import/export prerequisites.
              </span>
            </li>

            <div className="pt-6 flex gap-4">
              <Link
                to="/signup"
                className="py-1 px-2 rounded-md bg-primary text-white font-bold hover:bg-white hover:text-secondary hover:font-bold">
                Ship Now
              </Link>
              <Link
                to="/getquote"
                className="py-1 px-2 rounded-md bg-secondary text-white font-bold hover:bg-tertiary hover:text-white hover:font-bold">
                Get Quote
              </Link>
            </div>
          </div>
          <div>
            <img
              src="https://cdn.thebeekman.com/wp-content/uploads/2022/06/07095051/Seaport-District-Pier-17.webp"
              alt=""
              className="w-[35vw] h-[70vh]  shadow-2xl shadow-gray-800 rounded-[50%]"
            />
          </div>
        </div>
      </section>
      {/* Section-2 Ends Here */}

      {/* Section-3 Starts Here */}
      <section className="px-24 py-32">
        <p className="text-6xl text-center font-bold pb-14">
          Our Ocean Freight Services
        </p>
        <div className="flex justify-between items-center w-[100%] pb-24">
          <div className="w-45%">
            <img
              src="https://www.maersk.com/~/media_sc9/maersk/news/press-releases/images/2024/02/12/maersk-airfreight_1024x576.jpg?w=877&hash=70D6CBFD46A0D598660AFB0B64B6F07D"
              alt=""
              className="w-[35vw] h-[40vh] rounded-[5%] bg-right-top"
            />
          </div>
          <div className="w-[55%]">
            <div className="border-2 border-tertiary w-[100%]">
              <div className="relative flex justify-between items-center pl-2 py-2 w-[100%] border-2 border-tertiary bg-tertiary">
                <p className="font-bold">Door to Door</p>
                <button
                  type="button"
                  className="absolute top-[-0.1em] right-[-3px] w-10 h-[45px]  bg-primary border-2 border-primary font-bold text-white text-xl text-center"
                  onClick={() => toggleFaqDetails(0)} // Toggle first FAQ
                >
                  {openFaqIndex === 0 ? "-" : "+"}
                </button>
              </div>
              {openFaqIndex === 0 && (
                <p className="p-2">
                  Operating from the United States, Uk, and Canada, we serve 155
                  countries by gathering your package and ensuring its direct
                  delivery to your designated recipient, including handling
                  Customs Clearance, at the ultimate destination.
                </p>
              )}
            </div>

            <div className="pt-4">
              <div className="relative flex justify-between items-center pl-2 py-2 w-[100%] border-2 border-tertiary bg-tertiary">
                <p className="font-bold">Door to Seaport</p>
                <button
                  type="button"
                  className="absolute top-[-0.1em] right-[-3px] w-10 h-[45px]  bg-primary border-2 border-primary font-bold text-white text-xl text-center"
                  onClick={() => toggleFaqDetails(1)}>
                  {openFaqIndex === 1 ? "-" : "+"}
                </button>{" "}
              </div>
              {openFaqIndex === 1 && (
                <p className="p-2">
                  We retrieve your package and arrange for its delivery to any
                  customs seaport across the globe. Upon its arrival at the
                  destination's local seaport, we promptly inform the recipient,
                  and simultaneously furnish you with a Proof-of-Arrival
                  notification.
                </p>
              )}
            </div>

            <div className="pt-4">
              <div className="relative flex justify-between items-center pl-2 py-2 w-[100%] border-2 border-tertiary bg-tertiary">
                <p className="font-bold">Seaport to Door</p>
                <button
                  type="button"
                  className="absolute top-[-0.1em] right-[-3px] w-10 h-[45px]  bg-primary border-2 border-primary font-bold text-white text-xl text-center"
                  onClick={() => toggleFaqDetails(2)}>
                  {openFaqIndex === 2 ? "-" : "+"}
                </button>
              </div>
              {openFaqIndex === 2 && (
                <p className="p-2">
                  The client is responsible for delivering all goods to our
                  warehouse, and from there, we handle direct delivery to your
                  consignee at the final destination, which includes Customs
                  Clearance services.
                </p>
              )}
            </div>

            <div className="pt-4">
              <div className="relative flex justify-between items-center pl-2 py-2 w-[100%] border-2 border-tertiary bg-tertiary">
                <p className="font-bold">Seaport to Seaport</p>
                <button
                  type="button"
                  className="absolute top-[-0.1em] right-[-3px] w-10 h-[45px]  bg-primary border-2 border-primary font-bold text-white text-xl text-center"
                  onClick={() => toggleFaqDetails(3)}>
                  {openFaqIndex === 3 ? "-" : "+"}
                </button>
              </div>
              {openFaqIndex === 3 && (
                <p className="p-2">
                  The client delivers their goods to our seaport office, from
                  where we arrange for the shipment to reach any customs seaport
                  worldwide. Upon arrival at the destination city, we promptly
                  inform the local consignee and furnish you with a
                  Proof-of-Arrival notification following confirmation of
                  check-in at the destination seaport.
                </p>
              )}
            </div>

            <div className="pt-4">
              <div className="relative flex justify-between items-center pl-2 py-2 w-[100%] border-2 border-tertiary bg-tertiary">
                <p className="font-bold">Supplementary Services</p>
                <button
                  type="button"
                  className="absolute top-[-0.1em] right-[-3px] w-10 h-[45px]  bg-primary border-2 border-primary font-bold text-white text-xl text-center"
                  onClick={() => toggleFaqDetails(4)}>
                  {openFaqIndex === 4 ? "-" : "+"}
                </button>
              </div>
              {openFaqIndex === 4 && (
                <ul className="p-2">
                  <li>
                    <span>Integration</span>
                  </li>
                  <li>Definitely Timed</li>
                  <li>Faster Delivery / Priority Airlif</li>
                  <li>
                    Tailored aircraft charter solutions to accommodate your
                    unique requirements, whether for full or partial bookings.
                  </li>
                  <li>
                    Manual Delivery and Courier Services available for numerous
                    destinations
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Section-3 Ends Here */}

      {/* Footer Starts Here  */}
      <Footer />
      {/* Footer Ends Here  */}
    </div>
  );
}
