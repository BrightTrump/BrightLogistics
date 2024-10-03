import React from "react";
import NavBar from "../../components/NavBar";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { FaGoogleWallet, FaMoneyBills, FaWallet } from "react-icons/fa6";

export default function AirFreight() {
  const pageName = "Home";
  const pageUrl = "/";
  return (
    <div>
      {/* Header Starts Here */}
      <header className="navbar">
        <NavBar />
      </header>
      {/* Header Ends Here */}

      {/* Section 1 Starts Here */}
      <section>
        <div className="bg-[url(https://mll5eakftz0f.i.optimole.com/cb:1V_b.1a2e8/w:1100/h:650/q:mauto/f:best/https://atoshipping.com/wp-content/uploads/2022/11/1100-x-650-Plane-In-Air.png)] bg-cover h-[77vh] text-center">
          <h2 className="text-xl text-secondary font-bold pt-[10em]">
            Air Freight
          </h2>
        </div>
      </section>
      {/* Section 1 Ends Here */}

      {/* Section 2 Starts Here */}
      <section className="px-24 py-24">
        <div className="flex gap-[8em] items-center pb-[4em]">
          <div className="max-w-[550px]">
            <h1 className="text-6xl font-bold pb-2">Air Freight</h1>
            <p className="pb-3">
              While air freight generally comes at a higher cost compared to
              road or sea freight, it stands as the optimal choice when
              prioritizing swift and secure deliveries. This holds particularly
              true in scenarios where you must transport delicate, perishable,
              or time-critical items, or when facing pressing deadlines. The
              advantages of opting for air freight over road or sea alternatives
              encompass:
            </p>
            <li>
              <span>
                Enhanced management of deliveries, thanks to shorter transit
                durations.
              </span>
            </li>
            <li>
              <span>
                Diminished the necessity for expenditures on labor and packaging
                expenses.
              </span>
            </li>
            <li>
              <span>
                Reduced likelihood of goods being damaged, stolen, or lost.
              </span>
            </li>
            <li>
              <span>
                In certain instances, reduced insurance premiums result from
                decreased exposure to risk
              </span>
            </li>
            <p className="">
              Irrespective of the shipment's size, Bright Logistics
              International is dedicated to ensuring its timely delivery to its
              destination. At Logisco, we treat your parcel deliveries with the
              same level of care and professionalism as we do with major freight
              shipments
            </p>

            <div className="pt-6 flex gap-4">
              <button
                type="button"
                onClick={alert}
                className="py-1 px-2 rounded-md bg-primary text-white font-bold hover:bg-white hover:text-secondary hover:font-bold">
                Ship Now
              </button>
              {/* <Link
                to="/merchantsignup"
                target="_blank"
                className="py-2 px-3 rounded-md bg-secondary text-white font-bold hover:bg-primary hover:text-white hover:font-bold">
                Sign Up as a Coporate Partner
              </Link> */}
            </div>
          </div>
          <div>
            <img
              src="https://www.nindelivers.com/wp-content/uploads/2019/04/air-freight.jpeg"
              alt=""
              className="w-[45vw] h-[72vh]  shadow-2xl shadow-gray-800 rounded-[50%]"
            />
          </div>
        </div>
      </section>
      {/* Section-2 Ends Here */}

      {/* Section-3 Starts Here */}
      <section className="px-24">
        <p className="text-6xl font-bold pb-14">Our Air Freight services</p>
        <div className="flex gap-12 items-center w-[100%] pb-24">
          <div className="">
            <img
              src="https://www.maersk.com/~/media_sc9/maersk/news/press-releases/images/2024/02/12/maersk-airfreight_1024x576.jpg?w=877&hash=70D6CBFD46A0D598660AFB0B64B6F07D"
              alt=""
              className="w-[40vw] h-[70vh] rounded-[5%]"
            />
          </div>
          <div className="w-[40%]">
            <div class="faq-sub-container">
              <div class="faq-item">
                <button class="expand-button faq-button" id="faq-button">
                  +
                </button>
                <p class="faq-content">Door to Door</p>
              </div>
              <p class="faq-button-ans faq-active">
                Operating from the United States, we serve 155 countries by
                gathering your package and ensuring its direct delivery to your
                designated recipient, including handling Customs Clearance, at
                the ultimate destination.
              </p>
            </div>
            <div class="faq-sub-container">
              <div class="faq-item">
                <button class="expand-button faq-button" id="faq-button">
                  +
                </button>
                <p class="faq-content">Door to Airport</p>
              </div>
              <p class="faq-button-ans">
                We retrieve your package and arrange for its delivery to any
                customs airport across the globe. Upon its arrival at the
                destination's local airport, we promptly inform the recipient,
                and simultaneously furnish you with a Proof-of-Arrival
                notification.
              </p>
            </div>

            <div class="faq-sub-container">
              <div class="faq-item">
                <button class="expand-button faq-button" id="faq-button">
                  +
                </button>
                <p class="faq-content">Airport to Door</p>
              </div>
              <p class="faq-button-ans">
                The client is responsible for delivering all goods to our
                warehouse, and from there, we handle direct delivery to your
                consignee at the final destination, which includes Customs
                Clearance services.
              </p>
            </div>
            <div class="faq-sub-container">
              <div class="faq-item">
                <button class="expand-button faq-button" id="faq-button">
                  +
                </button>
                <p class="faq-content">Airport to Airport</p>
              </div>
              <p class="faq-button-ans">
                The client delivers their goods to our airport office, from
                where we arrange for the shipment to reach any customs airport
                worldwide. Upon arrival at the destination city, we promptly
                inform the local consignee and furnish you with a
                Proof-of-Arrival notification following confirmation of check-in
                at the destination airport.
              </p>
            </div>
            <div class="faq-sub-container">
              <div class="faq-item">
                <button class="expand-button faq-button" id="faq-button">
                  +
                </button>
                <p class="faq-content">Supplementary Services</p>
              </div>
              <ul class="faq-button-ans">
                <li>Integration</li>
                <li>Definitely Timed</li>
                <li>Faster Delivery / Priority Airlif</li>
                <li>
                  Tailored aircraft charter solutions to accommodate your unique
                  requirements, whether for full or partial bookings.
                </li>
                <li>
                  Manual Delivery and Courier Services available for numerous
                  destinations
                </li>
              </ul>
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
