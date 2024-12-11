import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import SidebarMenu from '../components/SideBar';
import { GoArrowDown, GoArrowUp } from 'react-icons/go';
import { FaPen, FaTrash } from "react-icons/fa";
import { searchFunction } from '../Entity/SearchEntity';
import axios from 'axios';
import UseListHeader from './UseListHeader';

const UserList = () => {
    const hasFetched = useRef(false);
    const [user, setuser] = useState([]);
    const [filtereduser, setFiltereduser] = useState([]);
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        async function userlist() {
            try {
                const response = await axios.get("http://localhost:5000/users/user/getalluser");
                console.log(response.data);
                setuser(response.data);
                setFiltereduser(response.data);
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        }

        userlist();
    }, []);


    const handleSearch = (event) => {
        searchFunction(event, user, setFiltereduser);
        setCurrentPage(1);
    };

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }

        const sortedData = [...filtereduser].sort((a, b) => {
            if (key === 'slno') {
                return direction === 'asc' ? a.id - b.id : b.id - a.id;
            } else if (key === 'totalProperties') {
                return direction === 'asc' ? a.totalProperties - b.totalProperties : b.totalProperties - a.totalProperties;
            }
            return a[key]?.localeCompare(b[key]) * (direction === 'asc' ? 1 : -1);
        });

        setFiltereduser(sortedData);
        setSortConfig({ key, direction });
        setCurrentPage(1);
    };

    const indexOfLastCountry = currentPage * itemsPerPage;
    const indexOfFirstCountry = indexOfLastCountry - itemsPerPage;
    const currentuser = filtereduser.slice(indexOfFirstCountry, indexOfLastCountry);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const totalPages = Math.ceil(filtereduser.length / itemsPerPage);

    return (
        <div>
            <div className="h-screen flex">
               
                <div className="flex flex-1 flex-col bg-[#f7fbff]">
                    <Header />
                    <UseListHeader onSearch={handleSearch} />
                    <div className="py-6 px-6 h-full w-[1000px] overflow-scroll scrollbar-none">
                        <div className="bg-white w-full rounded-xl border border-[#EAE5FF] py-4 px-3 overflow-x-auto scrollbar-none">
                            <div className="relative sm:rounded-lg">
                                <table className="min-w-full text-sm text-left text-gray-700">
                                    <thead className="bg-gray-50 text-xs uppercase font-medium text-gray-500">
                                        <tr>
                                            <th className="px-4 py-3 min-w-[110px]">
                                                Sr. No
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp onClick={() => handleSort('slno')} />
                                                    <GoArrowDown onClick={() => handleSort('slno')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                Name
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp onClick={() => handleSort('image')} />
                                                    <GoArrowDown onClick={() => handleSort('image')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                Email
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp onClick={() => handleSort('day')} />
                                                    <GoArrowDown onClick={() => handleSort('day')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                Mobile
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp onClick={() => handleSort('price')} />
                                                    <GoArrowDown onClick={() => handleSort('price')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                Join Date
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp onClick={() => handleSort('price')} />
                                                    <GoArrowDown onClick={() => handleSort('price')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                Status
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp onClick={() => handleSort('status')} />
                                                    <GoArrowDown onClick={() => handleSort('status')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                Refer Code
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp onClick={() => handleSort('price')} />
                                                    <GoArrowDown onClick={() => handleSort('price')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                Parent Code
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp onClick={() => handleSort('price')} />
                                                    <GoArrowDown onClick={() => handleSort('price')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                Wallet
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp onClick={() => handleSort('price')} />
                                                    <GoArrowDown onClick={() => handleSort('price')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                IsSubscribe
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp onClick={() => handleSort('price')} />
                                                    <GoArrowDown onClick={() => handleSort('price')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                Package  Name
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp onClick={() => handleSort('price')} />
                                                    <GoArrowDown onClick={() => handleSort('price')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                Start Date
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp onClick={() => handleSort('price')} />
                                                    <GoArrowDown onClick={() => handleSort('price')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                Expired Date
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp onClick={() => handleSort('price')} />
                                                    <GoArrowDown onClick={() => handleSort('price')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                Action
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp onClick={() => handleSort('action')} />
                                                    <GoArrowDown onClick={() => handleSort('action')} />
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {currentuser.map((country, index) => (
                                            <tr key={country.id}>
                                                <td className="px-4 py-3">{index + 1 + indexOfFirstCountry}</td>
                                                <td className="px-4 py-3">{country.name || "N/A"}</td>
                                                <td className="px-4 py-3">{country.email || "N/A"}</td>
                                                <td className="px-4 py-3">{country.mobile || "N/A"}</td>
                                                <td className="px-4 py-3">{country.joinDate || "N/A"}</td>
                                                <td className="px-4 py-3">{country.status || "N/A"}</td>
                                                <td className="px-4 py-3">{country.refercode || "N/A"}</td>
                                                <td className="px-4 py-3">{country.parentCode || "N/A"}</td>
                                                <td className="px-4 py-3">{country.wallet || "N/A"}</td>
                                                <td className="px-4 py-3">{country.isSubscribe || "N/A"}</td>
                                                <td className="px-4 py-3">{country.packageName || "N/A"}</td>
                                                <td className="px-4 py-3">{country.startDate || "N/A"}</td>
                                                <td className="px-4 py-3">{country.expiredDate || "N/A"}</td>
                                                <td className="px-4 py-3">
                                                    <   button className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition mr-2">
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
                                Showing <span className="font-semibold text-gray-900">{indexOfFirstCountry + 1}</span> to <span className="font-semibold text-gray-900">{Math.min(indexOfLastCountry, filtereduser.length)}</span> of <span className="font-semibold text-gray-900">{filtereduser.length}</span>
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

export default UserList;
