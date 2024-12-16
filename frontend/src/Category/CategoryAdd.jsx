import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ImageUploader from '../common/ImageUploader';
import axios from 'axios';
import { useLoading } from '../Context/LoadingContext';
import { useLocation } from 'react-router-dom';
import Loader from '../common/Loader';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const CategoryAdd = () => {
  const navigate = useNavigate();
  const location=useLocation()
  const id = location.state ? location.state.id : null;
  console.log(id)
  const { isLoading, setIsLoading } = useLoading();
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    id : id || null,
    title: '',
    img: '',
    status: 0,
  });
  useEffect(()=>{
    if(id){
      getCategory(id)
    }
  },[])

  const getCategory=async(id)=>{
    try {
      const response=await axios.get(`http://localhost:5000/categories/${id}`)
      const Category=response.data;
      console.log(response.data)
      setFormData({
        id,
        title: Category.title,
        img: Category.img,
        status: Category.status,
      })
    } catch (error) {
      console.error("Error fetching Category:", error);
    }
  }

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, [location, setIsLoading]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      id : prevData.id,
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
    const url=`http://localhost:5000/categories/upsert`;
    const successMessage=id ? 'Category Updated Succesfully!' : 'Category Added Successfully!'
    try {
      const response = await axios.post(url,formData,{withCredentials: true});
      if(response.status === 200 || response.status === 201){
        NotificationManager.success(successMessage)
        setTimeout(() => {
          navigate("/category-list");
        }, 2000);
      }else{
        throw new Error('Unexpected server response')
      }
            
    } catch (error) {
      console.error("Error submitting Category:", error);
      NotificationManager.error("Error submitting Category:", error);
    }
  };
  return (
    <div>
      {isLoading && <Loader />}
      <div className="flex bg-[#f7fbff]">
      {/* Sidebar */}
      
      
      <main className="flex-grow">
        <Header />
        <div className="container mx-auto">
        <div className="flex items-center mt-6  mb-4">
          <Link onClick={()=>{navigate(-1)}} className="cursor-pointer ml-6">
            <ArrowBackIosNewIcon />
          </Link>
          <h2 className="text-lg font-semibold ml-4 " style={{color:'#000000',fontSize:'24px',fontFamily:'Montserrat'}}>Create Category</h2>
        </div>

          {/* Form Container */}
          <div className="h-full px-6 max-w-5xl" style={{paddingTop:'24px'}}> 
            <div className="bg-white h-[70vh] w-full rounded-xl border border-[#EAE5FF] py-4 px-6 overflow-y-auto scrollbar-none">
              <form onSubmit={handleSubmit} className="mt-4">
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
                      {formData.img && (
                      <div className="mt-4">
                        <img
                          src={formData.img}
                          alt="Uploaded Preview"
                          className="w-32 h-32 object-cover rounded"
                        />
                      </div>
                    )}
                    </div>
                </div>

                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-1 mt-6">
                  {/* category Status */}
                  <div className="flex flex-col">
                    <label  htmlFor="category_status"   className="text-sm font-medium text-start text-[12px] font-[Montserrat]" > Status </label>
                    <select onChange={handleChange} value={formData.status}  name="status"  id="category_status"  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"  >
                      <option value="" disabled selected>Select Status</option>
                      <option value={1}>Publish</option>
                      <option value={0}>Unpublish</option>
                    </select>
                  </div>
                </div>

                {/* Action Buttons */}
                <button type="submit"   className={`py-2 mt-6 float-start ${id ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'} text-white rounded-lg w-[150px] h-12 font-[Montserrat] font-bold`}  style={{ borderRadius: '8px' }}   >
                    {id ? 'Update Category' : 'Add  Category'}
                  </button>
              </form>

            </div>
          </div>
        </div>
      </main>
      <NotificationContainer />
    </div>
    </div>
  )
}

export default CategoryAdd