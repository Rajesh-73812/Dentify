import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddRoundedIcon from '@mui/icons-material/AddRounded';


const UserHeader = () => {
    const navigate = useNavigate();

    // navigation 
    const navigateToAddUser = () => {
        // alert(1)
        navigate('/create-user')
    }
    return (
        <div className="bg-[#f7fbff] p-6">
            <div className=" flex items-center justify-between" style={{ height: "36px" }}>
                <div className=" text-xl sm:text-2xl w-16 h-9 whitespace-nowrap" style={{ color: '#131313', fontFamily: 'Montserrat', fontSize: '20px', lineHeight: '38px', fontWeight: "600" }}>
                    Users List
                </div>
                
                <div className=" text-left flex gap-3">

                    <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class=" bg-white-700 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center dark:bg-white dark:hover:bg-white dark:focus:ring-white " type="button" style={{ background: "white", fontSize: "12px", border: "1px solid #EAE5FF", height: "36px" }}>Select Roles<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                    <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={navigateToAddUser} style={{ height: "36px" }}>Assign</button>

                    <div className="hidden sm:flex  items-center border border-input rounded-lg bg-white shadow-sm" style={{ top: '104px', height: '36px', opacity: 1, border: '1px solid #EAE5FF', boxShadow: '0px 0px 1px 1px #00000033' }}>
                        <input type="search" placeholder="Search" className="outline-none text-sm placeholder-gray-600 px-3 py-2 rounded-l-lg" style={{ fontFamily: 'Montserrat', height: '36px', width: "300px", borderRadius: '8px 0 0 8px' }} />
                        <img src="/image/action/search-normal.svg" alt="Search" className="w-9 h-5 " style={{ color: '#131313' }} />
                    </div>
                        
                    <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={navigateToAddUser} style={{ height: "36px" }}> <AddRoundedIcon style={{ fontSize: "18px", marginTop: "2px" }} /> Create User </button>
                </div>
            </div>
        </div>
    )
}

export default UserHeader;