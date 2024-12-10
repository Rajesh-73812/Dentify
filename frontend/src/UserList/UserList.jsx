import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SidebarMenu from '../components/SideBar';
import { GoArrowDown, GoArrowUp } from 'react-icons/go';
import { FaPen,FaTrash } from "react-icons/fa";
import { searchFunction } from '../Entity/SearchEntity';
import axios from 'axios';
import UseListHeader from './UseListHeader';

const UserList = () => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    
    // useEffect(() => {
    //     const userList = async () => {
    //         try {
    //             const response = await axios.get("http://localhost:5000/user/all");
    //             setCountries(response.data);
    //             setFilteredCountries(response.data); 
    //         } catch (error) {
    //             console.error("Error fetching userList:", error);
    //         }
    //     };
    //     userList();
    // }, []);

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

    return (
        <div>
            <div className="h-screen flex">
                <SidebarMenu />
                <div className="flex flex-1 flex-col bg-[#f7fbff]">
                    <Header />
                    <UseListHeader onSearch={handleSearch} />
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
                                                Image
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp onClick={() => handleSort('title')} />
                                                    <GoArrowDown onClick={() => handleSort('title')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[250px]">
                                              Name
                                              <div className="inline-flex items-center ml-2">
                                                  <GoArrowUp onClick={() => handleSort('image')} />
                                                  <GoArrowDown onClick={() => handleSort('image')} />
                                              </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[250px]">
                                              Email
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp onClick={() => handleSort('day')} />
                                                    <GoArrowDown onClick={() => handleSort('day')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[250px]">
                                              Mobile
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp onClick={() => handleSort('price')} />
                                                    <GoArrowDown onClick={() => handleSort('price')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[250px]">
                                              Join Date
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp onClick={() => handleSort('price')} />
                                                    <GoArrowDown onClick={() => handleSort('price')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[250px]">
                                               Status
                                              <div className="inline-flex items-center ml-2">
                                                  <GoArrowUp onClick={() => handleSort('status')} />
                                                  <GoArrowDown onClick={() => handleSort('status')} />
                                              </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[250px]">
                                              Refer Code
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp onClick={() => handleSort('price')} />
                                                    <GoArrowDown onClick={() => handleSort('price')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[250px]">
                                              Parent Code
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp onClick={() => handleSort('price')} />
                                                    <GoArrowDown onClick={() => handleSort('price')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[250px]">
                                              Wallet
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp onClick={() => handleSort('price')} />
                                                    <GoArrowDown onClick={() => handleSort('price')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[250px]">
                                              IsSubscribe
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp onClick={() => handleSort('price')} />
                                                    <GoArrowDown onClick={() => handleSort('price')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[250px]">
                                              Package  Name
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp onClick={() => handleSort('price')} />
                                                    <GoArrowDown onClick={() => handleSort('price')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[250px]">
                                              Start Date
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp onClick={() => handleSort('price')} />
                                                    <GoArrowDown onClick={() => handleSort('price')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[250px]">
                                              Expired Date
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp onClick={() => handleSort('price')} />
                                                    <GoArrowDown onClick={() => handleSort('price')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[250px]">
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
                                                <td className="px-4 py-3">
                                                    <img
                                                        src={country.image || 'fallback-image.jpg'}
                                                        alt={country.name || "N/A"}
                                                        className="w-16 h-16 object-cover rounded-full"
                                                        onError={(e) => (e.target.src = 'fallback-image.jpg')}
                                                    />
                                                </td>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserList;
