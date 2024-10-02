import React from "react";
import NavBar from "../../components/NavBar";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { FaGoogleWallet, FaMoneyBills, FaWallet } from "react-icons/fa6";

export default function CoporateLogistics() {
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
        <div className="bg-[url(https://cryptoapis.io/images/jprkwgZZt8yfEoG0jwJQlzoY1wm31ItGXC8tMUiI-1000x500.png)] bg-cover h-[77vh] text-center">
          <h2 className="text-3xl text-secondary font-bold pt-[8em]">
            {/* Wallet and Added Services */}
          </h2>
        </div>
      </section>
      {/* Section 1 Ends Here */}

      {/* Section 2 Starts Here */}
      <section className="px-24 py-24">
        <div className="flex gap-[8em] pb-[4em]">
          <div>
            <img
              src="https://res.cloudinary.com/crowdicity-eu-cld/image/upload/c_fill,h_500,w_710/95184098_2923612661060837_2868282638915862528_n_791e6aeba0?__cld_token__=exp=1726656732~hmac=256ac6ced942557ae11b74b7e8b7dfe456cdd681205f704d421fa9d641e73cc8"
              alt=""
              className="w-[45vw] h-[72vh]  shadow-2xl shadow-gray-800 rounded-[50%]"
            />
          </div>
          <div className="max-w-[550px]">
            <h1 className="text-6xl font-bold pb-2">
              Wallet And Added Services
            </h1>
            <p className="pb-3">
              E-commerce should be more than buying online and moving shipments
              to the end user. Now you have access to so much more, including
              crypto banking. As your global logistics partner, we advocate for
              economic freedom and borderless transactions, hence our commitment
              to delivering both physical and digital goods for you. Believe it
              when we say we care about your personal and business growth and
              the ability to do things quickly and without limitations. This is
              why we facilitate commerce by moving your shipments across the
              world and continue to expand our service portfolio to meet your
              dynamic needs even before you ask. Our goal is to build features
              and products that ease daily transactions and accelerate growth
              for you because we are your partner in progress!
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
      <section className="px-24">
        <p className="text-6xl font-bold pb-14">Added Services</p>
        <div className="flex gap-12 items-center w-[100%] pb-24">
          <div className="w-[40%]">
            <div className="flex gap-3 pb-5">
              <div>
                <FaMoneyBills className="text-black text-[2em]" />
              </div>
              <div>
                <h2 className="font-bold  text-secondary">Bills Payment</h2>
                <p>
                  Managing bills can be tough with multiple apps. With your BLI
                  app, we make it easier by allowing you to pay recurring bills
                  like communication, electricity, entertainment, and much more,
                  all from one app. Buy data and airtime, and pay utility bills
                  on the move.
                </p>
              </div>
            </div>
            <div className="flex gap-3 pb-5">
              <div>
                <FaWallet className="text-black text-[2em]" />
              </div>
              <div>
                <h2 className="font-bold  text-secondary">Crypto Wallet</h2>
                <p>
                  E-commerce facilitates the purchase of physical and digital
                  goods/assets. Now you have access to a crypto wallet to help
                  you buy, send, store, and withdraw digital assets. Pay for
                  transactions across the globe without restrictions, and
                  convert your cryptocurrency to Naira anytime you need to.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div>
                <FaGoogleWallet className="text-black text-[2em]" />
              </div>
              <div>
                <h2 className="font-bold  text-secondary">BLI/E-Wallet</h2>
                <p>
                  Most people want convenience and prefer paying for
                  transactions without cash or a card. We get it! Meet the
                  BLI/E-Wallet feature, a flexible and convenient payment option
                  for online and offline transactions. Pay for recurring bills
                  (data, airtime, utility bills) and all your BLI Logistics
                  transactions using your BLI/E-wallet.
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <img
              src="https://techcrunch.com/wp-content/uploads/2021/04/Crypto-on-Venmo-2.jpg?w=1280"
              alt=""
              className="w-[40vw] h-[70vh] rounded-[50%]"
            />
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
