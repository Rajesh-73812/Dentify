import React, { useState } from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import { Link } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { FaWhatsapp } from 'react-icons/fa';

const CreateJobs = () => {
  const [value, setValue] = useState();
  const [isFocused, setIsFocused] = useState(false); 
  const [startDateIsFocused, setStartDateIsFocused] = useState(false); 
  const [endDateIsFocused, setEndDateIsFocused] = useState(false); 
  const [focusState,setFocusState]=useState({});
  const [whatsAppFocused, setWhatsAppFocused] = useState(false);


  const handleFocus=(field)=>{
    setFocusState((prevstate)=>({
      ...prevstate,
      [field]:true
    }))
  }
  const handleBlur=(field)=>{
    setFocusState((prevstate)=>({
      ...prevstate,
      [field]:false
    }))
  }

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
            <Link to="/rolesList" className="cursor-pointer ml-6">
              <ArrowBackIosNewIcon />
            </Link>
            <h2 className="text-lg font-semibold ml-4 " style={{color:'#000000',fontSize:'24px',fontFamily:'Montserrat'}}>Create Course</h2>
          </div>

          {/* Form Container */}
          <div className="h-full py-6 px-6 max-w-5xl"> 
            <div className="bg-white w-full rounded-xl border border-[#EAE5FF] py-4 px-6">
              <p className='text-left font-bold' style={{fontFamily:'Montserrat'}}>Create Course</p>
              <form className="mt-4">

                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6">
                  {/* name of opportunity */}
                  <div className="flex flex-col">
                      <label  htmlFor="name_of_opportunity"  className="text-sm font-medium text-start text-[12px]"  style={{ fontFamily: 'Montserrat' }}>Course Name </label>
                      <input id="service_name" name="name_of_opportunity" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',  border: `1px solid ${isFocused ? '#439BFF' : '#EAEAFF'}`,}}
                        onFocus={() => handleFocus('name_of_opportunity')}
                        onBlur={() => handleBlur('name_of_opportunity')}
                        placeholder="Enter opportunity name"
                      />
                  </div>
                  {/* course start date */}
                  <div className="flex flex-col relative">
                    <label   htmlFor="form_date"   className="text-sm font-medium text-start text-[12px]"   style={{ fontFamily: 'Montserrat' }} >Course Start Date </label>
                    <div className="relative mt-1">
                      <input  id="form_date"  name="form_date"  type="date"  required  className="border rounded-lg p-3 w-full h-14" style={{   borderRadius: '8px',   border: `1px solid ${startDateIsFocused ? '#439BFF' : '#EAEAFF'}`, }}
                        onFocus={() => handleFocus('form_date')}
                        onBlur={() => handleBlur('form_date')}
                        placeholder="dd/mm/yyyy"
                      />
                      <img src="/image/action/uil_calender.svg"   alt="Calendar icon"   className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 pointer-events-none"   />
                    </div>
                  </div>  
                    {/* course end  date */}
                  <div className="flex flex-col relative">
                    <label   htmlFor="to_date"   className="text-sm font-medium text-start text-[12px]"   style={{ fontFamily: 'Montserrat' }} >  Course End Date   </label>
                      <div className="relative mt-1">
                      <input  id="to_date"  name="to_date"  type="date"  required  className="border rounded-lg p-3 w-full h-14" style={{   borderRadius: '8px',   border: `1px solid ${startDateIsFocused ? '#439BFF' : '#EAEAFF'}`, }}
                        onFocus={() => handleFocus('to_date')}
                        onBlur={() => handleBlur('to_date')}
                        placeholder="dd/mm/yyyy"
                      />
                      <img  src="/image/action/uil_calender.svg"  alt="Calendar icon"  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 pointer-events-none"/>
                    </div>
                  </div> 
                  {/* course type  */}
                  <div className="flex flex-col">
                    <label htmlFor="course_type" className="text-sm font-medium text-start text-[12px]" style={{ fontFamily: 'Montserrat' }}> Course Type </label>
                    <div className="flex mt-1">
                      <div className="flex items-center mr-4">
                        <input  id="course_type"  name="online"  type="radio"  value="online" defaultChecked  required  className="border rounded-lg p-3 h-14"  style={{ borderRadius: '8px', border: `1px solid ${isFocused ? '#439BFF' : '#EAEAFF'}` }}   />
                        <label htmlFor="online" className="ml-2 text-sm font-medium" style={{ fontFamily: 'Montserrat' }}>
                          Online
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input  id="in-person"  name="qualifications"  type="radio"  value="in-person"  required  className="border rounded-lg p-3 h-14" style={{ borderRadius: '8px', border: `1px solid ${isFocused ? '#439BFF' : '#EAEAFF'}` }}   />
                        <label htmlFor="in-person" className="ml-2 text-sm font-medium" style={{ fontFamily: 'Montserrat' }}>
                          In-Person
                        </label>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6">
                  {/* source*/}
                  <div className="flex flex-col relative">
                    <label htmlFor="source"  className="text-sm font-medium text-start text-[12px]"  style={{ fontFamily: 'Montserrat' }}> Salary </label>
                    <div className="relative mt-1">
                      <input  id="source"  name="source"  type="text"  required className="border rounded-lg p-3 w-full h-14" style={{  borderRadius: '8px',  border: `1px solid ${startDateIsFocused ? '#439BFF' : '#EAEAFF'}`,}}
                        onFocus={() => handleFocus('source')}
                        onBlur={() => handleBlur('source')}
                        placeholder="Enter source"
                      />
                    </div>
                  </div>

                  {/* city name */}
                  <div className="flex flex-col">
                    <label  htmlFor="city_name"  className="text-sm font-medium text-start text-[12px]"  style={{ fontFamily: 'Montserrat' }}>State</label>
                    <input  id="city_name" name="city_name"  type="text"  required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',  border: `1px solid ${isFocused ? '#439BFF' : '#EAEAFF'}`,}}
                      onFocus={() => handleFocus('city_name')}
                      onBlur={() => handleBlur('city_name')}
                      placeholder="Enter city name"
                    />
                  </div>
                  {/* state */}
                  <div className="flex flex-col">
                    <label  htmlFor="state"  className="text-sm font-medium text-start text-[12px]"  style={{ fontFamily: 'Montserrat' }}>City Name</label>
                    <input  id="state" name="state"  type="text"  required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',  border: `1px solid ${isFocused ? '#439BFF' : '#EAEAFF'}`,}}
                      onFocus={() => handleFocus('state')}
                      onBlur={() => handleBlur('state')}
                      placeholder="Enter state"
                    />
                  </div>
                  {/* city name */}
                  <div className="flex flex-col">
                    <label  htmlFor="course_address"  className="text-sm font-medium text-start text-[12px]"  style={{ fontFamily: 'Montserrat' }}>Course Address</label>
                    <input  id="course_address" name="course_address"  type="text"  required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',  border: `1px solid ${isFocused ? '#439BFF' : '#EAEAFF'}`,}}
                      onFocus={() => handleFocus('course_address')}
                      onBlur={() => handleBlur('course_address')}
                      placeholder="Enter course address"
                    />
                  </div>
                </div>
                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6">
                  {/* salary*/}
                  <div className="flex flex-col relative">
                    <label  htmlFor="start-date"  className="text-sm font-medium text-start text-[12px]"  style={{ fontFamily: 'Montserrat' }}>  Salary</label>
                    <div className="relative mt-1">
                      <input id="salary" name="salary" type="text" required className="border rounded-lg p-3 w-full h-14" style={{  borderRadius: '8px',  border: `1px solid ${startDateIsFocused ? '#439BFF' : '#EAEAFF'}`,}}
                        onFocus={() => handleFocus('salary')}
                        onBlur={() => handleBlur('salary')}
                        placeholder="Enter Salary"
                      />
                    </div>
                  </div>
                </div>
                {/* Action Buttons */}
                <div className="flex justify-end mt-6 gap-3">
                  <button  type="button"  className="text-gray-700 hover:text-gray-800 flex items-center justify-center"  style={{    width: "150px",    height: "48px",    borderRadius: "8px",    border: "1px solid #71717A",    color: "#71717A",    fontFamily: 'Montserrat',  }}>
                    <img src="/image/action/Big Arrow _ Left.svg" alt="Arrow Left" />
                    Cancel
                  </button>

                  <button  type="submit"  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"  style={{    width: "150px",    height: "48px",    borderRadius: "8px",    fontFamily: 'Montserrat',  }}>
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

export default CreateJobs;
