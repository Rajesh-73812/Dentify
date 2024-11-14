import React, { useState } from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import { Link } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const AddRoles = () => {
  const [isFocused, setIsFocused] = useState(false); 
  const [startDateIsFocused, setStartDateIsFocused] = useState(false); 
  const [endDateIsFocused, setEndDateIsFocused] = useState(false); 

  return (
    <div className="flex bg-[#f7fbff]">
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
            <Link to="/dashboard" className="cursor-pointer ml-6">
              <ArrowBackIosNewIcon />
            </Link>
            <h2 className="text-lg font-semibold ml-4 " style={{color:'#000000',fontSize:'24px',fontFamily:'Montserrat'}}>Add Role</h2>
          </div>
          {/* Form Container */}
          <div className="h-full py-6 px-6 max-w-5xl"> 
            <div className="bg-white w-full rounded-xl border border-[#EAE5FF] py-4 px-6">
              <p className='text-left font-bold' style={{fontFamily:'Montserrat'}}>Add role</p>
              <form className="mt-4">
                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {/* Role Name */}
                  <div className="flex flex-col">
                    <label htmlFor="role_name" className="text-sm font-medium text-start" style={{fontFamily:'Montserrat', fontWeight:'500px', fontSize:'14px'}}>Role Name <span>*</span></label>
                    <input
                      id="role_name"
                      name="role_name"
                      type="text"
                      required
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      className="border rounded-lg p-3 mt-1 w-full h-14"
                      style={{
                        borderRadius: '8px',
                        border: `1px solid ${isFocused ? '#439BFF' : '#EAEAFF'}`,
                      }}
                      placeholder='Enter Role'
                    />
                  </div>
                  
                  {/* Start Date */}
                  <div className="flex flex-col">
                    <label htmlFor="start-date" className="text-sm font-medium text-start" style={{fontFamily:'Montserrat', fontWeight:'500px', fontSize:'14px'}}>Start Date</label>
                    <input
                      id="start-date"
                      name="start-date"
                      type="date"
                      required
                      onFocus={() => setStartDateIsFocused(true)}
                      onBlur={() => setStartDateIsFocused(false)}
                      className="border rounded-lg p-3 mt-1 w-full h-14"
                      style={{
                        borderRadius: '8px',
                        border: `1px solid ${startDateIsFocused ? '#439BFF' : '#EAEAFF'}`,
                      }}
                      placeholder='dd/mm/yyyy'
                    />
                  </div>
                  
                  {/* End Date */}
                  <div className="flex flex-col">
                    <label htmlFor="end-date" className="text-sm font-medium text-start" style={{fontFamily:'Montserrat', fontWeight:'500px', fontSize:'14px'}}>End Date</label>
                    <input
                      id="end-date"
                      name="end-date"
                      type="date"
                      required
                      onFocus={() => setEndDateIsFocused(true)}
                      onBlur={() => setEndDateIsFocused(false)}
                      className="border rounded-lg p-3 mt-1 w-full h-14"
                      style={{
                        borderRadius: '8px',
                        border: `1px solid ${endDateIsFocused ? '#439BFF' : '#EAEAFF'}`,
                      }}
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end mt-6 gap-3">
                  <button
                    type="button"
                    className="text-gray-700 hover:text-gray-800 flex items-center justify-center"
                    style={{
                      width: "150px",
                      height: "48px",
                      borderRadius: "8px",
                      border: "1px solid #71717A",
                      color: "#71717A",
                      fontFamily: 'Montserrat',
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
                      fontFamily: 'Montserrat',
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