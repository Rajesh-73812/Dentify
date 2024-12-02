import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import SidebarMenu from '../components/SideBar'

const CountryAdd = () => {

  const handleFocus=()=>{

  }

  const handleBlur=()=>{

  }
  return (
    <div>
      <div className="flex bg-[#f7fbff]">
      {/* Sidebar */}
      <SidebarMenu />
      
      <main className="flex-grow">
        <Header />
        <div className="container mx-auto">
          <div className="flex items-center mt-6  mb-4">
            {/* <Link to="/rolesList" className="cursor-pointer ml-6">
              
            </Link> */}
            <h2 className="text-lg font-semibold ml-4 " style={{color:'#000000',fontSize:'24px',fontFamily:'Montserrat'}}>Country Management</h2>
          </div>

          {/* Form Container */}
          <div className="h-full py-6 px-6 max-w-5xl"> 
            <div className="bg-white w-full rounded-xl border border-[#EAE5FF] py-4 px-6">
              {/* <p className='text-left font-bold font-[Montserrat]' >Create Service</p> */}
              <form className="mt-4">

                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-1  mt-6">
                  {/* country name */}
                  <div className="flex flex-col">
                      <label  htmlFor="country_name"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"> Country name </label>
                      <input id="country_name" name="country_name" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}
                        onFocus={() => handleFocus('country_name')}
                        onBlur={() => handleBlur('country_name')}
                        placeholder="Enter Country name"
                      />
                    </div>
                </div>
                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-1 mt-6">
                    {/* country image*/}
                    <div className="flex flex-col">
                      <label  htmlFor="country_image"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]">Country Image</label>
                      <input  id="country_image"  name="country_image"  type="file"  required  className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px', border: '1px solid #EAEAFF'}}
                        onFocus={() => handleFocus('country_image')}
                        onBlur={() => handleBlur('country_image')}
                      />
                    </div>
                </div>

                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-1 mt-6">
                  {/* Country Status */}
                  <div className="flex flex-col">
                    <label  htmlFor="country_status"   className="text-sm font-medium text-start text-[12px] font-[Montserrat]" > Status </label>
                    <select  name="country_status"  id="country_status"  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"  >
                      <option value="" disabled selected>Select Status</option>
                      <option value="publish">Publish</option>
                      <option value="unpublish">Unpublish</option>
                    </select>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-start mt-6 gap-3">
                  <button  type="submit" className=" py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-[150px] h-12 font-[Montserrat] font-bold" style={{ borderRadius: "8px", }} > Add Country </button>
                </div>
              </form>

            </div>
          </div>
        </div>
        {/* Footer */}
        {/* <Footer /> */}
      </main>
    </div>
    </div>
  )
}

export default CountryAdd