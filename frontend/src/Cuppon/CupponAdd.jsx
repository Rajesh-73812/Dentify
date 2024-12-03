import React, { useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import SidebarMenu from '../components/SideBar'

const CupponAdd = () => {
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
  // random cuppon generation
  const makeEightDigitRand = () => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setFormData((prevData) => ({
      ...prevData,
      cupponCode: result, 
    }));
  };
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
            <h2 className="text-lg font-semibold ml-4 " style={{color:'#000000',fontSize:'24px',fontFamily:'Montserrat'}}>Cuppon Management</h2>
          </div>

          {/* Form Container */}
          <div className="h-full px-6 max-w-5xl" style={{paddingTop:'24px'}}> 
            <div className="bg-white w-full rounded-xl border border-[#EAE5FF] py-4 px-6">
              <form className="mt-4">
              <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-4 mt-6">
                    {/* cuppon image*/}
                    <div className="flex flex-col">
                      <label  htmlFor="cupponimage"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]">Cuppon Image</label>
                      <input  id="cupponimage"  name="cupponimage"  type="file"  required  className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px', border: '1px solid #EAEAFF'}}
                        onFocus={() => handleFocus('cupponimage')}
                        onBlur={() => handleBlur('cupponimage')}
                      />
                    </div>
                
                    {/* cuppon expiarydate*/}
                    <div className="flex flex-col">
                      <label  htmlFor="expiryDate"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]">Cuppon Expiary Date</label>
                      <input  id="expiryDate"  name="expiryDate"  type="date"  required  className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px', border: '1px solid #EAEAFF'}}
                        onFocus={() => handleFocus('expiryDate')}
                        onBlur={() => handleBlur('expiryDate')}
                      />
                    </div>
                
                  {/* cuppon code */}
                  <div className="flex flex-col">
                      <label  htmlFor="cupponCode"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"> Cuppon code </label>
                      <input id="cupponCode" name="cupponCode" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}
                        onFocus={() => handleFocus('cupponCode')}
                        onBlur={() => handleBlur('cupponCode')}
                        value={formData.cupponCode}
                        onChange={handleChange}
                        placeholder="Enter Cuppon code"
                      />
                    </div>
                  {/*btn*/}
                  <div className="flex flex-col">
                  {/* <label  htmlFor="cupponCode"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"> cuppon Generate</label> */}
                   <button className='btn border rounded-lg ml-4 mt-8 w-full h-14'  style={{background:'#61eb34', height:'40px', width:'70px'}} onClick={(e)=>{e.preventDefault();makeEightDigitRand();}}><img src="/image/cuppon/update_8303700.png" alt="refresh" height={20} width={20} className='ml-6'  /></button>
                  </div>
                </div>
                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-4  mt-6">
                  {/* cuppon title */}
                  <div className="flex flex-col">
                      <label  htmlFor="cuppon_title"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"> Cuppon Title </label>
                      <input id="cuppon_title" name="cuppon_title" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}
                        onFocus={() => handleFocus('cuppon_title')}
                        onBlur={() => handleBlur('cuppon_title')}
                        placeholder="Enter Cuppon title"
                      />
                    </div>
                  {/* cuppon subtitle */}
                  <div className="flex flex-col">
                      <label  htmlFor="cupponSubtitle"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"> Cuppon Sub Title </label>
                      <input id="cupponSubtitle" name="cupponSubtitle" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}
                        onFocus={() => handleFocus('cupponSubtitle')}
                        onBlur={() => handleBlur('cupponSubtitle')}
                        placeholder="Enter Cuppon subtitle"
                      />
                    </div>
                
                  {/* cuppon Status */}
                  <div className="flex flex-col">
                    <label  htmlFor="country_status"   className="text-sm font-medium text-start text-[12px] font-[Montserrat]" > Status </label>
                    <select  name="country_status"  id="country_status"  className="mt-1 block w-full p-4  bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"  >
                      <option value="" disabled selected>Select Status</option>
                      <option value="publish">Publish</option>
                      <option value="unpublish">Unpublish</option>
                    </select>
                  </div>

                  {/* cuppon min order amount */}
                  <div className="flex flex-col">
                      <label  htmlFor="minOrderAmount"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"> Cuppon Min Order Amount </label>
                      <input id="minOrderAmount" name="minOrderAmount" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}
                        onFocus={() => handleFocus('minOrderAmount')}
                        onBlur={() => handleBlur('minOrderAmount')}
                        
                      />
                    </div>
                </div>
                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2  mt-6">
                  {/* cuppon value */}
                  <div className="flex flex-col">
                      <label  htmlFor="cupponValue"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"> Country name </label>
                      <input id="cupponValue" name="cupponValue" type="text" required className="border rounded-lg p-3 mt-1 " style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}
                        onFocus={() => handleFocus('cupponValue')}
                        onBlur={() => handleBlur('cupponValue')}
                        
                      />
                  </div>

                  {/* Coupon Description */}
                  <div className="flex flex-col">
                      <label  htmlFor="cupponDescription"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"> Country name </label>
                      <textarea id="cupponDescription" name="cupponDescription" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}
                        onFocus={() => handleFocus('cupponDescription')}
                        onBlur={() => handleBlur('cupponDescription')}
                      ></textarea>
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

export default CupponAdd