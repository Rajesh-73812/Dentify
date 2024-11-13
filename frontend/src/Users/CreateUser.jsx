import React, { useState } from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import { Link } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { FaWhatsapp } from 'react-icons/fa';

const AddRoles = () => {
  const [value, setValue] = useState();
  const [isFocused, setIsFocused] = useState(false); 
  const [startDateIsFocused, setStartDateIsFocused] = useState(false); 
  const [endDateIsFocused, setEndDateIsFocused] = useState(false); 
  const [whatsAppFocused, setWhatsAppFocused] = useState(false);
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
            <h2 className="text-lg font-semibold ml-4 " style={{color:'#000000',fontSize:'24px',fontFamily:'Montserrat'}}>Create User</h2>
          </div>
          {/* Form Container */}
          <div className="h-full py-6 px-6 max-w-5xl" style={{width:'1000px',overflow:'scroll',scrollbarWidth:'none'}}> 
            <div className="bg-white w-full rounded-xl border border-[#EAE5FF] py-4 px-6" style={{overflowX:'scroll'}}>
              <p className='text-left font-bold' style={{fontFamily:'Montserrat'}}>Add role</p>
              <form className="mt-4">
                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                  {/* prefix */}
                  <div className="flex flex-col">
                    <label htmlFor="prefix" className="text-sm font-medium text-start text-[12px]  " style={{fontFamily:'Montserrat'}}>
                      Prefix <span>*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="prefix"
                        name="prefix"
                        type="text"
                        required
                        onFocus={() => handleFocus('prefix')}
                        onBlur={() => handleBlur('prefix')}
                        className="border rounded-lg p-3 mt-1 w-full h-14 pr-10"
                        style={{
                          borderRadius: '8px',
                          border: `1px solid ${isFocused ? '#439BFF' : '#EAEAFF'}`,
                        }}
                        placeholder='Prefix'
                      />
                      {/* Down arrow icon */}
                      <img src="/image/action/Down Arrow.svg"  alt="Dropdown"  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 pointer-events-none" />
                    </div>
                  </div>

                  {/* type_of_user */}
                  <div className="flex flex-col">
                    <label htmlFor="type_of_user" className="text-sm font-medium text-start text-[12px] " style={{fontFamily:'Montserrat'}}>
                      Type of user <span>*</span>
                    </label>
                    <input
                      id="type_of_user"
                      name="type_of_user"
                      type="text"
                      required
                      onFocus={() => handleFocus('type_of_user')}
                      onBlur={() => handleBlur('type_of_user')}
                      className="border rounded-lg p-3 mt-1 w-full h-14 pr-10"
                      style={{
                        borderRadius: '8px',
                        border: `1px solid ${startDateIsFocused ? '#439BFF' : '#EAEAFF'}`,
                      }}
                      placeholder='Type'
                    />
                    <img src="/image/action/Down Arrow.svg"  alt="Dropdown"  className="absolute  top-[48%] transform -translate-y-1/2 w-[390px] h-6 pointer-events-none" />
                  </div>

                  {/* first name */}
                  <div className="flex flex-col">
                    <label htmlFor="first_name" className="text-sm font-medium text-start text-[12px]  " style={{fontFamily:'Montserrat'}}>
                      First name
                    </label>
                    <input
                      id="first_name"
                      name="first_name"
                      type="text"
                      required
                      onFocus={() => handleFocus('first_name')}
                      onBlur={() => handleBlur('first_name')}
                      className="border rounded-lg p-3 mt-1 w-full h-14"
                      style={{
                        borderRadius: '8px',
                        border: `1px solid ${endDateIsFocused ? '#439BFF' : '#EAEAFF'}`,
                      }}
                      placeholder="Enter First name"
                    />
                  </div>

                  {/* last name */}
                  <div className="flex flex-col">
                    <label htmlFor="last_name" className="text-sm font-medium text-start text-[12px] " style={{fontFamily:'Montserrat'}}>
                      Last name
                    </label>
                    <input
                      id="last_name"
                      name="last_name"
                      type="text"
                      required
                      onFocus={() => handleFocus('last_name')}
                      onBlur={() => handleBlur('last_name')}
                      className="border rounded-lg p-3 mt-1 w-full h-14"
                      style={{
                        borderRadius: '8px',
                        border: `1px solid ${endDateIsFocused ? '#439BFF' : '#EAEAFF'}`,
                      }}
                      placeholder="Enter Last name"
                    />
                  </div>
                </div>

                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6">
                  {/* Date of Birth */}
                  <div className="flex flex-col relative">
                    <label
                      htmlFor="start-date"
                      className="text-sm font-medium text-start text-[12px]"
                      style={{ fontFamily: 'Montserrat' }}
                    >
                      Date of Birth
                    </label>
                    <div className="relative mt-1">
                      <input
                        id="date_of_birth"
                        name="date_of_birth"
                        type="date"
                        required
                        onFocus={() => handleFocus('date_of_birth')}
                        onBlur={() => handleBlur('date_of_birth')}
                        className="border rounded-lg p-3 w-full h-14"
                        style={{
                          borderRadius: '8px',
                          border: `1px solid ${startDateIsFocused ? '#439BFF' : '#EAEAFF'}`,
                        }}
                        placeholder="dd/mm/yyyy"
                      />
                      <img
                        src="/image/action/uil_calender.svg"
                        alt="Calendar icon"
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="role_name"
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
                  {/* hospital Name */}
                  <div className="flex flex-col">
                    <label htmlFor="role_name" className="text-sm font-medium text-start text-[12px] "style={{fontFamily:'Montserrat'}} >Hospital Name</label>
                    <input
                      id="hospital_name"
                      name="hospital_name"
                      type="text"
                      required
                      onFocus={() => handleFocus('hospital_name')}
                      onBlur={() => handleBlur('hospital_name')}
                      className="border rounded-lg p-3 mt-1 w-full h-14"
                      style={{
                        borderRadius: '8px',
                        border: `1px solid ${isFocused ? '#439BFF' : '#EAEAFF'}`,
                      }}
                      placeholder='Enter Hospital name'
                    />
                  </div>
                  
                  {/* dental lab name*/}
                  <div className="flex flex-col">
                    <label htmlFor="start-date" className="text-sm font-medium text-start text-[12px] " style={{fontFamily:'Montserrat'}}>Dental lab name</label>
                    <input
                      id="dental_lab_name"
                      name="dental_lab_name"
                      type="text"
                      required
                      onFocus={() => handleFocus('dental_lab_name')}
                      onBlur={() => handleBlur('dental_lab_name')}
                      className="border rounded-lg p-3 mt-1 w-full h-14"
                      style={{
                        borderRadius: '8px',
                        border: `1px solid ${startDateIsFocused ? '#439BFF' : '#EAEAFF'}`,
                      }}
                      placeholder='Enter Dental lab name'
                    />
                  </div>
                  
                  {/* Radiology center */}
                  <div className="flex flex-col">
                    <label htmlFor="end-date" className="text-sm font-medium text-start text-[12px] " style={{fontFamily:'Montserrat'}}>Radiology Center</label>
                    <input
                      id="radiology_center"
                      name="radiology_center"
                      type="text"
                      required
                      onFocus={() => handleFocus('radiology_center')}
                      onBlur={() => handleBlur('radiology_center')}
                      className="border rounded-lg p-3 mt-1 w-full h-14"
                      style={{
                        borderRadius: '8px',
                        border: `1px solid ${endDateIsFocused ? '#439BFF' : '#EAEAFF'}`,
                      }}
                      placeholder='Enter Radiology center'
                    />
                  </div>
                  {/* material supplier name  */}
                  <div className="flex flex-col">
                    <label htmlFor="end-date" className="text-sm font-medium text-start text-[12px] " style={{fontFamily:'Montserrat'}}>Material Supplier Name</label>
                    <input
                      id="material_supplier_name1"
                      name="material_supplier_name1"
                      type="text"
                      required
                      onFocus={() => handleFocus('material_supplier_name1')}
                      onBlur={() => handleBlur('material_supplier_name1')}
                      className="border rounded-lg p-3 mt-1 w-full h-14"
                      style={{
                        borderRadius: '8px',
                        border: `1px solid ${endDateIsFocused ? '#439BFF' : '#EAEAFF'}`,
                      }}
                      placeholder='Enter Material Supplier name'
                    />
                  </div>
                </div>
                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6">
                  {/* Registration ID */}
                  <div className="flex flex-col">
                    <label htmlFor="role_name" className="text-sm font-medium text-start text-[12px]  " style={{fontFamily:'Montserrat'}}>Registaration ID (Role is dentist)</label>
                    <input
                      id="registration_id"
                      name="registration_id"
                      type="text"
                      required
                      onFocus={() => handleFocus('registration_id')}
                      onBlur={() => handleBlur('registration_id')}
                      className="border rounded-lg p-3 mt-1 w-full h-14"
                      style={{
                        borderRadius: '8px',
                        border: `1px solid ${isFocused ? '#439BFF' : '#EAEAFF'}`,
                      }}
                      placeholder='Enter Registration ID'
                    />
                  </div>
                  
                  {/* GST number */}
                  <div className="flex flex-col">
                    <label htmlFor="start-date" className="text-sm font-medium text-start text-[12px] " style={{fontFamily:'Montserrat'}}>GST Number</label>
                    <input
                      id="GST_number"
                      name="GST_number"
                      type="text"
                      required
                      onFocus={() => handleFocus('GST_number')}
                      onBlur={() => handleBlur('GST_number')}
                      className="border rounded-lg p-3 mt-1 w-full h-14"
                      style={{
                        borderRadius: '8px',
                        border: `1px solid ${startDateIsFocused ? '#439BFF' : '#EAEAFF'}`,
                      }}
                      placeholder='Enter GST number'
                    />
                  </div>
                  
                  {/* Enter Designation */}
                  <div className="flex flex-col">
                    <label htmlFor="end-date" className="text-sm font-medium text-start text-[12px] " style={{fontFamily:'Montserrat'}}>Designation</label>
                    <input
                      id="designation"
                      name="designation"
                      type="text"
                      required
                      onFocus={() => handleFocus('designation')}
                      onBlur={() => handleBlur('designation')}
                      className="border rounded-lg p-3 mt-1 w-full h-14"
                      style={{
                        borderRadius: '8px',
                        border: `1px solid ${endDateIsFocused ? '#439BFF' : '#EAEAFF'}`,
                      }}
                      placeholder='Enter Designation'
                    />
                  </div>
                  {/* material supplier name2 */}
                  <div className="flex flex-col">
                    <label htmlFor="end-date" className="text-sm font-medium text-start text-[12px]  " style={{fontFamily:'Montserrat'}}>Material Supplier Name</label>
                    <input
                      id="material_supplier_name2"
                      name="material_supplier_name2"
                      type="text"
                      required
                      onFocus={() => handleFocus('material_supplier_name2')}
                      onBlur={() => handleBlur('material_supplier_name2')}
                      className="border rounded-lg p-3 mt-1 w-full h-14"
                      style={{
                        borderRadius: '8px',
                        border: `1px solid ${endDateIsFocused ? '#439BFF' : '#EAEAFF'}`,
                      }}
                      placeholder='Enter Material Suplier Name'

                    />
                  </div>
                </div>
                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6">
                  {/* Assign role */}
                  <div className="flex flex-col">
                    <label htmlFor="assign_role" className="text-sm font-medium text-start text-[12px] " style={{fontFamily:'Montserrat'}}>Assign Role</label>
                    <input
                      id="assign_role"
                      name="assign_role"
                      type="text"
                      required
                      onFocus={() => handleFocus('assign_role')}
                      onBlur={() => handleBlur('assign_role')}
                      className="border rounded-lg p-3 mt-1 w-full h-14"
                      style={{
                        borderRadius: '8px',
                        border: `1px solid ${isFocused ? '#439BFF' : '#EAEAFF'}`,
                      }}
                      placeholder='Assign Role'
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
