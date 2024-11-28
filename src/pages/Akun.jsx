import { useState } from "react";
import { Link } from "react-router-dom";

const AccountPage = () => {
  const [user] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+62 812-3456-7890",
    address: "Jalan Raya No. 123, Jakarta, Indonesia",
    profileImage:
      "https://cdn.idntimes.com/content-images/community/2021/12/d6ccb2514b9148c8b06ebb2d5aad253f-6e2197b8f5028ed88ff457899e70f74e-44f1066b9db2f0dd7606d7491b28f693.jpg", // Ganti dengan gambar profil pengguna
  });

  const handleEditProfile = () => {
    alert("Fitur edit profil akan segera hadir!");
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5 sm:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center sm:space-x-6">
          <img
            src={user.profileImage}
            alt="Profile"
            className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-2 border-blue-500 object-cover mb-4 sm:mb-0"
          />
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">{user.name}</h1>
            <p className="text-base sm:text-lg text-gray-600">{user.email}</p>
            <button
              onClick={handleEditProfile}
              className="mt-2 text-blue-500 hover:text-blue-700"
            >
              Edit Profil
            </button>
          </div>
        </div>

        {/* Information Section */}
        <div className="space-y-4">
          <div className="flex justify-between text-base sm:text-lg text-gray-700">
            <span>Phone</span>
            <span>{user.phone}</span>
          </div>
          <div className="flex justify-between text-base sm:text-lg text-gray-700">
            <span>Address</span>
            <span>{user.address}</span>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-8 space-y-4 sm:space-y-0 sm:flex sm:justify-between">
          <Link
            to="/history"
            className="w-full sm:w-auto bg-orange-500 text-white py-2 px-4 rounded-lg text-center hover:bg-orange-700  ml-10 mr-10"
          >
            Order History
          </Link>
          <Link
            to="/settings"
            className="w-full sm:w-auto bg-blue-500 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-600  ml-10 mr-10"
          >
            Settings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
