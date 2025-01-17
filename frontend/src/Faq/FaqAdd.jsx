import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import ArrowBackIosNewIcon  from '@mui/icons-material/ArrowBackIosNew';
import api from '../utils/api';

const FaqAdd = () => {
  const location=useLocation();
  const id = location.state ? location.state.id : null;
  console.log(id)
  const [faq,setFaq]=useState(null)
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: id || null, 
    question: '',
    answer: '',
    status: 0,
});


  useEffect(() => {
    if (id) {
      getFAQ(id);
    }
  }, [id]);

  const getFAQ = async (id) => {
    try {
        const response = await api.get(`/faqs/${id}`);
        const faq = response.data;
        setFormData({
            id, 
            question: faq.question,
            answer: faq.answer,
            status: faq.status,
        });
    } catch (error) {
        console.error("Error fetching FAQ:", error);
    }
  };


const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      id: prevData.id,
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Form submitted:", formData);

  try {
      const url = id  ? `http://localhost:5000/faqs/upsert` : `http://localhost:5000/faqs/upsert`;      
      const successMessage = id  ? "FAQ updated successfully!" : "FAQ added successfully!";
      const response = await axios.post(url, formData, { withCredentials: true });

      if (response.status === 200 || response.status === 201) {
        NotificationManager.removeAll();
        NotificationManager.success(successMessage);
          setTimeout(() => {
            navigate("/faq-list");
          }, 2000);
      } else {
        NotificationManager.success("Something went wrong. Please try again.");
      }
  } catch (error) {
    NotificationManager.removeAll();
      console.error("Error submitting FAQ:", error);
      NotificationManager.error("An error occurred while submitting the FAQ. Please check your inputs or try again later.");
  }
};

  return (
    <div>
      <div className="flex bg-[#f7fbff]">
      {/* Sidebar */}
      <main className="flex-grow">
        <Header />
        <div className="container mx-auto">
          <div className="flex items-center mt-6  mb-4">
          <Link onClick={() => { navigate(-1) }} className="cursor-pointer ml-6">
                <ArrowBackIosNewIcon style={{color:'#045D78'}} />
              </Link>
            <h2 className="text-lg font-semibold ml-4 header" >FAQ's Management</h2>
          </div>

          {/* Form Container */}
          <div className="h-full px-6 max-w-5xl" style={{paddingTop:'24px'}}> 
            <div className="bg-white h-[67vh] w-full rounded-xl border border-[#EAE5FF] py-4 px-6 overflow-y-auto" style={{scrollbarWidth:'none'}}>
              <form onSubmit={handleSubmit} className="mt-4">
                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2  mt-6">
                  {/* faq question */}
                  <div className="flex flex-col">
                      <label  htmlFor="question"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"> FAQ's Question </label>
                      <input id="question" value={formData.question} onChange={handleChange} name="question" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}} placeholder="Enter question "  />
                  </div>

                  {/* faq answer */}
                  <div className="flex flex-col">
                      <label  htmlFor="answer"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"> FAQ's Answer </label>
                      <input id="answer" value={formData.answer} onChange={handleChange} name="answer" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}  placeholder="Enter Anwer " />
                  </div>

                </div>

                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2 mt-6">
                  {/* page Status */}
                  <div className="flex flex-col">
                    <label  htmlFor="status"   className="text-sm font-medium text-start text-[12px] font-[Montserrat]" >FAQ's  Status </label>
                    <select  name="status"  id="status" value={formData.status} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"  >
                      <option value="" disabled selected>Select Status</option>
                      <option value={1}>Publish</option>
                      <option value={0}>Unpublish</option>
                    </select>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-start mt-6 gap-3">
                  <button  type="submit" className={`py-2 bg-[#045D78] text-white rounded-lg  h-10 font-poppins font-medium ${id ? 'w-[140px]' : 'w-[100px]'}`} style={{ borderRadius: "8px", }} > {id ? "Update FAQ's" : "Add FAQ's"}</button>
                </div>
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

export default FaqAdd