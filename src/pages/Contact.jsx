import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import FeatureHighlights from "../components/FeatureHighlights";

export default function Contact() {
  return (
    <div className="bg-white min-h-screen px-6 py-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-black font-semibold text-sm uppercase tracking-wide">
          Contact With Us
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-black mt-2">
          You can ask us questions
        </h1>
        <p className="text-black mt-2 max-w-2xl mx-auto">
          Contact us for all your questions and opinions, or you can solve your
          problems in a shorter time with our contact offices.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 border-t border-gray-200 pt-12">
        <div className="space-y-8 text-left">
          <h2 className="text-lg font-semibold text-gray-900">Our Offices</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            On delandem murdand miora even om sukuristet. Seminade trandem rean.
            Redogam pasam ma intde åven um praesid granand trandotd specialitet
            bi belad. Eris skonde. Tung les-vid att ridigt. Disige fried daris.
          </p>

          <div className="border-b border-gray-200 pb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4 p-4">
                <MapPin className="text-black mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">
                    United States Office
                  </p>
                  <p className="text-sm text-gray-600">
                    205 Middle Road, 2nd Floor, New York
                  </p>
                  <p className="mt-2 text-gray-800">
                    <Phone className="inline mr-2 text-black" size={16} />
                    +02 1234 567 88
                  </p>
                  <p className="text-gray-800">
                    <Mail className="inline mr-2 text-black" size={16} />
                    info@example.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4">
                <MapPin className="text-black mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">
                    Munich States Office
                  </p>
                  <p className="text-sm text-gray-600">
                    205 Middle Road, 2nd Floor, New York
                  </p>
                  <p className="mt-2 text-gray-800">
                    <Phone className="inline mr-2 text-black" size={16} />
                    +5 456 123 22
                  </p>
                  <p className="text-gray-800">
                    <Mail className="inline mr-2 text-black" size={16} />
                    contact@example.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-6">
            <span className="text-gray-800 font-medium">Follow us:</span>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="#"
                className="bg-sky-400 text-white p-2 rounded-md hover:bg-sky-500 transition"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="#"
                className="bg-black text-white p-2 rounded-md hover:bg-gray-800 transition"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="bg-blue-700 text-white p-2 rounded-md hover:bg-blue-800 transition"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-6">
            <p className="text-gray-600 text-sm mt-1">
              On dekande mydurtad mora även om skurkstat. Semirade timaheten
              rena. Radiogen pasam inte loba även om prerade i garanterad
              traditionell specialitet till bebel.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your name *"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-purple-600"
              />
              <input
                type="email"
                placeholder="Your email *"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-purple-600"
              />
            </div>

            <input
              type="text"
              placeholder="Subject *"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-purple-600"
            />

            <textarea
              placeholder="Your message"
              rows="5"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-purple-600"
            ></textarea>

            <button
              type="submit"
              className="bg-brand-purple hover:bg-purple-700 text-white px-6 py-2 rounded-md font-medium transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="mt-24">
        <FeatureHighlights />
      </div>
    </div>
  );
}
