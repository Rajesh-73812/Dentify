import React, { useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import SidebarMenu from '../components/SideBar'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ImageUploader from '../common/ImageUploader';
import axios from 'axios';

const CategoryAdd = () => {

  const [formData, setFormData] = useState({
    title: '',
    img: '',
    status: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUploadSuccess = (imageUrl) => {
    setFormData((prevData) => ({
      ...prevData,
      img: imageUrl,
    }));
    
  };



  const handleFocus=()=>{

  }

  const handleBlur=()=>{

  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    try {
      const response = await axios.post("http://localhost:5000/categories/upsert",
         formData
         ,
         {
          withCredentials: true, 
        }
        );
      console.log("Category added successfully:", response.data);
      alert("Category added successfully!");
      // navigate("/dashboard");
    } catch (error) {
      console.error("Error adding Category:", error);
      alert("An error occurred while adding the Category.");
    }
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
          <Link to="/dashboard" className="cursor-pointer ml-6">
            <ArrowBackIosNewIcon />
          </Link>
          <h2 className="text-lg font-semibold ml-4 " style={{color:'#000000',fontSize:'24px',fontFamily:'Montserrat'}}>Create Category</h2>
        </div>

          {/* Form Container */}
          <div className="h-full px-6 max-w-5xl" style={{paddingTop:'24px'}}> 
            <div className="bg-white h-[70vh] w-full rounded-xl border border-[#EAE5FF] py-4 px-6">
              <form className="mt-4">
                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-1  mt-6">
                  {/* category name */}
                  <div className="flex flex-col">
                      <label  htmlFor="category_name"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"> Category name </label>
                      <input id="category_name" name="title" value={formData.title} type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}
                        onFocus={() => handleFocus('category_name')}
                        onBlur={() => handleBlur('category_name')}
                        onChange={handleChange}
                        placeholder="Enter Category Title"
                      />
                    </div>
                </div>
                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-1 mt-6">
                    {/* category image*/}
                    <div className="flex flex-col">
                      <label  htmlFor="category_image"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]">Category Image</label>
                    
                      <ImageUploader onUploadSuccess={handleImageUploadSuccess}/>
                    </div>
                </div>

                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-1 mt-6">
                  {/* category Status */}
                  <div className="flex flex-col">
                    <label  htmlFor="category_status"   className="text-sm font-medium text-start text-[12px] font-[Montserrat]" > Status </label>
                    <select onChange={handleChange}  name="status"  id="category_status"  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"  >
                      <option value="" disabled selected>Select Status</option>
                      <option value={1}>Publish</option>
                      <option value={0}>Unpublish</option>
                    </select>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-start mt-6 gap-3">
                  <button  type="submit" className=" py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-[150px] h-12 font-[Montserrat] font-bold" style={{ borderRadius: "8px", }} > Add Category </button>
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

export default CategoryAdd