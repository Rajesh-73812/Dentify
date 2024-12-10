import React, { useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import SidebarMenu from '../components/SideBar'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const PageAdd = () => {
  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ctitle: '',
    cstatus: 0,
    cdesc:'',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const plainTextDescription = new DOMParser().parseFromString(formData.cdesc, 'text/html').body.innerText;
      const dataToSend = {
      ...formData,
      cdesc: plainTextDescription, 
    };
  
    console.log("Form submitted:", dataToSend);
  
    try {
      const response = await axios.post("http://localhost:5000/pages/upsert", dataToSend, {
        withCredentials: true, 
      });
      console.log("page added successfully:", response.data);
      if (response.status === 201) {
        toast.success('page added successfully!');
      }
      navigate("/page-list");
    } catch (error) {
      console.error("Error adding page:", error);
      alert("An error occurred while adding the page.");
    }
  };

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
            <h2 className="text-lg font-semibold ml-4 " style={{color:'#000000',fontSize:'24px',fontFamily:'Montserrat'}}>Page Management</h2>
          </div>

          {/* Form Container */}
          <div className="h-full px-6 max-w-5xl" style={{paddingTop:'24px'}}> 
            <div className="bg-white h-[70vh] w-full rounded-xl border border-[#EAE5FF] py-4 px-6 overflow-y-auto" style={{scrollbarWidth:'none'}}>
              <form onSubmit={handleSubmit} className="mt-4">
                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-1  mt-6">
                  {/* page name */}
                  <div className="flex flex-col">
                      <label  htmlFor="ctitle"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"> Page name </label>
                      <input id="ctitle" value={formData.title} onChange={handleChange} name="ctitle" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}
                        onFocus={() => handleFocus('ctitle')}
                        onBlur={() => handleBlur('ctitle')}
                        placeholder="Enter page "
                      />
                    </div>
                </div>
                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-1 mt-6">
                  {/* page Status */}
                  <div className="flex flex-col">
                    <label  htmlFor="cstatus"   className="text-sm font-medium text-start text-[12px] font-[Montserrat]" >Page  Status </label>
                    <select  name="cstatus"  id="cstatus" value={formData.status} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"  >
                      <option value="" disabled selected>Select Status</option>
                      <option value={1}>Publish</option>
                      <option value={0}>Unpublish</option>
                    </select>
                  </div>
                </div>
                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-1  mt-6">
                  {/* page description  */}
                  <div className="flex flex-col">
                    <label htmlFor="cdesc" className="text-sm font-medium text-start text-[12px] font-[Montserrat]"> Page Description </label>
                    <ReactQuill 
                      value={formData.cdesc} 
                      onChange={(value) => setFormData({ ...formData, cdesc: value })} // Fixed here
                      required 
                      className="border rounded-lg mt-1 w-full h-40" 
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-start mt-12 gap-3">
                  <button  type="submit" className=" py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-[150px] h-12 font-[Montserrat] font-bold" style={{ borderRadius: "8px", }} > Add Page </button>
                  <ToastContainer />
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

export default PageAdd