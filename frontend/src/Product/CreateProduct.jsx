import React, { useState } from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import { Link } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const CreateProduct = () => {
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
            <h2 className="text-lg font-semibold ml-4 " style={{color:'#000000',fontSize:'24px',fontFamily:'Montserrat'}}>Create Product</h2>
          </div>
          {/* Form Container */}
          <div className="h-full py-6 px-6 max-w-5xl"> 
            <div className="bg-white w-full rounded-xl border border-[#EAE5FF] py-4 px-6">
              <p className='text-left font-bold' style={{fontFamily:'Montserrat'}}>Create Product</p>
              <form className="mt-4">

              <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6">
                {/* product name */}
                <div className="flex flex-col">
                    <label
                      htmlFor="product_name"
                      className="text-sm font-medium text-start text-[12px]"
                      style={{ fontFamily: 'Montserrat' }}
                    >
                      Product name
                    </label>
                    <input
                      id="product_name"
                      name="product_name"
                      type="text"
                      required
                      onFocus={() => handleFocus('product_name')}
                      onBlur={() => handleBlur('product_name')}
                      className="border rounded-lg p-3 mt-1 w-full h-14"
                      style={{
                        borderRadius: '8px',
                        border: `1px solid ${isFocused ? '#439BFF' : '#EAEAFF'}`,
                      }}
                      placeholder="Enter product name"
                    />
                  </div>
                  {/* product actegory */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="product_category"
                      className="text-sm font-medium text-start text-[12px]"
                      style={{ fontFamily: 'Montserrat' }}
                    >
                      Product Category
                    </label>
                    <input
                      id="product_category"
                      name="product_category"
                      type="text"
                      required
                      onFocus={() => handleFocus('product_category')}
                      onBlur={() => handleBlur('product_category')}
                      className="border rounded-lg p-3 mt-1 w-full h-14"
                      style={{
                        borderRadius: '8px',
                        border: `1px solid ${isFocused ? '#439BFF' : '#EAEAFF'}`,
                      }}
                      placeholder="Enter product category"
                    />
                  </div>

                  {/* product description */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="product_description"
                      className="text-sm font-medium text-start text-[12px]"
                      style={{ fontFamily: 'Montserrat' }}
                    >
                      Product Desription
                    </label>
                    <input
                      id="product_description"
                      name="product_description"
                      type="text"
                      required
                      onFocus={() => handleFocus('product_description')}
                      onBlur={() => handleBlur('product_description')}
                      className="border rounded-lg p-3 mt-1 w-full h-14"
                      style={{
                        borderRadius: '8px',
                        border: `1px solid ${isFocused ? '#439BFF' : '#EAEAFF'}`,
                      }}
                      placeholder="Enter product description"
                    />
                  </div>
                  {/* product price */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="product_price"
                      className="text-sm font-medium text-start text-[12px]"
                      style={{ fontFamily: 'Montserrat' }}
                    >
                      Product Price
                    </label>
                    <input
                      id="product_price"
                      name="product_price"
                      type="text"
                      required
                      onFocus={() => handleFocus('product_price')}
                      onBlur={() => handleBlur('product_price')}
                      className="border rounded-lg p-3 mt-1 w-full h-14"
                      style={{
                        borderRadius: '8px',
                        border: `1px solid ${isFocused ? '#439BFF' : '#EAEAFF'}`,
                      }}
                      placeholder="Enter product price"
                    />
                  </div>

              </div>
              <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6">

                  {/* product source */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="product_source"
                      className="text-sm font-medium text-start text-[12px]"
                      style={{ fontFamily: 'Montserrat' }}
                    >
                      Product Source
                    </label>
                    <input
                      id="product_source"
                      name="product_source"
                      type="text"
                      required
                      onFocus={() => handleFocus('product_source')}
                      onBlur={() => handleBlur('product_source')}
                      className="border rounded-lg p-3 mt-1 w-full h-14"
                      style={{
                        borderRadius: '8px',
                        border: `1px solid ${isFocused ? '#439BFF' : '#EAEAFF'}`,
                      }}
                      placeholder="Enter product source"
                    />
                  </div>

                  {/* form date */}
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
                  {/* to date */}
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

export default CreateProduct;
