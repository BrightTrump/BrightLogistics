import React from "react";
import NavBar from "../../components/NavBar";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { FaPlane, FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa6";

export default function OverseasShipping() {
  return (
    <div>
      {/* Header Starts Here */}
      <header className="navbar">
        <NavBar />
      </header>
      {/* Header Ends Here */}

      {/* Section 1 Starts Here */}
      <section>
        <div className="bg-[url(https://caspian-container.ch/storage/app/uploads/public/64b/52a/70a/64b52a70a6f6c134201268.jpg)] bg-cover h-[77vh] text-center">
          <h2 className="text-xl text-secondary font-bold pt-[12em]">
            Overseas Shipping
          </h2>
        </div>
      </section>
      {/* Section 1 Ends Here */}

      {/* Section 2 Starts Here */}
      <section className="px-24 py-24">
        <div className="flex gap-8 items-center pb-[4em]">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMYRD3dZSNmjwr2n0pnznAPTDbkKkHYJ4AlA&s"
              alt=""
              className="w-[50vw] h-[58vh] rounded-xl shadow-2xl shadow-gray-800"
            />
          </div>
          <div className="max-w-[550px]">
            <p className="pb-3 font-bold text-2xl">
              Ship Anything, Anywhere, Anytime…
            </p>
            <p className="pb-3">
              Shipping internationally can be challenging with long delivery
              times and various restrictions. At BLI, we bridge this gap by
              offering seamless, fast, and efficient overseas shipping services
              from Nigeria to destinations worldwide and back.
            </p>
            <p className="pb-3">
              By leveraging our robust network, expanding global footprint, and
              innovative technology, we make it easy to ship and receive items
              from any city around the globe—whether it's Dubai, the UK, the
              USA, Canada, Germany, Ghana, or beyond. Start shipping today at
              any of our experience centres or by downloading the{" "}
              <Link to="https://play.google.com/store/apps/" target="_blank">
                <span className="text-[1em] text-secondary underline">
                  BLI App
                </span>
              </Link>
              .
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
        <h3 className="text-3xl text-center font-bold pb-2">
          Our Dedicated Offerings to You
        </h3>
        <p className=" text-center pb-20">
          Regardless of your item, its quantity or size, just add to cart, we
          will deliver
        </p>
        <div className="flex gap-9 flex-wrap w-[100%] h-[60vh] pb-16 overflow-scroll">
          <div className="w-[30%]">
            <FaPlaneDeparture className="text-black text-4xl" />
            <h2 className="font-bold py-6 text-secondary">
              Imports - Inbound Shipping (UK)
            </h2>
            <p className="pb-3">
              No more restricted shipping from stores in the UK such as Tesco,
              ASDA, Sainsbury, Primark. BL will ship all your items to Nigeria &
              Ghana, promptly and efficiently. For more convenience, you can
              shop and ship directly from the UK using the Overseas Shipping
              feature on the{" "}
              <Link to="https://play.google.com/store/apps/" target="_blank">
                <span className="text-[1em] text-secondary underline">
                  BLI App
                </span>
              </Link>
            </p>
            <p className="pb-3">
              You can visit our London experience centre or shop and ship
              directly from the UK using the Oversea Shipping feature on the{" "}
              <Link to="https://play.google.com/store/apps/" target="_blank">
                <span className="text-[1em] text-secondary underline">
                  BLI App.
                </span>
              </Link>{" "}
              You will receive your order at your doorstep, anywhere in Nigeria
              (within 3– 5 business days) with our competitive shipping rates at
              £5.10/kg. There will be Additional 5£ for Shipments delivered
              outside lagos (Similar to Canada)
            </p>
            <p className="pb-3">
              There will be fixed price for New Gadgets - 70£
            </p>
            <p className="pb-3">
              There will be fixed price for used Gadgets - 50£ (Weight will not
              be considered only Quantity)
            </p>
            <p className="">
              There will be no minimum amount for Insurance, Any value will have
              5% insurance. (Currently has minimum to add insurance).
            </p>
          </div>
          <div className="w-[30%] pb-4">
            <FaPlane className="text-4xl" />
            <h2 className="font-bold py-6 text-secondary">
              Import - Inbound Shipping (The USA)
            </h2>
            <p className="pb-3">
              No more restricted shipping from stores such as Amazon, ebay,
              Costco, and Walmart in the USA to Nigeria. BL will ship all your
              items into Nigeria, promptly and efficiently.
            </p>
            <p className="pb-3">
              You can visit our{" "}
              <Link to="" target="_blank">
                <span className="text-[1em] text-secondary underline">
                  Houston experience centre
                </span>
              </Link>{" "}
              or shop and ship directly from the USA using the Overseas Shipping
              feature on the{" "}
              <Link to="https://play.google.com/store/apps/" target="_blank">
                <span className="text-[1em] text-secondary underline">
                  BLI App
                </span>
              </Link>
            </p>
            <p className="pb-3">
              You will receive your order at your doorstep, anywhere in Nigeria
              (within 7 - 14 working days) with our competitive shipping rates
              at $4.49/lb.
            </p>
            <p className="pb-3">
              There will be additional $5 flat fee charged for Shipments
              delivered outside lagos (Similar to Canada).
            </p>
            <p className="pb-3">
              There will be fixed price for New Gadgets - $100
            </p>
            <p className="pb-3">
              There will be fixed price for used Gadgets - $60 (Weight will not
              be considered only Quantity)
            </p>
          </div>
          <div className="w-[30%]">
            <FaPlaneArrival className=" text-4xl" />
            <h2 className="font-bold pt-6 text-secondary">
              To ship from the UK/US to Nigeria with the BLI App
            </h2>
            <p className="pb-2">Follow these easy steps:</p>
            <p>• Log into the BLI App.</p>
            <p>• Click 'Send to Nigeria'.</p>
            <p>• Choose UK/US from the countries listed.</p>
            <p>
              • Copy our UK/US address and paste it as your delivery address on
              the store’s checkout page.
            </p>
            <p>• Return to the BLI App.</p>
            <p>• Fill the item & delivery details.</p>
            <p>• Choose your preferred means of identification.</p>
            <p>
              • That’s all. Your item will be delivered to you in a few days.
            </p>
          </div>

          <div className="w-[30%]">
            <FaPlaneDeparture className="text-black text-4xl" />
            <h2 className="font-bold py-6 text-secondary">
              Import - Inbound Shipping (CHINA)
            </h2>
            <p className="pb-3">
              No more restricted shipping from Chinese stores such as DHgate,
              Taobao, 1688.com and Alibaba. BL will ship all your items to
              Nigeria, promptly and efficiently.
            </p>
            <p className="pb-3">
              For your convenience, GIGL can shop and ship for you or deliver
              your shopped items using the Overseas Shipping feature on the{" "}
              <Link to="https://play.google.com/store/apps/" target="_blank">
                <span className="text-[1em] text-secondary underline">
                  BLI App.
                </span>
              </Link>{" "}
              Or you can simply drop your items for shipping at our{" "}
              <Link to="" target="_blank">
                <span className="text-[1em] text-secondary underline">
                  China Warehouse address
                </span>
              </Link>{" "}
            </p>
            <p className="pb-3">
              You can consolidate your items, pay in NAIRA and receive your
              items at your doorstep, anywhere in Nigeria.
            </p>
            <p className="pb-3">
              For shopping & shipping assistance, Chat KIM @ +234 913 9346 234
            </p>

            {/* Shipping Guidelines */}
            <h2 className="font-bold pt-4 text-secondary">
              To ship from Nigeria to 230+ locations worldwide with the GIGGo
              App, follow these easy steps:
            </h2>
            <p className="pb-2">Follow these easy steps:</p>
            <p>• Log into the BLI App.</p>
            <p>• Click 'Send to Abroad'.</p>
            <p>• Fill in the Sender's and Receiver's information.</p>
            <p>• Select package type and fill item details.</p>
            <p>• Choose your preffered pickup vehicle.</p>
            <p>
              • Enter other required details and choose your means of
              identification.
            </p>
            <p>
              • That’s all. Your item will be delivered to you in a few days.
            </p>
          </div>
          <div className="w-[30%] pb-4">
            <FaPlane className="text-4xl" />
            <h2 className="font-bold py-6 text-secondary">
              Export-Outbound Shipping
            </h2>
            <p className="pb-3">
              Ship your items from Nigeria to over 230 locations worldwide,
              including the UK, Canada, USA, China, and Germany.
            </p>
            <p className="pb-3">
              We recognize the pivotal role homegrown brands play in Nigeria’s
              commerce. Guided by this, our outbound shipping service is
              designed to boost the export value chain by connecting small
              businesses with international markets.
            </p>
            <p className="pb-3">
              Our services are not marginalized, we also cater to individual
              customers.
            </p>
            <p className="pb-3">
              At the cheapest rates and within the fastest delivery timelines,
              you can send items out of Nigeria directly, to more than 230
              locations worldwide from any of our 140+ experience centres across
              the country.
            </p>
            <p className="pb-3">
              The possibilities are endless with our expansive network and
              strategic global partnerships. Simply walk into any of our{" "}
              <Link to="/contactus" target="_blank">
                <span className="text-[1em] text-secondary underline">
                  centers
                </span>
              </Link>{" "}
              or ship your items conveniently by downloading the{" "}
              <Link to="https://play.google.com/store/apps/" target="_blank">
                <span className="text-[1em] text-secondary underline">
                  BLI App
                </span>
              </Link>
            </p>
          </div>
          <div className="w-[30%]">
            <FaPlaneArrival className=" text-4xl" />
            <h2 className="font-bold pt-6 text-secondary">
              To ship from China to Nigeria with the BL App, follow these easy
              steps:
            </h2>
            <p className="pb-2">Follow these easy steps:</p>
            <p>• Log into the BLI App.</p>
            <p>• Click 'Send to Nigeria'.</p>
            <p>• Choose China from the countries listed.</p>
            <p>
              • Choose ‘Shop for me & deliver’ or ‘Deliver my shopped items’.
            </p>
            <p>
              • For Personal Shopping, simply copy & paste product link you
              copied from websites, then fill item & delivery details.
            </p>
            <p>
              • A shopping invoice will be generated for you. Upon payment, your
              items will be delivered to you.
            </p>
            <p>
              • To ship your purchased items, simply copy our China warehouse
              address and paste it on the store’s checkout page.
            </p>
            <p>• Return to the BLI App.</p>
            <p>• Fill the item and delivery details.</p>
            <p>• Choose your preferred means of identification.</p>
            <p>
              • That’s all. Your item will be delivered to you in a few days.
            </p>
          </div>

          <div className="w-[30%]">
            <FaPlaneArrival className="text-black text-4xl" />
            <h2 className="font-bold py-6 text-secondary">
              Inbound Shipping Canada to Nigeria
            </h2>
            <p className="pb-3">
              BLI has launched a walk-in centre in Canada to provide reliable,
              efficient, and affordable shipping services from Canada to
              anywhere in Nigeria.
            </p>
            <p className="pb-3">
              Whether you're shipping your products, personal items, or online
              orders, we ensure your items are delivered safely and on time.
            </p>
            <p className="pb-3">What We Offer:</p>
            <p className="">
              <span className="font-bold">• Competitive Rates: </span>Ship from
              Canada to Lagos for $12/kg (minimum of 10kg), or to other states,
              including the FCT, for $15/kg.
            </p>
            <p className="">
              <span className="font-bold">• Time Delivery: </span>We deliver
              your items within 7-10 business days in Lagos and 7-13 business
              days to other states and the FCT.
            </p>
            <p className="">
              <span className="font-bold">• Free Doorstep Delivery: </span>You
              enjoy free doorstep delivery to Lagos, Abuja, and over 20 cities
              in Nigeria.
            </p>
            <p className="">
              <span className="font-bold">• Online Order Handling: </span>Shop
              from Canadian stores and use our Canada office as your delivery
              address and we will deliver the items to your doorstep in Nigeria
              without any hassle.
            </p>
            <p className="">
              <span className="font-bold">• No Shipping Fees: </span>
              Transparency is key to our operations. That's why we charge no
              handling fees or custom clearing fees in Nigeria and Canada.
            </p>
            <p className="">
              <span className="font-bold">• 24/7 Customer Support: </span>Our
              customer support team is always available to assist you with
              whatever you need. Whether you need help tracking your shipment or
              have questions about our services.
            </p>
          </div>
          <div className="w-[30%] pb-4">
            <FaPlaneDeparture className="text-4xl" />
            <h2 className="font-bold py-6 text-secondary">
              Export: Nigeria to CANADA
            </h2>
            <p className="pb-3">
              Are you sending items such as foodstuff, clothes, documents, etc
              from Nigeria to your customers or loved ones in Canada?
            </p>
            <p className="pb-3">
              Walk in and ship your packages at any BLI experience centres in
              Nigeria and we will deliver within Toronto in 7-10 business days.
            </p>
            <p className="pb-3">Lagos to Canada: N7,500/kg (minimum of 10kg)</p>
            <p className="pb-3">
              Other States and Abuja to Canada: N10,000/kg (minimum of 10kg).
            </p>
            <p className="pb-3">
              Your customers or loved ones can pick up their items at our North
              York Experience Centre (60 Rivalda Road, North York, M9M 2M3,
              Ontario, Canada) or request doorstep delivery at an additional
              fee.
            </p>
            <p className="pb-3">
              Ready to ship your items from Canada to Nigeria or Ghana?
            </p>
            <p className="pb-3">
              Simply visit our Canada walk-in centre at 60 Rivalda Road, North
              York, M9M 2M3, Ontario, Canada.
            </p>
            <p className="pb-3">For further questions/inquiries:</p>
            <p className="pb-3">Call: +1 (289) 212 2225</p>
            <p className="pb-3">Email: blcanada@giglogistics.com</p>
          </div>
          <div className="w-[30%] pb-4">
            <FaPlane className="text-4xl" />
            <h2 className="font-bold py-6 text-secondary">
              Inbound Shipping: Canada to GHANA
            </h2>
            <p className="pb-3">
              Send items from Canada to your location in Ghana for only
              $20.99/kg (minimum of 10kg) with no hidden charges.
            </p>
            <p className="pb-3">
              You can also shop from your favorite stores in Canada and enter
              our office address as you delivery address on the store's checkout
              page. We will receive your items and deliver to your location in
              Ghana within 10-13 business days.
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
