import React, { useEffect, useState } from 'react';
import Loader from '../common/Loader';
import Header from '../components/Header';
import axios from 'axios';
import SidebarMenu from '../components/SideBar';
import ImageUploader from '../common/ImageUploader';

const ExtraImageAdd = () => {
    const [properties, setProperties] = useState([]);
    const [formData, setFormData] = useState({
        pid: '',
        status: '',
        img: ""
    });
    const [selectedPropertyTitle, setSelectedPropertyTitle] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await axios.get('http://localhost:5000/properties', {
                    withCredentials: true,
                });
                setProperties(response.data);
            } catch (error) {
                console.error('Error fetching properties:', error.response ? error.response.data : error.message);
            }
        };

        fetchProperties();
    }, []);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'pid') {
            const selectedProperty = properties.find(property => property.id === parseInt(value));
            setSelectedPropertyTitle(selectedProperty ? selectedProperty.title : '');
        }

        if (files) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: files[0]
            }));
        } else {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: value
            }));
        }
    };

    const handleImageUploadSuccess = (imageUrl) => {
        setFormData((prevData) => ({
            ...prevData,
            img: imageUrl,
        }));
    };

    console.log(formData);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const submitData = new FormData();
            submitData.append('pid', formData.pid);
            submitData.append('status', formData.status);
            submitData.append('img', formData.img);

            const response = await axios.post('http://localhost:5000/extra/upsert', submitData, {
                withCredentials: true,
            });
            console.log('Extra image added successfully:', response.data);
            alert('Extra image added successfully!'); // Alert message
        } catch (error) {
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
                            <h2 className="text-lg font-semibold ml-4" style={{ color: '#000000', fontSize: '24px', fontFamily: 'Montserrat' }}>Extra Image Management</h2>
                        </div>
                        <div className="h-full px-6 max-w-5xl" style={{ paddingTop: '24px' }}>
                            <div className="bg-white h-[70vh] w-full rounded-xl border border-[#EAE5FF] py-4 px-6 overflow-y-auto">
                                <form className="mt-4" onSubmit={handleSubmit}>
                                    <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-1 mt-6">
                                        {/* Select Property */}
                                        <div className="flex flex-col">
                                            <label htmlFor="pid" className="text-sm font-medium text-start text-[12px] font-[Montserrat]">Select Property</label>
                                            <select name="pid" id="pid" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm" onChange={handleChange} required>
                                                <option value="" disabled selected>Select Property</option>
                                                {properties.map((property) => (
                                                    <option key={property.id} value={property.id}>{property.title}</option>
                                                ))}
                                            </select>
                                            {selectedPropertyTitle && (
                                                <p className="mt-2 text-sm text-gray-600">Selected Property: {selectedPropertyTitle}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-1 mt-6">
                                        {/* Property Image */}
                                        <div className="flex flex-col">
                                            <label htmlFor="img" className="text-sm font-medium text-start text-[12px] font-[Montserrat]">Property Image</label>
                                            <ImageUploader onUploadSuccess={handleImageUploadSuccess} />
                                        </div>
                                    </div>
                                    <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-1 mt-6">
                                        {/* Yes/No image*/}
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
                                            <select name="status" id="status" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm" onChange={handleChange} required>
                                                <option value="" disabled selected>Select Status</option>
                                                <option value={1}>Publish</option>
                                                <option value={0}>Unpublish</option>
                                            </select>
                                        </div>
                                    </div>
                                    {/* Action Buttons */}
                                    <div className="flex justify-start mt-6 gap-3">
                                        <button type="submit" className="py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-[150px] h-12 font-[Montserrat] font-bold" style={{ borderRadius: "8px" }}>Add Extra Image</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ExtraImageAdd;

