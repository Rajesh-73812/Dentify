import React, { useState } from 'react';
import Header from '../components/Header';
import SidebarMenu from '../components/SideBar';
import { GoArrowDown, GoArrowUp } from 'react-icons/go';
import { FaPen,FaTrash } from "react-icons/fa";
import { searchFunction } from '../Entity/SearchEntity';
import PaymentGatewayHeader from './PaymentGatewayHeader';

const PaymentGatewayList = () => {
    const countries = [
        { id: 1, paymentGateWayName: 'Pay TO Owner',PaymentGatewaySubtitle: 'pay via cash',showOnWallet:'unpublish', image: 'path/to/image1.jpg',paymentGateWayStatus:'publish', showOnSubscribe:'unpublish',status: 'publish' },
        { id: 2, paymentGateWayName: 'Paytm',PaymentGatewaySubtitle: 'Credit/Debit card,net banking,paytm wallet',showOnWallet:'publish', image: 'path/to/image2.jpg',paymentGateWayStatus:'publish',showOnSubscribe:'unpublish', status: 'publish' },
        { id: 3, paymentGateWayName: 'Stripe',PaymentGatewaySubtitle: 'Accept all major debit and credit cards from customers in every country',showOnWallet:'unpublish', image: 'path/to/image3.jpg',paymentGateWayStatus:'publish',showOnSubscribe:'unpublish',status: 'unpublish' },
        { id: 4, paymentGateWayName: 'PayStack',PaymentGatewaySubtitle: 'Credit/Debit card with Easier way to pay – online and on your mobile.',showOnWallet:'publish', image: 'path/to/image4.jpg',paymentGateWayStatus:'publish',showOnSubscribe:'publish', status: 'publish' },
        { id: 5, paymentGateWayName: 'Razorpay',PaymentGatewaySubtitle: 'Pay Using RazorPay',showOnWallet:'publish', image: 'path/to/image5.jpg',paymentGateWayStatus:'publish',showOnSubscribe:'publish',status: 'unpublish' },
        { id: 6, paymentGateWayName: 'Pay TO Owner',PaymentGatewaySubtitle: 'pay via cash',showOnWallet:'publish', image: 'path/to/image1.jpg',paymentGateWayStatus:'publish',showOnSubscribe:'publish', status: 'publish' },
        { id: 7, paymentGateWayName: 'Paypal',PaymentGatewaySubtitle: 'Credit/Debit card with Easier way to pay – online and on your mobile.',paymentGateWayStatus:'publish',showOnWallet:'publish', image: 'path/to/image2.jpg',showOnSubscribe:'unpublish', status: 'publish' },
        { id: 8, paymentGateWayName: 'Stripe',PaymentGatewaySubtitle: 'Accept all major debit and credit cards from customers in every country',paymentGateWayStatus:'publish',showOnWallet:'unpublish', image: 'path/to/image3.jpg',showOnSubscribe:'publish', status: 'unpublish' },
        { id: 9, paymentGateWayName: 'PayStack',PaymentGatewaySubtitle: 'Credit/Debit card with Easier way to pay – online and on your mobile.',paymentGateWayStatus:'publish',showOnWallet:'publish', image: 'path/to/image4.jpg',showOnSubscribe:'unpublish', status: 'publish' },
        { id: 10, paymentGateWayName: 'Paytm',PaymentGatewaySubtitle: 'Credit/Debit card,net banking,paytm wallet',showOnWallet:'publish', image: 'path/to/image5.jpg',paymentGateWayStatus:'publish',showOnSubscribe:'publish', status: 'unpublish' },
        { id: 11, paymentGateWayName: 'Pay TO Owner',PaymentGatewaySubtitle: 'pay via cash',showOnWallet:'publish', image: 'path/to/image1.jpg',paymentGateWayStatus:'publish',showOnSubscribe:'publish', status: 'publish' },
        { id: 12, paymentGateWayName: 'Paypal',PaymentGatewaySubtitle: 'Credit/Debit card with Easier way to pay – online and on your mobile.',showOnWallet:'unpublish', image: 'path/to/image2.jpg',paymentGateWayStatus:'publish',showOnSubscribe:'publish', status: 'publish' },
        { id: 13, paymentGateWayName: 'Stripe',PaymentGatewaySubtitle: 'Accept all major debit and credit cards from customers in every country',showOnWallet:'publish', image: 'path/to/image3.jpg',paymentGateWayStatus:'publish',showOnSubscribe:'publish', status: 'unpublish' },
        { id: 14, paymentGateWayName: 'PayStack',PaymentGatewaySubtitle: 'Credit/Debit card with Easier way to pay – online and on your mobile.',showOnWallet:'unpublish', image: 'path/to/image4.jpg',paymentGateWayStatus:'publish',showOnSubscribe:'publish', status: 'publish' },
        { id: 15, paymentGateWayName: 'Razorpay',PaymentGatewaySubtitle: 'Pay Using RazorPay',showOnWallet:'publish', image: 'path/to/image5.jpg',paymentGateWayStatus:'publish',showOnSubscribe:'unpublish', status: 'unpublish' },
        
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
                    <PaymentGatewayHeader onSearch={handleSearch} />
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
                                            <th className="px-4 py-3 min-w-[250px]">
                                                PaymentGateway Name
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => handleSort('paymentGatewayName')} />
                                                    <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => handleSort('paymentGatewayName')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[250px]">
                                                PaymentGateway SubTitle
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => handleSort('paymentGatewaysubtitle')} />
                                                    <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => handleSort('paymentGatewaysubtitle')} />
                                                </div>
                                            </th>
                                            
                                            <th className="px-4 py-3 min-w-[250px]">
                                                PaymentGateway Image
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => handleSort('paymentGatewayimage')} />
                                                    <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => handleSort('paymentGatewayimage')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[250px]">
                                                PaymentGateway Status
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => handleSort('paymentGatewaystatus')} />
                                                    <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => handleSort('paymentGatewaystatus')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[250px]">
                                                 Show On Wallet
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => handleSort('showonwallet')} />
                                                    <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => handleSort('showonwallet')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[250px]">
                                                Show On Subscribe
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => handleSort('subscribe')} />
                                                    <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => handleSort('subscribe')} />
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
                                                <td className="px-4 py-3">{country.paymentGateWayName}</td>
                                                <td className="px-4 py-3">{country.PaymentGatewaySubtitle}</td>
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
                                                <td className="px-4 py-3">{country.paymentGateWayStatus}</td>
                                                <td className="px-4 py-3">{country.showOnWallet}</td>
                                                <td className="px-4 py-3">{country.showOnSubscribe}</td>
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

export default PaymentGatewayList;