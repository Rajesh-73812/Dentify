import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import { GoArrowDown, GoArrowUp } from 'react-icons/go';
import axios from 'axios';
import PendingBookHeader from './PendingBookHeader';
import 'jspdf-autotable';
import { useNavigate } from 'react-router-dom';
import OrderPreviewModal from './OrderPreviewModal';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { handleSort } from '../utils/sorting'
import api from '../utils/api';

const PendingBook = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [pending, setpending] = useState([]);
    const [filteredpending, setFilteredpending] = useState([]);
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const status = 'Booked'

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await api.get(`/bookings/status/${status}`,);
                // console.log(response.data)
                setpending(response.data);
                setFilteredpending(response.data);
            } catch (error) {
                console.error('Error fetching bookings:', error.message);
            }
        };
        fetchBookings();
    }, []);
    // console.log(pending)
    const handleSearch = (event) => {

    };

    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentpending = filteredpending.slice(indexOfFirst, indexOfLast);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const totalPages = Math.ceil(filteredpending.length / itemsPerPage);

    const openModal = (property) => {
        setSelectedProperty(property);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProperty(null);
    };

    const navigateApprove = async (id, newStatus) => {
        try {
            const response = await axios.put(`http://localhost:5000/bookings/status/${id}`, { status: newStatus }, { withCredentials: true });
            if (response.status === 200) {
                NotificationManager.removeAll();
                NotificationManager.success('Status updated successfully!');
                setTimeout(() => {
                    if(newStatus === 'Confirmed'){
                        navigate('/approved-book-list');
                    }else if (newStatus === 'Cancelled'){
                        navigate('/cancelled-list');
                    }

                }, 4000);
            }
        } catch (error) {
            NotificationManager.removeAll();
            console.error('Error updating status:', error.response?.data || error.message);
            NotificationManager.error(error.response?.data?.error || 'Failed to update status. Please try again.');
        }
    };

    // Handle sorting
    const sortData = (key) => {
        handleSort(filteredpending, key, sortConfig, setSortConfig, setFilteredpending)
    };

    return (
        <div className="h-screen flex">

            <div className="flex-1 flex flex-col bg-[#f7fbff]">
                <Header />
                <PendingBookHeader onSearch={handleSearch} />
                <div className="py-6 px-6 h-full w-[1000px] overflow-scroll scrollbar-none">
                    <div className={`bg-white w-full rounded-xl border border-[#EAE5FF] py-4 px-3 overflow-x-auto table-container scrollbar-thin ${filteredpending.length > 0 ? 'h-[500px]' : ''}`}>
                        <div className="relative sm:rounded-lg overflow-y-auto overflow-x-auto max-h-[400px]  scrollbar-none table-scroll ">
                            <table className="min-w-full text-sm text-left text-gray-700 ">
                            <thead className="bg-[#045D78] bg-opacity-75 text-xs uppercase font-medium text-white">
                                    <tr>
                                        <th className="px-4 py-3 min-w-[130px]">
                                            Sr. No
                                            <div className="inline-flex items-center ml-2">
                                                <GoArrowUp className='cursor-pointer' onClick={() => sortData('id')} />
                                                <GoArrowDown className='cursor-pointer' onClick={() => sortData('id')} />
                                            </div>
                                        </th>
                                        <th className="px-4 py-3 min-w-[180px]">
                                            Property Title
                                            <div className="inline-flex items-center ml-2">
                                                <GoArrowUp className='cursor-pointer' onClick={() => sortData('prop_title')} />
                                                <GoArrowDown className='cursor-pointer' onClick={() => sortData('prop_title')} />
                                            </div>
                                        </th>
                                        <th className="px-4 py-3 min-w-[180px]">  Property Image </th>
                                        <th className="px-4 py-3 min-w-[180px]">
                                            Property Price
                                            <div className="inline-flex items-center ml-2">
                                                <GoArrowUp className='cursor-pointer' onClick={() => sortData('prop_price')} />
                                                <GoArrowDown className='cursor-pointer' onClick={() => sortData('prop_price')} />
                                            </div>
                                        </th>
                                        <th className="px-4 py-3 min-w-[250px]">
                                            Property Total Day
                                            <div className="inline-flex items-center ml-2">
                                                <GoArrowUp className='cursor-pointer' onClick={() => sortData('total_day')} />
                                                <GoArrowDown className='cursor-pointer' onClick={() => sortData('total_day')} />
                                            </div>
                                        </th>

                                        <th className="px-4 py-3 min-w-[350px]">  Action </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {currentpending.length > 0 ? (
                                        currentpending.map((pendingList, index) => (
                                            <tr key={index + 1} className=''>
                                                <td className=" text-center py-1">{index + 1 + indexOfFirst}</td>
                                                <td className=" text-center py-1">{pendingList?.prop_title || 'N/A'}</td>
                                                <td className="px-4  py-1 flex justify-center">
                                                    {pendingList.prop_img ? (
                                                        <img src={pendingList.prop_img} className="w-10 h-10 object-cover rounded-full" alt="Pending"
                                                            onError={(e) => {
                                                                e.target.src = 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg';
                                                            }}
                                                        />
                                                    ) : (
                                                        <img src="https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg" className="w-16 h-16 object-cover rounded-full" alt="Placeholder" />
                                                    )}
                                                </td>
                                                <td className="text-center py-1">{pendingList?.prop_price || 'N/A'}</td>
                                                <td className=" text-center py-1">{pendingList?.total_day || 'N/A'}</td>
                                                <td className="text-center py-1 ">
                                                    <NotificationContainer />

                                                    <span className='px-2 py-1 font-medium text-[12px] rounded-full bg-[#2dce89] cursor-pointer text-white mr-2' onClick={() => openModal(pendingList,pendingList.id)}>View Details</span>
                                                    <span className='px-2 py-1 font-medium text-[12px] rounded-full bg-cyan-400 cursor-pointer text-white mr-2' onClick={() => { navigateApprove(pendingList.id, 'Confirmed') }}>Confirmed</span>
                                                    <span className='px-2 py-1 font-medium text-[12px] rounded-full bg-[#f5365c] cursor-pointer text-white mr-2' onClick={() => { navigateApprove(pendingList.id, 'Cancelled') }}>Cancelled</span>

                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td className="px-4 py-3 text-center" colSpan="6">
                                                No data available
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="bottom-0 left-0 w-full bg-[#f7fbff] py-2 flex justify-between items-center">
                        <span className="text-sm font-normal text-gray-500">
                            Showing <span className="font-semibold text-gray-900">{indexOfFirst + 1}</span> to <span className="font-semibold text-gray-900">{Math.min(indexOfLast, filteredpending.length)}</span> of <span className="font-semibold text-gray-900">{filteredpending.length}</span>
                        </span>
                        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                            <li>
                                <button
                                    onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                                    className={`previous-button ${filteredpending.length === 0 ? 'cursor-not-allowed' : ''}`}
                                    disabled={currentPage === 1 || filteredpending.length === 0}
                                    title={filteredpending.length === 0 ? 'No data available' : ''}
                                >
                                    <img src="/image/action/Left Arrow.svg" alt="Left" /> Previous
                                </button>
                            </li>
                            <li>
                                <span className="current-page">
                                    Page {filteredpending.length > 0 ? currentPage : 0} of {filteredpending.length > 0 ? totalPages : 0}
                                </span>
                            </li>
                            <li>
                                <button style={{background:'#045D78'}}
                                    onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
                                    className={`next-button ${filteredpending.length === 0 ? 'cursor-not-allowed button-disable' : ''}`}
                                    disabled={currentPage === totalPages || filteredpending.length === 0}
                                    title={filteredpending.length === 0 ? 'No data available' : ''}
                                >
                                    Next <img src="/image/action/Right Arrow (1).svg" alt="Right" />
                                </button>
                            </li>
                        </ul>
                    </div>
                    <OrderPreviewModal isOpen={isModalOpen} closeModal={closeModal} selectedProperty={selectedProperty} />

                </div>
            </div>

        </div>
    );
};

export default PendingBook;
