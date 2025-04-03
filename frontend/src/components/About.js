import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600">About Our Website</h1>
        <p className="text-gray-700 mt-4 text-center">
          Welcome to our platform! Here’s how you can use our website effectively:
        </p>

        <div className="mt-6 space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-blue-800">1. Login / Sign Up</h2>
            <p className="text-gray-600">First, create an account or log in if you already have one.</p>
          </div>

          <div className="p-4 bg-green-50 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-green-800">2. Add Products</h2>
            <p className="text-gray-600">Go to the "Add Products" section, fill in the details, and list your product.</p>
          </div>

          <div className="p-4 bg-yellow-50 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-yellow-800">3. View Your Products</h2>
            <p className="text-gray-600">
              You can see your added products on the <strong>Home Page</strong> and the <strong>My Products</strong> page.
            </p>
          </div>

          <div className="p-4 bg-red-50 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-red-800">4. Buy Products</h2>
            <p className="text-gray-600">Browse and buy products added by other users easily.</p>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gray-200 rounded-lg shadow">
          <h2 className="text-xl font-bold text-gray-800 text-center">About the Creator</h2>
          <p className="text-gray-700 text-center mt-2">
            This website is created by <strong>Raghav Jindal</strong>. He is a passionate web and software developer specializing in React, Electron.js, and the MERN stack. His goal is to build efficient and user-friendly applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
