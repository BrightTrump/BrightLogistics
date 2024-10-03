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

export default function PetTransport() {
  return (
    <div>
      {/* Header Starts Here */}
      <header className="navbar">
        <NavBar />
      </header>
      {/* Header Ends Here */}

      {/* Section 1 Starts Here */}
      <section>
        <div className="bg-[url(https://5.imimg.com/data5/SELLER/Default/2023/9/344084295/TN/MG/SZ/197027483/pet-transportation-services.jpg)] bg-cover h-[77vh] text-center">
          <h2 className="text-xl text-secondary font-bold pt-[12em]">
            Pet Transportation
          </h2>
        </div>
      </section>
      {/* Section 1 Ends Here */}

      {/* Section 2 Starts Here */}
      <section className="px-24 py-24">
        <div className="flex gap-8 items-center pb-[4em]">
          <div>
            <img
              src="../../assets/images/pet.png"
              alt=""
              className="w-[50vw] h-[58vh] rounded-xl shadow-2xl shadow-gray-800"
            />
          </div>
          <div className="max-w-[550px]">
            <p className="pb-3">
              We also offer shipment of pets to all part of the world. As a
              seasoned logistics company, we focus on key strategic locations to
              meet your needs. With over 140 owned experience centers across
              Nigeria, we ensure nationwide coverage, fast deliveries, and
              convenient access to services.
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
                to="/getquote"
                className="py-1 px-2 rounded-md bg-secondary text-white font-bold hover:bg-tertiary hover:text-white hover:font-bold">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-8 items-center pb-[4em]">
          <div className="max-w-[550px]">
            <p className="pb-3">
              The safety, comfort, and reliability for both the pets and their
              owners is essential to us hence, the prioritizing of pet safety
              and comfort as well thereby providing secure and well equipped
              vehicles, trained staffs, and comfortable spaces for the
              successful delivery of pets.
            </p>
            <p className="pb-3">
              We understand legal and regulatory requirements which includes
              licensing and certification, compliance and insurance.
            </p>
            <p className="pb-3">
              We develop effective communication with our customers as well as
              partner with Vets and Pet Stores. Professionalism is a neccessity
              in our organization.
            </p>
            <p className="">
              Our pricing options are pocket friendly as well as flexible
              payment option and our services are top-notch.
            </p>

            <div className="pt-6 flex gap-4">
              <Link
                to="/signup"
                className="py-1 px-2 rounded-md bg-primary text-white font-bold hover:bg-white hover:text-secondary hover:font-bold">
                Ship Now
              </Link>
            </div>
          </div>
          <div>
            <img
              src="../../assets/images/pet2.jpg"
              alt=""
              className="w-[50vw] h-[58vh] rounded-xl shadow-2xl shadow-gray-800"
            />
          </div>
        </div>
      </section>
      {/* Section-2 Ends Here */}

      {/* Footer Starts Here  */}
      <Footer />
      {/* Footer Ends Here  */}
    </div>
  );
}
