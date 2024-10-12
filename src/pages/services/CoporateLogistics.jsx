import React from "react";
import NavBar from "../../components/NavBar";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import {
  FaHandsHolding,
  FaMessage,
  FaPlane,
  FaTruckArrowRight,
  FaTruckMedical,
  FaWarehouse,
} from "react-icons/fa6";

export default function CoporateLogistics() {
  return (
    <div>
      {/* Header Starts Here */}
      <header className="navbar">
        <NavBar />
      </header>
      {/* Header Ends Here */}

      {/* Section 1 Starts Here */}
      <section>
        <div className="bg-[url(../assets/images/coporate.webp)] bg-cover h-[77vh] text-center">
          <h2 className="text-xl text-secondary font-bold pt-[12em]">
            Coporate Logistics
          </h2>
        </div>
      </section>
      {/* Section 1 Ends Here */}

      {/* Section 2 Starts Here */}
      <section className="px-24 py-24">
        <div className="flex gap-8 items-center pb-[4em]">
          <div>
            <img
              src="https://afplus.com/wp-content/uploads/2023/02/The-Basics-of-Logistics-for-Corporate-Events.jpg"
              alt=""
              className="w-[50vw] h-[60vh] rounded-xl shadow-2xl shadow-gray-800"
            />
          </div>
          <div className="max-w-[550px]">
            <p className="pb-3">
              Backed by our strategic partnerships, international network,
              expansive reach, technological innovation, and seamless customer
              experience, our corporate logistics service is a quality choice
              you can confidently trust. Leading organizations such as SWISS
              PHARMACEUTICALS, MINISO, and BEIERSDORF NIVEA have established
              working partnerships with us, supported by our proven track record
              of credibility.
            </p>
            <p className="pb-3">
              We recognise the critical role of efficient logistics in your
              business. Therefore, we align our services with your corporate
              objectives to provide a cost plan that is both fair and
              budget-friendly.
            </p>
            <p className="pb-3">
              Our services cater to businesses across various industries and can
              be booked on demand. Our team of dedicated experts will handle
              your requests with meticulous detail and precision.
            </p>

            <div className="pt-6">
              {/* <button
                type="button"
                onClick={alert}
                className="py-1 px-2 rounded-md bg-primary text-white font-bold hover:bg-white hover:text-secondary hover:font-bold">
                Ship Now
              </button> */}
              <Link
                to="/merchantsignup"
                target="_blank"
                className="py-2 px-3 rounded-md bg-secondary text-white font-bold hover:bg-primary hover:text-white hover:font-bold">
                Sign Up as a Coporate Partner
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
            <FaPlane className="text-black text-4xl" />
            <h2 className="font-bold py-6 text-secondary">
              Personalized Overseas Services
            </h2>
            <p>
              Ship items directly into and out of Nigeria hassle-free. You can
              easily arrange for inbound and outbound delivery through the
              customized services we provide. BLI also provides special
              packaging services and transport solutions for companies within
              the technology sector.
            </p>
          </div>
          <div className="w-[30%] pb-4">
            <FaTruckArrowRight className="text-4xl" />
            <h2 className="font-bold py-6 text-secondary">
              Haulage and Freight services
            </h2>
            <p>
              Our diverse fleet supports both Full Truck Load (FTL) and Less
              than Truck Load (LTL) shipments, offering a wide range of services
              across industries. We provide a flexible, pay-as-you-use model
              with competitive discounts, serving key sectors like agriculture,
              manufacturing, and specialized projects, including the transport
              of pipes and crane equipment.
            </p>
          </div>
          <div className="w-[30%]">
            <FaTruckMedical className=" text-4xl" />
            <h2 className="font-bold py-6 text-secondary">Pharma Logistics</h2>
            <p>
              We fully understand the sensitive and time-critical nature of
              medical shipments. Our approach to medical courier services is
              tailored to provide personalised healthcare logistics solutions
              for hospitals, laboratories, and the pharmaceutical industry.
            </p>
          </div>

          <div className="pb-4 w-[30%]">
            <FaWarehouse className="text-4xl" />
            <h2 className="font-bold py-6 text-secondary">
              Warehousing & Inventory Management
            </h2>
            <p>
              Here at BLI, we manage large distribution networks for our
              internal operations. This first-hand experience sharpens our
              detailed insight, to help us find the perfect solution for your
              business. We are experts in the movement of goods across
              suppliers, vendors, and customers. Tell us what you need.
            </p>
          </div>
          <div className="w-[30%]">
            <FaMessage className="text-black text-4xl" />
            <h2 className="font-bold py-6 text-secondary">
              Mail Room Services
            </h2>
            <p>
              For larger companies requiring inter-office mail delivery, BLI
              provides comprehensive Mail Room services. Our couriers will
              collect and distribute office mail daily or twice daily, following
              your precise instructions.
            </p>
          </div>
          <div className="w-[30%]">
            <FaHandsHolding className="text-black text-4xl" />
            <h2 className="font-bold py-6 text-secondary">
              Logistics Consultancy
            </h2>
            <p>
              Need expert advice on managing logistics? Contact us for guidance
              on optimising your logistics operations. We provide comprehensive,
              efficient solutions designed to deliver results for your business.
              Our services cater to organisations of all sizes—small, medium,
              and large.
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
