import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import SidebarMenu from '../components/SideBar'
import axios from 'axios'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const FaqAdd = () => {
  const location=useLocation();
  const id = location.state ? location.state.id : null;
  // console.log(id)
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
        const response = await axios.get(`http://localhost:5000/faq/${id}`);
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
      const url = id  ? `http://localhost:5000/faq/upsert` : `http://localhost:5000/faq/upsert`;      
      const successMessage = id  ? "FAQ updated successfully!" : "FAQ added successfully!";
      const response = await axios.post(url, formData, { withCredentials: true });

      if (response.status === 200 || response.status === 201) {
        NotificationManager.success(successMessage);
          setTimeout(() => {
            navigate("/faq-list");
          }, 4000);
      } else {
        NotificationManager.success("Something went wrong. Please try again.");
      }
  } catch (error) {
      console.error("Error submitting FAQ:", error);
      alert("An error occurred while submitting the FAQ. Please check your inputs or try again later.");
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
                      <label  htmlFor="question"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"> Faq Question </label>
                      <input id="question" value={formData.question} onChange={handleChange} name="question" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}
                        onFocus={() => handleFocus('question')}
                        onBlur={() => handleBlur('question')}
                        placeholder="Enter question "
                      />
                    </div>
                </div>

                <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-1  mt-6">
                  {/* faq answer */}
                  <div className="flex flex-col">
                      <label  htmlFor="answer"  className="text-sm font-medium text-start text-[12px] font-[Montserrat]"> Faq Answer </label>
                      <input id="answer" value={formData.answer} onChange={handleChange} name="answer" type="text" required className="border rounded-lg p-3 mt-1 w-full h-14" style={{  borderRadius: '8px',border: '1px solid #EAEAFF'}}
                        onFocus={() => handleFocus('answer')}
                        onBlur={() => handleBlur('answer')}
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