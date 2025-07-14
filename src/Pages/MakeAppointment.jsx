import React from "react";
import Navbar from "../Components/Navbar";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";
import { MdCall } from "react-icons/md";
import FAQ from "../Components/FAQ";
import Customers from "./Customers";
import Footer from "./Footer";

const MakeAppointment = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* 💠 Blue Section */}
      <div className="w-full bg-blue-100 relative overflow-hidden pb-10 sm:pb-0">
        {/* Background Image */}
        <img
          src="/bg-1.png"
          alt="Pattern"
          className="hidden sm:block absolute top-0 right-0 h-full w-auto object-cover z-0 pointer-events-none"
        />

        {/* Navbar */}
        <Navbar />

        {/* INSTANT QUOTE Button */}
        <Button
          className="absolute left-0 sm:top-[12rem] top-[10rem] transform bg-black text-white text-[5px] sm:text-[7px] px-4 sm:px-2 py-1 font-semibold z-50 flex flex-row-reverse items-center whitespace-nowrap justify-center gap-2"
          style={{
            writingMode: "vertical-lr",
            textOrientation: "mixed",
          }}
          icon="/SVG.png"
          iconClass="w-3 h-3"
          text="INSTANT QUOTE"
          onClick={() => navigate("/instant-quote")}
        />

        {/* Side Image */}
        <img
          src="/image (1).png"
          alt="Hero Visual"
          className="absolute right-0 top-0 w-2/3 sm:w-96 md:w-96 h-auto object-contain z-10"
        />

        {/* Main Content */}
        <div className="px-6 py-10 grid grid-cols-2 lg:grid-cols-2 gap-6 relative z-10">
          {/* Heading + Form (for large screens) */}
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <h2 className="text-xl sm:text-3xl font-semibold text-black">
              FAST. EASY. SECURE.
            </h2>
            <p className="text-2xl sm:text-4xl font-bold">
              Book a Service <span className="text-[#FFAF1E]">Online</span>
            </p>

            {/* Form inside blue section on large screens */}
 <div className="hidden sm:block max-w-2xl mx-auto bg-white rounded-lg shadow-md px-6 py-8">
  <form className="space-y-4">
    {/* Name Field */}
    <input
      type="text"
      id="Name"
      placeholder="Your Name"
      className="border-2 border-black rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
    />

    {/* Email + Phone in One Line */}
    <div className="flex flex-col sm:flex-row gap-4">
      <input
        type="email"
        placeholder="Your Email Address"
        className="border-2 border-black rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
      <input
        type="tel"
        placeholder="Your Phone Number"
        className="border-2 border-black rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
    </div>

    {/* Address */}
    <input
      type="text"
      placeholder="Address"
      className="border-2 border-black rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
    />

    {/* City + State in One Line */}
    <div className="flex flex-col sm:flex-row gap-4">
      <input
        type="text"
        placeholder="City"
        className="border-2 border-black rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
      <input
        type="text"
        placeholder="State"
        className="border-2 border-black rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
    </div>

    {/* Service Date + Time with Icons */}
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex items-center w-full border-2 border-black rounded-lg px-2">
        <img src="/calendar-icon.png" alt="Date Icon" className="w-5 h-5 mr-2" />
        <input
          type="text"
          placeholder="Service Date"
          className="w-full bg-transparent outline-none py-2"
        />
      </div>

      <div className="flex items-center w-full border-2 border-black rounded-lg px-2">
        <img src="/clock-icon.png" alt="Time Icon" className="w-5 h-5 mr-2" />
        <input
          type="text"
          placeholder="Service Time"
          className="w-full bg-transparent outline-none py-2"
        />
      </div>
    </div>

    {/* Message */}
    <textarea
      placeholder="Your Message"
      className="border-2 border-black rounded-lg p-2 w-full h-24 focus:outline-none focus:ring-2 focus:ring-yellow-400"
    />

    {/* Submit */}
    <button
      type="submit"
      className="bg-[#FFAF1E] text-black px-6 py-2 font-medium text-sm sm:text-base rounded w-full"
    >
      Submit
    </button>
  </form>

  {/* Icons Row */}
  <div className="flex items-center justify-center gap-6 mt-6">
    <div className="flex items-center gap-2">
      <img src="/truck-fast.png" alt="Fast" className="w-6 h-6" />
      <p className="text-sm font-medium">Fast</p>
    </div>
    <div className="flex items-center gap-2">
      <img src="/smile.png" alt="Easy" className="w-6 h-6" />
      <p className="text-sm font-medium">Easy</p>
    </div>
    <div className="flex items-center gap-2">
      <img src="/lock.png" alt="Secure" className="w-6 h-6" />
      <p className="text-sm font-medium">Secure</p>
    </div>
  </div>
</div>
          </div>
        </div>
      </div>

      {/* 📱 Form outside blue section on mobile */}
  <div className="block sm:hidden px-4 py-6">
  <div className="max-w-[90%] mx-auto bg-white shadow-lg rounded-xl p-4">
    <form className="space-y-4">
      {/* Name */}
      <input
        type="text"
        placeholder="Your Name"
        className="border border-black rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      {/* Email + Phone */}
      <div className="flex gap-2">
        <input
          type="email"
          placeholder="Email"
          className="w-1/2 border border-black rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="tel"
          placeholder="Phone"
          className="w-1/2 border border-black rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      {/* Address */}
      <input
        type="text"
        placeholder="Address"
        className="border border-black rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      {/* City + State */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="City"
          className="w-1/2 border border-black rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="text"
          placeholder="State"
          className="w-1/2 border border-black rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      {/* Date + Time with Icons */}
      <div className="flex gap-2">
        <div className="flex items-center w-1/2 border border-black rounded-lg px-2">
          <img src="/calendar-icon.png" alt="Date Icon" className="w-5 h-5 mr-2" />
          <input
            type="text"
            placeholder="Service Date"
            className="w-full bg-transparent outline-none py-2"
          />
        </div>

        <div className="flex items-center w-1/2 border border-black rounded-lg px-2">
          <img src="/clock-icon.png" alt="Time Icon" className="w-5 h-5 mr-2" />
          <input
            type="text"
            placeholder="Service Time"
            className="w-full bg-transparent outline-none py-2"
          />
        </div>
      </div>

      {/* Message */}
      <textarea
        placeholder="Your Message"
        className="border border-black rounded-lg p-2 w-full h-24 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      {/* Submit */}
      <button
        type="submit"
        className="bg-[#FFAF1E] text-black px-6 py-2 font-medium text-sm rounded w-full"
      >
        Submit
      </button>
    </form>

    {/* Info Icons */}
    <div className="flex items-center justify-center gap-4 mt-6">
      <div className="flex items-center gap-2">
        <img src="/truck-fast.png" alt="Fast" className="w-5 h-5" />
        <p className="text-sm">Fast</p>
      </div>
      <div className="flex items-center gap-2">
        <img src="/smile.png" alt="Easy" className="w-5 h-5" />
        <p className="text-sm">Easy</p>
      </div>
      <div className="flex items-center gap-2">
        <img src="/lock.png" alt="Secure" className="w-5 h-5" />
        <p className="text-sm">Secure</p>
      </div>
    </div>
  </div>
</div>
<section className="px-4 py-10 max-w-7xl mx-auto">
  {/* Heading */}
  <div className="text-center mb-8">
    <h4 className="text-xl sm:text-2xl font-semibold">
      What Happens After <span className="text-[#FFAF1E] px-2">You Submit the Form?</span>
    </h4>
  </div>

  {/* Grid: 2 columns on mobile, 5 on xl screens */}
  <div className="grid grid-cols-2 xl:grid-cols-5 gap-6">
    {/* Step 1 */}
    <div className="bg-white shadow-md rounded-lg p-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-2">
        <span className="text-xl text-[#FFAF1E]">1</span>
        <img src="/make appointment/Group.png" alt="Submit Confirmation" className="w-6 h-6" />
      </div>
      <p className="font-bold text-base mb-1">Submission Confirmation</p>
      <p className="text-xs">
        You’ll receive an email or text acknowledging your request.
      </p>
    </div>

    {/* Step 2 */}
    <div className="bg-white shadow-md rounded-lg p-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-2">
        <span className=" text-xl text-[#FFAF1E]">2</span>
        <img src="/make appointment/Group (1).png" alt="Team Contact" className="w-6 h-6" />
      </div>
      <p className="font-bold text-base mb-1">Our Team Contacts You</p>
      <p className="text-xs">
        A Key-Kong Locksmith representative will reach out to confirm your booking.
      </p>
    </div>

    {/* Step 3 */}
    <div className="bg-white shadow-md rounded-lg p-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-2">
        <span className=" text-xl text-[#FFAF1E]">3</span>
        <img src="/make appointment/Vector.png" alt="Discussion" className="w-6 h-6" />
      </div>
      <p className="font-bold text-base mb-1">Details Discussion</p>
      <p className="text-xs">
        We’ll finalize service needs, timings, and ensure you’re fully informed.
      </p>
    </div>

    {/* Step 4 */}
    <div className="bg-white shadow-md rounded-lg p-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-2">
        <span className="text-xl text-[#FFAF1E]">4</span>
        <img src="/make appointment/Group (2).png" alt="Scheduling" className="w-6 h-6" />
      </div>
      <p className="font-bold text-base mb-1">Schedule Confirmation</p>
      <p className="text-xs">
        You'll get a confirmed time slot based on availability and urgency.
      </p>
    </div>

    {/* Step 5 — Centered */}
    <div className="bg-white shadow-md rounded-lg p-4 text-center col-span-2 xl:col-span-1 xl:justify-self-center">
      <div className="flex items-center justify-center gap-2 mb-2">
        <span className="text-xl text-[#FFAF1E]">5</span>
        <img src="/make appointment/Vector (1).png" alt="Service Arrival" className="w-6 h-6" />
      </div>
      <p className="font-bold text-base mb-1">On-Time Arrival</p>
      <p className="text-xs">
        Our technician arrives on schedule to complete the service professionally.
      </p>
    </div>
  </div>
</section>
<section className="relative min-h-[260px] sm:min-h-[320px] lg:min-h-[360px]">
  {/* Background Image */}
  <img
    src="/ServiceArea/Rectangle 101.png"
    alt="Service Area Background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay Container */}
  <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 lg:px-16 text-black">
    <div className="w-full max-w-5xl text-center">
      {/* Grid Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-items-center">
        {/* Column 1: Text */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
            Not sure if we provide <span className="text-[#FFAF1E]">service to your area?</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base max-w-lg">
            If you're unsure whether we service your specific location, give us a call at <strong>123‑567‑890</strong>,
            and we’ll quickly let you know if we can assist.
          </p>
        </div>

        {/* Column 2: Call Info + Button */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 text-sm sm:text-base lg:text-lg">
            <MdCall size={24} color="#FFAF1E" />
            <span className="font-semibold">123‑456‑7891</span>
          </div>
          <Button
            className="cursor-pointer bg-[#FFAF1E] text-white text-[10px] sm:text-sm px-4 py-2 font-semibold rounded flex items-center gap-2"
            icon=""
            iconClass=""
            text="Call Now"
          />
        </div>
      </div>
    </div>
  </div>
</section>
<FAQ/>
<Customers/>
<Footer/>
    </>
  );
};

export default MakeAppointment;