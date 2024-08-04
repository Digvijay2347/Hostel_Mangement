// src/components/student.js
import React, { useState } from 'react';

const Student = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white h-full fixed lg:relative lg:block lg:w-1/4">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Complaints</h2>
          <ul>
            <li
              className="cursor-pointer py-2 px-4 hover:bg-gray-600"
              onClick={() => handleCategoryClick('AC Complaint')}
            >
              AC Complaint
            </li>
            <li
              className="cursor-pointer py-2 px-4 hover:bg-gray-600"
              onClick={() => handleCategoryClick('Room Complaint')}
            >
              Room Complaint
            </li>
            <li
              className="cursor-pointer py-2 px-4 hover:bg-gray-600"
              onClick={() => handleCategoryClick('General Complaints')}
            >
              General Complaints
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-4 lg:ml-0 lg:pl-4">
        {selectedCategory ? (
          <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">{selectedCategory}</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="block" className="block text-gray-700">Block Selection</label>
                <select id="block" className="block w-full mt-1 border-gray-300 rounded-md shadow-sm">
                  <option>A-Block</option>
                  <option>Block B</option>
                  <option>Block B</option>
                  <option>Block B</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="roomNo" className="block text-gray-700">Room Number</label>
                <input
                  type="text"
                  id="roomNo"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
                  placeholder="Enter room number"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700">Description</label>
                <textarea
                  id="description"
                  rows="4"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
                  placeholder="Enter description"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-10">
            <h2 className="text-2xl font-semibold">Select a Complaint Category</h2>
          </div>
        )}
      </main>
    </div>
  );
};

export default Student;
