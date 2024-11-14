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
    <div className="flex bg-[#f7fbff] h-screen">
      {/* Sidebar */}
      <SideBar />
      
      {/* Main Content */}
      <main className="flex-grow flex flex-col">
        {/* Header */}
        <Header />

        {/* Form Container */}
        <div className="container mx-auto" style={{overflowY:'scroll',scrollbarWidth:'none'}}>
          {/* Back Button and Title */}
          <div className="flex items-center mt-6  mb-4">
            <Link to="/create-job" className="cursor-pointer ml-6">
              <ArrowBackIosNewIcon />
            </Link>
            <h2 className="text-lg font-semibold ml-4 text-[#000000]" style={{fontSize:'24px',fontFamily:'Montserrat'}}>Create Job</h2>
          </div>

          <div className="h-full py-6 px-6 max-w-5xl"> 
            <div className="bg-white w-full rounded-xl border border-[#EAE5FF] py-4 px-6">
              <p className='text-left font-bold' style={{fontFamily:'Montserrat'}}>Create Job</p>
              <form className="mt-4">

                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6">
                  {/* name of opportunity */}
                  <div className="flex flex-col">
                      <label  htmlFor="name_of_opportunity"  className="text-sm font-medium text-start text-[12px]"  style={{ fontFamily: 'Montserrat' }}>Name of Opportunity</label>
                      <input id="service_name" name="name_of_opportunity" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',  border: `1px solid ${isFocused ? '#439BFF' : '#EAEAFF'}`,}}
                        onFocus={() => handleFocus('name_of_opportunity')}
                        onBlur={() => handleBlur('name_of_opportunity')}
                        placeholder="Enter opportunity name"
                      />
                    </div>
                    {/* hospital anme  */}
                    <div className="flex flex-col">
                      <label htmlFor="hospital_name" className="text-sm font-medium text-start text-[12px]  " style={{fontFamily:'Montserrat'}}> Email </label>
                      <div className="relative">
                        <input id="hospital_name" name="hospital_name" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14 pr-10" style={{  borderRadius: '8px',  border: `1px solid ${isFocused ? '#439BFF' : '#EAEAFF'}`,}}
                          onFocus={() => handleFocus('hospital_name')}
                          onBlur={() => handleBlur('hospital_name')}
                          placeholder='Enter Hospital Name'
                        />
                      </div>
                    </div>

                    {/* google map link */}
                    <div className="flex flex-col">
                      <label   htmlFor="google_map_link"   className="text-sm font-medium text-start text-[12px]"   style={{ fontFamily: 'Montserrat' }} >   Address </label>
                      <input   id="google_map_link"   name="google_map_link"   type="text"   required   className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',  border: `1px solid ${isFocused ? '#439BFF' : '#EAEAFF'}`,}}
                        onFocus={() => handleFocus('google_map_link')}
                        onBlur={() => handleBlur('google_map_link')}
                        placeholder="Enter Google Map Link"
                      />
                    </div>
                    {/* qualifications  */}
                    <div className="flex flex-col">
                      <label   htmlFor="qualifications"   className="text-sm font-medium text-start text-[12px]"   style={{ fontFamily: 'Montserrat' }} >   Address </label>
                      <input   id="qualifications"   name="qualifications"   type="text"   required   className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',  border: `1px solid ${isFocused ? '#439BFF' : '#EAEAFF'}`,}}
                        onFocus={() => handleFocus('qualifications')}
                        onBlur={() => handleBlur('qualifications')}
                        placeholder="Enter Qualifications"
                      />
                    </div>

                </div>
                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6">
                  {/* salary*/}
                  <div className="flex flex-col relative">
                    <label
                      htmlFor="start-date"
                      className="text-sm font-medium text-start text-[12px]"
                      style={{ fontFamily: 'Montserrat' }}
                    >
                      Salary
                    </label>
                    <div className="relative mt-1">
                      <input
                        id="salary"
                        name="salary"
                        type="date"
                        required
                        onFocus={() => handleFocus('salary')}
                        onBlur={() => handleBlur('salary')}
                        className="border rounded-lg p-3 w-full h-14"
                        style={{
                          borderRadius: '8px',
                          border: `1px solid ${startDateIsFocused ? '#439BFF' : '#EAEAFF'}`,
                        }}
                        placeholder="Enter Salary"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-start text-[12px]"
                      style={{ fontFamily: 'Montserrat' }}
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="text"
                      required
                      onFocus={() => handleFocus('email')}
                      onBlur={() => handleBlur('email')}
                      className="border rounded-lg p-3 mt-1 w-full h-14"
                      style={{
                        borderRadius: '8px',
                        border: `1px solid ${isFocused ? '#439BFF' : '#EAEAFF'}`,
                      }}
                      placeholder="Enter Email"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div className="flex flex-col relative">
                    <label
                      htmlFor="mobile_number"
                      className="text-sm font-medium text-start text-[12px]"
                      style={{ fontFamily: 'Montserrat' }}
                    >
                      Mobile number
                    </label>
                    <div className="relative mt-1">
                      <PhoneInput
                        id="mobile_number"
                        placeholder="Enter Mobile number"
                        value={value}
                        onChange={setValue}
                        defaultCountry="IN"
                        className="border rounded-lg w-full h-14"
                        style={{
                          borderRadius: '8px',
                          borderColor: '#EAEAFF',
                          paddingLeft: '6px',
                        }}
                      />
                    </div>
                  </div>

                  {/* WhatsApp Number */}
                  <div className="flex flex-col relative">
                    <label
                      htmlFor="whatsapp_number"
                      className="text-sm font-medium text-start text-[12px]"
                      style={{ fontFamily: 'Montserrat' }}
                    >
                      WhatsApp number
                    </label>
                    <div className="relative mt-1">
                      <FaWhatsapp className="absolute left-2 top-1/2 transform -translate-y-1/2 text-green-500 w-6 h-6 pointer-events-none" />
                      <input
                        id="whatsapp_number"
                        placeholder="Enter WhatsApp number"
                        className={`border rounded-lg pl-[36px] w-full h-14 ${
                          whatsAppFocused ? 'border-[#439BFF]' : 'border-[#EAEAFF]'
                        }`}
                        onFocus={() => handleFocus('whatsapp_number')}
                        onBlur={() => handleBlur('whatsapp_number')}
                        style={{
                          borderRadius: '8px',
                        }}
                      />
                    </div>
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
