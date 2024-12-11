import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

const DashboardHeader = () => {

    return (
        <div className="bg-[#f7fbff] p-6 w-[1000px] ">
            <div className=" flex items-center justify-between h-9" >
                <div className=" text-xl sm:text-2xl w-16 h-9 text-[#25064C]  leading-9 font-semibold whitespace-nowrap font-[Montserrat]">
                    Report Dashboard
                </div>
                
            </div>
        </div>
    )
}

export default DashboardHeader;