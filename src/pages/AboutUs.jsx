import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function AboutUs() {
    
  return (
    <div>
      {/* Header Starts Here */}
      <header className="navbar">
        <NavBar />
      </header>
      {/* Header Ends Here */}

      {/* Section 1 Starts Here */}
      <section>
        <div className="bg-[url(https://compasstutors.com.ng/wp-content/uploads/2017/08/about-us.jpg)] bg-cover h-[65vh]"></div>
      </section>
      {/* Section 1 Ends Here */}

      {/* Section 2 Starts Here */}
      <section className="px-24 py-32">
        <h2 className="text-center text-3xl font-bold pb-12">Who We Are</h2>
        <div className="flex justify-between w-[100%] pb-[4em]">
          <div className="w-[45%]">
            <img
              src="../assets/images/coporate.webp"
              alt=""
              className="h-[40vh]"
            />
            <img
              src="../assets/images/aboutus.avif"
              alt=""
              className="pt-4 w-[46%] h-[40vh]"
            />
          </div>
          <div className="w-[50%]">
            <p className="pb-3">
              <span className="text-secondary text-[1.2em] font-bold">
                Welcome to BrightLogistics –
              </span>{" "}
              BL is Africa’s leading homegrown logistics company, driven by
              technology and designed to meet the needs of e-commerce and social
              commerce.
            </p>
            <p className="pb-3">
              Founded in 2023 with a clear mission: to remove the traditional
              barriers in last-mile delivery and create a seamless logistics
              experience for businesses and individuals. We understood from the
              start that the success of e-commerce and social commerce relies
              heavily on efficient logistics, and we have remained committed to
              that vision ever since.
            </p>
            <p className="pb-3">
              From our very first shipment in 2023, BL has expanded rapidly,
              linking African vendors with global buyers through our streamlined
              overseas shipping services across multiple continents.
            </p>
            <p className="pb-3">
              At BL, every step of the process—from packaging and handling to
              final delivery—is treated with care and precision. Our agility,
              dedication to service excellence, and data-driven approach allow
              us to tackle key logistics challenges with lasting solutions. We
              also uphold strong ethical standards, maintaining our corporate,
              environmental, and social responsibilities.
            </p>
            <p className="pb-3">
              At BL, every step of the process—from packaging and handling to
              final delivery—is treated with care and precision. Our agility,
              dedication to service excellence, and data-driven approach allow
              us to tackle key logistics challenges with lasting solutions. We
              also uphold strong ethical standards, maintaining our corporate,
              environmental, and social responsibilities.
            </p>
            <p className="pb-3">
              With an in-depth knowledge of the local landscape, BL consistently
              delivers outstanding results. Hundreds of thousands of verified
              users, including top businesses and ecosystem partners, trust us
              to manage their shipments safely and efficiently, both within
              Africa and internationally. We are always seeking innovative ways
              to close the gap between e-commerce, social commerce, and
              logistics. BL has a robust presence across Nigeria and operates in
              Ghana, along with other locations across three continents. We are
              shaping the future of logistics, today.
            </p>
          </div>
        </div>

        {/* Purpose Statement Starts Here */}
        <div className="w-[100%] flex justify-between">
          <div className="w-[33%] bg-secondary p-4 rounded-md">
            <h3 className="py-3 text-[1.2em] font-bold text-white">
              Our Story
            </h3>
            <p className="text-gray-300">
              BrightLogistics originated as a modest endeavor fueled by a
              collective dedication to delivering excellence. What initially
              commenced as a grassroots project has since blossomed into a
              prominent presence within the courier industry nationwide. Our
              path has been shaped by an unwavering commitment to innovation, a
              focus on customer satisfaction, and an enduring commitment to
              integrity.
            </p>
          </div>
          <div className="w-[33%] bg-secondary p-4 rounded-md">
            <h3 className="py-3 text-[1.2em] font-bold text-white">
              Our Vsion
            </h3>
            <p className="pb-3 text-gray-300">
              To be Africa’s leading e-commerce logistics platform.
            </p>
            <h3 className="pb-3 text-[1.2em] font-bold text-white">
              Our Mission
            </h3>
            <p className="text-gray-300">
              We are committed to relentlessly exceeding customer expectations
              through innovative technology solutions for logistics.
            </p>
          </div>
          <div className="w-[33%] bg-secondary p-4 rounded-md">
            <h3 className="py-3 text-[1.2em] font-bold text-white">
              Our Promise
            </h3>
            <p className="text-gray-300">
              At BrightLogistics, we deliver a sense of trust. We recognize that
              behind each parcel lies a unique narrative, and we take great
              pride in being entrusted with its voyage. Our unwavering
              dedication to excellence and customer contentment drives us to
              consistently surpass your expectations with every shipment.
            </p>
          </div>
        </div>
        {/* Purpose Statement Ends Here */}
      </section>
      {/* Section-2 Ends Here */}

      {/* Section-3 Starts Here */}
      <section className="px-24 pt-10 pb-20">
        <div className="flex justify-between w-[100%]">
          {/* Description One Starts Here */}
          <div className="w-[49%]">
            <h3 className="text-[1.3em] font-bold pb-6">
              What Makes BrightLogistics the Ideal Choice?
            </h3>
            <p className="pb-2">
              A. Dependable Delivery: Our track record speaks for itself. We
              ensure safe, on-time delivery of your packages with pride and
              precision.
            </p>
            <p className="pb-2">
              B. Community Commitment: Our mission extends beyond delivery; we
              strive to positively impact the communities we serve through
              various initiatives.
            </p>
            <p className="pb-2">
              C. Tailored Assistance: Our philosophy is building connections.
              Our dedicated team supports you every step, ensuring personalized
              attention to your unique needs.
            </p>
            <p className="pb-2">
              D. Sustainability: As environmental stewards, we pledge to reduce
              our carbon footprint and commit to a sustainable future through
              eco-conscious initiatives.
            </p>
            <p className="">
              E. Innovative Technology Integration: Our commitment to technology
              powers our success, providing real-time insights through advanced
              tracking and streamlined logistics.
            </p>
          </div>
          {/* Description One Ends Here */}

          {/* Description Two Starts Here */}
          <div className="w-[49%]">
            <h3 className="text-[1.3em] font-bold pb-6">
              Come Along on Our Adventure
            </h3>
            <p className="pb-10">
              We appreciate your interest in choosing{" "}
              <span>BrightLogistics</span> for all your delivery requirements.
              Whether you're an individual sending a special gift or a business
              looking to broaden its horizons, we are dedicated to offering you
              dependable, secure, and hassle-free courier services. Take a
              moment to explore our range of services, effortlessly track your
              packages, and discover the unique advantages of partnering with
              BrightLogistics.
            </p>

            <Link
              to="/contactus"
              className="bg-secondary text-white rounded-md font-bold p-2 hover:bg-primary">
              Contact Us
            </Link>
          </div>
          {/* Description Two Ends Here */}
        </div>
      </section>
      {/* Section-3 Ends Here */}

      {/* Footer Starts Here  */}
      <Footer />
      {/* Footer Ends Here  */}
    </div>
  );
}
