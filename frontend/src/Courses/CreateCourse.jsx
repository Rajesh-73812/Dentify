import React, { useRef, useState } from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import { Link } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const CreateJobs = () => {
  const [focusState,setFocusState]=useState({});

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

  // for geting calender
 
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
                      <input id="service_name" name="name_of_opportunity" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',border: '1px solid #EAEAFF',}}
                        onFocus={() => handleFocus('name_of_opportunity')}
                        onBlur={() => handleBlur('name_of_opportunity')}
                        placeholder="Enter opportunity name"
                      />
                  </div>
                  {/* course start date */}
                  <div className="flex flex-col relative">
                    <label   htmlFor="form_date"   className="text-sm font-medium text-start text-[12px]"   style={{ fontFamily: 'Montserrat' }} >Course Start Date </label>
                    <div className="relative mt-1">
                      <input  id="form_date"  name="form_date"  type="date"  required  className="border rounded-lg p-3 w-full h-14" style={{ borderRadius: '8px',   border: '1px solid #EAEAFF'}}
                        onFocus={() => handleFocus('form_date')}
                        onBlur={() => handleBlur('form_date')}
                        placeholder="dd/mm/yyyy"
                      />
                      <img src="/image/action/uil_calender.svg"   alt="Calendar icon"   className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 pointer-events-none" />
                    </div>
                  </div>  
                    {/* course end  date */}
                  <div className="flex flex-col relative">
                    <label   htmlFor="to_date"   className="text-sm font-medium text-start text-[12px]"   style={{ fontFamily: 'Montserrat' }} >Course End Date </label>
                      <div className="relative mt-1">
                      <input  id="to_date"  name="to_date"  type="date"  required  className="border rounded-lg p-3 w-full h-14" style={{ borderRadius: '8px', border: '1px solid #EAEAFF' }}
                        onFocus={() => handleFocus('to_date')}
                        onBlur={() => handleBlur('to_date')}
                        placeholder="dd/mm/yyyy"
                      />
                      <img  src="/image/action/uil_calender.svg"  alt="Calendar icon"  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 pointer-events-none" />
                    </div>
                  </div> 
                  {/* course type  */}
                  <div className="flex flex-col">
                    <label htmlFor="course_type" className="text-sm font-medium text-start text-[12px]" style={{ fontFamily: 'Montserrat' }}>Course Type </label>
                    <div className="flex mt-1">
                      <div className="flex items-center mr-4">
                        <input  id="online"  name="course_type"  type="radio"  value="online" defaultChecked  required  className="border rounded-lg  h-14 w-5"  style={{ borderRadius: '8px',border: '1px solid #EAEAFF' }}   />
                        <label htmlFor="online" className="ml-2 text-sm font-medium" style={{ fontFamily: 'Montserrat' }}>
                          Online
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input  id="in-person"  name="course_type"  type="radio"  value="in-person"  required  className="border rounded-lg h-5 w-5" style={{ borderRadius: '8px',border: '1px solid #EAEAFF'}}   />
                        <label htmlFor="in-person" className="ml-2 text-sm font-medium" style={{ fontFamily: 'Montserrat' }}>
                          In-Person
                        </label>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6">
                   {/* course charges */}
                   <div className="flex flex-col">
                    <label  htmlFor="course_type"  className="text-sm font-medium text-start text-[12px]"  style={{ fontFamily: 'Montserrat' }}>Course Type</label>
                    <div className="flex items-center gap-x-1 mt-1">
                      {/* Paid Option */}
                      <div className="flex items-center">
                        <input  id="paid"  name="course_charges"  type="radio"  value="paid"  defaultChecked  required  className="border rounded-lg h-5 w-5"  style={{ borderRadius: '8px',border: '1px solid #EAEAFF'}}/>
                        <label  htmlFor="paid"  className="ml-2 text-sm font-medium"  style={{ fontFamily: 'Montserrat' }}>  Paid</label>
                      </div>

                      {/* Free Option */}
                      <div className="flex items-center">
                        <input   id="free"   name="course_charges"   type="radio"   value="free"   required   className="border rounded-lg h-5 w-5"   style={{ borderRadius: '8px',border: '1px solid #EAEAFF'}} /> 
                        <label  htmlFor="free"  className="ml-2 text-sm font-medium"  style={{ fontFamily: 'Montserrat' }}>  Free</label>
                      </div>

                      {/* Price Display */}
                      <input  type="text"  className="ml-4 w-20 h-10 text-center border rounded-md text-[#757575]"  value="₹2000"  style={{border:'1px solid #EAEAFF'}} />
                    </div>
                    </div>
                  {/* Amount */}
                  <div className="flex flex-col">
                    <label  htmlFor="amount"  className="text-sm font-medium text-start text-[12px]"  style={{ fontFamily: 'Montserrat' }}>Amount</label>
                    <input  id="amount" name="amount"  type="text"  required className="border rounded-lg p-3 mt-1 w-full h-14" style={{ borderRadius: '8px',border: '1px solid #EAEAFF'}}
                      onFocus={() => handleFocus('amount')}
                      onBlur={() => handleBlur('amount')}
                      placeholder="Enter amount"
                    />
                  </div>
                  {/* Description */}
                  <div className="flex flex-col">
                    <label  htmlFor="description"  className="text-sm font-medium text-start text-[12px]"  style={{ fontFamily: 'Montserrat' }}>Description</label>
                    <input  id="description" name="description"  type="text"  required className="border rounded-lg p-3 mt-1 w-full h-14" style={{ borderRadius: '8px',border: '1px solid #EAEAFF'}}
                      onFocus={() => handleFocus('description')}
                      onBlur={() => handleBlur('description')}
                      placeholder="Enter description"
                    />
                  </div>
                </div>
                {/* Action Buttons */}
                <div className="flex justify-end mt-6 gap-3">
                  <button  type="button"  className="text-gray-700 hover:text-gray-800 flex items-center justify-center"  style={{ width: "150px", height: "48px", borderRadius: "8px", border: "1px solid #71717A", color: "#71717A", fontFamily: 'Montserrat'}}>
                    <img src="/image/action/Big Arrow _ Left.svg" alt="Arrow Left" />
                    Cancel
                  </button>

                  <button  type="submit"  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"  style={{ width:"150px", height:"48px", borderRadius:"8px", fontFamily:'Montserrat'}}>
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
