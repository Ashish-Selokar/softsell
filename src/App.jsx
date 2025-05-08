import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been received.");
    e.target.reset();
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <div className=" w-full min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-2xl font-bold text-purple-700">SoftSell</span>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection("how-it-works")} className="hover:text-purple-600">How It Works</button>
            <button onClick={() => scrollToSection("why-choose-us")} className="hover:text-purple-600">Why Choose Us</button>
            <button onClick={() => scrollToSection("testimonials")} className="hover:text-purple-600">Testimonials</button>
            <button onClick={() => scrollToSection("contact")} className="btn-3d bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Contact</button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white px-4 pb-4 space-y-2">
            <button onClick={() => scrollToSection("how-it-works")} className="block w-full text-left">How It Works</button>
            <button onClick={() => scrollToSection("why-choose-us")} className="block w-full text-left">Why Choose Us</button>
            <button onClick={() => scrollToSection("testimonials")} className="block w-full text-left">Testimonials</button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left">Contact</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-700 to-indigo-700 text-white text-center py-20 px-6 shadow-2xl relative z-10">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          className="w-20 mx-auto mb-5 drop-shadow-lg"
          alt="Logo"
        />
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          Resell Software Licenses Easily
        </h1>
        <p className="text-lg mb-6">
          Get instant quotes and fast payouts in a secure, legal process.
        </p>
        <button
          className="bg-white text-purple-700 px-6 py-3 rounded-full font-bold btn-3d hover:bg-gray-100"
          onClick={() => scrollToSection("contact")}
        >
          Get a Quote
        </button>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-white text-center scroll-mt-20">
        <h2 className="text-4xl font-bold mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              img: "https://cdn-icons-png.flaticon.com/512/561/561127.png",
              title: "Upload License",
              desc: "Submit your unused license for assessment.",
            },
            {
              img: "https://cdn-icons-png.flaticon.com/512/1011/1011863.png",
              title: "Get a Quote",
              desc: "We analyze and send a valuation within hours.",
            },
            {
              img: "https://cdn-icons-png.flaticon.com/512/4010/4010645.png",
              title: "Get Paid",
              desc: "Approve and receive funds directly to your account.",
            },
          ].map((item, i) => (
            <div key={i} className="card-3d bg-white p-8 rounded-xl shadow-xl">
              <img src={item.img} className="w-16 mx-auto mb-4" alt="" />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us" className="bg-gray-100 py-20 px-6 text-center scroll-mt-20">
        <h2 className="text-4xl font-bold mb-12">Why Choose SoftSell?</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              img: "https://cdn-icons-png.flaticon.com/512/4339/4339791.png",
              title: "Fast Payouts",
            },
            {
              img: "https://cdn-icons-png.flaticon.com/512/814/814513.png",
              title: "Thousands of Users",
            },
            {
              img: "https://i.pinimgproxy.com/?url=aHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8yNTYvMTgzMjIvMTgzMjI1MTQucG5n&ts=1746687559&sig=7b11de54cf5741875a042a9cd85918c7ef3ebc800bee9c9fb282b1d1c27be4d2",
              title: "Fair Pricing",
            },
            {
              img: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
              title: "Secure Transfers",
            },
          ].map((item, i) => (
            <div key={i} className="card-3d bg-white p-6 rounded-xl shadow-md">
              <img src={item.img} className="w-12 mx-auto mb-3" alt="" />
              <h4 className="font-semibold">{item.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 text-center bg-white scroll-mt-20">
        <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="glass p-6 rounded-xl card-3d shadow-xl">
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              className="w-16 rounded-full mx-auto mb-3"
              alt="Client"
            />
            <p className="italic text-gray-700">
              "I sold 3 licenses in one day and received payment instantly.
              Amazing!"
            </p>
            <p className="mt-2 font-bold">- Anjali M.</p>
          </div>
          <div className="glass p-6 rounded-xl card-3d shadow-xl">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              className="w-16 rounded-full mx-auto mb-3"
              alt="Client"
            />
            <p className="italic text-gray-700">
              "Very transparent and easy process. Highly recommended."
            </p>
            <p className="mt-2 font-bold">- David R.</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="bg-gradient-to-br from-purple-100 to-indigo-100 py-20 px-6 scroll-mt-20">
        <h2 className="text-4xl font-bold text-center mb-10">Contact Us</h2>
        <form
          className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-xl card-3d"
          onSubmit={handleSubmit}
        >
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="border px-4 py-2 rounded w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="border px-4 py-2 rounded w-full"
            />
          </div>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className="border px-4 py-2 rounded w-full mb-4"
          />
          <select
            name="license"
            required
            className="border px-4 py-2 rounded w-full mb-4"
          >
            <option value="">Select License Type</option>
            <option>Microsoft</option>
            <option>Adobe</option>
            <option>AutoCAD</option>
          </select>
          <textarea
            name="message"
            placeholder="Your Message"
            className="border px-4 py-2 rounded w-full mb-4"
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-3 rounded btn-3d hover:bg-purple-800"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center py-6 text-sm text-gray-600">
        &copy; 2025 SoftSell. All rights reserved.
      </footer>

      {/* Embedded Styles */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        .card-3d {
          transition: transform 0.6s ease, box-shadow 0.6s ease;
          transform-style: preserve-3d;
        }
        .card-3d:hover {
          transform: rotateX(8deg) rotateY(5deg) translateY(-10px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
        }
        .glass {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .btn-3d {
          transition: all 0.3s ease;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
        }
        .btn-3d:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }
        .scroll-mt-20 {
          scroll-margin-top: 5rem;
        }
      `}</style>
    </div>
  );
};

export default App;
