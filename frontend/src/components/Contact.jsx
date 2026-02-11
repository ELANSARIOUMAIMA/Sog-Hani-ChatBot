import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiArrowRight, FiMail, FiMapPin, FiMessageSquare, FiPhone } from "react-icons/fi";
import { contactForm } from "../assets/assets.js";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    toast.success("Your message has been submitted successfully!", {
      style: {
        border: "2px solid #f59e0b",
        padding: "16px",
        color: "#fff",
        background: "rgba(0,0,0,0.8)",
        backdropFilter: "blur(10px)",
      },
      iconTheme: { primary: "#f59e0b", secondary: "#fff" },
    });

    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section id="contact" >
       <div  className="py-32 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#303481] via-[#F5F5F5] to-[#FFF200] animate-gradient-x font-bold relative overflow-hidden">
      <Toaster position="top-center" reverseOrder={false} toastOptions={{ duration: 4000 }} />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-[#303481] rounded-full animate-pulse" />
      <div className="absolute bottom-40 right-20 w-16 h-24 bg-[#303481] rounded-full animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 animate-pulse">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#303481] via-[#FFF200] to-[#303481]">
            Connect With Us
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info Section */}
          <div className="space-y-6">
            {[
              {
                title: "Our Headquarters",
                icon: FiMapPin,
                info: "*******, *****",
              },
              {
                title: "Contact Number",
                icon: FiPhone,
                info: "+(212)6 ** ** ** **",
              },
              {
                title: "Contact Email",
                icon: FiMail,
                info: "Soghani@gmail.com",
              },
            ].map(({ title, icon: Icon, info }) => (
              <div
                key={title}
                className="relative bg-white/5 backdrop-blur-lg p-6 shadow-2xl rounded-2xl transform transition-all duration-300 hover:scale-[1.02] border-l-4 border-[#D6E6F2] hover:border-[#303481] group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#303481] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="flex items-center mb-4 relative z-10">
                  <div className="p-3 bg-gradient-to-br from-[#FFF200] to-[#303481] rounded-xl">
                    <Icon className="text-white text-2xl animate-pulse" />
                  </div>
                  <h3 className="ml-4 text-[#D6E6F2] text-xl font-semibold">{title}</h3>
                </div>
                <div className="pl-12 relative z-10">
                  <p className="text-[#F5F5F5]">{info}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="relative bg-[#303481]/30 backdrop-blur-lg p-6 shadow-2xl rounded-2xl transform transition-all duration-300 hover:scale-[1.02] border-2 border-[#D6E6F2] hover:border-[#303481] group">
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {contactForm.map(({ label, name, type, placeholder, Icon }) => (
                <div key={name}>
                  <label htmlFor={name} className="block text-white text-sm font-medium mb-2">
                    {label}
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <Icon className="text-[#FFF200] text-xl animate-pulse" />
                    </div>
                    <input
                      id={name}
                      type={type}
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      className="w-full pl-10 pr-4 py-3 bg-[#303481] border-[#FFF200] rounded-xl text-white focus:ring-[#FFF200] focus:border-transparent placeholder-white"
                      required
                    />
                  </div>
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                  Message
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-4">
                    <FiMessageSquare className="text-[#FFF200] text-xl animate-pulse" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    className="w-full pl-10 pr-4 py-3 bg-[#303481] border-[#FFF200] rounded-xl text-white focus:ring-[#FFF200] focus:border-transparent placeholder-white"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#303481] to-[#FFF200] hover:to-[#303481] text-white font-semibold py-3 px-6 hover:from-[#FFF200] transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-[#D6E6F2] flex items-center justify-center space-x-2 group rounded-xl"
              >
                <span>Submit</span>
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </section>
   
  );
};

export default Contact;
