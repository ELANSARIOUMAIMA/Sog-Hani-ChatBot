import React, { useState } from "react";
import { FaCamera, FaIdCard, FaCar } from "react-icons/fa";

const Profile = () => {
  const [photo, setPhoto] = useState(null);
  const [documents, setDocuments] = useState({});
  const [form, setForm] = useState({
    name: "User Name",
    email: "user@email.com",
    phone: "",
    language: "fr"
  });

  const handleFileChange = (e, key) => {
    setDocuments({
      ...documents,
      [key]: URL.createObjectURL(e.target.files[0])
    });
  };

  return (
    <div className="max-w-4xl mx-auto mt-32 p-6 bg-white rounded-2xl shadow-lg border-2 border-[#303481]">
      <h1 className="text-2xl font-bold text-[#303481] mb-8 text-center">
        My Profile & Documents
      </h1>

      {/* PROFILE PHOTO */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative">
          <img
            src={photo || "/avatar-placeholder.png"}
            
            className="w-32 h-32 rounded-full border-4 border-[#303481] object-cover"
          />
          
          <label className="absolute bottom-0 right-0 bg-[#303481] p-2 rounded-full cursor-pointer">
            <FaCamera className="text-white" />
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(e) =>
                setPhoto(URL.createObjectURL(e.target.files[0]))
              }
            />
          </label>
          
        </div>
        <p className="mt-3 font-semibold text-[#303481]">
          Upload Profile Photo
        </p>

        <div className="space-y-4">
        <input
          className="w-full border-2 border-[#303481] rounded-xl px-4 py-2"
          placeholder="Full Name"
          value={form.name}
        />

        <input
          className="w-full border-2 border-[#303481] rounded-xl px-4 py-2"
          placeholder="Email"
          value={form.email}
        />

        <input
          className="w-full border-2 border-[#303481] rounded-xl px-4 py-2"
          placeholder="Phone Number"
          value={form.phone}
        />

        <select className="w-full border-2 border-[#303481] rounded-xl px-4 py-2">
          <option value="fr">Français</option>
          <option value="ar">العربية</option>
          <option value="en">English</option>
        </select>

        


      </div>
        
      </div>

      {/* DOCUMENTS */}
      <div className="grid md:grid-cols-2 gap-6">
        
        {/* PERMIS MAROCAIN */}
        <div className="border-2 border-[#303481] rounded-xl p-4">
          <div className="flex items-center space-x-2 mb-2">
            <FaCar className="text-[#303481]" />
            <h2 className="font-bold">Permis de Conduire (Maroc)</h2>
          </div>

          <input
            type="file"
            accept="image/*,application/pdf"
            onChange={(e) => handleFileChange(e, "permis")}
          />

          {documents.permis && (
            <img
              src={documents.permis}
              alt="Permis"
              className="mt-3 rounded-lg border"
            />
          )}
        </div>

        {/* CIN */}
        <div className="border-2 border-[#303481] rounded-xl p-4">
          <div className="flex items-center space-x-2 mb-2">
            <FaIdCard className="text-[#303481]" />
            <h2 className="font-bold">Carte Nationale (CIN)</h2>
          </div>

          <input
            type="file"
            accept="image/*,application/pdf"
            onChange={(e) => handleFileChange(e, "cin")}
          />

          {documents.cin && (
            <img
              src={documents.cin}
              alt="CIN"
              className="mt-3 rounded-lg border"
            />
          )}
        </div>

        {/* INSURANCE */}
        <div className="border-2 border-[#303481] rounded-xl p-4">
          <h2 className="font-bold mb-2">Insurance Certificate</h2>
          <input
            type="file"
            accept="image/*,application/pdf"
            onChange={(e) => handleFileChange(e, "insurance")}
          />
        </div>

        {/* CAR REGISTRATION */}
        <div className="border-2 border-[#303481] rounded-xl p-4">
          <h2 className="font-bold mb-2">Carte Grise</h2>
          <input
            type="file"
            accept="image/*,application/pdf"
            onChange={(e) => handleFileChange(e, "carteGrise")}
          />
        </div>
      </div>

       {/* SAVE & CANCEL BUTTONS */}
      <div className="mt-10 flex flex-col md:flex-row gap-4">
         <button className="flex-1 bg-gradient-to-br from-[#303481] to-[#FFF200] text-white py-3 rounded-2xl font-bold hover:shadow-xl hover:scale-[1.02] transition-all">
          Save Changes
        </button>
        <button className="flex-1 bg-white border-2 border-[#303481] text-[#303481] py-3 rounded-2xl font-bold hover:bg-[#FFF200] hover:text-[#303481] transition-all">
          Cancel
        </button>

      </div>
      
      
    </div>
  );
};

export default Profile;
