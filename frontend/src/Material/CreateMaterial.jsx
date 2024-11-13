import React, { useState } from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import { Link } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const CreateMaterial = () => {
  const [value, setValue] = useState();
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
            <h2 className="text-lg font-semibold ml-4 " style={{color:'#000000',fontSize:'24px',fontFamily:'Montserrat'}}>Create Course</h2>
          </div>

          {/* Form Container */}
          <div className="h-full py-6 px-6 max-w-5xl"> 
            <div className="bg-white w-full rounded-xl border border-[#EAE5FF] py-4 px-6">
              <p className='text-left font-bold' style={{fontFamily:'Montserrat'}}>Create Course</p>
              <form className="mt-4">

                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6">
                  {/* material name */}
                  <div className="flex flex-col">
                      <label  htmlFor="material_name"  className="text-sm font-medium text-start text-[12px]"  style={{ fontFamily: 'Montserrat' }}>Course Name </label>
                      <input id="material_name" name="material_name" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',  border: '1px solid #EAEAFF',}}
                        onFocus={() => handleFocus('material_name')}
                        onBlur={() => handleBlur('material_name')}
                        placeholder="Enter material name"
                      />
                  </div>
                  {/* material category*/}
                  <div className="flex flex-col relative">
                    <label   htmlFor="material_category"   className="text-sm font-medium text-start text-[12px]"   style={{ fontFamily: 'Montserrat' }} >Material Category</label>
                    <div className="relative mt-1">
                      <input  id="material_category"  name="material_category"  type="text"  required  className="border rounded-lg p-3 w-full h-14" style={{   borderRadius: '8px',   border: '1px solid  #EAEAFF', }}
                        onFocus={() => handleFocus('material_category')}
                        onBlur={() => handleBlur('material_category')}
                        placeholder="Enter material category"
                      />
                    </div>
                  </div>  
                    {/* supplier name */}
                  <div className="flex flex-col relative">
                    <label   htmlFor="supplier_name"   className="text-sm font-medium text-start text-[12px]"   style={{ fontFamily: 'Montserrat' }} >Supplier Nme  </label>
                      <div className="relative mt-1">
                      <input  id="supplier_name"  name="supplier_name"  type="text"  required  className="border rounded-lg p-3 w-full h-14" style={{   borderRadius: '8px',   border: `1px solid #EAEAFF`, }}
                        onFocus={() => handleFocus('supplier_name')}
                        onBlur={() => handleBlur('supplier_name')}
                        placeholder="Enter supplier name"
                      />
                    </div>
                  </div> 
                  {/* supplier Address   */}
                  <div className="flex flex-col relative">
                    <label   htmlFor="supplier_address"   className="text-sm font-medium text-start text-[12px]"   style={{ fontFamily: 'Montserrat' }} >Supplier Address</label>
                      <div className="relative mt-1">
                      <input  id="supplier_address"  name="supplier_address"  type="text"  required  className="border rounded-lg p-3 w-full h-14" style={{   borderRadius: '8px',   border: `1px solid #EAEAFF`, }}
                        onFocus={() => handleFocus('supplier_address')}
                        onBlur={() => handleBlur('supplier_address')}
                        placeholder="Enter supplier address"
                      />
                    </div>
                  </div> 

                </div>
                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6">
                   {/* supplier contact Number */}
                  <div className="flex flex-col relative">
                    <label  htmlFor="mobile_number"  className="text-sm font-medium text-start text-[12px]"  style={{ fontFamily: 'Montserrat' }}>Supplier Contact Number</label>
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
                  {/* supplier email */}
                  <div className="flex flex-col">
                    <label  htmlFor="supplier_email"  className="text-sm font-medium text-start text-[12px]"  style={{ fontFamily: 'Montserrat' }}>Supplier Email</label>
                    <input  id="supplier_email" name="supplier_email"  type="text"  required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',  border: '1px solid #EAEAFF',}}
                      onFocus={() => handleFocus('supplier_email')}
                      onBlur={() => handleBlur('supplier_email')}
                      placeholder="Enter Supplier email"
                    />
                  </div>
                  {/* Manufacture name */}
                  <div className="flex flex-col">
                    <label  htmlFor="manufacture_name"  className="text-sm font-medium text-start text-[12px]"  style={{ fontFamily: 'Montserrat' }}>Manufacture Name</label>
                    <input  id="description" name="manufacture_name"  type="text"  required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',border: '1px solid #EAEAFF',}}
                      onFocus={() => handleFocus('manufacture_name')}
                      onBlur={() => handleBlur('description')}
                      placeholder="Enter manufacture name"
                    />
                  </div>
                  {/* Manufacture Address */}
                  <div className="flex flex-col">
                    <label  htmlFor="manufacture_address"  className="text-sm font-medium text-start text-[12px]"  style={{ fontFamily: 'Montserrat' }}>Manufacture Address</label>
                    <input  id="description" name="manufacture_address"  type="text"  required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}
                      onFocus={() => handleFocus('manufacture_address')}
                      onBlur={() => handleBlur('manufacture_address')}
                      placeholder="Enter manufacture address"
                    />
                  </div>
                </div>
                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6">
                   {/* manufacture contact Number */}
                  <div className="flex flex-col relative">
                    <label  htmlFor="manufacture_contact_number"  className="text-sm font-medium text-start text-[12px]"  style={{ fontFamily: 'Montserrat' }}>Manufacture Contact Number</label>
                    <div className="relative mt-1">
                      <PhoneInput  id="manufacture_contact_number"  placeholder="Enter Mobile number"  value={value}  onChange={setValue}  defaultCountry="IN"  className="border rounded-lg w-full h-14"  style={{borderRadius: '8px', borderColor: '#EAEAFF', paddingLeft: '6px'}}/>
                    </div>
                  </div>
                  {/* manufacture email */}
                  <div className="flex flex-col">
                    <label  htmlFor="manufacture_email"  className="text-sm font-medium text-start text-[12px]"  style={{ fontFamily: 'Montserrat' }}>Manufacture Email</label>
                    <input  id="manufacture_email" name="manufacture_email"  type="text"  required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',  border: '1px solid #EAEAFF',}}
                      onFocus={() => handleFocus('manufacture_email')}
                      onBlur={() => handleBlur('manufacture_email')}
                      placeholder="Enter manufacture email"
                    />
                  </div>
                  {/* Material Cost Price  */}
                  <div className="flex flex-col">
                    <label  htmlFor="material_cost_price"  className="text-sm font-medium text-start text-[12px]"  style={{ fontFamily: 'Montserrat' }}>Material Cost Price</label>
                    <input  id="material_cost_price" name="material_cost_price"  type="text"  required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',  border: '1px solid #EAEAFF'}}
                      onFocus={() => handleFocus('material_cost_price')}
                      onBlur={() => handleBlur('material_cost_price')}
                      placeholder="Enter material cost price"
                    />
                  </div>
                  {/* MRP */}
                  <div className="flex flex-col">
                    <label  htmlFor="mrp"  className="text-sm font-medium text-start text-[12px]"  style={{ fontFamily: 'Montserrat' }}>Manufacture Address</label>
                    <input  id="mrp" name="manufacmrpture_address"  type="text"  required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',  border: '1px solid #EAEAFF'}}
                      onFocus={() => handleFocus('mrp')}
                      onBlur={() => handleBlur('mrp')}
                      placeholder="Enter MRP "
                    />
                  </div>
                </div>
                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6">
                   {/* manufacture contact Number */}
                   <div className="flex flex-col">
                      <label htmlFor="gst_type" className="text-sm font-medium text-start text-[12px]  " style={{fontFamily:'Montserrat'}}>GST Type</label>
                      <div className="relative">
                        <input id="gst_type" name="gst_type" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14 pr-10" style={{ borderRadius:'8px',border: '1px solid #EAEAFF'}}
                          onFocus={() => handleFocus('service_cgst_typeategory')}
                          onBlur={() => handleBlur('gst_type')}
                          placeholder='Select'
                        />
                        {/* Down arrow icon */}
                        <img src="/image/action/Down Arrow.svg"  alt="Dropdown"  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 pointer-events-none" />
                      </div>
                    </div>
                </div>
                {/* Action Buttons */}
                <div className="flex justify-end mt-6 gap-3">
                  <button  type="button"  className="text-gray-700 hover:text-gray-800 flex items-center justify-center"  style={{width:"150px", height:"48px", borderRadius:"8px", border:"1px solid #71717A", color:"#71717A", fontFamily:'Montserrat'}}>
                    <img src="/image/action/Big Arrow _ Left.svg" alt="Arrow Left" />
                    Cancel
                  </button>

                  <button  type="submit"  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"  style={{width: "150px",height: "48px", borderRadius: "8px", fontFamily: 'Montserrat'}}>
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

export default CreateMaterial;
