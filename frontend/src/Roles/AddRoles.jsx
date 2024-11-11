import React from 'react';
import Header from '../components/Header';
// import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import { Link } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const AddRoles = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <SideBar />
      
      {/* Main Content */}
      <main className="flex-grow">
        {/* Header */}
        <Header />

        {/* Form Container */}
        <div className="container mx-auto">
          {/* Back Button and Title */}
          <div className="flex items-center mt-6  mb-4">
            <Link to="/rolesList" className="cursor-pointer ml-6">
              <ArrowBackIosNewIcon />
            </Link>
            <h2 className="text-lg font-semibold ml-4 " style={{color:'#000000',fontSize:'24px',fontFamily:'Montserrat'}}>Add Role</h2>
          </div>

          {/* Form Fields */}
          <div className="bg-[#f7fbff] h-full py-6 px-6">
                    <div className="bg-white w-full rounded-xl border border-[#EAE5FF] py-4 px-6">
                      <p className='text-left font-bold' style={{fontFamily:'Montserrat'}}>Add role</p>
                        <form className="mt-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Prefix */}
                        <div className="flex flex-col">
                          <label htmlFor="prefix" className="text-sm font-medium text-start">Role Name</label>
                          <input
                            id="first-name"
                            name="first-name"
                            type="text"
                            required
                            className="border rounded-lg p-2 mt-1 text-sm"
                          />
                        </div>

                        {/* Type of user */}
                        <div className="flex flex-col">
                          <label htmlFor="user-type" className="text-sm font-medium text-start">Start Date</label>
                          <input
                            id="first-name"
                            name="first-name"
                            type="date"
                            required
                            className="border rounded-lg p-2 mt-1 text-sm"
                          />
                        </div>

                        {/* First Name */}
                        <div className="flex flex-col">
                          <label htmlFor="first-name" className="text-sm font-medium text-start">End Date</label>
                          <input
                            id="first-name"
                            name="first-name"
                            type="date"
                            required
                            className="border rounded-lg p-2 mt-1 text-sm"
                          />
                        </div>

                      </div>

                      {/* Action Buttons */}
                      <div className="flex justify-end mt-6 gap-3">
                        <button
                          type="button"
                          className="mr-4 text-gray-700 hover:text-gray-800 flex items-center justify-center"
                          style={{
                            width: "150px",
                            height: "48px",
                            padding: "0px 16px",
                            gap: "12px",
                            borderRadius: "8px",
                            border: "1px solid #71717A",
                            color: "#71717A",
                            fontFamily:'Montserrat'
                          }}
                        >
                          <img src="/image/action/Big Arrow _ Left.svg" alt="Arrow Left" />
                          Cancel
                        </button>

                        <button
                          type="submit"
                          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                          style={{
                            width: "150px",
                            height: "48px",
                            borderRadius: "8px",
                            fontFamily:'Montserrat'
                          }}
                        >
                          Save
                        </button>
                      </div>

                        </form>
                    </div>
                </div>
          
        </div>

        {/* Footer */}
        {/* <Footer /> */}
      </main>
    </div>
  );
};

export default AddRoles;
