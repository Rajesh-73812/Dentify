import React, { useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import SidebarMenu from '../components/SideBar'

const Settings = () => {
  const [timezones, setTimezones] = useState([]);
  const [loading, setLoading] = useState(true);
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
        <div className="container mx-auto">
          <div className="flex items-center mt-6  mb-4">
            {/* <Link to="/rolesList" className="cursor-pointer ml-6">
              
            </Link> */}
            <h2 className="text-lg font-semibold ml-4 " style={{color:'#000000',fontSize:'24px',fontFamily:'Montserrat'}}>Settings Management</h2>
          </div>

          {/* Form Container */}
          <div className="h-full px-6 max-w-5xl" style={{paddingTop:'24px'}}> 
            <div className="bg-white h-[70vh] w-full rounded-xl border border-[#EAE5FF] py-4 px-6 overflow-y-auto" style={{scrollbarWidth:'none'}}>
              <form className="mt-4">
                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-3 mt-6">
                        {/* website Name*/}
                        <div className="flex flex-col">
                            <label  htmlFor="web_name"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"> <span style={{color:'red'}}>*</span> Website Name </label>
                            <input id="web_name" name="web_name" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}
                                onFocus={() => handleFocus('web_name')}
                                onBlur={() => handleBlur('web_name')}
                            />
                        </div>

                        {/* website image */}
                        <div className="flex flex-col">
                            <label  htmlFor="web_img"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"><span style={{color:'red'}}>*</span>Website Image</label>
                            <input  id="web_img"  name="web_img"  type="file"  required  className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px', border: '1px solid #EAEAFF'}}
                                onFocus={() => handleFocus('web_img')}
                                onBlur={() => handleBlur('web_img')}
                            />
                        </div>

                        {/* time zone */}
                        <div className="flex flex-col">
                            <label  htmlFor="time_zone"   className="text-sm font-medium text-start text-[12px] font-[Montserrat]" ><span style={{color:'red'}}>*</span> Select Timezone </label>
                            <select  name="time_zone"  id="time_zone"  className="mt-1 block w-full p-4  bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"  >
                                <option value="" disabled selected>Select TimeZone</option>
                            </select>
                        </div>
                        {/* currency*/}
                        <div className="flex flex-col">
                            <label  htmlFor="currency"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"><span style={{color:'red'}}>*</span> Currency</label>
                            <input  id="currency"  name="currency"  type="text"  required  className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px', border: '1px solid #EAEAFF'}}
                                onFocus={() => handleFocus('currency')}
                                onBlur={() => handleBlur('currency')}
                            />
                        </div>
                    
                    {/* tax */}
                    <div className="flex flex-col">
                        <label  htmlFor="tax"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"> <span style={{color:'red'}}>*</span>Tax</label>
                        <input id="tax" name="tax" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}
                            onFocus={() => handleFocus('tax')}
                            onBlur={() => handleBlur('tax')}
                            placeholder=""
                        />
                    </div>
                    {/* sms type */}
                    <div className="flex flex-col">
                        <label  htmlFor="sms"   className="text-sm font-medium text-start text-[12px] font-[Montserrat]" ><span style={{color:'red'}}>*</span> Sms Type </label>
                            <select  name="sms"  id="sms"  className="mt-1 block w-full p-4  bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"  >
                                <option value="" disabled selected>Select sms type</option>
                            </select>
                    </div>
                </div>
                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2  mt-6">
                  {/* msg91 auth key */}
                  <div className="flex flex-col">
                      <label  htmlFor="msg91_auth"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"> <span style={{color:'red'}}>*</span>Msg91 Auth Key</label>
                      <input id="msg91_auth" name="msg91_auth" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}
                        onFocus={() => handleFocus('msg91_auth')}
                        onBlur={() => handleBlur('msg91_auth')}
                        placeholder="********************************************"
                      />
                    </div>
                  {/* Msg91Otp Template Id */}
                  <div className="flex flex-col">
                      <label  htmlFor="Msg91Otp"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"> <span style={{color:'red'}}>*</span> Msg91 Otp Template Id </label>
                      <input id="Msg91Otp" name="Msg91Otp" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}
                        onFocus={() => handleFocus('Msg91Otp')}
                        onBlur={() => handleBlur('Msg91Otp')}
                        placeholder="****************************************"
                      />
                    </div>
    
                </div>
                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-3  mt-6">
                    {/* *Twilio Account SID */}
                    <div className="flex flex-col">
                      <label  htmlFor="TwilioSID"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"> <span style={{color:'red'}}>*</span>Twilio Account SID</label>
                      <input id="TwilioSID" name="TwilioSID" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}
                        onFocus={() => handleFocus('TwilioSID')}
                        onBlur={() => handleBlur('TwilioSID')}
                        placeholder='*******************************************'
                      />
                    </div>

                  {/* Twilio Auth Token */}
                  <div className="flex flex-col">
                      <label  htmlFor="TwilioAuth"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"><span style={{color:'red'}}>*</span>Twilio Auth Token</label>
                      <input id="TwilioAuth" name="TwilioAuth" type="text" required className="border rounded-lg p-3 mt-1 " style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}
                        onFocus={() => handleFocus('TwilioAuth')}
                        onBlur={() => handleBlur('TwilioAuth')}
                        placeholder='*******************************************'
                      />
                  </div>

                  {/* Twilio Phone Number */}
                  <div className="flex flex-col">
                      <label  htmlFor="TwilioPhone"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"> <span style={{color:'red'}}>*</span>Twilio Phone Number</label>
                      <input id="TwilioPhone" name="TwilioPhone" type="text" required className="border rounded-lg p-3 mt-1 " style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}
                        onFocus={() => handleFocus('TwilioPhone')}
                        onBlur={() => handleBlur('TwilioPhone')}
                        placeholder='*******************************************'
                      />
                  </div>
                </div>

                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2  mt-6">
                    {/** Otp Auth In Signup ? */}
                    <div className="flex flex-col">
                      <label  htmlFor="Signup"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"> <span style={{color:'red'}}>*</span> Show Add Property Button ? </label>
                      <input id="Signup" name="Signup" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}
                        onFocus={() => handleFocus('Signup')}
                        onBlur={() => handleBlur('Signup')}
                        placeholder='*******************************************'
                      />
                    </div>

                    {/** Show Add PropertyButton ? */}
                    <div className="flex flex-col">
                      <label  htmlFor="PropertyButton"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"> <span style={{color:'red'}}>*</span> Show Add Property Button ? </label>
                      <input id="PropertyButton" name="PropertyButton" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}
                        onFocus={() => handleFocus('PropertyButton')}
                        onBlur={() => handleBlur('PropertyButton')}
                        placeholder='*******************************************'
                      />
                    </div>
                </div>

                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2  mt-6">
                    {/** User App OnesignalAppId*/}
                    <div className="flex flex-col">
                      <label  htmlFor="OnesignalAppId"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"> <span style={{color:'red'}}>*</span> User App Onesignal App Id</label>
                      <input id="OnesignalAppId" name="OnesignalAppId" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}
                        onFocus={() => handleFocus('OnesignalAppId')}
                        onBlur={() => handleBlur('OnesignalAppId')}
                        placeholder='*******************************************'
                      />
                    </div>

                    {/** User App Onesignal RestApiKey */}
                    <div className="flex flex-col">
                      <label  htmlFor="RestApiKey"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"> <span style={{color:'red'}}>*</span> User App Onesignal Rest Api Key </label>
                      <input id="RestApiKey" name="RestApiKey" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}
                        onFocus={() => handleFocus('RestApiKey')}
                        onBlur={() => handleBlur('RestApiKey')}
                        placeholder='*******************************************'
                      />
                    </div>
                </div>

                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-3  mt-6">                   
                  {/* * SignUpCredit*/}
                  <div className="flex flex-col">
                      <label  htmlFor="SignUpCredit"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"> <span style={{color:'red'}}>*</span> Sign Up Credit</label>
                      <input id="SignUpCredit" name="SignUpCredit" type="text" required className="border rounded-lg p-3 mt-1 " style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}
                        onFocus={() => handleFocus('SignUpCredit')}
                        onBlur={() => handleBlur('SignUpCredit')}
                        placeholder='*******************************************'
                      />
                  </div>

                  {/* * ReferCredit*/}
                  <div className="flex flex-col">
                      <label  htmlFor="ReferCredit"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"> <span style={{color:'red'}}>*</span> Refer Credit</label>
                      <input id="ReferCredit" name="ReferCredit" type="text" required className="border rounded-lg p-3 mt-1 " style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}
                        onFocus={() => handleFocus('ReferCredit')}
                        onBlur={() => handleBlur('ReferCredit')}
                        placeholder='*******************************************'
                      />
                  </div>

                  {/* *  Payout Withdraw Limit*/}
                  <div className="flex flex-col">
                      <label  htmlFor="Withdraw"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"> <span style={{color:'red'}}>*</span> Payout Withdraw Limit </label>
                      <input id="Withdraw" name="Withdraw" type="text" required className="border rounded-lg p-3 mt-1 " style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}
                        onFocus={() => handleFocus('Withdraw')}
                        onBlur={() => handleBlur('Withdraw')}
                        placeholder='*******************************************'
                      />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-start mt-6 gap-3">
                  <button  type="submit" className=" py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-[150px] h-12 font-[Montserrat] font-bold" style={{ borderRadius: "8px", }} >Edit Setting </button>
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

export default Settings