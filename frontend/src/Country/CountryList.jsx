import React from 'react';
import Header from '../components/Header';
import CountryHeader from './CountryHeader';
import SidebarMenu from '../components/SideBar';
import { GoArrowDown, GoArrowUp } from 'react-icons/go';
import { FaPen } from "react-icons/fa";

const CountryList = () => {
    const countries = [
        { id: 1, name: 'United States', image: 'path/to/image1.jpg', totalProperties: 100, status: 'publish' },
        { id: 2, name: 'Canada', image: 'path/to/image2.jpg', totalProperties: 80, status: 'publish' },
        { id: 3, name: 'Australia', image: 'path/to/image3.jpg', totalProperties: 60, status: 'unpublish' },
        { id: 4, name: 'Germany', image: 'path/to/image4.jpg', totalProperties: 90, status: 'publish' },
        { id: 5, name: 'Japan', image: 'path/to/image5.jpg', totalProperties: 70, status: 'unpublish' },
        { id: 1, name: 'United States', image: 'path/to/image1.jpg', totalProperties: 100, status: 'publish' },
        { id: 2, name: 'Canada', image: 'path/to/image2.jpg', totalProperties: 80, status: 'publish' },
        { id: 3, name: 'Australia', image: 'path/to/image3.jpg', totalProperties: 60, status: 'unpublish' },
        { id: 4, name: 'Germany', image: 'path/to/image4.jpg', totalProperties: 90, status: 'publish' },
        { id: 5, name: 'Japan', image: 'path/to/image5.jpg', totalProperties: 70, status: 'unpublish' },
        { id: 1, name: 'United States', image: 'path/to/image1.jpg', totalProperties: 100, status: 'publish' },
        { id: 2, name: 'Canada', image: 'path/to/image2.jpg', totalProperties: 80, status: 'publish' },
        { id: 3, name: 'Australia', image: 'path/to/image3.jpg', totalProperties: 60, status: 'unpublish' },
        { id: 4, name: 'Germany', image: 'path/to/image4.jpg', totalProperties: 90, status: 'publish' },
        { id: 5, name: 'Japan', image: 'path/to/image5.jpg', totalProperties: 70, status: 'unpublish' },
      ];
  return (
    <div>
      <div className="h-screen flex">
        {/* Sidebar */}
        <SidebarMenu />

        <div className="flex flex-1 flex-col bg-[#f7fbff]">
          {/* Header */}
          <Header />
          {/* Searching, sorting, and main content area */}
          <CountryHeader />
            
          {/* Card */}
          <div className="py-6 px-6 h-full w-[1000px] overflow-scroll scrollbar-none">
            <div className="bg-white w-full rounded-xl border border-[#EAE5FF] py-4 px-3 overflow-x-auto scrollbar-none">
              <div className="relative sm:rounded-lg">
                <table className="table table-divided">
                  <thead className="text-xs text-gray-700 bg-gray-50">
                    <tr>
                      <th scope="col" className="min-w-[150px] font-bold table-header">
                        Sr.No
                        <div className="inline-flex items-center ml-2">
                          <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" />
                          <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" />
                        </div>
                      </th>
                      <th scope="col" className="min-w-[207px] font-bold table-header">
                        Country Title Name
                        <div className="inline-flex items-center ml-2">
                          <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" />
                          <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" />
                        </div>
                      </th>
                      <th scope="col" className="min-w-[207px] font-bold table-header">
                        Country Image
                        <div className="inline-flex items-center ml-2">
                          <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" />
                          <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" />
                        </div>
                      </th>
                      <th scope="col" className="min-w-[207px] font-bold table-header">
                        Total Property No
                        <div className="inline-flex items-center ml-2">
                          <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" />
                          <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" />
                        </div>
                      </th>
                      <th scope="col" className="min-w-[207px] font-bold table-header">
                        Country Status
                        <div className="inline-flex items-center ml-2">
                          <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" />
                          <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" />
                        </div>
                      </th>
                      <th scope="col" className="min-w-[180px] font-bold table-header">
                        Action
                        <div className="inline-flex items-center ml-2">
                          <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" />
                          <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" />
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y table-data divide-gray-200">
                  {countries.map((country) => (
                      <tr key={country.id}>
                        <td className="table-cell">{country.id}</td>
                        <td className="table-cell">{country.name}</td>
                        <td className="table-cell">
                        {country.image && country.image.trim() !=='' ? (
                            <img src={country.image} height={70} width={70} loading="lazy" alt="" onError={(e)=>{
                                if(e.target.src !=='https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'){
                                    e.target.src='https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'
                                }
                            }} />
                            ):(
                            <img src={'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'} height={50} width={50} loading="lazy" alt="" />
                        )}
                        </td>
                        <td className="table-cell">{country.totalProperties}</td>
                        <td className="table-cell"><span className={`bg-${country.status === 'publish' ? 'green-600 text-white' : 'gray-400'} rounded-full px-3 py-1`}>{country.status}</span></td>                        <td className="table-cell">
                        <button className="bg-[#42f57b] text-white rounded-full p-3 i hover:bg-green-600 transition">  <FaPen />   </button>
                          
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryList;

<div className="py-6 px-4 md:px-6 lg:px-8 h-full w-full overflow-scroll scrollbar-none">
                    <div className="bg-white rounded-xl border border-[#EAE5FF] py-4 px-4 md:px-6 lg:px-8">
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-sm text-left text-gray-700">
                                <thead className="bg-gray-50 text-xs uppercase font-medium text-gray-500">
                                    <tr>
                                        <th className="px-4 py-3 min-w-[50px]">Sr. No</th>
                                        <th className="px-4 py-3 min-w-[150px]">Country Title Name</th>
                                        <th className="px-4 py-3 min-w-[150px]">Country Image</th>
                                        <th className="px-4 py-3 min-w-[100px]">Total Properties</th>
                                        <th className="px-4 py-3 min-w-[100px]">Country Status</th>
                                        <th className="px-4 py-3 min-w-[100px]">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {countries.map((country, index) => (
                                        <tr key={country.id}>
                                            <td className="px-4 py-3">{index + 1}</td>
                                            <td className="px-4 py-3">{country.name}</td>
                                            <td className="px-4 py-3">
                                                <img
                                                    src={country.image}
                                                    alt={country.name}
                                                    className="w-16 h-16 object-cover rounded-full"
                                                    onError={(e) => {
                                                        e.target.src =
                                                            'https://via.placeholder.com/70';
                                                    }}
                                                />
                                            </td>
                                            <td className="px-4 py-3">{country.totalProperties}</td>
                                            <td className="px-4 py-3">
                                                <span
                                                    className={`px-3 py-1 text-sm rounded-full ${
                                                        country.status === 'publish'
                                                            ? 'bg-green-500 text-white'
                                                            : 'bg-gray-400 text-white'
                                                    }`}
                                                >
                                                    {country.status}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <button className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition">
                                                    <FaPen />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>