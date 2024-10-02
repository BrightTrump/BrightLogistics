import React from "react";
import NavBar from "../../components/NavBar";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import {
  FaHandHolding,
  FaPeopleGroup,
  FaSackDollar,
  FaTruck,
  FaTruckArrowRight,
  FaTruckMonster,
  FaWallet,
} from "react-icons/fa6";
import { FaTruckLoading } from "react-icons/fa";

export default function EcommerceLogistics() {
  return (
    <div>
      {/* Header Starts Here */}
      <header className="navbar">
        <NavBar />
      </header>
      {/* Header Ends Here */}

      {/* Section 1 Starts Here */}
      <section>
        <div className="bg-[url(https://mecaluxcom.cdnwm.com/documents/20128/519873/M27P12+e-logistica.jpg/171a2817-d0bd-7906-e64a-4a11f70c6085?t=1668587884668&e=jpg)] bg-cover h-[77vh] text-center">
          <h2 className="text-3xl text-secondary font-bold pt-[8em]">
            Ecommerce Logistics
          </h2>
        </div>
      </section>
      {/* Section 1 Ends Here */}

      {/* Section 2 Starts Here */}
      <section className="px-24 py-24">
        <div className="flex gap-8 pb-[4em]">
          <div>
            <img
              src="../../assets/images/shipping12.jpg"
              alt=""
              className="w-[50vw] h-[60vh] rounded-xl shadow-2xl shadow-gray-800"
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
              {/* <Link
                to="/signup"
                className="py-1 px-2 rounded-md bg-primary text-white font-bold hover:bg-white hover:text-secondary hover:font-bold">
                Ship Now
              </Link> */}
              <Link
                to="/merchantsignup"
                target="_blank"
                className="py-2 px-3 rounded-md bg-secondary text-white font-bold hover:bg-primary hover:text-white hover:font-bold">
                Sign Up as a Merchant
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Section-2 Ends Here */}

      {/* Section-3 Starts Here */}
      <section className="px-24 py-4">
        <p className="text-3xl text-center font-bold pb-20">
          Our Dedicated Offerings to You
        </p>
        <div className="flex gap-9 w-[100%] pb-16">
          <div className="w-[30%]">
            <FaWallet className="text-black text-4xl" />
            <h2 className="font-bold py-6 text-secondary">BLI Wallet</h2>
            <p>
              Pay for transactions ahead of time and easily too in a few clicks.
              With a fully-funded wallet on your BLI App, you can pay for all
              your transactions with BLI. Save yourself the stress of commuting
              to our walk-in centres or dealing with the limitations that come
              with other forms of payments.
            </p>
          </div>
          <div className="w-[30%] pb-4">
            <FaHandHolding className="text-4xl" />
            <h2 className="font-bold py-6 text-secondary">
              The BLI Class Plan
            </h2>
            <p>
              The GIGL Class Plan provides your business with the vital support
              you need to offer premium delivery services to your customers. You
              get to enjoy up to 20% discount on domestic shipping fees, free
              insurance cover, and more.
            </p>
          </div>
          <div className="w-[30%]">
            <FaSackDollar className=" text-4xl" />
            <h2 className="font-bold py-6 text-secondary">
              Cash on Delivery Services
            </h2>
            <p>
              Customer satisfaction is our priority. Our Cash on Delivery
              service offers a convenient payment option, allowing customers to
              inspect products before paying. We collect payment on your behalf
              at the customer's doorstep or our experience centers and transfer
              it directly to your bank account.
            </p>
          </div>
        </div>
      </section>
      {/* Section-3 Ends Here */}

      {/* Section-4 Starts Here */}
      <section className="px-24 py-4">
        <p className="text-3xl text-center font-bold pb-20">How We Work</p>
        <div className="flex flex-wrap gap-9 w-[100%] pb-16">
          <div className="w-[30%]">
            <FaTruck className="text-black text-4xl" />
            <h2 className="font-bold py-6 text-secondary">Same Day Delivery</h2>
            <p>
              GIG Logistics Same Day Delivery Services is the perfect choice for
              time-bound shipments intended for either pick-up or delivery. As
              the standard for logistics in Nigeria, our same day courier
              service is fast, reliable and easy to use.
            </p>
          </div>
          <div className="w-[30%] pb-4">
            <FaTruckLoading className="text-4xl" />
            <h2 className="font-bold py-6 text-secondary">Next Day Delivery</h2>
            <p>
              Our Next Day Delivery service isn't just swift but also
              affordable. Efficient express delivery will gain more customer
              trust for your business and improve your brand appeal. This
              service is perfect for SMEs looking to satisfy their customers and
              gain a competitive edge.
            </p>
          </div>
          <div className="w-[30%]">
            <FaSackDollar className=" text-4xl" />
            <h2 className="font-bold py-6 text-secondary">
              Cash on Delivery Services
            </h2>
            <p>
              The Cash on Delivery Service guarantees secure payment for your
              goods from customers who prefer physical inspection of items upon
              delivery before payment. Increase patronage for your brand with
              this service, latching on the absolute convenience it offers your
              customer. Simply indicate an option for electronic payment as well
              Cash on Delivery on your online store.
            </p>
          </div>
          <div className="w-[30%]">
            <FaTruckMonster className="text-black text-4xl" />
            <h2 className="font-bold py-6 text-secondary">
              Reverse Logistics Service
            </h2>
            <p>
              Our Reverse Logistics Service manages items returned to or within
              Lagos, whether rejected or not picked up by your customer or
              another third party. We offer three free delivery attempts;
              subsequent attempts will incur charges based on the delivery zone.
            </p>
          </div>
          <div className="w-[30%] pb-4">
            <FaTruckArrowRight className="text-4xl" />
            <h2 className="font-bold py-6 text-secondary">
              Last-Mile Delivery
            </h2>
            <p>
              When it comes to delivering that package to the literal last mile,
              our Last-Mile delivery solution is what you need. With our
              extensive network, we can reach your customers and suppliers in
              the most rural and difficult-to-access locations where most
              delivery companies in Nigeria refuse to go.
            </p>
          </div>
          <div className="w-[30%]">
            <FaPeopleGroup className=" text-4xl" />
            <h2 className="font-bold py-6 text-secondary">
              Hold For Collection Service
            </h2>
            <p>
              Our Hold for Collection Service ensures that your customers don't
              have to wait at home to receive their parcels, nor will they ever
              miss a delivery. This on-demand service allows us to deliver your
              parcel for pick-up at a BLI experience centre in your selected
              destination and notify you immediately upon its arrival.
            </p>
          </div>
        </div>
      </section>
      {/* Section-4 Ends Here */}

      {/* Footer Starts Here  */}
      <Footer />
      {/* Footer Ends Here  */}
    </div>
  );
}
