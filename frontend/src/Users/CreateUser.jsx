import React, { useState } from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import { Link } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { FaWhatsapp } from 'react-icons/fa';

const CreateUser = () => {
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
    <div className="flex bg-[#f7fbff] h-screen">
      {/* Sidebar */}
      <SideBar />
      
      {/* Main Content */}
      <main className="flex-grow flex flex-col">
        {/* Header */}
        <Header />

        <div className="container mx-auto flex-grow overflow-y-auto p-6" style={{scrollbarWidth:'none'}}>
          {/* Back Button and Title */}
          <div className="flex items-center mt-6  mb-4">
            <Link to="/create-user" className="cursor-pointer ml-6">
              <ArrowBackIosNewIcon />
            </Link>
            <h2 className="text-2xl font-semibold ml-4 text-[#000000] font-[Montserrat] ">Create User</h2>
          </div>
          {/* Form Container */}
          <div className=" py-6 px-6 max-w-5xl mx-auto overflow-y-auto scrollbar-none h-[80vh]" > 
            <div className="bg-white w-full rounded-xl border border-[#EAE5FF] py-4 px-6" >
              <p className='text-left font-bold' style={{fontFamily:'Montserrat'}}>Create User</p>
              <form className="mt-4">
                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                  {/* prefix */}
                  <div className="flex flex-col">
                    <label htmlFor="prefix" className="text-sm font-medium text-start text-[12px] font-[Montserrat] ">
                      Prefix <span>*</span>
                    </label>
                    <div className="relative">
                      <input id="prefix" name="prefix" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14 pr-10" style={{ border: `1px solid '#EAEAFF'`,}}
                        onFocus={() => handleFocus('prefix')}
                        onBlur={() => handleBlur('prefix')}
                        placeholder='Prefix'
                      />
                      {/* Down arrow icon */}
                      <img src="/image/action/Down Arrow.svg"  alt="Dropdown"  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 pointer-events-none" />
                    </div>
                  </div>
                  {/* type of user */}
                  <div className="flex flex-col">
                    <label htmlFor="type_of_user" className="text-sm font-medium text-start text-[12px]  font-[Montserrat]">
                      Type Of User <span>*</span>
                    </label>
                    <div className="relative">
                      <input id="type_of_user" name="type_of_user" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14 pr-10" style={{ border: `1px solid '#EAEAFF'`,}}
                        onFocus={() => handleFocus('type_of_user')}
                        onBlur={() => handleBlur('type_of_user')}
                        placeholder='type of user'
                      />
                      {/* Down arrow icon */}
                      <img src="/image/action/Down Arrow.svg"  alt="Dropdown"  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 pointer-events-none" />
                    </div>
                  </div>


                  {/* first name */}
                  <div className="flex flex-col">
                    <label htmlFor="first_name" className="text-sm font-medium text-start text-[12px]  font-[Montserrat]">
                      First name
                    </label>
                    <input  id="first_name"  name="first_name"  type="text"  required className="border rounded-lg p-3 mt-1 w-full h-14" style={{border: `1px solid ${endDateIsFocused ? '#439BFF' : '#EAEAFF'}`, }}
                      onFocus={() => handleFocus('first_name')}
                      onBlur={() => handleBlur('first_name')}
                      placeholder="Enter First name"
                    />
                  </div>

                  {/* last name */}
                  <div className="flex flex-col">
                    <label htmlFor="last_name" className="text-sm font-medium text-start text-[12px] font-[Montserrat]">
                      Last name
                    </label>
                    <input  id="last_name"  name="last_name"  type="text"  required className="border rounded-lg p-3 mt-1 w-full h-14"  style={{border: `1px solid #EAEAFF`,}}
                      onFocus={() => handleFocus('last_name')}
                      onBlur={() => handleBlur('last_name')}
                      placeholder="Enter Last name"
                    />
                  </div>
                </div>

                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6">
                  {/* Date of Birth */}
                  <div className="flex flex-col relative">
                    <label htmlFor="start-date" className="text-sm font-medium text-start text-[12px] font-[Montserrat]"  >Date of Birth</label>
                    <div className="relative mt-1">
                      <input id="date_of_birth" name="date_of_birth" type="date" required className="border rounded-lg p-3 w-full h-14" style={{borderRadius: '8px', border: `1px solid '#EAEAFF`,}}
                        onFocus={() => handleFocus('date_of_birth')}
                        onBlur={() => handleBlur('date_of_birth')}
                        placeholder="dd/mm/yyyy"
                      />
                      <img  src="/image/action/uil_calender.svg"  alt="Calendar icon" className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 pointer-events-none"/>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <label  htmlFor="role_name"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]" >Email</label>
                    <input  id="email"  name="email"  type="text"  required className="border rounded-lg p-3 mt-1 w-full h-14" style={{borderRadius: '8px',border: `1px solid #EAEAFF`}}
                      onFocus={() => handleFocus('email')}
                      onBlur={() => handleBlur('email')}
                      placeholder="Enter Email"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div className="flex flex-col relative">
                    <label  htmlFor="mobile_number"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"  >Mobile number</label>
                    <div className="relative mt-1">
                      <PhoneInput id="mobile_number" placeholder="Enter Mobile number" value={value} className="border rounded-lg w-full h-14 pl-[6px]"  style={{ borderRadius: '8px',  borderColor: '#EAEAFF' }}
                        onChange={setValue}
                        defaultCountry="IN"
                      />
                    </div>
                  </div>

                  {/* WhatsApp Number */}
                  <div className="flex flex-col relative">
                    <label htmlFor="whatsapp_number" className="text-sm font-medium text-start text-[12px] font-[Montserrat]" >WhatsApp number</label>
                    <div className="relative mt-1">
                      <FaWhatsapp className="absolute left-2 top-1/2 transform -translate-y-1/2 text-green-500 w-6 h-6 pointer-events-none" />
                      <input  id="whatsapp_number"  placeholder="Enter WhatsApp number"  className={`border rounded-lg pl-[36px] w-full h-14 ${whatsAppFocused ? 'border-[#439BFF]' : 'border-[#EAEAFF]' }`} style={{ borderRadius: '8px'}}
                        onFocus={() => handleFocus('whatsapp_number')}
                        onBlur={() => handleBlur('whatsapp_number')}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6">
                  {/* hospital Name */}
                  <div className="flex flex-col">
                    <label htmlFor="role_name" className="text-sm font-medium text-start text-[12px] font-[Montserrat]">Hospital Name</label>
                    <input id="hospital_name" name="hospital_name" type="text" required
                      onFocus={() => handleFocus('hospital_name')}
                      onBlur={() => handleBlur('hospital_name')}
                      className="border rounded-lg p-3 mt-1 w-full h-14"
                      style={{borderRadius: '8px',border: `1px solid #EAEAFF`, }}
                      placeholder='Enter Hospital name'
                    />
                  </div>
                  
                  {/* dental lab name*/}
                  <div className="flex flex-col">
                    <label htmlFor="start-date" className="text-sm font-medium text-start text-[12px] font-[Montserrat]" >Dental lab name</label>
                    <input id="dental_lab_name" name="dental_lab_name" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{borderRadius: '8px',border: `1px solid #EAEAFF`,}}
                      onFocus={() => handleFocus('dental_lab_name')}
                      onBlur={() => handleBlur('dental_lab_name')}
                      placeholder='Enter Dental lab name'
                    />
                  </div>
                  
                  {/* Radiology center */}
                  <div className="flex flex-col">
                    <label htmlFor="end-date" className="text-sm font-medium text-start text-[12px] font-[Montserrat]" >Radiology Center</label>
                    <input id="radiology_center" name="radiology_center" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{   borderRadius: '8px',   border: `1px solid #EAEAFF`, }}
                      onFocus={() => handleFocus('radiology_center')}
                      onBlur={() => handleBlur('radiology_center')}
                      placeholder='Enter Radiology center'
                    />
                  </div>
                  {/* material supplier name  */}
                  <div className="flex flex-col">
                    <label htmlFor="end-date" className="text-sm font-medium text-start text-[12px] " style={{fontFamily:'Montserrat'}}>Material Supplier Name</label>
                    <input id="material_supplier_name1" name="material_supplier_name1" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',  border: `1px solid #EAEAFF`,}}
                      onFocus={() => handleFocus('material_supplier_name1')}
                      onBlur={() => handleBlur('material_supplier_name1')}
                      placeholder='Enter Material Supplier name'
                    />
                  </div>
                </div>
                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6">
                  {/* Registration ID */}
                  <div className="flex flex-col">
                    <label htmlFor="role_name" className="text-sm font-medium text-start text-[12px]  font-[Montserrat]">Registaration ID (Role is dentist)</label>
                    <input id="registration_id" name="registration_id" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{    borderRadius: '8px',    border: `1px solid EAEAFF`,  }}
                      onFocus={() => handleFocus('registration_id')}
                      onBlur={() => handleBlur('registration_id')}
                      placeholder='Enter Registration ID'
                    />
                  </div>
                  
                  {/* GST number */}
                  <div className="flex flex-col">
                    <label htmlFor="start-date" className="text-sm font-medium text-start text-[12px] font-[Montserrat]" >GST Number</label>
                    <input id="GST_number" name="GST_number" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',  border: `1px solid #EAEAFF`,}}
                      onFocus={() => handleFocus('GST_number')}
                      onBlur={() => handleBlur('GST_number')}
                      placeholder='Enter GST number'
                    />
                  </div>
                  
                  {/* Enter Designation */}
                  <div className="flex flex-col">
                    <label htmlFor="end-date" className="text-sm font-medium text-start text-[12px] font-[Montserrat]" >Designation</label>
                    <input id="designation" name="designation" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14"  style={{borderRadius: '8px',   border: `1px solid #EAEAFF`, }}
                      onFocus={() => handleFocus('designation')}
                      onBlur={() => handleBlur('designation')}
                      placeholder='Enter Designation'
                    />
                  </div>
                  {/* material supplier name2 */}
                  <div className="flex flex-col">
                    <label htmlFor="end-date" className="text-sm font-medium text-start text-[12px]  font-[Montserrat]">Material Supplier Name</label>
                    <input id="material_supplier_name2" name="material_supplier_name2" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',  border: `1px solid #EAEAFF`,}}
                      onFocus={() => handleFocus('material_supplier_name2')}
                      onBlur={() => handleBlur('material_supplier_name2')}
                      placeholder='Enter Material Suplier Name'

                    />
                  </div>
                </div>
                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6">
                  {/* Assign role */}
                  <div className="flex flex-col">
                    <label htmlFor="assign_role" className="text-sm font-medium text-start text-[12px] " style={{fontFamily:'Montserrat'}}>Assign Role</label>
                    <input id="assign_role" name="assign_role" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14"  style={{ borderRadius: '8px', border: `1px solid #EAEAFF`,}}
                      onFocus={() => handleFocus('assign_role')}
                      onBlur={() => handleBlur('assign_role')}
                      placeholder='Assign Role'
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end mt-6 gap-3">
                  <button  type="button"  className=" flex items-center justify-center w-[150px] h-12 text-[#71717A]"  style={{borderRadius: "8px", border: "1px solid #71717A", }} >
                    <img src="/image/action/Big Arrow _ Left.svg" alt="Arrow Left" />
                    Cancel
                  </button>

                  <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-[150px] h-12 " style={{borderRadius: "8px",}}  >
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

export default CreateUser;
