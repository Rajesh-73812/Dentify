import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import AddRoundedIcon from '@mui/icons-material/AddRounded';


const ServiceProviderHeader = () => {
    const navigate = useNavigate();

    // navigation to add new role 
    const navigateToAddServiceProvider = () => {
        // alert(1)
        navigate('/create-service-provider')
    }
    return (
        <div className="bg-[#f7fbff] p-6">
            <div className=" flex items-center justify-between" style={{ height: "36px" }}>
                <div className=" text-xl sm:text-2xl w-16 h-9 whitespace-nowrap" style={{ color: '#131313', fontFamily: 'Montserrat', fontSize: '20px', lineHeight: '38px', fontWeight: "600" }}>
                    Service Provider List
                </div>
                <div className=' flex items-center gap-3'>
                    <div className="hidden sm:flex  items-center border border-input rounded-lg bg-white shadow-sm" style={{ top: '104px', height: '36px', opacity: 1, border: '1px solid #EAE5FF', boxShadow: '0px 0px 1px 1px #00000033' }}>
                        <input type="search" placeholder="Search" className="outline-none text-sm placeholder-gray-600 px-3 py-2 rounded-l-lg" style={{ fontFamily: 'Montserrat', height: '36px', width: "300px", borderRadius: '8px 0 0 8px' }} />
                        <img src="/image/action/search-normal.svg" alt="Search" className="w-9 h-5 " style={{ color: '#131313' }} />
                    </div>
                    <div className=" text-left flex gap-3">

                        <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={navigateToAddServiceProvider} style={{ height: "36px" }}> <AddRoundedIcon style={{ fontSize: "18px", marginTop: "2px" }} /> Create Service </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceProviderHeader;