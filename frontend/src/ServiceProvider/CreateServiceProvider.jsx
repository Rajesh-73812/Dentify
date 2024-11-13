import React, { useState } from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import { Link } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PhoneInput from 'react-phone-number-input'

const CreateServiceProvider = () => {
  const [value, setValue] = useState();
  const [isFocused, setIsFocused] = useState(false); 
  const [startDateIsFocused, setStartDateIsFocused] = useState(false); 
  const [endDateIsFocused, setEndDateIsFocused] = useState(false); 
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
            <h2 className="text-lg font-semibold ml-4 " style={{color:'#000000',fontSize:'24px',fontFamily:'Montserrat'}}>Create Service Provider</h2>
          </div>

          {/* Form Container */}
          <div className="h-full py-6 px-6 max-w-5xl"> 
            <div className="bg-white w-full rounded-xl border border-[#EAE5FF] py-4 px-6">
              <p className='text-left font-bold' style={{fontFamily:'Montserrat'}}>Create Service Provider</p>
              <form className="mt-4">

                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6">
                  {/* Service provider name */}
                  <div className="flex flex-col">
                      <label  htmlFor="service_provider_name"  className="text-sm font-medium text-start text-[12px]"  style={{ fontFamily: 'Montserrat' }}> Service Provider Name </label>
                      <input id="service_name" name="service_provider_name" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',  border: `1px solid ${isFocused ? '#439BFF' : '#EAEAFF'}`,}}
                        onFocus={() => handleFocus('service_provider_name')}
                        onBlur={() => handleBlur('service_provider_name')}
                        placeholder="Enter service provider name"
                      />
                    </div>
                    {/* email  */}
                    <div className="flex flex-col">
                      <label htmlFor="email" className="text-sm font-medium text-start text-[12px]  " style={{fontFamily:'Montserrat'}}> Email </label>
                      <div className="relative">
                        <input id="email" name="email" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14 pr-10" style={{  borderRadius: '8px',  border: `1px solid ${isFocused ? '#439BFF' : '#EAEAFF'}`,}}
                          onFocus={() => handleFocus('email')}
                          onBlur={() => handleBlur('email')}
                          placeholder='email'
                        />
                      </div>
                    </div>

                    {/* address */}
                    <div className="flex flex-col">
                      <label   htmlFor="address"   className="text-sm font-medium text-start text-[12px]"   style={{ fontFamily: 'Montserrat' }} >   Address </label>
                      <input   id="address"   name="address"   type="text"   required   className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',  border: `1px solid ${isFocused ? '#439BFF' : '#EAEAFF'}`,}}
                        onFocus={() => handleFocus('digital_marketing_service')}
                        onBlur={() => handleBlur('digital_marketing_service')}
                        placeholder="Enter Digital Marketing Service"
                      />
                    </div>
                    {/* Mobile Number */}
                    <div className="flex flex-col relative">
                      <label  htmlFor="mobile_number"  className="text-sm font-medium text-start text-[12px]"  style={{ fontFamily: 'Montserrat' }}>  Mobile number</label>
                      <div className="relative mt-1">
                        <PhoneInput id="mobile_number" placeholder="Enter Mobile number" value={value} onChange={setValue} defaultCountry="IN" className="border rounded-lg w-full h-14" style={{   borderRadius: '8px',   borderColor: '#EAEAFF',   paddingLeft: '6px', }} />
                      </div>
                    </div>

                </div>
                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6">
                    {/* form date */}
                  <div className="flex flex-col relative">
                    <label   htmlFor="form_date"   className="text-sm font-medium text-start text-[12px]"   style={{ fontFamily: 'Montserrat' }} >  Form Date </label>
                    <div className="relative mt-1">
                      <input  id="form_date"  name="form_date"  type="date"  required  className="border rounded-lg p-3 w-full h-14" style={{   borderRadius: '8px',   border: `1px solid ${startDateIsFocused ? '#439BFF' : '#EAEAFF'}`, }}
                        onFocus={() => handleFocus('form_date')}
                        onBlur={() => handleBlur('form_date')}
                        placeholder="dd/mm/yyyy"
                      />
                      <img src="/image/action/uil_calender.svg"   alt="Calendar icon"   className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 pointer-events-none"   />
                    </div>
                  </div>  
                    {/* to date */}
                  <div className="flex flex-col relative">
                    <label   htmlFor="to_date"   className="text-sm font-medium text-start text-[12px]"   style={{ fontFamily: 'Montserrat' }} >  Form Date   </label>
                      <div className="relative mt-1">
                      <input  id="to_date"  name="to_date"  type="date"  required  className="border rounded-lg p-3 w-full h-14" style={{   borderRadius: '8px',   border: `1px solid ${startDateIsFocused ? '#439BFF' : '#EAEAFF'}`, }}
                        onFocus={() => handleFocus('to_date')}
                        onBlur={() => handleBlur('to_date')}
                        placeholder="dd/mm/yyyy"
                      />
                      <img  src="/image/action/uil_calender.svg"  alt="Calendar icon"  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 pointer-events-none"/>
                    </div>
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

export default CreateServiceProvider;
