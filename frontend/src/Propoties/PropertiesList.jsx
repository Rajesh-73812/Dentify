import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { GoArrowDown, GoArrowUp } from 'react-icons/go';
import { FaPen, FaTrash } from "react-icons/fa";
import PropotiesHeader from './PropotiesHeader';
import axios from 'axios';
import { handleSort } from '../utils/sorting';
import { DeleteEntity } from '../utils/Delete';

const PropotiesList = () => {
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await axios.get('http://localhost:5000/properties', {
                    withCredentials: true,
                });
                console.log(response.data);
                setProperties(response.data);
                setFilteredProperties(response.data);
            } catch (error) {
                console.error('Error fetching properties:', error.response ? error.response.data : error.message);
            }
        };
        fetchProperties();
    }, []);

    // Search functionality
    const handleSearch = (event) => {
    };

    // Sorting functionality
    const sortData = (key) => {
        handleSort(filteredProperties,key,sortConfig,setSortConfig,setFilteredProperties)
    };

    // Pagination calculations
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProperties = filteredProperties.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // for delete
    const handledelete=async(id)=>{
        const success=await DeleteEntity('Propoties',id);
        if(success){
            const updatedPropoties=properties.filter((properties)=> properties.id !==id);
            setProperties(updatedPropoties)
            setFilteredProperties(updatedPropoties)
        }
    }
    return (
        <div>
            <div className="h-screen flex">
                {/* Sidebar */}

                <div className="flex flex-1 flex-col bg-[#f7fbff]">
                    {/* Header */}
                    <Header />
                    {/* Searching, sorting, and main content area */}
                    <PropotiesHeader onSearch={handleSearch} />
                    {/* Card */}
                    <div className="py-6 px-6 h-full w-[1000px] overflow-scroll scrollbar-none">
                        <div className="bg-white w-full rounded-xl border border-[#EAE5FF] py-4 px-3 overflow-x-auto scrollbar-none">
                            <div className="relative sm:rounded-lg">
                                <table className="min-w-full text-sm text-left text-gray-700">
                                    <thead className="bg-gray-50 text-xs uppercase font-medium text-gray-500">
                                        <tr>
                                            <th className="px-4 py-3 min-w-[120px]">
                                                Sr. No
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => sortData('slno')} />
                                                    <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => sortData('slno')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[200px]">
                                                property Tittle
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => sortData('propertyTittle')} />
                                                    <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => sortData('propertyTittle')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[200px]">
                                                property Type
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => sortData('propertyType')} />
                                                    <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => sortData('propertyType')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[200px]">
                                                Description
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => sortData('propertyDescription')} />
                                                    <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => sortData('propertyDescription')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[200px]">
                                                Address
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => sortData('propertyAddress')} />
                                                    <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => sortData('propertyAddress')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                City
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => sortData('city')} />
                                                    <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => sortData('city')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                Is_Sell
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => sortData('is_sell')} />
                                                    <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => sortData('is_sell')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[200px]">
                                                Factility
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => sortData('propertyFacility')} />
                                                    <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => sortData('propertyFacility')} />
                                                </div>
                                            </th>

                                            <th className="px-4 py-3 min-w-[250px]">
                                                Property Price(/Night)
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => sortData('propertyPrice')} />
                                                    <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => sortData('propertyPrice')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[180px]">
                                                Property Image
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => sortData('image')} />
                                                    <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => sortData('image')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                Mobile
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => sortData('mobile')} />
                                                    <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => sortData('mobile')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                Conutry_Id
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => sortData('country_id')} />
                                                    <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => sortData('country_id')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                Add_User_Id
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => sortData('user_id')} />
                                                    <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => sortData('user_id')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                Total Beds
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => sortData('totalBeds')} />
                                                    <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => sortData('totalBeds')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[200px]">
                                                Total BathRooms
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => sortData('totalBathrooms')} />
                                                    <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => sortData('totalBathrooms')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[180px]">
                                                total SQFT.
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => sortData('totalSQFT')} />
                                                    <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => sortData('totalSQFT')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                Rating
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => sortData('rating')} />
                                                    <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => sortData('rating')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                Status
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => sortData('status')} />
                                                    <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => sortData('status')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                Action
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => sortData('action')} />
                                                    <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => sortData('action')} />
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {currentProperties.length > 0 ? (
                                            currentProperties.map((property, index) => (
                                            <tr key={property.id}>
                                                <td className="px-4 py-3">{index + 1 + indexOfFirstItem}</td>

                                                <td className="px-4 py-3">{property.title}</td>
                                                <td className="px-4 py-3">{property.category.title}</td>
                                                <td className="px-4 py-3">{property.description}</td>
                                                <td className="px-4 py-3">{property.address}</td>
                                                <td className="px-4 py-3">{property.city}</td>
                                                <td className="px-4 py-3">{property.is_sell}</td>
                                                <td className="px-4 py-3">{property.facility}</td>
                                                <td className="px-4 py-3">₹{property.price}</td>

                                                <td className="px-4 py-3">
                                                    {property.image && property.image.trim() !== '' ? (
                                                        <img src={property.image} className="w-16 h-16 object-cover rounded-full" height={50} width={50} loading="lazy" alt="" onError={(e) => {
                                                            if (e.target.src !== 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg') {
                                                                e.target.src = 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg';
                                                            }
                                                        }} />
                                                    ) : (
                                                        <img src={'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'} height={50} width={50} loading="lazy" alt="" />
                                                    )}
                                                </td>

                                                <td className="px-4 py-3">{property.mobile}</td>
                                                <td className="px-4 py-3">{property.country}</td>
                                                <td className="px-4 py-3">{property.add_user_id}</td>
                                                <td className="px-4 py-3">{property.beds}</td>
                                                <td className="px-4 py-3">{property.bathroom}</td>
                                                <td className="px-4 py-3">{property.sqrft}</td>
                                                <td className="px-4 py-3">{property.rate}</td>

                                                <td className="px-4 py-3">
                                                    <span
                                                        className={`px-3 py-1 text-sm rounded-full ${property.status === 1 ? 'bg-green-500 text-white' : 'bg-gray-400 text-white'}`}
                                                    >
                                                        {property.status === 1 ? "publish" : "unpublish"}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <button className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition mr-2">
                                                        <FaPen />
                                                    </button>
                                                    <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition" onClick={()=>{handledelete(property.id)}}>
                                                        <FaTrash />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                        ) : (
                                            <tr>
                                                <td className="px-4 py-3" colSpan={6}>No Data available </td>
                                            </tr>
                                        )
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="bottom-0 left-0 w-full bg-[#f7fbff] py-4 flex justify-between items-center">
                            <span className="text-sm font-normal text-gray-500">
                                Showing <span className="font-semibold text-gray-900">{indexOfFirstItem + 1}</span> to <span className="font-semibold text-gray-900">{Math.min(indexOfLastItem, filteredProperties.length)}</span> of <span className="font-semibold text-gray-900">{filteredProperties.length}</span>
                            </span>
                            <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                                <li>
                                    <button onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)} className="previous-button" disabled={currentPage === 1}>
                                        <img src="/image/action/Left Arrow.svg" alt="Left" /> Previous
                                    </button>
                                </li>
                                <li>
                                    <span className="current-page">
                                        Page {currentPage} of {totalPages}
                                    </span>
                                </li>
                                <li>
                                    <button onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)} className="next-button" disabled={currentPage === totalPages}>
                                        Next <img src="/image/action/Right Arrow (1).svg" alt="Right" />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropotiesList;