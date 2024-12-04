import React, { useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import SidebarMenu from '../components/SideBar'

const PropotiesAdd = () => {
  const [formData, setFormData] = useState({  cupponimage: '',  status: '',  cupponCode: '',  expiryDate: '',  cupponTitle: '',  cupponSubtitle: '',  minOrderAmount: '',  cupponValue: '',  cupponDescription: '',});
  const handleChange=(e)=>{
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const handleFocus=()=>{

  }

  const handleBlur=()=>{

  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(formData)
  }
  return (
    <div>
      <div className="flex bg-[#f7fbff]">
      {/* Sidebar */}
      <SidebarMenu />
      
      <main className="flex-grow">
        <Header />
        <div className="container mx-auto" >
          <div className="flex items-center mt-6  mb-4">
            {/* <Link to="/rolesList" className="cursor-pointer ml-6">
              
            </Link> */}
            <h2 className="text-lg font-semibold ml-4 " style={{color:'#000000',fontSize:'24px',fontFamily:'Montserrat'}}>Create Property</h2>
          </div>

          {/* Form Container */}
          <div className="h-full px-6 max-w-5xl " style={{paddingTop:'24px'}}> 
            <div className="bg-white h-[70vh] w-full rounded-xl border border-[#EAE5FF] py-4 px-6" style={{ maxHeight: 'calc(100vh - 100px)', overflowY: 'auto',scrollbarWidth:'none' }} >
              <form className="mt-4">
                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-4 mt-6">
                  {/* property title */}
                    <div className="flex flex-col">
                        <label  htmlFor="title"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"> Property Title </label>
                        <input id="title" name="title" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}
                          onFocus={() => handleFocus('title')}
                          onBlur={() => handleBlur('title')}
                          placeholder="Enter property title"
                        />
                    </div>

                      {/* property image*/}
                      <div className="flex flex-col">
                        <label  htmlFor="image"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]">Property Image</label>
                        <input  id="image"  name="image"  type="file"  required  className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px', border: '1px solid #EAEAFF'}}
                          onFocus={() => handleFocus('image')}
                          onBlur={() => handleBlur('image')}
                        />
                      </div>
                  
                      {/* Property Sell Or Rent ?*/}
                      <div className="flex flex-col">
                        <label  htmlFor="price"   className="text-sm font-medium text-start text-[12px] font-[Montserrat]" > property Sell Or Rent ?</label>
                        <select  name="price"  id="price"  className="mt-1 block w-full p-4  bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"  >
                          <option value="" disabled selected>Select Option</option>
                          <option value="buy">Buy</option>
                          <option value="rent">Rent</option>
                        </select>
                      </div>
                  
                      {/* property price per night */}
                      <div className="flex flex-col">
                          <label  htmlFor="cupponCode"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"> Property Price Per Night </label>
                          <input id="PropertyPricePerNight" name="PropertyPricePerNight" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}
                            onFocus={() => handleFocus('PropertyPricePerNight')}
                            onBlur={() => handleBlur('PropertyPricePerNight')}
                            placeholder="Enter  Price Per Night"
                          />
                      </div>
                </div>

                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-3  mt-6">
                  {/*property country*/}
                  <div className="flex flex-col">
                    <label  htmlFor="property_country"   className="text-sm font-medium text-start text-[12px] font-[Montserrat]" > Property Country ?</label>
                    <select  name="property_country"  id="property_country"  className="mt-1 block w-full p-4  bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"  >
                      <option value="" disabled selected>Select Country</option>
                      <option value="ind">India</option>
                      <option value="aus">Australia</option>
                      <option value="saffrica">South Africa</option>
                      <option value="srilanka">Srilanka</option>
                      <option value="nepal">Nepal</option>
                    </select>
                  </div>

                  {/* propert status */}
                  <div className="flex flex-col">
                    <label  htmlFor="propertySellOrRent"   className="text-sm font-medium text-start text-[12px] font-[Montserrat]" > property Status</label>
                    <select  name="propertySellOrRent"  id="propertySellOrRent"  className="mt-1 block w-full p-4  bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"  >
                      <option value="" disabled selected>Select Staus</option>
                      <option value="publishunpublish">Publish</option>
                      <option value="rent">Unpublish</option>
                    </select>
                  </div>

                  {/* Property Total Person Allowed? */}
                  <div className="flex flex-col">
                      <label  htmlFor="PropertyTotalPersonAllowed"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]">Property Total Person Allowed?</label>
                      <input id="PropertyTotalPersonAllowed?" name="PropertyTotalPersonAllowed" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}
                        onFocus={() => handleFocus('PropertyTotalPersonAllowed')}
                        onBlur={() => handleBlur('PropertyTotalPersonAllowed')}
                        placeholder="Enter Person Limit "
                      />
                  </div>
                </div>

                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2  mt-6">
                  {/* Property address */}
                  <div className="flex flex-col">
                      <label  htmlFor="address"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]">Property Address</label>
                      <input id="address" name="address" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}
                        onFocus={() => handleFocus('address')}
                        onBlur={() => handleBlur('address')}
                        placeholder="Enter Person Limit "
                      />
                  </div>

                  {/* Select Property Facility */}
                  <div className="flex flex-col">
                      <label  htmlFor="facility"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]">Select Property Facility</label>
                      <input id="facility" name="facility" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}
                        onFocus={() => handleFocus('facility')}
                        onBlur={() => handleBlur('facility')}
                        placeholder="Choose Facility "
                      />
                  </div>
                </div>  

                <div className="grid gap-6 w-full sm:grid-cols-1 md:grid-cols-4 mt-6">
                  {/* Property description */}
                  <div className="md:col-span-1">
                    <label htmlFor="description" className="text-sm font-medium text-start text-[12px] font-[Montserrat]">
                      Property Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      className="border rounded-lg p-3 mt-1 w-full resize-none h-64 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter Property Description"
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="md:col-span-3 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
                    {/* Total Beds */}
                    <div>
                      <label htmlFor="beds" className="text-sm font-medium text-start text-[12px] font-[Montserrat]">
                        Total Beds
                      </label>
                      <input
                        type="text"
                        id="beds"
                        name="beds"
                        className="border rounded-lg p-3 mt-1 w-full focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter Beds Count"
                        onChange={handleChange}
                      />
                    </div>

                    {/* Total bathrooms */}
                    <div>
                      <label htmlFor="bathrooms" className="text-sm font-medium text-start text-[12px] font-[Montserrat]">
                        Total Bathroom
                      </label>
                      <input
                        type="text"
                        id="bathrooms"
                        name="bathrooms"
                        className="border rounded-lg p-3 mt-1 w-full focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter Bathroom Count"
                        onChange={handleChange}
                      />
                    </div>

                    {/* Property SQFT */}
                    <div>
                      <label htmlFor="sqrft" className="text-sm font-medium text-start text-[12px] font-[Montserrat]">
                        Property SQFT
                      </label>
                      <input
                        type="text"
                        id="sqrft"
                        name="sqrft"
                        className="border rounded-lg p-3 mt-1 w-full focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter Property SQFT"
                        onChange={handleChange}
                      />
                    </div>

                    {/* Property Rating */}
                    <div>
                      <label htmlFor="rate" className="text-sm font-medium text-start text-[12px] font-[Montserrat]">
                        Property Rating
                      </label>
                      <input
                        type="text"
                        id="rate"
                        name="rate"
                        className="border rounded-lg p-3 mt-1 w-full focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter Property Rating"
                        onChange={handleChange}
                      />
                    </div>

                    {/* Property Type */}
                    <div className="sm:col-span-2 md:col-span-1">
                      <label htmlFor="ptype" className="text-sm font-medium text-start text-[12px] font-[Montserrat]">
                        Select Property Type
                      </label>
                      <select
                        name="status"
                        id="ptype"
                        className="mt-1 block w-full p-4  bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                        onChange={handleChange}
                      >
                        <option value="">Select Property Type</option>
                        <option value="commercial_spaces">Commercial Spaces</option>
                        <option value="villas">Villas</option>
                        <option value="appartments">Apartments</option>
                        <option value="indvidual_houses">Individual Houses</option>
                        <option value="fields">Fields</option>
                      </select>
                    </div>

                    {/* Latitude */}
                    <div>
                      <label htmlFor="latitude" className="text-sm font-medium text-start text-[12px] font-[Montserrat]">
                        Latitude
                      </label>
                      <input
                        type="text"
                        id="latitude"
                        name="latitude"
                        className="border rounded-lg p-3 mt-1 w-full focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter Latitude"
                        onChange={handleChange}
                      />
                    </div>

                    {/* Longitude */}
                    <div>
                      <label htmlFor="longitude" className="text-sm font-medium text-start text-[12px] font-[Montserrat]">
                        Longitude
                      </label>
                      <input
                        type="text"
                        id="longitude"
                        name="longitude"
                        className="border rounded-lg p-3 mt-1 w-full focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter Longitude"
                        onChange={handleChange}
                      />
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label htmlFor="mobile" className="text-sm font-medium text-start text-[12px] font-[Montserrat]">
                        Mobile Number
                      </label>
                      <input
                        type="text"
                        id="mobile"
                        name="mobile"
                        className="border rounded-lg p-3 mt-1 w-full focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter Mobile Number"
                        onChange={handleChange}
                      />
                    </div>

                    {/* City, Country */}
                    <div>
                      <label htmlFor="city" className="text-sm font-medium text-start text-[12px] font-[Montserrat]">
                        City, Country
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        className="border rounded-lg p-3 mt-1 w-full focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Like New York, US"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-start mt-6 gap-3">
                  <button  type="submit" className=" py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-[150px] h-12 font-[Montserrat] font-bold" style={{ borderRadius: "8px", }} > Add Cuppon </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
    </div>
  )
}

export default PropotiesAdd