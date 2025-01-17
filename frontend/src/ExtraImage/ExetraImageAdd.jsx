import React, { useEffect, useState } from 'react';
import Loader from '../common/Loader';
import Header from '../components/Header';
import axios from 'axios';
import MultiImageUploader from '../common/MultipleImageUploader';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import ArrowBackIosNewIcon  from '@mui/icons-material/ArrowBackIosNew';
import api from '../utils/api';

const ExtraImageAdd = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const id = location.state ? location.state.id : null;
    const [properties, setProperties] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        id:id || null,
        pid: '',
        status: '',
        img: []
    });

    

    useEffect(() => {
        setIsLoading(true);
        if (id) {
            getExtraImage()
        }
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
      }, [id, location, setIsLoading]);

    const getExtraImage = async () => {
        try {
            const response = await api.get(`/extra/${id}`
                
            )
            const ExtraImage = response.data;
            console.log(ExtraImage, "from extra imageds")
            setFormData({
                id,
                pid: ExtraImage.pid,
                img: ExtraImage.images,
                status: ExtraImage.status
            })
            console.log(ExtraImage)
        } catch (error) {
            console.error("Error fetching Extra Images ", error);
        }
    }

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await api.get('/properties', );
                setProperties(response.data);
            } catch (error) {
                console.error('Error fetching properties:', error.response ? error.response.data : error.message);
            }
        };

        fetchProperties();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleImageUploadSuccess = (imageUrls) => {
        setFormData((prevData) => ({
            ...prevData,
            img: [
                ...prevData.img, 
                ...imageUrls.map((url) => ({ url })) 
            ]
        }));
    };
    

    console.log(formData, "from form data");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await api.post('/extra/upsert', formData, );
            // console.log('Extra image added successfully:', response.data);
            if(response.status === 200 || response.status === 201){
                NotificationManager.removeAll();
                NotificationManager.success('Extra image added successfully!')
                setTimeout(() => {
                    navigate("/extra-image-list")
                }, 2000);
            }
            
        } catch (error) {
            NotificationManager.removeAll();
            NotificationManager.error('Error adding extra image')
            console.error('Error adding extra image:', error.response ? error.response.data : error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            {isLoading && <Loader />}
            <div className="flex bg-[#f7fbff]">
                <main className="flex-grow">
                    <Header />
                    <div className="container mx-auto">
                        <div className="flex items-center mt-6 mb-4">
                            <Link onClick={() => { navigate(-1) }} className="cursor-pointer ml-6">
                                <ArrowBackIosNewIcon style={{color:'#045D78'}} /> 
                            </Link>
                            <h2 className="text-lg font-semibold ml-4" style={{ color: '#000000', fontSize: '24px', fontFamily: 'Montserrat' }}>Extra Image Management</h2>
                        </div>
                        <div className="h-full px-6 max-w-5xl" style={{ paddingTop: '24px' }}>
                            <div className="bg-white h-[67vh] w-full rounded-xl border border-[#EAE5FF] py-4 px-6 overflow-y-auto scrollbar-none">
                                <form className="mt-4" onSubmit={handleSubmit}>
                                    <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2 mt-6">
                                        {/* Select Property */}
                                        <div className="flex flex-col">
                                            <label htmlFor="pid" className="text-sm font-medium text-start text-[12px] font-[Montserrat]">Select Property</label>
                                            <select name="pid" id="pid" value={formData.pid} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm" onChange={handleChange} required>
                                                <option value="" disabled selected>Select Property</option>
                                                {properties.map((property) => (
                                                    <option key={property.id} value={property.id}>{property.title}</option>
                                                ))}
                                            </select>

                                        </div>
                                        {/* Property Image */}
                                        <div className="flex flex-col">
                                            <label htmlFor="img" className="text-sm font-medium text-start text-[12px] font-[Montserrat]">Property Image</label>
                                            <MultiImageUploader onUploadSuccess={handleImageUploadSuccess} />
                                            {formData.img && (  
                                                <div className="mt-4 flex gap-3">
                                                    {
                                                        formData.img.map((item) => (
                                                            <div>
                                                                <img
                                                                    src={item.url}
                                                                    alt="Uploaded Preview"
                                                                    className="w-32 h-32 object-cover rounded"
                                                                />
                                                            </div>
                                                        ))
                                                    }

                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2 mt-6">
                                        {/* Yes/No */}
                                        <div className="flex flex-col">
                                            <label htmlFor="image2" className="text-sm font-medium text-start text-[12px] font-[Montserrat]" > Status </label>
                                            <select name="image2" id="image2" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"  >
                                                <option value="" disabled selected>Select Status</option>
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                            </select>
                                        </div>
                                        {/* Property Image Status */}
                                        <div className="flex flex-col">
                                            <label htmlFor="status" className="text-sm font-medium text-start text-[12px] font-[Montserrat]">Property Image Status</label>
                                            <select name="status" id="status" value={formData.status} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm" onChange={handleChange} required>
                                                <option value="" disabled selected>Select Status</option>
                                                <option value={1}>Publish</option>
                                                <option value={0}>Unpublish</option>
                                            </select>
                                        </div>
                                    </div>
                                    {/* Action Buttons */}
                                    <button type="submit" className={`py-2 mt-6 float-start bg-[#045D78] text-white rounded-lg  h-10 font-poppins font-medium ${id ? 'w-[140px]' : 'w-[120px]'}`} style={{ borderRadius: '8px' }}   >
                                        {id ? 'Update  Image' : 'Add  Image'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
                <NotificationContainer />
            </div>
        </div>
    );
};

export default ExtraImageAdd;

