import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddRoundedIcon from '@mui/icons-material/AddRounded';


const RoleHeader = () => {

    const navigate = useNavigate();
    
    const navigateToAddRole=()=>{
        navigate('/create-role')
    }

    return (
        <div className="bg-[#f7fbff] p-6 w-[1000px]">
            <div className=" flex items-center justify-between h-9 " >
                <div className=" text-xl sm:text-2xl w-16 h-9 whitespace-nowrap text-[#131313]" style={{  fontFamily: 'Montserrat', fontSize: '20px', lineHeight: '38px', fontWeight: "600" }}>
                    Roles List
                </div>
                <div className=' flex items-center gap-3'>
                    <div className="hidden sm:flex  items-center border border-input rounded-lg bg-white shadow-sm" style={{ top: '104px', height: '36px', opacity: 1, border: '1px solid #EAE5FF', boxShadow: '0px 0px 1px 1px #00000033' }}>
                        <input type="search" placeholder="Search" className="outline-none text-sm placeholder-gray-600 px-3 py-2 rounded-l-lg" style={{ fontFamily: 'Montserrat', height: '36px', width: "300px", borderRadius: '8px 0 0 8px' }} />
                        <img src="/image/action/search-normal.svg" alt="Search" className="w-9 h-5 text-[#131313]" />
                    </div>
                    <div className=" text-left flex gap-3">

                        <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class=" bg-white-700 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center dark:bg-white dark:hover:bg-white dark:focus:ring-white" type="button" style={{ background: "white", fontSize: "12px", border: "1px solid #EAE5FF", height: "36px" }}>Type All<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                        </button>
                        <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class=" bg-white-700 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center dark:bg-white dark:hover:bg-white dark:focus:ring-white" type="button" style={{ background: "white", fontSize: "12px", border: "1px solid #EAE5FF", height: "36px" }}>Sort by<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                        </button>
                        <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class=" bg-white-700 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center dark:bg-white dark:hover:bg-white dark:focus:ring-white" type="button" style={{ background: "white", fontSize: "12px", border: "1px solid #EAE5FF", height: "36px" }}>Status<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                        </button>
                        <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={navigateToAddRole} style={{ height: "36px" }}> <AddRoundedIcon style={{ fontSize: "18px", marginTop: "2px" }} /> Create Role </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoleHeader