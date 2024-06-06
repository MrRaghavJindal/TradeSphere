// Profile.js
import React, { useState } from 'react';

const Profile = () => {
    let auth = localStorage.getItem("users");
    auth = JSON.parse(auth);


  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: `${auth.username}`,
    email: `${auth.email}`,
    age: 30,
    city: 'New York',
    pincode: '10001',
    state: 'NY',
    country: 'USA',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className=" bg-orange-50 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          {Object.keys(profile).map((key) => (
            <div key={key}>
              <label className="block text-sm font-medium text-gray-700 capitalize">{key}:</label>
              <input
                type="text"
                name={key}
                value={profile[key]}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          ))}
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
          >
            Save
          </button>
        </form>
      ) : (
        <div className="space-y-4">
          {Object.entries(profile).map(([key, value]) => (
            <div key={key}>
              <label className="block text-sm font-medium text-gray-700 capitalize">{key}:</label>
              <p className="mt-1 text-lg text-gray-900">{value}</p>
            </div>
          ))}
          <button
            onClick={handleEditToggle}
            className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
