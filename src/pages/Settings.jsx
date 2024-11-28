import { useState } from 'react';

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);

  return (
    <div className={`min-h-screen py-10 px-5 sm:px-10 lg:px-20 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6">Account Settings</h1>
        
        {/* Profile Settings */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="john.doe@example.com"
              />
            </div>
          </div>
        </div>
        
        {/* Notifications Settings */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="emailNotifications"
                checked={emailNotifications}
                onChange={() => setEmailNotifications(!emailNotifications)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="emailNotifications" className="ml-3 text-sm">Receive Email Notifications</label>
            </div>
          </div>
        </div>
        
        {/* Theme Settings */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Theme Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="darkMode"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="darkMode" className="ml-3 text-sm">Enable Dark Mode</label>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-blue-500 text-white py-3 px-8 rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
