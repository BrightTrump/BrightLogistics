import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Faqs() {
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
        <div className="bg-[url(https://mll5eakftz0f.i.optimole.com/cb:1V_b.1a2e8/w:1100/h:650/q:mauto/f:best/https://atoshipping.com/wp-content/uploads/2022/11/1100-x-650-Plane-In-Air.png)] bg-cover h-[77vh] text-center">
          <h2 className="text-xl text-blaq font-bold pt-[10em]">FAQS</h2>
        </div>
      </section>
      {/* Section 1 Ends Here */}

      {/* Section-2 Starts Here */}
      <section className="px-24 py-32">
        <p className="text-6xl text-center font-bold pb-14">
          Our Air Freight services
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
                  Operating from the United States, we serve 155 countries by
                  gathering your package and ensuring its direct delivery to
                  your designated recipient, including handling Customs
                  Clearance, at the ultimate destination.
                </p>
              )}
            </div>

            <div className="pt-4">
              <div className="relative flex justify-between items-center pl-2 py-2 w-[100%] border-2 border-tertiary bg-tertiary">
                <p className="font-bold">Door to Airport</p>
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
                  customs airport across the globe. Upon its arrival at the
                  destination's local airport, we promptly inform the recipient,
                  and simultaneously furnish you with a Proof-of-Arrival
                  notification.
                </p>
              )}
            </div>

            <div className="pt-4">
              <div className="relative flex justify-between items-center pl-2 py-2 w-[100%] border-2 border-tertiary bg-tertiary">
                <p className="font-bold">Airport to Door</p>
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
                <p className="font-bold">Airport to Airport</p>
                <button
                  type="button"
                  className="absolute top-[-0.1em] right-[-3px] w-10 h-[45px]  bg-primary border-2 border-primary font-bold text-white text-xl text-center"
                  onClick={() => toggleFaqDetails(3)}>
                  {openFaqIndex === 3 ? "-" : "+"}
                </button>
              </div>
              {openFaqIndex === 3 && (
                <p className="p-2">
                  The client delivers their goods to our airport office, from
                  where we arrange for the shipment to reach any customs airport
                  worldwide. Upon arrival at the destination city, we promptly
                  inform the local consignee and furnish you with a
                  Proof-of-Arrival notification following confirmation of
                  check-in at the destination airport.
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
                  <li>Integration</li>
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
      {/* Section-2 Ends Here */}
      {/* Footer Starts Here  */}
      <Footer />
      {/* Footer Ends Here */}
    </div>
  );
}
