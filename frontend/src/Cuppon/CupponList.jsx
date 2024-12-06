import React, { useState } from 'react';
import Header from '../components/Header';
import SidebarMenu from '../components/SideBar';
import { GoArrowDown, GoArrowUp } from 'react-icons/go';
import { FaPen,FaTrash } from "react-icons/fa";
import { searchFunction } from '../Entity/SearchEntity';
import CupponHeader from './CupponHeader';

const CupponList = () => {
    const countries = [
        { id: 1, title: 'HOLIDAY30',subtitle: 'Free for U',code:'9Q9VBCOZ',code:'9Q9VBCOZ', image: 'path/to/image1.jpg', expiredDate:'25-12-24',minAmount:'5000',discount:'2300', status: 'publish' },
        { id: 2, title: 'FREESERVICE',subtitle: 'Free for U',code:'9Q9VBCOZ', image: 'path/to/image2.jpg',expiredDate:'25-12-24',minAmount:'5000',discount:'2300' , status: 'publish' },
        { id: 3, title: 'LASTMINUTE25',subtitle: 'Free for U',code:'9Q9VBCOZ', image: 'path/to/image3.jpg',expiredDate:'25-12-24',minAmount:'5000',discount:'2300', status: 'unpublish' },
        { id: 4, title: 'LONGTERM10',subtitle: 'enjoy holiday',code:'9Q9VBCOZ', image: 'path/to/image4.jpg',expiredDate:'25-12-24',minAmount:'5000',discount:'2300' , status: 'publish' },
        { id: 5, title: 'WEEKENDGETAWAY',subtitle: 'enjoy your weekend',code:'9Q9VBCOZ', image: 'path/to/image5.jpg',expiredDate:'25-12-24',minAmount:'5000',discount:'2300', status: 'unpublish' },
        { id: 6, title: 'HOLIDAY30',subtitle: 'enjoy holiday',code:'9Q9VBCOZ', image: 'path/to/image1.jpg',expiredDate:'25-12-24',minAmount:'5000',discount:'2300' , status: 'publish' },
        { id: 7, title: 'FREESERVICE',subtitle: 'enjoy yourSelves',code:'9Q9VBCOZ', image: 'path/to/image2.jpg',expiredDate:'25-12-24',minAmount:'5000',discount:'2300' , status: 'publish' },
        { id: 8, title: 'LASTMINUTE25',subtitle: 'enjoy your weekend',code:'9Q9VBCOZ', image: 'path/to/image3.jpg',expiredDate:'25-12-24',minAmount:'5000',discount:'2300' , status: 'unpublish' },
        { id: 9, title: 'LONGTERM10',subtitle: 'enjoy your weekend',code:'9Q9VBCOZ', image: 'path/to/image4.jpg',expiredDate:'25-12-24',minAmount:'5000',discount:'2300' , status: 'publish' },
        { id: 10, title: 'WEEKENDGETAWAY',subtitle: 'enjoy your weekend',code:'9Q9VBCOZ', image: 'path/to/image5.jpg',expiredDate:'25-12-24',minAmount:'5000',discount:'2300' , status: 'unpublish' },
        { id: 11, title: 'HOLIDAY30',subtitle: 'enjoy bookFast',code:'9Q9VBCOZ', image: 'path/to/image1.jpg',expiredDate:'25-12-24',minAmount:'5000',discount:'2300' , status: 'publish' },
        { id: 12, title: 'FREESERVICE',subtitle: 'enjoy your weekend',code:'9Q9VBCOZ', image: 'path/to/image2.jpg',expiredDate:'25-12-24',minAmount:'5000',discount:'2300' , status: 'publish' },
        { id: 13, title: 'LASTMINUTE25',subtitle: 'enjoy your weekend',code:'9Q9VBCOZ', image: 'path/to/image3.jpg',expiredDate:'25-12-24',minAmount:'5000',discount:'2300' , status: 'unpublish' },
        { id: 14, title: 'LONGTERM10',subtitle: 'bookFast',code:'9Q9VBCOZ', image: 'path/to/image4.jpg',expiredDate:'25-12-24',minAmount:'5000',discount:'2300' , status: 'publish' },
        { id: 15, title: 'WEEKENDGETAWAY',subtitle: 'enjoy yourSelves',code:'9Q9VBCOZ', image: 'path/to/image5.jpg',expiredDate:'25-12-24',minAmount:'5000',discount:'2300' , status: 'unpublish' },
        
    ];

    const [filterData, setFilterData] = useState(countries);
    const [filteredCountries, setFilteredCountries] = useState(countries);
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
    
    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; 

    // for searching
    const handleSearch = (event) => {
        searchFunction(event, countries, setFilteredCountries);
        setCurrentPage(1); 
    };

    // for sorting
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
            return a[key] < b[key] ? (direction === 'asc' ? -1 : 1) : (direction === 'asc' ? 1 : -1);
        });

        setFilteredCountries(sortedData);
        setSortConfig({ key, direction });
        setCurrentPage(1);
    };

    // Calculate paginated countries
    const indexOfLastCountry = currentPage * itemsPerPage;
    const indexOfFirstCountry = indexOfLastCountry - itemsPerPage;
    const currentCountries = filteredCountries.slice(indexOfFirstCountry, indexOfLastCountry);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);

    return (
        <div>
            <div className="h-screen flex">
                {/* Sidebar */}
                <SidebarMenu />

                <div className="flex flex-1 flex-col bg-[#f7fbff]">
                    {/* Header */}
                    <Header />
                    {/* Searching, sorting, and main content area */}
                    <CupponHeader onSearch={handleSearch} />
                    {/* Card */}
                    <div className="py-6 px-6 h-full w-[1000px] overflow-scroll scrollbar-none">
                        <div className="bg-white w-full rounded-xl border border-[#EAE5FF] py-4 px-3 overflow-x-auto scrollbar-none">
                            <div className="relative sm:rounded-lg">
                                <table className="min-w-full text-sm text-left text-gray-700">
                                    <thead className="bg-gray-50 text-xs uppercase font-medium text-gray-500">
                                        <tr>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                Sr. No
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => handleSort('slno')} />
                                                    <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => handleSort('slno')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                Title
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => handleSort('title')} />
                                                    <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => handleSort('title')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                 SubTitle
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => handleSort('subtitle')} />
                                                    <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => handleSort('subtitle')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                 Code
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => handleSort('code')} />
                                                    <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => handleSort('code')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                 Image
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => handleSort('image')} />
                                                    <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => handleSort('image')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                 Expired Date
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => handleSort('expiredDate')} />
                                                    <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => handleSort('expiredDate')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                 Min Amount
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => handleSort('minAmount')} />
                                                    <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => handleSort('minAmount')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                Discount
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => handleSort('discount')} />
                                                    <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => handleSort('discount')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                 Status
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => handleSort('status')} />
                                                    <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => handleSort('status')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                Action
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => handleSort('action')} />
                                                    <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => handleSort('action')} />
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {currentCountries.map((country, index) => (
                                            <tr key={country.id}>
                                                <td className="px-4 py-3">{index + 1 + indexOfFirstCountry}</td>
                                                <td className="px-4 py-3">{country.title}</td>
                                                <td className="px-4 py-3">{country.subtitle}</td>
                                                <td className="px-4 py-3">{country.code}</td>
                                                <td className="px-4 py-3">
                                                    {country.image && country.image.trim() !== '' ? (
                                                        <img src={country.image} className="w-16 h-16 object-cover rounded-full" height={50} width={50} loading="lazy" alt="" onError={(e) => {
                                                            if (e.target.src !== 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg') {
                                                                e.target.src = 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg';
                                                            }
                                                        }} />
                                                    ) : (
                                                        <img src={'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'} height={50} width={50} loading="lazy" alt="" />
                                                    )}
                                                </td>
                                                <td className="px-4 py-3">{country.expiredDate}</td>
                                                <td className="px-4 py-3">{country.minAmount}</td>
                                                <td className="px-4 py-3">{country.discount}</td>
                                                <td className="px-4 py-3">
                                                    <span className={`px-3 py-1 text-sm rounded-full ${country.status === 'publish' ? 'bg-green-500 text-white' : 'bg-gray-400 text-white'}`}>
                                                        {country.status}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <button className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition mr-2">
                                                        <FaPen />
                                                    </button>
                                                    <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
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
                                Showing <span className="font-semibold text-gray-900">{indexOfFirstCountry + 1}</span> to <span className="font-semibold text-gray-900">{Math.min(indexOfLastCountry, filteredCountries.length)}</span> of <span className="font-semibold text-gray-900">{filteredCountries.length}</span>
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

export default CupponList;