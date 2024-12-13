import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SidebarMenu from '../components/SideBar';
import { GoArrowDown, GoArrowUp } from 'react-icons/go';
import { FaPen,FaTrash } from "react-icons/fa";
import { searchFunction } from '../Entity/SearchEntity';
import axios from 'axios';
import PackageHeader from './PackageHeader';
import { useNavigate } from 'react-router-dom';
import { DeleteEntity } from '../utils/Delete';

const PackageList = () => {
    const navigate=useNavigate();
    const [packages, setpackages] = useState([]);
    const [filteredpackages, setFilteredpackages] = useState([]);
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const response = await axios.get("http://localhost:5000/packages/all");
                setpackages(response.data);
                setFilteredpackages(response.data); 
            } catch (error) {
                console.error("Error fetching countries:", error);
            }
        };
        fetchPackages();
    }, []);     

    const handleSearch = (event) => {
        searchFunction(event, packages, setFilteredpackages);
        setCurrentPage(1);
    };

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }

        const sortedData = [...filteredpackages].sort((a, b) => {
            if (key === 'slno') {
                return direction === 'asc' ? a.id - b.id : b.id - a.id;
            } else if (key === 'totalProperties') {
                return direction === 'asc' ? a.totalProperties - b.totalProperties : b.totalProperties - a.totalProperties;
            }
            return a[key]?.localeCompare(b[key]) * (direction === 'asc' ? 1 : -1);
        });

        setFilteredpackages(sortedData);
        setSortConfig({ key, direction });
        setCurrentPage(1);
    };

    const indexOfLastPackage = currentPage * itemsPerPage;
    const indexOfFirstPackage = indexOfLastPackage - itemsPerPage;
    const currentpackages = filteredpackages.slice(indexOfFirstPackage, indexOfLastPackage);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const totalPages = Math.ceil(filteredpackages.length / itemsPerPage);

    // for update
    const updatePackage=(id)=>{
        navigate('/create-package',{state:{id:id}})
    }

    // for delete
    const handledelete = async (id) => {
        const success = await DeleteEntity("Package", id);
        if (success) {
            const updatedPackage = packages.filter((packages) => packages.id !== id);
            setpackages(updatedPackage);
            setFilteredpackages(updatedPackage);
        }
    };
    return (
        <div>
            <div className="h-screen flex">
                
                <div className="flex flex-1 flex-col bg-[#f7fbff]">
                    <Header />
                    <PackageHeader onSearch={handleSearch} />
                    <div className="py-6 px-6 h-full w-[1000px] overflow-scroll scrollbar-none">
                        <div className="bg-white w-full rounded-xl border border-[#EAE5FF] py-4 px-3 overflow-x-auto scrollbar-none">
                            <div className="relative sm:rounded-lg">
                                <table className="min-w-full text-sm text-left text-gray-700">
                                    <thead className="bg-gray-50 text-xs uppercase font-medium text-gray-500">
                                        <tr>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                Sr. No
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className='cursor-pointer' onClick={() => handleSort('slno')} />
                                                    <GoArrowDown className='cursor-pointer' onClick={() => handleSort('slno')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[250px]">
                                                Package Title 
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className='cursor-pointer' onClick={() => handleSort('title')} />
                                                    <GoArrowDown className='cursor-pointer' onClick={() => handleSort('title')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[250px]">
                                              Package Image
                                              <div className="inline-flex items-center ml-2">
                                                  <GoArrowUp className='cursor-pointer' onClick={() => handleSort('image')} />
                                                  <GoArrowDown className='cursor-pointer' onClick={() => handleSort('image')} />
                                              </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[250px]">
                                              Package Day
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className='cursor-pointer' onClick={() => handleSort('day')} />
                                                    <GoArrowDown className='cursor-pointer' onClick={() => handleSort('day')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[250px]">
                                              Package Price
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className='cursor-pointer' onClick={() => handleSort('price')} />
                                                    <GoArrowDown className='cursor-pointer' onClick={() => handleSort('price')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[250px]">
                                              Package Status
                                              <div className="inline-flex items-center ml-2">
                                                  <GoArrowUp className='cursor-pointer' onClick={() => handleSort('status')} />
                                                  <GoArrowDown className='cursor-pointer' onClick={() => handleSort('status')} />
                                              </div>
                                              </th>
                                            <th className="px-4 py-3 min-w-[250px]">
                                              Action
                                              <div className="inline-flex items-center ml-2">
                                                  <GoArrowUp className='cursor-pointer' onClick={() => handleSort('action')} />
                                                  <GoArrowDown className='cursor-pointer' onClick={() => handleSort('action')} />
                                              </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {currentpackages.map((Package, index) => (
                                            <tr key={Package.id}>
                                                <td className="px-4 py-3">{index + 1 + indexOfFirstPackage}</td>
                                                <td className="px-4 py-3">{Package?.title || "N/A"}</td>
                                                <td className="px-4 py-3">
                                                    <img
                                                        src={Package.img || 'fallback-image.jpg'}
                                                        alt={Package.title || "N/A"}
                                                        className="w-16 h-16 object-cover rounded-full"
                                                        onError={(e) => (e.target.src = 'fallback-image.jpg')}
                                                    />
                                                </td>
                                                <td className="px-4 py-3">{Package?.day || 1}</td>
                                                <td className="px-4 py-3">{Package?.price || 0}</td>
                                                <td className="px-4 py-3">
                                                    <span
                                                        className={`px-3 py-1 text-sm rounded-full ${Package.status === 1 ? 'bg-green-500 text-white' : 'bg-gray-400 text-white'}`}
                                                    >
                                                        {Package.status === 1 ? "publish" : "unpublish"}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <button className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition mr-2" onClick={()=>{updatePackage(Package.id)}}>
                                                        <FaPen />
                                                    </button>
                                                    <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition" onClick={()=>{handledelete(Package.id)}}>
                                                        <FaTrash />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="bottom-0 left-0 w-full bg-[#f7fbff] py-4 flex justify-between items-center">
                            <span className="text-sm font-normal text-gray-500">
                                Showing <span className="font-semibold text-gray-900">{indexOfFirstPackage + 1}</span> to{" "}
                                <span className="font-semibold text-gray-900">{Math.min(indexOfLastPackage, filteredpackages.length)}</span> of{" "}
                                <span className="font-semibold text-gray-900">{filteredpackages.length}</span>
                            </span>
                            <ul className="inline-flex -space-x-px text-sm h-8">
                                <li>
                                    <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                                        Previous
                                    </button>
                                </li>
                                <li>
                                    <span>Page {currentPage} of {totalPages}</span>
                                </li>
                                <li>
                                    <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
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

export default PackageList;