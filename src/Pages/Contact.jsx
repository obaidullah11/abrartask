import React from "react";
import FooterCard from "../Components/FooterCard";

function Contact() {
  return (
    <div className="w-full bg-[url('/key-pattern.png')] bg-black text-white px-4 sm:px-8 md:px-16 py-12 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
        {/* Left Side */}
        <div>
          <h3 className="text-sm uppercase tracking-wide text-white font-semibold">
            Reliable Locksmith
          </h3>
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-300 leading-relaxed">
            If you're looking for a reliable, professional locksmith, look no
            further than Key-Kong Locksmith. Whether you need residential,
            commercial, or automotive services, we’re here to help.
          </p>
        </div>

        {/* Right Side - Form */}
        <form className="grid grid-cols-2 gap-4 text-black">
          {/* Name */}
          <div className="col-span-1">
            <label htmlFor="name" className="block text-sm text-white mb-1">
              Enter your name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full p-3 bg-white"
            />
          </div>

          {/* Email */}
          <div className="col-span-1">
            <label htmlFor="email" className="block text-sm text-white mb-1">
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email address"
              className="w-full p-3 bg-white"
            />
          </div>

          {/* Message */}
          <div className="col-span-2">
            <label htmlFor="message" className="block text-sm text-white mb-1">
              Enter your message
            </label>
            <textarea
              id="message"
              placeholder="Type your message here"
              className="w-full p-3 h-32 bg-white"
            />
          </div>

          <div className="col-span-1">
            <button
              type="submit"
              className="bg-[#FFAF1E] hover:bg-[#e09c18] text-black font-semibold py-3 w-auto px-10"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
      <FooterCard />
    </div>
  );
}

export default Contact;
