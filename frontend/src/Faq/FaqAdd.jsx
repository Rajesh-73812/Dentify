import React, { useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import SidebarMenu from '../components/SideBar'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles

const FaqAdd = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    img: '',
    status: 0,
    description:'',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0]; 
    if (!file) return;

    const imageFormData = new FormData();
    imageFormData.append("file", file);
    imageFormData.append("upload_preset", "infinitum-task");
    imageFormData.append("cloud_name", "dhr4xnftl");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dhr4xnftl/image/upload",
        imageFormData
      );
      setFormData((prevData) => ({
        ...prevData,
        img: res.data.secure_url, 
      }));
      console.log("Image uploaded successfully:", res.data.secure_url);
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    try {
      const response = await axios.post("http://localhost:5000/countries/upsert",
         formData
         ,
         {
          withCredentials: true, 
        }
        );
      console.log("package added successfully:", response.data);
      if(response.status === 201 ){
        toast.success('package added successfully!')
      }
      // alert("package added successfully!");
      navigate("/package-list");
    } catch (error) {
      console.error("Error adding package:", error);
      alert("An error occurred while adding the package.");
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
            <h2 className="text-lg font-semibold ml-4 " style={{color:'#000000',fontSize:'24px',fontFamily:'Montserrat'}}>Faq Management</h2>
          </div>

          {/* Form Container */}
          <div className="h-full px-6 max-w-5xl" style={{paddingTop:'24px'}}> 
            <div className="bg-white h-[70vh] w-full rounded-xl border border-[#EAE5FF] py-4 px-6 overflow-y-auto" style={{scrollbarWidth:'none'}}>
              <form onSubmit={handleSubmit} className="mt-4">
                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-1  mt-6">
                  {/* faq question */}
                  <div className="flex flex-col">
                      <label  htmlFor="faqQs"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"> Faq Question </label>
                      <input id="faqQs" value={formData.title} onChange={handleChange} name="faqQs" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}
                        onFocus={() => handleFocus('faqQs')}
                        onBlur={() => handleBlur('faqQs')}
                        placeholder="Enter question "
                      />
                    </div>
                </div>

                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-1  mt-6">
                  {/* faq answer */}
                  <div className="flex flex-col">
                      <label  htmlFor="faqAns"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"> Faq Answer </label>
                      <input id="faqQs" value={formData.title} onChange={handleChange} name="faqAns" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}
                        onFocus={() => handleFocus('faqAns')}
                        onBlur={() => handleBlur('faqAns')}
                        placeholder="Enter Anwer "
                      />
                    </div>
                </div>
                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-1 mt-6">
                  {/* page Status */}
                  <div className="flex flex-col">
                    <label  htmlFor="status"   className="text-sm font-medium text-start text-[12px] font-[Montserrat]" >Faq  Status </label>
                    <select  name="status"  id="status" value={formData.status} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"  >
                      <option value="" disabled selected>Select Status</option>
                      <option value={1}>Publish</option>
                      <option value={0}>Unpublish</option>
                    </select>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-start mt-6 gap-3">
                  <button  type="submit" className=" py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-[150px] h-12 font-[Montserrat] font-bold" style={{ borderRadius: "8px", }} > Add Faq </button>
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

export default FaqAdd