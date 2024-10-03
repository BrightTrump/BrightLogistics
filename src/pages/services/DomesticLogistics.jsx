import React from "react";
import NavBar from "../../components/NavBar";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import {
  FaPeopleGroup,
  FaTaxi,
  FaTruck,
  FaTruckFast,
  FaTruckMedical,
  FaTruckMonster,
} from "react-icons/fa6";

export default function DomesticLogistics() {
  return (
    <div>
      {/* Header Starts Here */}
      <header className="navbar">
        <NavBar />
      </header>
      {/* Header Ends Here */}

      {/* Section 1 Starts Here */}
      <section>
        <div className="bg-[url(https://www.guruanjaneyaalogistics.com/image/slide2.jpg)] bg-cover h-[77vh] text-center">
          <h2 className="text-xl text-secondary font-bold pt-[12em]">
            Domestic Logistics
          </h2>
        </div>
      </section>
      {/* Section 1 Ends Here */}

      {/* Section 2 Starts Here */}
      <section className="px-24 py-24">
        <div className="flex gap-8 items-center pb-[4em]">
          <div>
            <img
              src="../../assets/images/domestic.png"
              alt=""
              className="w-[50vw] h-[58vh] rounded-xl shadow-2xl shadow-gray-800"
            />
          </div>
          <div className="max-w-[550px]">
            <p className="pb-3">
              As a seasoned logistics company, we focus on key strategic
              locations to meet your needs. With over 140 owned experience
              centers across Nigeria, we ensure nationwide coverage, fast
              deliveries, and convenient access to services.
            </p>
            <p className="pb-3">
              We offer a range of delivery options at unbeatable rates. Whether
              sending parcels within your city or across states, BLI Logistics
              provides affordable courier services to all 36 states, including
              the FCT. Plus, our Same Day Delivery comes with the lowest prices
              nationwide!
            </p>
            <p className="pb-3">
              Our domestic courier service offers personalized parcel pickup and
              doorstep delivery at your convenience. Request via the BLI App,
              online, or at any of our centers. Our team is here to provide the
              best solutions for you.
            </p>
            <p className="pb-3">
              Experience seamless domestic shipping services with BLI Logistics
              today.
            </p>

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
        </div>
      </section>
      {/* Section-2 Ends Here */}

      {/* Section-3 Starts Here */}
      <section className="px-24 py-10">
        <p className="text-3xl text-center font-bold pb-20">
          Our Dedicated Offerings to You
        </p>
        <div className="flex gap-9 flex-wrap w-[100%] pb-16">
          <div className="w-[30%]">
            <FaTaxi className="text-black text-4xl" />
            <h2 className="font-bold py-6 text-secondary">Priority Shipping</h2>
            <p>
              Technology and its application are fundamental at BLI. We
              understand the role of technology in providing an exceptional
              customer experience. For this reason, our processes, products and
              services are built around modern technology to help us deliver
              your shipments cheaper, safely and at the speed of light.
            </p>
          </div>
          <div className="w-[30%] pb-4">
            <FaTruckMedical className="text-4xl" />
            <h2 className="font-bold py-6 text-secondary">Express Drop-Off</h2>
            <p>
              We know time is precious, and we're here to help you save it. Skip
              the queues at our experience centres and reduce the time needed to
              process your shipments. Our Express Drop-Off service allows you to
              fast-track the shipment of your items using the BLI App.
            </p>
          </div>

          <div className="w-[30%]">
            <FaPeopleGroup className=" text-4xl" />
            <h2 className="font-bold py-6 text-secondary">BLI Partners</h2>
            <p>
              At BLI Logistics, we are committed to creating opportunities for
              wealth distribution. Through this partnership, you can earn
              substantial income on the side. Our primary requirements are a
              functional vehicle, fit for purpose, and a qualified rider. We
              bring business your way and split the profits.
            </p>
          </div>

          <div className="pb-4 w-[30%]">
            <FaTruck className="text-4xl" />
            <h2 className="font-bold py-6 text-secondary">
              BLI Last-Mile Delivery
            </h2>
            <p>
              Distance is no barrier. We will pick up items from your doorstep
              and make special arrangements to deliver exactly to the locations
              you request, no matter how far. Our experienced dispatch riders
              are also available for same-day deliveries.
            </p>
          </div>
          <div className="w-[30%]">
            <FaTruckFast className="text-black text-4xl" />
            <h2 className="font-bold py-6 text-secondary">
              Moving & Relocation Services
            </h2>
            <p>
              Creating personalized logistics services is at the core of what we
              do. We have dedicated trucks & vans to help you move items safely
              from your home or office. No matter the size of your items, we
              will move them.
            </p>
          </div>
          <div className="w-[30%]">
            <FaTruckMonster className="text-black text-4xl" />
            <h2 className="font-bold py-6 text-secondary">
              Specialized Freight
            </h2>
            <p>
              You can confidently trust our operational capabilities. We are
              experts at moving high-value and sensitive equipment across
              diverse industries including Medical, Laboratory, Communications &
              Broadcasting, Data Processing sectors, and High-tech Computers.
            </p>
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
