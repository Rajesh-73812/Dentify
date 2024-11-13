import React, { useState } from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import { Link } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PhoneInput from 'react-phone-number-input'

const CreateService = () => {
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
            <h2 className="text-lg font-semibold ml-4 " style={{color:'#000000',fontSize:'24px',fontFamily:'Montserrat'}}>Create Service</h2>
          </div>

          {/* Form Container */}
          <div className="h-full py-6 px-6 max-w-5xl"> 
            <div className="bg-white w-full rounded-xl border border-[#EAE5FF] py-4 px-6">
              <p className='text-left font-bold' style={{fontFamily:'Montserrat'}}>Create Service</p>
              <form className="mt-4">

                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6">
                  {/* Service name */}
                  <div className="flex flex-col">
                      <label  htmlFor="service_name"  className="text-sm font-medium text-start text-[12px]"  style={{ fontFamily: 'Montserrat' }}> Service name </label>
                      <input id="service_name" name="service_name" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',  border: `1px solid ${isFocused ? '#439BFF' : '#EAEAFF'}`,}}
                        onFocus={() => handleFocus('service_name')}
                        onBlur={() => handleBlur('service_name')}
                        placeholder="Enter service name"
                      />
                    </div>
                    {/* service actegory */}
                    <div className="flex flex-col">
                      <label htmlFor="prefix" className="text-sm font-medium text-start text-[12px]  " style={{fontFamily:'Montserrat'}}> Service Category </label>
                      <div className="relative">
                        <input id="service_category" name="service_category" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14 pr-10" style={{  borderRadius: '8px',  border: `1px solid ${isFocused ? '#439BFF' : '#EAEAFF'}`,}}
                          onFocus={() => handleFocus('service_category')}
                          onBlur={() => handleBlur('service_category')}
                          placeholder='Select'
                        />
                        {/* Down arrow icon */}
                        <img src="/image/action/Down Arrow.svg"  alt="Dropdown"  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 pointer-events-none" />
                      </div>
                    </div>

                    {/* digital marketing service  */}
                    <div className="flex flex-col">
                      <label   htmlFor="digital_marketing_service"   className="text-sm font-medium text-start text-[12px]"   style={{ fontFamily: 'Montserrat' }} >   Product Desription </label>
                      <input   id="digital_marketing_service"   name="digital_marketing_service"   type="text"   required   className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',  border: `1px solid ${isFocused ? '#439BFF' : '#EAEAFF'}`,}}
                        onFocus={() => handleFocus('digital_marketing_service')}
                        onBlur={() => handleBlur('digital_marketing_service')}
                        placeholder="Enter Digital Marketing Service"
                      />
                    </div>
                    {/* service provider */}
                    <div className="flex flex-col">
                      <label htmlFor="service_provider" className="text-sm font-medium text-start text-[12px]  " style={{fontFamily:'Montserrat'}}>  Select  </label>
                      <div className="relative">
                        <input  id="service_provider"  name="service_provider"  type="text"  required  className="border rounded-lg p-3 mt-1 w-full h-14 pr-10" style={{  borderRadius: '8px',  border: `1px solid ${isFocused ? '#439BFF' : '#EAEAFF'}`,}}
                          onFocus={() => handleFocus('service_provider')}
                          onBlur={() => handleBlur('service_provider')}
                          placeholder='Select'
                        />
                        {/* Down arrow icon */}
                        <img src="/image/action/Down Arrow.svg"  alt="Dropdown"  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 pointer-events-none" />
                      </div>
                    </div>

                </div>
                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6">
                    {/* address*/}
                    <div className="flex flex-col">
                      <label  htmlFor="address"  className="text-sm font-medium text-start text-[12px]"  style={{ fontFamily: 'Montserrat' }}>  Product Source</label>
                      <input  id="address"  name="address"  type="text"  required  className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',  border: `1px solid ${isFocused ? '#439BFF' : '#EAEAFF'}`,}}
                        onFocus={() => handleFocus('address')}
                        onBlur={() => handleBlur('address')}
                        placeholder="Enter Address"
                      />
                    </div>

                    {/* Mobile Number */}
                    <div className="flex flex-col relative">
                      <label  htmlFor="mobile_number"  className="text-sm font-medium text-start text-[12px]"  style={{ fontFamily: 'Montserrat' }}>  Mobile number</label>
                      <div className="relative mt-1">
                        <PhoneInput id="mobile_number" placeholder="Enter Mobile number" value={value} onChange={setValue} defaultCountry="IN" className="border rounded-lg w-full h-14" style={{   borderRadius: '8px',   borderColor: '#EAEAFF',   paddingLeft: '6px', }} />
                      </div>
                    </div>
                    {/* product source*/}
                    <div className="flex flex-col">
                      <label   htmlFor="service_price"   className="text-sm font-medium text-start text-[12px]"   style={{ fontFamily: 'Montserrat' }} > Product Source </label>
                      <input   id="service_price"   name="service_price"   type="text"   required className="border rounded-lg p-3 mt-1 w-full h-14"
                        onFocus={() => handleFocus('service_price')}
                        onBlur={() => handleBlur('service_price')}
                        style={{ borderRadius: '8px', border: `1px solid ${isFocused ? '#439BFF' : '#EAEAFF'}`,}}
                        placeholder="Enter service price"
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

export default CreateService;
