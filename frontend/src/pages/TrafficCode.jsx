import React, { useState } from "react";
import { FaRoad, FaStopCircle, FaExclamationTriangle, FaCarCrash } from "react-icons/fa";

const categories = [
  { title: "Speed Limits", icon: <FaRoad className="text-3xl text-[#303481]" />, description: "Learn speed regulations in cities and highways." },
  { title: "Traffic Signs", icon: <FaStopCircle className="text-3xl text-[#303481]" />, description: "Recognize all Moroccan traffic signs." },
  { title: "Penalties", icon: <FaExclamationTriangle className="text-3xl text-[#303481]" />, description: "Understand fines and legal consequences." },
  { title: "Accident Prevention", icon: <FaCarCrash className="text-3xl text-[#303481]" />, description: "Tips and rules to avoid accidents." },
];

const TrafficCode = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="max-w-6xl mx-auto mt-32 px-6 py-8">
      <h1 className="text-3xl font-extrabold text-[#303481] mb-8 text-center">Traffic Code - Morocco</h1>

      {/* Search */}
      <div className="mb-10 flex justify-center">
        <input
          type="text"
          placeholder="Search rules..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-3 border-2 border-[#303481] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FFF200] transition"
        />
      </div>

      {/* Category Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="p-6 rounded-2xl border-2 border-[#303481] bg-white shadow-md hover:shadow-xl transition cursor-pointer flex flex-col items-center text-center"
          >
            <div className="mb-4">{cat.icon}</div>
            <h2 className="font-bold text-xl mb-2">{cat.title}</h2>
            <p className="text-[#303481]">{cat.description}</p>
          </div>
        ))}
      </div>

      {/* Example Rules / Accordion */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-[#303481] mb-4">Sample Rules</h2>
        <div className="space-y-4">
          <details className="border-2 border-[#303481] rounded-xl p-4 hover:shadow-lg transition">
            <summary className="font-semibold cursor-pointer">Speed Limit in City</summary>
            <p className="mt-2 text-[#303481]">The maximum speed limit inside urban areas is 60 km/h unless indicated otherwise.</p>
          </details>
          <details className="border-2 border-[#303481] rounded-xl p-4 hover:shadow-lg transition">
            <summary className="font-semibold cursor-pointer">Seat Belt Law</summary>
            <p className="mt-2 text-[#303481]">Seat belts must be worn by all passengers in front and rear seats at all times.</p>
          </details>
        </div>
      </div>

      {/* Optional Quiz Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-[#303481] mb-4">Quick Quiz</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border-2 border-[#303481] rounded-2xl p-4 shadow-md hover:shadow-xl transition">
            <p className="mb-2">What is the maximum speed on highways?</p>
            <button className="px-4 py-2 rounded-xl bg-[#303481] text-white hover:bg-[#FFF200] hover:text-[#303481] transition mr-2">120 km/h</button>
            <button className="px-4 py-2 rounded-xl border-2 border-[#303481] hover:bg-[#FFF200] hover:text-[#303481] transition">100 km/h</button>
          </div>
          <div className="border-2 border-[#303481] rounded-2xl p-4 shadow-md hover:shadow-xl transition">
            <p className="mb-2">Seat belts are mandatory for:</p>
            <button className="px-4 py-2 rounded-xl border-2 border-[#303481] hover:bg-[#FFF200] hover:text-[#303481] transition mr-2">Front passengers</button>
            <button className="px-4 py-2 rounded-xl bg-[#303481] text-white hover:bg-[#FFF200] hover:text-[#303481] transition">All passengers</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrafficCode;
