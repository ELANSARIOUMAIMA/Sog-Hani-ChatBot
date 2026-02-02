import React, { useState } from "react";
import { FaFileAlt, FaUpload, FaExclamationCircle } from "react-icons/fa";

const sampleInsurance = [
  { type: "Vehicle Insurance", status: "Active", expiry: "2025-06-30", doc: null },
  { type: "Driver Insurance", status: "Expired", expiry: "2024-12-01", doc: null },
];

const Insurance = () => {
  const [insurances, setInsurances] = useState(sampleInsurance);

  const handleUpload = (e, index) => {
    const fileURL = URL.createObjectURL(e.target.files[0]);
    const newInsurances = [...insurances];
    newInsurances[index].doc = fileURL;
    setInsurances(newInsurances);
  };

  return (
    <div className="max-w-5xl mx-auto mt-32 px-6 py-8">
      <h1 className="text-3xl font-extrabold text-[#303481] mb-10 text-center">
        My Insurance Documents
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {insurances.map((ins, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-2xl border-2 shadow-md hover:shadow-xl transition flex flex-col justify-between ${
              ins.status === "Active"
                ? "border-green-500"
                : ins.status === "Expired"
                ? "border-red-500"
                : "border-yellow-400"
            }`}
          >
            <div className="flex items-center mb-4">
              <FaFileAlt className="text-2xl mr-3" />
              <h2 className="font-bold text-xl">{ins.type}</h2>
            </div>

            <p className="mb-2 text-[#303481]">
              Status:{" "}
              <span
                className={`font-semibold ${
                  ins.status === "Active"
                    ? "text-green-600"
                    : ins.status === "Expired"
                    ? "text-red-600"
                    : "text-yellow-600"
                }`}
              >
                {ins.status}
              </span>
            </p>

            <p className="mb-4 text-[#303481]">Expiry: {ins.expiry}</p>

            <div className="flex flex-col gap-3">
              <label className="cursor-pointer flex items-center justify-center gap-2 bg-[#303481] text-white py-2 rounded-xl hover:bg-[#FFF200] hover:text-[#303481] transition">
                <FaUpload /> Upload Document
                <input
                  type="file"
                  accept="image/*,application/pdf"
                  hidden
                  onChange={(e) => handleUpload(e, idx)}
                />
              </label>

              {ins.doc && (
                <img
                  src={ins.doc}
                  alt="Insurance Doc"
                  className="mt-2 rounded-lg border shadow-sm hover:scale-105 transition-transform"
                />
              )}

              {ins.status === "Expired" && (
                <p className="text-red-600 flex items-center gap-2">
                  <FaExclamationCircle /> Insurance expired! Please renew.
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button className="bg-gradient-to-br from-[#303481] to-[#FFF200] text-white py-3 px-6 rounded-2xl font-bold hover:shadow-xl hover:scale-[1.02] transition">
          Add New Insurance
        </button>
      </div>
    </div>
  );
};

export default Insurance;
