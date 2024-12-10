import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SidebarMenu from '../components/SideBar';
import { GoArrowDown, GoArrowUp } from 'react-icons/go';
import { FaPen,FaTrash } from "react-icons/fa";
import { searchFunction } from '../Entity/SearchEntity';
import axios from 'axios';
import FaqHeader from './FaqHeader';
import { useNavigate } from 'react-router-dom';
import { DeleteEntity } from '../utils/Delete';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const FaqList = () => {
    const navigate=useNavigate();
    const [faq, setfaq] = useState([]);
    const [filteredfaq, setFilteredfaq] = useState([]);
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        const fetchfaq = async () => {
            try {
                const response = await axios.get("http://localhost:5000/faq/all");
                console.log(response.data)
                setfaq(response.data);
                setFilteredfaq(response.data); 
            } catch (error) {
                console.error("Error fetching faq:", error);
            }
        };
        fetchfaq();
    }, []);

    const handleSearch = (event) => {
        searchFunction(event, faq, setFilteredfaq);
        setCurrentPage(1);
    };

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }

        const sortedData = [...filteredfaq].sort((a, b) => {
            if (key === 'slno') {
                return direction === 'asc' ? a.id - b.id : b.id - a.id;
            }
            return a[key]?.localeCompare(b[key]) * (direction === 'asc' ? 1 : -1);
        });

        setFilteredfaq(sortedData);
        setSortConfig({ key, direction });
        setCurrentPage(1);
    };

    const indexOfLastFaq = currentPage * itemsPerPage;
    const indexOfFirstFaq = indexOfLastFaq - itemsPerPage;
    const currentfaq = filteredfaq.slice(indexOfFirstFaq, indexOfLastFaq);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const totalPages = Math.ceil(filteredfaq.length / itemsPerPage);

    // for update
    const updateFAQ=(id)=>{
        navigate('/create-faq',{state:{id:id}})
    }

    // for delete
      const handledelete = async (id) => {
        DeleteEntity("Faq", id);
        const updatedFaq = faq.filter((item) => item.id !== id);
        setfaq(updatedFaq);
        setFilteredfaq(updatedFaq);
     };
    return (
        <div>
            <div className="h-screen flex">
                <SidebarMenu />
                <div className="flex flex-1 flex-col bg-[#f7fbff]">
                    <Header />
                    <FaqHeader onSearch={handleSearch} />
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
                                                Faq Question
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className='cursor-pointer' onClick={() => handleSort('question')} />
                                                    <GoArrowDown className='cursor-pointer' onClick={() => handleSort('question')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[250px]">
                                                Faq Answer
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className='cursor-pointer' onClick={() => handleSort('answer')} />
                                                    <GoArrowDown className='cursor-pointer' onClick={() => handleSort('answer')} />
                                                </div>
                                            </th>                                            
                                            <th className="px-4 py-3 min-w-[250px]">
                                              Status
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
                                        {currentfaq.map((faq, index) => (
                                            <tr key={faq.id}>
                                                <td className="px-4 py-3">{index + 1 + indexOfFirstFaq}</td>
                                                <td className="px-4 py-3">{faq?.question || "N/A"}</td>
                                                
                                                <td className="px-4 py-3">{faq?.answer || "N/A"}</td>
                                                <td className="px-4 py-3">
                                                    <span
                                                        className={`px-3 py-1 text-sm rounded-full ${faq.status === 1 ? 'bg-green-500 text-white' : 'bg-gray-400 text-white'}`}
                                                    >
                                                        {faq.status === 1 ? "publish" : "unpublish"}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <button className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition mr-2" onClick={()=>{updateFAQ(faq.id)}}>
                                                        <FaPen />
                                                    </button>
                                                    <NotificationContainer />
                                                    <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition" onClick={()=>{handledelete(faq.id)}}>
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
                                Showing <span className="font-semibold text-gray-900">{indexOfFirstFaq + 1}</span> to{" "}
                                <span className="font-semibold text-gray-900">{Math.min(indexOfLastFaq, filteredfaq.length)}</span> of{" "}
                                <span className="font-semibold text-gray-900">{filteredfaq.length}</span>
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

export default FaqList;
