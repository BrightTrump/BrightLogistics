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
        <div className="bg-[url(https://cdn.sanity.io/images/bmk0zfcx/production/b54c36b6139ca5ce26e0b49d3a1bdbe658299df2-841x632.png?auto=format&h=768&w=1024&fit=crop)] bg-cover h-[77vh] text-center">
          <h2 className="hidden text-xl text-blaq font-bold pt-[10em]">FAQS</h2>
        </div>
      </section>
      {/* Section 1 Ends Here */}

      {/* Section-2 Starts Here */}
      <section className="px-24 py-32">
        <p className="text-6xl text-center font-bold pb-14">
          Frequently Asked Questions
        </p>
        <div className="flex justify-between items-start w-[100%] pb-24">
          <div className="w-[42%]">
            <p className="pb-4">
              Discover solutions to inquiries regarding your shipments, how to
              get track your package, how to contact customer support,
              International shipping, and how to schedule a specific delivery
              date and time. BrighttLogistics, a brand you can trust with your
              shipments <span className="text-xl text-secondary">100%.</span>
            </p>
            <div className="w-[97%]">
              <img
                src="assets/images/faq.png"
                alt=""
                className="w-[100%] h-[42vh] rounded-[5%] bg-right-top"
              />
            </div>
          </div>
          <div className="w-[55%]">
            <div className="border-2 border-tertiary w-[100%]">
              <div className="relative flex justify-between items-center pl-2 py-2 w-[100%] border-2 border-tertiary bg-tertiary">
                <p className="font-bold">How can I track my shipment?</p>
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
                  Visit our Website: brightlogistics.com. Find the Tracking
                  Section: Look for "Track Your Package" on the homepage. Enter
                  Tracking Number: Input the tracking number provided at the
                  time of your order. Click "Track": After entering the number,
                  click the "Track" button. View Package Status: See the
                  real-time status and location of your package, including
                  updates and estimated delivery. Get Notifications: Sign up for
                  email/SMS alerts for ongoing updates. For any issues, contact
                  us at support@brightlogistics.com. Note that tracking info may
                  take a short time to update after dispatch.
                </p>
              )}
            </div>

            <div className="pt-4 border-2 border-tertiary">
              <div className="relative flex justify-between items-center pl-2 py-2 w-[100%] border-2 border-tertiary bg-tertiary">
                <p className="font-bold">
                  Do you offer International shipping?
                </p>
                <button
                  type="button"
                  className="absolute top-[-0.1em] right-[-3px] w-10 h-[45px]  bg-primary border-2 border-primary font-bold text-white text-xl text-center"
                  onClick={() => toggleFaqDetails(1)}>
                  {openFaqIndex === 1 ? "-" : "+"}
                </button>{" "}
              </div>
              {openFaqIndex === 1 && (
                <p className="p-2">
                  Yes, we do Create an Account: To get started, you'll need to
                  create an account. This typically involves providing an email
                  address, creating a username, and setting a password.
                </p>
              )}
            </div>

            <div className="pt-4 border-2 border-tertiary">
              <div className="relative flex justify-between items-center pl-2 py-2 w-[100%] border-2 border-tertiary bg-tertiary">
                <p className="font-bold">
                  Can I schedule a specific delivery date and time?
                </p>
                <button
                  type="button"
                  className="absolute top-[-0.1em] right-[-3px] w-10 h-[45px]  bg-primary border-2 border-primary font-bold text-white text-xl text-center"
                  onClick={() => toggleFaqDetails(2)}>
                  {openFaqIndex === 2 ? "-" : "+"}
                </button>
              </div>
              {openFaqIndex === 2 && (
                <p className="p-2">
                  Our team of experts and company policy allows our clients to
                  schedule their dpecific date and time of delivery.
                </p>
              )}
            </div>

            <div className="pt-4 border-2 border-tertiary">
              <div className="relative flex justify-between items-center pl-2 py-2 w-[100%] border-2 border-tertiary bg-tertiary">
                <p className="font-bold">
                  Can I change the delivery address after placing an order?
                </p>
                <button
                  type="button"
                  className="absolute top-[-0.1em] right-[-3px] w-10 h-[45px]  bg-primary border-2 border-primary font-bold text-white text-xl text-center"
                  onClick={() => toggleFaqDetails(3)}>
                  {openFaqIndex === 3 ? "-" : "+"}
                </button>
              </div>
              {openFaqIndex === 3 && (
                <p className="p-2">
                  Yes, you can also make changes to your delivery name, date and
                  time.
                </p>
              )}
            </div>

            <div className="pt-4 border-2 border-tertiary">
              <div className="relative flex justify-between items-center pl-2 py-2 w-[100%] border-2 border-tertiary bg-tertiary">
                <p className="font-bold">
                  Do you have a live chat or phone support option?
                </p>
                <button
                  type="button"
                  className="absolute top-[-0.1em] right-[-3px] w-10 h-[45px]  bg-primary border-2 border-primary font-bold text-white text-xl text-center"
                  onClick={() => toggleFaqDetails(4)}>
                  {openFaqIndex === 4 ? "-" : "+"}
                </button>
              </div>
              {openFaqIndex === 4 && (
                <p className="p-2">
                  Attached to this site is a live-chat, It is located at the
                  bottom-left part of the screen of your device.
                </p>
              )}
            </div>

            <div className="pt-4 border-2 border-tertiary">
              <div className="relative flex justify-between items-center pl-2 py-2 w-[100%] border-2 border-tertiary bg-tertiary">
                <p className="font-bold">
                  How can I contact your customer support?
                </p>
                <button
                  type="button"
                  className="absolute top-[-0.1em] right-[-3px] w-10 h-[45px]  bg-primary border-2 border-primary font-bold text-white text-xl text-center"
                  onClick={() => toggleFaqDetails(5)}>
                  {openFaqIndex === 5 ? "-" : "+"}
                </button>
              </div>
              {openFaqIndex === 5 && (
                <p className="p-2">
                  You can reach our customer support on
                  support@brightlogistics.com.
                </p>
              )}
            </div>

            <div className="pt-4 border-2 border-tertiary">
              <div className="relative flex justify-between items-center pl-2 py-2 w-[100%] border-2 border-tertiary bg-tertiary">
                <p className="font-bold">
                  Do you offer express or overnight shipping?
                </p>
                <button
                  type="button"
                  className="absolute top-[-0.1em] right-[-3px] w-10 h-[45px]  bg-primary border-2 border-primary font-bold text-white text-xl text-center"
                  onClick={() => toggleFaqDetails(6)}>
                  {openFaqIndex === 6 ? "-" : "+"}
                </button>
              </div>
              {openFaqIndex === 6 && (
                <p className="p-2">
                  Yes, we do offer express and overnight shipping options to
                  ensure your packages reach their destination quickly and
                  efficiently. Our express shipping services are designed for
                  those who need their items delivered with urgency, while our
                  overnight shipping option guarantees delivery by the next
                  business day. These services are ideal for time-sensitive
                  shipments and are available for both domestic and
                  international destinations. Please check our shipping options
                  during the checkout process for more details on pricing and
                  delivery times.
                </p>
              )}
            </div>

            <div className="pt-4 border-2 border-tertiary">
              <div className="relative flex justify-between items-center pl-2 py-2 w-[100%] border-2 border-tertiary bg-tertiary">
                <p className="font-bold">
                  Can I send fragile or valuable items through your service?
                </p>
                <button
                  type="button"
                  className="absolute top-[-0.1em] right-[-3px] w-10 h-[45px]  bg-primary border-2 border-primary font-bold text-white text-xl text-center"
                  onClick={() => toggleFaqDetails(7)}>
                  {openFaqIndex === 7 ? "-" : "+"}
                </button>
              </div>
              {openFaqIndex === 7 && (
                <p className="p-2">
                  You can trust us to handle your fragile or valuable items with
                  the utmost care. Our experienced team uses specialized
                  packaging and protective measures to ensure safe delivery. We
                  prioritize the security of your shipments, offering reinforced
                  packaging and careful handling. For any concerns or special
                  requests, feel free to contact our customer support. Your
                  satisfaction and the safe arrival of your items are our top
                  priorities.
                </p>
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
