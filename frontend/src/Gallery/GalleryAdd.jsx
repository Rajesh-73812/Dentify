import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import SidebarMenu from '../components/SideBar'

const GalleryAdd = () => {

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
            <h2 className="text-lg font-semibold ml-4 " style={{color:'#000000',fontSize:'24px',fontFamily:'Montserrat'}}>Gallery Management</h2>
          </div>

          {/* Form Container */}
          <div className="h-full px-6 max-w-5xl" style={{paddingTop:'24px'}}> 
            <div className="bg-white h-[70vh] w-full rounded-xl border border-[#EAE5FF] py-4 px-6 overflow-y-auto " style={{scrollbarWidth:'none'}} >
              <form className="mt-4">
                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-1  mt-6">
                <div className="flex flex-col">
                    <label  htmlFor="pid"   className="text-sm font-medium text-start text-[12px] font-[Montserrat]" > Select Property </label>
                    <select  name="pid"  id="pid"  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"  >
                      <option value="" disabled selected>Select Property</option>
                      <option value="1">Villa</option>
                      <option value="2">Villas</option>
                      <option value="3">Flat For Sale</option>
                      <option value="4">2BHK House</option>
                      <option value="5">TO-LET</option>
                      <option value="6">Sunset Villa</option>
                      <option value="7">New Mansion 5BHK</option>
                      <option value="8">Urban Loft</option>
                      <option value="9">Mountain Retreat</option>
                      <option value="10">Seaside Cottage</option>
                      <option value="11">New Villa</option>
                      <option value="12">DownTown Condo</option>
                      <option value="13">New Hotel</option>
                      <option value="14">Tanquil Haven</option>
                      <option value="15">Woodland Retreat Cabin</option>
                      <option value="16">New House</option>
                      <option value="17">Ocean Breeze Villa</option>
                      <option value="18">Sarenity Abode</option>
                      <option value="19">New Lavish 3 BHK in KBHB Phase 15 with parking</option>
                      <option value="20">2 BHK Furnished in Hafeezpet Near Hitech City</option>
                      <option value="21">2 BHK Kukatpally in prime location with parking</option>
                      <option value="22">Posh 3 BHK Furnished in Vishalakshi nagr near vizag</option>
                    </select>
                  </div>
                                  
                </div>
                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-1  mt-6">
                <div className="flex flex-col">
                    <label  htmlFor="cat_id"   className="text-sm font-medium text-start text-[12px] font-[Montserrat]" > Select Gallery Category </label>
                    <select  name="cat_id"  id="cat_id"  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"  >
                      <option value="" disabled selected>Choose Gallery Category</option>
                      <option value="1">No Result Found</option>             
                    </select>
                  </div>
                </div>
                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-1 mt-6">
                    {/* facility image*/}
                    <div className="flex flex-col">
                      <label  htmlFor="img"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]">Gallery  Image</label>
                      <input  id="img"  name="img"  type="file"  required  className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px', border: '1px solid #EAEAFF'}}
                        onFocus={() => handleFocus('img')}
                        onBlur={() => handleBlur('img')}
                      />
                    </div>
                    
                </div>

                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-1 mt-6">
                  {/* gallery Status */}
                  <div className="flex flex-col">
                    <label  htmlFor="status"   className="text-sm font-medium text-start text-[12px] font-[Montserrat]" >Gallery Status </label>
                    <select  name="status"  id="status"  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"  >
                      <option value="" disabled selected>Select Status</option>
                      <option value={1}>Publish</option>
                      <option value={0}>Unpublish</option>
                    </select>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-start mt-6 gap-3">
                  <button  type="submit" className=" py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-[150px] h-12 font-[Montserrat] font-bold" style={{ borderRadius: "8px", }} > Add Gallery </button>
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

export default GalleryAdd