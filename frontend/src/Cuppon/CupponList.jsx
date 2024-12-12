import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SidebarMenu from '../components/SideBar';
import { GoArrowDown, GoArrowUp } from 'react-icons/go';
import { useLoading } from '../Context/LoadingContext';
import { useLocation } from 'react-router-dom';
import Loader from '../common/Loader';
import { FaPen,FaTrash } from "react-icons/fa";
import { searchFunction } from '../Entity/SearchEntity';
import CupponHeader from './CupponHeader';
import { DeleteEntity } from '../utils/Delete';
import axios from 'axios';
import { handleSort } from '../utils/sorting';

const CupponList = () => {
    const [cuppons, setcuppons] = useState([]);
    const [filteredcuppons, setFilteredcuppons] = useState([]);
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; 
    const location = useLocation();
    const { isLoading, setIsLoading } = useLoading();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://localhost:5000/coupons/all", {
                    withCredentials: true,
                });
                // console.log("API Response:", response.data); 
                setcuppons(response.data);
                setFilteredcuppons(response.data); 
            } catch (error) {
                console.error("API Error:", error);
            }
        }
        fetchData();
    }, []);

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, [location, setIsLoading]);

    // Handle search
    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        const filtered = cuppons.filter((country) =>
            Object.values(country).some((value) =>
                String(value).toLowerCase().includes(query)
            )
        );
        setFilteredcuppons(filtered);
        setCurrentPage(1); 
    };

    // Handle sorting
    const sortData = (key) => {
        handleSort(filteredcuppons,key,sortConfig,setSortConfig,setFilteredcuppons)
    };

    // Pagination logic
    const indexOfLastCountry = currentPage * itemsPerPage;
    const indexOfFirstCountry = indexOfLastCountry - itemsPerPage;
    const currentcuppons = filteredcuppons.slice(indexOfFirstCountry, indexOfLastCountry);

    const totalPages = Math.ceil(filteredcuppons.length / itemsPerPage);


    // for dalete
    const handledelete=async(id)=>{
        const success=await DeleteEntity('Cuppon',id)
        if(success){
            
        }
    }

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            {isLoading && <Loader />}
            <div className="h-screen flex">
                {/* Sidebar */}
                

                <div className="flex flex-1 flex-col bg-[#f7fbff]">
                    {/* Header */}
                    <Header />
                    <CupponHeader onSearch={handleSearch} />

                    {/* Main Content */}
                    <div className="py-6 px-6 h-full w-[1000px] overflow-scroll scrollbar-none">
                        <div className="bg-white w-full rounded-xl border border-[#EAE5FF] py-4 px-3 overflow-x-auto scrollbar-none">
                            <div className="relative sm:rounded-lg">
                                <table className="min-w-full text-sm text-left text-gray-700">
                                    <thead className="bg-gray-50 text-xs uppercase font-medium text-gray-500">
                                        <tr>
                                            {['slno', 'title', 'subtitle', 'code', 'image', 'expiredDate', 'minAmount', 'discount', 'status'].map((key) => (
                                                <th key={key} className="px-4 py-3 min-w-[150px]">
                                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                                    <div className="inline-flex items-center ml-2">
                                                        <GoArrowUp
                                                            className="text-gray-500 hover:text-gray-700 cursor-pointer"
                                                            onClick={() => sortData(key)}
                                                        />
                                                        <GoArrowDown
                                                            className="text-gray-500 hover:text-gray-700 cursor-pointer"
                                                            onClick={() => sortData(key)}
                                                        />
                                                    </div>
                                                </th>
                                            ))}
                                            <th className="px-4 py-3 min-w-[150px]">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">

                                        {currentcuppons.length > 0 ? (
                                            currentcuppons.map((country, index) => (
                                                <tr key={country.id}>
                                                    <td className="px-4 py-3">{index + 1 + indexOfFirstCountry}</td>
                                                    <td className="px-4 py-3">{country.ctitle}</td>
                                                    <td className="px-4 py-3">{country.subtitle}</td>
                                                    <td className="px-4 py-3">{country.c_title}</td>
                                                    <td className="px-4 py-3">
                                                        {country.c_img ? (
                                                            <img
                                                                src={country.c_img}
                                                                className="w-16 h-16 object-cover rounded-full"
                                                                alt="Coupon"
                                                                onError={(e) => {
                                                                    e.target.src =
                                                                        'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg';
                                                                }}
                                                            />
                                                        ) : (
                                                            <img
                                                                src="https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
                                                                className="w-16 h-16 object-cover rounded-full"
                                                                alt="Placeholder"
                                                            />
                                                        )}
                                                    </td>
                                                    <td className="px-4 py-3">{country.cdate}</td>
                                                    <td className="px-4 py-3">{country.min_amt}</td>
                                                    <td className="px-4 py-3">{country.c_value}</td>
                                                    <td className="px-4 py-3">
                                                        <span
                                                            className={`px-3 py-1 text-sm rounded-full ${
                                                                country.status === 1 ? 'bg-green-500 text-white' : 'bg-gray-400 text-white'
                                                            }`}
                                                        >
                                                            {country.status === 1 ? "publish":"unpublish"}
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3">
                                                        <button className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition">
                                                            <FaPen />
                                                        </button>
                                                        <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
                                                        <FaTrash />
                                                    </button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="10" className="text-center">
                                                    No data available

                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="bottom-0 left-0 w-full bg-[#f7fbff] py-4 flex justify-between items-center">
                            <span className="text-sm font-normal text-gray-500">
                                Showing <span className="font-semibold text-gray-900">{indexOfFirstCountry + 1}</span> to{' '}
                                <span className="font-semibold text-gray-900">{Math.min(indexOfLastCountry, filteredcuppons.length)}</span> of{' '}
                                <span className="font-semibold text-gray-900">{filteredcuppons.length}</span>
                            </span>
                            <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                                <li>
                                    <button
                                        onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                                        className="previous-button"
                                        disabled={currentPage === 1}
                                    >
                                        Previous
                                    </button>
                                </li>
                                <li>
                                    <span className="current-page">
                                        Page {currentPage} of {totalPages}
                                    </span>
                                </li>
                                <li>
                                    <button
                                        onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
                                        className="next-button"
                                        disabled={currentPage === totalPages}
                                    >
                                        Next
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

export default CupponList;
