import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import SidebarMenu from '../components/SideBar';
import { GoArrowDown, GoArrowUp } from 'react-icons/go';
import { FaPen } from "react-icons/fa";
import { searchFunction } from '../Entity/SearchEntity';
import axios from 'axios';
import PendingBookHeader from './PendingBookHeader';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import html2canvas from 'html2canvas';
import { useNavigate } from 'react-router-dom';
import OrderPreviewModal from './OrderPreviewModal';

const PendingBook = () => {
    const navigate=useNavigate();
    const modalRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [countries, setCountries] = useState([
        { id: 1, title: 'Property 1', img: 'https://via.placeholder.com/150', price: '20000', day: 5 },
        { id: 2, title: 'Property 2', img: 'https://via.placeholder.com/150', price: '34000', day: 3 },
        { id: 3, title: 'Property 3', img: 'https://via.placeholder.com/150', price: '20000', day: 8 },
        { id: 4, title: 'Property 4', img: 'https://via.placeholder.com/150', price: '34000', day: 2 },
        { id: 5, title: 'Property 5', img: 'https://via.placeholder.com/150', price: '20000', day: 10 },
        { id: 6, title: 'Property 6', img: 'https://via.placeholder.com/150', price: '34000', day: 1 },
        { id: 7, title: 'Property 7', img: 'https://via.placeholder.com/150', price: '20000', day: 4 },
        { id: 8, title: 'Property 8', img: 'https://via.placeholder.com/150', price: '34000', day: 6 },
        { id: 9, title: 'Property 9', img: 'https://via.placeholder.com/150', price: '20000', day: 7 },
        { id: 10, title: 'Property 10', img: 'https://via.placeholder.com/150', price: '34000', day: 9 },
        { id: 11, title: 'Property 11', img: 'https://via.placeholder.com/150', price: '20000', day: 12 },
        { id: 12, title: 'Property 12', img: 'https://via.placeholder.com/150', price: '34000', day: 0 },
    ]);
    const [filteredCountries, setFilteredCountries] = useState(countries);
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const handleSearch = (event) => {
        searchFunction(event, countries, setFilteredCountries);
        setCurrentPage(1);
    };

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }

        const sortedData = [...filteredCountries].sort((a, b) => {
            if (key === 'slno') {
                return direction === 'asc' ? a.id - b.id : b.id - a.id;
            } else if (key === 'totalProperties') {
                return direction === 'asc' ? a.totalProperties - b.totalProperties : b.totalProperties - a.totalProperties;
            }
            return a[key]?.localeCompare(b[key]) * (direction === 'asc' ? 1 : -1);
        });

        setFilteredCountries(sortedData);
        setSortConfig({ key, direction });
        setCurrentPage(1);
    };

    const indexOfLastCountry = currentPage * itemsPerPage;
    const indexOfFirstCountry = indexOfLastCountry - itemsPerPage;
    const currentCountries = filteredCountries.slice(indexOfFirstCountry, indexOfLastCountry);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);

    const openModal = (property) => {
        setSelectedProperty(property);
        setIsModalOpen(true);
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProperty(null);
    };

    const openModal2 = (property) => {
        setSelectedProperty(property);
        setIsModalOpen2(true);
    };
    
    const closeModal2 = () => {
        setIsModalOpen2(false);
        setSelectedProperty(null);
    };

    // pdf download
    const PdfFormat = () => {
        const doc = new jsPDF();
    
        doc.setFontSize(20);
        doc.text("InVoice", 14, 22);
        doc.setFontSize(12);
        doc.text("Generated on: " + new Date().toLocaleDateString(), 14, 30);
    
        doc.setLineWidth(0.5);
        doc.line(10, 35, 200, 35); 

        doc.setFontSize(14);
        doc.text("Order Details", 14, 45);
        doc.setFontSize(12);
        doc.text(`Order No: #5`, 14, 55);
        doc.text(`Order Date: 25-11-2024`, 14, 65);
        doc.text(`Mobile Number: +916305836115`, 14, 75);
        doc.text(`Customer Name: Mega Star`, 14, 85);
    
        doc.line(10, 90, 200, 90); // Horizontal line
    
        doc.setFontSize(14);
        doc.text("Total Order", 14, 100);
        const totalOrderData = [
            ["Description", "Amount"],
            ["Subtotal", "30,000 ₹"],
            ["Total Day", "3 Days"],
            ["Tax", "1,500 ₹"],
            ["Net Amount (Paid)", "0 ₹"],
        ];
    
        const startY = 110;
        const rowHeight = 10;
        totalOrderData.forEach((row, index) => {
            doc.text(row[0], 14, startY + index * rowHeight);
            doc.text(row[1], 160, startY + index * rowHeight, { align: "right" });
        });
    
        doc.line(10, startY + totalOrderData.length * rowHeight + 5, 200, startY + totalOrderData.length * rowHeight + 5); // Horizontal line
    
        doc.setFontSize(14);
        doc.text("Payment & Property Details", 14, startY + totalOrderData.length * rowHeight + 15);
        const paymentDetailsData = [
            ["Description", "Amount"],
            ["Payment Gateway", "30,000 ₹"],
            ["Property Title", "3 Days"],
            ["Property Image", "1,500 ₹"],
            ["Property Check In Date", "0 ₹"],
            ["Property Check Out Date", "0 ₹"],
        ];
    
        const paymentStartY = startY + totalOrderData.length * rowHeight + 25;
        paymentDetailsData.forEach((row, index) => {
            doc.text(row[0], 14, paymentStartY + index * rowHeight);
            doc.text(row[1], 160, paymentStartY + index * rowHeight, { align: "right" });
        });
    
        doc.setFontSize(14);
        doc.text("Property Address", 14, paymentStartY + paymentDetailsData.length * rowHeight + 15);
        doc.setFontSize(12);
        doc.text("Lingampalli, Hyderabad, Telangana", 14, paymentStartY + paymentDetailsData.length * rowHeight + 25);
        doc.text("Booking Owner Name: Mega Star", 14, paymentStartY + paymentDetailsData.length * rowHeight + 35);
        doc.text("Booking Owner Mobile: +916305836115", 14, paymentStartY + paymentDetailsData.length * rowHeight + 45);
        doc.text("Transaction Id: #AD9DEND070", 14, paymentStartY + paymentDetailsData.length * rowHeight + 55);
        doc.text("Booking Status: Booked", 14, paymentStartY + paymentDetailsData.length * rowHeight + 65);
    
        doc.save("order_preview.pdf");
    };

    const downloadModalAsImage = () => {
        // if (modalRef.current) {
        //     html2canvas(modalRef.current, {
        //         scrollX: -window.scrollX,
        //         scrollY: -window.scrollY,
        //         useCORS: true,
        //     }).then((canvas) => {
        //         const link = document.createElement('a');
        //         link.href = canvas.toDataURL('image/png');
        //         link.download = 'modal_image.png';
        //         link.click();
        //     }).catch((err) => {
        //         console.error('Error rendering canvas:', err);
        //     });
        // } else {
        //     alert('Modal reference not found');
        // }
    };

    const navigateApprove=()=>{
        navigate('/approved-book-list');
    }
    return (
        <div>
            <div className="h-screen flex">
                <SidebarMenu />
                <div className="flex flex-1 flex-col bg-[#f7fbff]">
                    <Header />
                    <PendingBookHeader onSearch={handleSearch} />
                    <div className="py-6 px-6 h-full w-[1000px] overflow-scroll scrollbar-none">
                        <div className="bg-white w-full rounded-xl border border-[#EAE5FF] py-4 px-3 overflow-x-auto scrollbar-none">
                            <div className="relative sm:rounded-lg">
                                <table className="min-w-full text-sm text-left text-gray-700">
                                    <thead className="bg-gray-50 text-xs uppercase font-medium text-gray-500">
                                        <tr>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                Sr. No
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp onClick={() => handleSort('slno')} />
                                                    <GoArrowDown onClick={() => handleSort('slno')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[250px]">
                                                Property Title 
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp onClick={() => handleSort('title')} />
                                                    <GoArrowDown onClick={() => handleSort('title')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[250px]">
                                                Property Image
                                              <div className="inline-flex items-center ml-2">
                                                  <GoArrowUp onClick={() => handleSort('image')} />
                                                  <GoArrowDown onClick={() => handleSort('image')} />
                                              </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[250px]">
                                                Property Price
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp onClick={() => handleSort('day')} />
                                                    <GoArrowDown onClick={() => handleSort('day')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[250px]">
                                              Property Total Day
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp onClick={() => handleSort('price')} />
                                                    <GoArrowDown onClick={() => handleSort('price')} />
                                                </div>
                                            </th>
                                            
                                            <th className="px-4 py-3 min-w-[350px]">
                                              Action
                                              <div className="inline-flex items-center ml-2">
                                                  <GoArrowUp onClick={() => handleSort('action')} />
                                                  <GoArrowDown onClick={() => handleSort('action')} />
                                              </div>
                                              
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {currentCountries.map((country, index) => (
                                            <tr key={country.id}>
                                                <td className="px-4 py-3">{index + 1 + indexOfFirstCountry}</td>
                                                <td className="px-4 py-3">{country?.title || "N/A"}</td>
                                                <td className="px-4 py-3">
                                                    <img
                                                        src={country.img || 'fallback-image.jpg'}
                                                        alt={country.title || "N/A"}
                                                        className="w-16 h-16 object-cover rounded-full"
                                                        onError={(e) => (e.target.src = 'fallback-image.jpg')}
                                                    />
                                                </td>

                                                <td className="px-4 py-3">{country.price}</td>
                                                <td className="px-4 py-3"> {country.day}</td>
                                                <td className="px-4 py-3">
                                                    <span className='px-3 py-1 text-sm rounded-full bg-green-400 cursor-pointer text-white mr-2' onClick={() => openModal(country)}>View Details</span>
                                                    <span className=' px-3 py-1 text-sm rounded-full bg-cyan-400 cursor-pointer text-white mr-2' onClick={navigateApprove}>Confirmed</span>
                                                    <span className='px-3 py-1 text-sm rounded-full bg-red-400 cursor-pointer text-white mr-2' onClick={openModal2}>Cancelled</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                        <div className="bottom-0 left-0 w-full bg-[#f7fbff] py-4 flex justify-between items-center">
                            <span className="text-sm font-normal text-gray-500">
                                Showing <span className="font-semibold text-gray-900">{indexOfFirstCountry + 1}</span> to{" "}
                                <span className="font-semibold text-gray-900">{Math.min(indexOfLastCountry, filteredCountries.length)}</span> of{" "}
                                <span className="font-semibold text-gray-900">{filteredCountries.length}</span>
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

                        {/* modal */}
                        <OrderPreviewModal  isOpen={isModalOpen}  closeModal={closeModal}  downloadModalAsImage={downloadModalAsImage}    PdfFormat={PdfFormat}  />

                        {/* cancel  */}
                        {isModalOpen2 && (
                            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                                <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>
                                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
                                            <div className="bg-white px-6 py-4">
                                                <h2 className="text-lg font-semibold text-gray-900" id="modal-title">Why Cancel?</h2>
                                                <button
                                                    type="button"
                                                    onClick={closeModal2}
                                                    className="absolute top-4 right-4 text-red-500 hover:text-red-700"
                                                    aria-label="Close"
                                                    title='Close'
                                                >
                                                    &times; 
                                                </button>
                                                <form onSubmit={(e) => { e.preventDefault();  }}>
                                                    <div className="mb-4">
                                                        <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Enter Reason:</label>
                                                        <input
                                                            type="text"
                                                            id="reason"
                                                            name="reason"
                                                            placeholder="Type your reason here"
                                                            className="mt-3 block w-full rounded-md  shadow-sm "
                                                            
                                                        />
                                                    </div>
                                                    <div className="flex ">
                                                        <button
                                                            type="submit"
                                                            className=" rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
                                                        >
                                                            Submit
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                                <button
                                                    type="button"
                                                    onClick={closeModal2}
                                                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                                >
                                                    Close
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PendingBook;