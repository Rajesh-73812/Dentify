import React, { useEffect, useState } from 'react'
import Header from '../components/Header'

const RoleChange = () => {
    const [formData,setFormData]=useState({});
    const handleChange=()=>{

    }

    const handleSubmit=()=>{

    }

  return (
    <div>
      <div className="flex bg-[#f7fbff]">
      
      <main className="flex-grow">
        <Header />
        <div className="container mx-auto">
          <div className="flex items-center mt-6  mb-4">
            {/* <Link to="/rolesList" className="cursor-pointer ml-6">
              
            </Link> */}
            <h2 className="text-lg font-semibold ml-4 " style={{color:'#000000',fontSize:'24px',fontFamily:'Montserrat'}}>Role </h2>
          </div>

          {/* Form Container */}
          <div className="h-full px-6 max-w-5xl" style={{paddingTop:'24px'}}> 
            <div className="bg-white h-[70vh] w-full rounded-xl border border-[#EAE5FF] py-4 px-6 overflow-y-auto" style={{scrollbarWidth:'none'}}>
              <form onSubmit={handleSubmit} className="mt-4">
                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-1  mt-6">
                  {/* page name */}
                  <div className="flex flex-col">
                      <label  htmlFor="ctitle"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"> Page name </label>
                      <input id="ctitle" value={formData.ctitle} onChange={handleChange} name="ctitle" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}
                        placeholder="Enter Page Title"
                      />
                    </div>
                </div>
                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-1 mt-6">
                  {/* page Status */}
                  <div className="flex flex-col">
                    <label  htmlFor="cstatus"   className="text-sm font-medium text-start text-[12px] font-[Montserrat]" >Page  Status </label>
                    <select  name="cstatus"  id="cstatus" value={formData.status} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"  >
                      <option value="" disabled >Select Status</option>
                      <option value={1}>Publish</option>
                      <option value={0}>Unpublish</option>
                    </select>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-start mt-12 gap-3">
                  <button  type="submit" className=" py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-[150px] h-12 font-[Montserrat] font-bold" style={{ borderRadius: "8px", }} > Add Page </button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </main>
      {/* <NotificationContainer /> */}
    </div>
    </div>
  )
}

export default RoleChange