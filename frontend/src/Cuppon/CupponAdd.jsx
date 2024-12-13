import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import SidebarMenu from '../components/SideBar'
import Cookie from 'js-cookie';
import ImageUploader from '../common/ImageUploader';
import axios from 'axios';
import { useLoading } from '../Context/LoadingContext';
import { useLocation } from 'react-router-dom';
import Loader from '../common/Loader';

const CupponAdd = () => {
  const location=useLocation();
  const id=location.state ? location.state.id : null ;
  const navigate = useNavigate();
  const { isLoading, setIsLoading } = useLoading();
  const [formData, setFormData] = useState({id: id || null,  c_img: '',  status: 0,  c_title: '',  cdate: '',  ctitle: '',  subtitle: '',  min_amt: '',  c_value: '',  c_desc: '',});

  useEffect(()=>{
    if(id){
      getCuppon(id)
    }
  },[])

  const getCuppon=async(id)=>{
    try {
      const response=await axios.get(`http://localhost:5000/coupons/${id}`)
      // console.log(response.data)
      const cuppon=response.data
      setFormData({
        id,
        c_img: cuppon.c_img,
        cdate: cuppon.cdate,
        c_desc: cuppon.c_desc,
        c_title: cuppon.c_title,
        c_value: cuppon.c_value,
        cdate: cuppon.cdate,
        ctitle: cuppon.ctitle,
        min_amt: cuppon.min_amt,
        status: cuppon.status,
        subtitle: cuppon.subtitle

      })
    } catch (error) {
        console.error(error)
    }
  }
  const handleChange=(e)=>{
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      id: prevData.id
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
      c_title: result, 
    }));
  };

  const handleImageUploadSuccess = (imageUrl) => {
    setFormData((prevData) => ({
      ...prevData,
      c_img: imageUrl,
    }));
    
  };

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, [location, setIsLoading]);

  const handleSubmit=async(e)=>{
    console.log(formData, "from formdata");
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/coupons/upsert",
        formData
        ,
        {
         withCredentials: true, 
       }
       );

       console.log("Caupon added successfully:", response.data);
      alert("Caupon added successfully!");
      navigate("/cuppon-list");
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      {isLoading && <Loader />}
      <div className="flex bg-[#f7fbff]">
      {/* Sidebar */}
      
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
            <div className="bg-white h-[70vh] w-full rounded-xl border border-[#EAE5FF] py-4 px-6 overflow-y-auto scrollbar-none">
              <form onSubmit={handleSubmit} className="mt-4">
              <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-4 mt-6">
                    {/* cuppon image*/}
                    <div className="flex flex-col">
                      <label  htmlFor="cupponimage"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]">Cuppon Image</label>
                      <ImageUploader onUploadSuccess={handleImageUploadSuccess}/>
                      {formData.c_img && (
                      <div className="mt-4">
                        <img
                          src={formData.c_img}
                          alt="Uploaded Preview"
                          className="w-32 h-32 object-cover rounded"
                        />
                      </div>
                      )}
                    </div>
                
                    {/* cuppon expiarydate*/}
                    <div className="flex flex-col">
                      <label  htmlFor="cdate"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]">Cuppon Expiary Date</label>
                      <input  id="cdate" value={formData.cdate} onChange={handleChange}  name="cdate"  type="date"  required  className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px', border: '1px solid #EAEAFF'}}
                        onFocus={() => handleFocus('cdate')}
                        onBlur={() => handleBlur('cdate')}
                      />
                    </div>
                
                  {/* cuppon code */}
                  <div className="flex flex-col">
                      <label  htmlFor="c_title"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"> Cuppon code </label>
                      <input id="c_title" name="c_title"  type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}
                        onFocus={() => handleFocus('c_title')}
                        onBlur={() => handleBlur('c_title')}
                        value={formData.c_title}
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
                      <label  htmlFor="ctitle"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"> Cuppon Title </label>
                      <input id="ctitle" value={formData.ctitle} onChange={handleChange} name="ctitle" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}
                        onFocus={() => handleFocus('ctitle')}
                        onBlur={() => handleBlur('ctitle')}
                        placeholder="Enter Cuppon title"
                      />
                    </div>
                  {/* cuppon subtitle */}
                  <div className="flex flex-col">
                      <label  htmlFor="subtitle"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"> Cuppon Sub Title </label>
                      <input id="subtitle" value={formData.subtitle} name="subtitle" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}
                        onFocus={() => handleFocus('subtitle')}
                        onBlur={() => handleBlur('subtitle')}
                        onChange={handleChange}
                        placeholder="Enter Cuppon subtitle"
                      />
                    </div>
                
                  {/* cuppon Status */}
                  <div className="flex flex-col">
                    <label  htmlFor="status"   className="text-sm font-medium text-start text-[12px] font-[Montserrat]" > Status </label>
                    <select  name="status" value={formData.status}  onChange={handleChange} id="status"  className="mt-1 block w-full p-4  bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"  >
                      <option value="" disabled selected>Select Status</option>
                      <option value={1}>Publish</option>
                      <option value={0}>Unpublish</option>
                    </select>
                  </div>

                  {/* cuppon min order amount */}
                  <div className="flex flex-col">
                      <label  htmlFor="min_amt"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"> Cuppon Min Order Amount </label>
                      <input id="min_amt" name="min_amt" value={formData.min_amt} type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}
                        onFocus={() => handleFocus('min_amt')}
                        onBlur={() => handleBlur('min_amt')}
                        onChange={handleChange}
                        
                      />
                    </div>
                </div>
                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2  mt-6">
                  {/* cuppon value */}
                  <div className="flex flex-col">
                      <label  htmlFor="c_value"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"> Coupon Value </label>
                      <input id="c_value" name="c_value" value={formData.c_value} type="text" required className="border rounded-lg p-3 mt-1 " style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}
                        onFocus={() => handleFocus('c_value')}
                        onBlur={() => handleBlur('c_value')}
                        onChange={handleChange}
                        
                      />
                  </div>

                  {/* Coupon Description */}
                  <div className="flex flex-col">
                      <label  htmlFor="c_desc"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"> Coupon Description </label>
                      <textarea id="c_desc" value={formData.c_desc} name="c_desc" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}
                        onFocus={() => handleFocus('c_desc')}
                        onBlur={() => handleBlur('c_desc')}
                        onChange={handleChange}
                      ></textarea>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-start mt-6 gap-3">
                  <button  type="submit" className={` py-2 ${id ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'} text-white rounded-lg  w-[150px] h-12 font-[Montserrat] font-bold`} style={{ borderRadius: "8px", }} > {id ? 'Update Cuppon' : 'Add Cuppon'} </button>
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