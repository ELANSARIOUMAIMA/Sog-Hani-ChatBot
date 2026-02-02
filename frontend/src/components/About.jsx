import React from "react";
import { motion } from "framer-motion";
import { features } from "../assets/assets.js";

const About = () => {
  // Animation variants for consistency
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section  id="about">
      <div 
      className=" py-32 min-h-screen bg-gradient-to-br from-[#303481] via-[#D6E6F2] to-[#FFF200]
                 text-[#303481] overflow-hidden relative"
    >
      {/* Soft light overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-soft-light" />

      {/* Header Section */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
        className="py-4 px-4 text-center relative"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 font-serif
                       bg-clip-text text-transparent bg-gradient-to-r from-[#D6E6F2] to-[#FFF200]"
          >
            SOG-HANI
          </motion.h1>

          <p className="text-white text-xl leading-relaxed">
            Crafting unforgettable riding experiences, SOG-HANI brings a playful
            and intelligent spirit to every journey — turning ordinary rides into
            adventures filled with joy, safety, and smart innovation on wheels.
          </p>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-4 px-4 md:px-8 relative">
        <div
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4
                     gap-8 md:gap-12"
        >
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.id}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="relative group"
              >
                {/* Glow effect */}
                <div
                  className="absolute -inset-1 bg-gradient-to-br from-[#303481] to-[#FFF200]
                             rounded-xl blur-lg opacity-50 group-hover:opacity-80
                             transition-opacity duration-500"
                />

                {/* Card */}
                <div
                  className="relative bg-[#303481] backdrop-blur-lg rounded-xl overflow-hidden
                             border border-[#D6E6F2] hover:border-[#FFF200]
                             transition-all duration-300 h-full"
                >
                  {/* Image Section */}
                  <div className="relative  w-full h-64 overflow-hidden">
                    <motion.img
                      src={f.img}
                      alt={f.title || "Feature image"}
                      loading="lazy"
                      className="w-full h-full object-cover bg-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#303481]/60 via-transparent to-transparent" />
                  </div>

                  {/* Content Section */}
                  <div className="px-4 py-2 text-center">
                    <motion.div
                      className="inline-block mb-4"
                      whileHover={{ rotate: 15 }}
                    >
                      <Icon className="w-8 h-8 text-[#FFF200]" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2 text-[#FFF200]">
                      {f.title}
                    </h3>
                    <p className="text-[#F5F5F5] italic">{f.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>

    </section>
    
  );
};

export default About;
