import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdHome } from "react-icons/io";
import { FiBook } from "react-icons/fi";
import { FaGift } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";
import { PiUsersBold } from "react-icons/pi";
import { FaRegFolder } from "react-icons/fa";
import { LuCheckSquare } from "react-icons/lu";
import { BsCheck2Circle } from "react-icons/bs";
import { MdOutlinePayment } from "react-icons/md";
import { MdOutlineCameraAlt } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineCalendarToday } from "react-icons/md";
import { MdQuestionMark } from "react-icons/md";
import { MdOutlineBluetooth } from "react-icons/md";

const DashboardCard = () => {
    const cards = [
        { card_logoIcon: <IoLocationOutline className="text-blue-500" />, card_title: "Total Country", card_desc: "Number of enquiries", card_data_value: "7" },
        { card_logoIcon: <GiHamburgerMenu className="text-blue-500" />, card_title: "Total Category", card_desc: "Number of new users", card_data_value: "10" },
        { card_logoIcon: <FaGift className="text-blue-500" />, card_title: "Total Coupon", card_desc: "Currently active users", card_data_value: "25" },
        { card_logoIcon: <BsCurrencyDollar className="text-blue-500" />, card_title: "Total Payment Method", card_desc: "Today's revenue", card_data_value: "1500" },
        { card_logoIcon: <PiUsersBold className="text-blue-500" />, card_title: "Total Enquiry", card_desc: "Number of enquiries", card_data_value: "7" },
        { card_logoIcon: <IoMdHome className="text-blue-500" />, card_title: "Total Property", card_desc: "Number of new users", card_data_value: "10" },
        { card_logoIcon: <MdOutlineCameraAlt className="text-blue-500" />, card_title: "Total Extra Images", card_desc: "Currently active users", card_data_value: "25" },
        { card_logoIcon: <MdOutlineBluetooth className="text-blue-500" />, card_title: "Total Facility", card_desc: "Today's revenue", card_data_value: "1500" },
        { card_logoIcon: <FaRegFolder className="text-blue-500" />, card_title: "Total Gallery Category", card_desc: "Number of new users", card_data_value: "10" },
        { card_logoIcon: <MdOutlineCameraAlt className="text-blue-500" />, card_title: "Total Gallery", card_desc: "Currently active users", card_data_value: "25" },
        { card_logoIcon: <MdOutlineCalendarToday className="text-blue-500" />, card_title: "Total Waiting Booking", card_desc: "Today's revenue", card_data_value: "1500" },
        { card_logoIcon: <LuCheckSquare className="text-blue-500" />, card_title: "Total Confirmed Booking", card_desc: "Number of enquiries", card_data_value: "7" },
        { card_logoIcon: <IoEyeOutline className="text-blue-500" />, card_title: "Total Check In Booking", card_desc: "Number of new users", card_data_value: "10" },
        { card_logoIcon: <BsCheck2Circle className="text-blue-500" />, card_title: "Total Completed Booking", card_desc: "Currently active users", card_data_value: "25" },
        { card_logoIcon: <FiBook className="text-blue-500" />, card_title: "Total Page", card_desc: "Today's revenue", card_data_value: "1500" },
        { card_logoIcon: <MdQuestionMark className="text-blue-500" />, card_title: "Total FAQ", card_desc: "Today's revenue", card_data_value: "1500" },
        { card_logoIcon: <PiUsersBold className="text-blue-500" />, card_title: "Total Users", card_desc: "Today's revenue", card_data_value: "1500" },
        { card_logoIcon: <MdOutlinePayment className="text-blue-500" />, card_title: "Total Booked Earning", card_desc: "Today's revenue", card_data_value: "1500 ₹" },
    ];

    return (
        <div className="overflow-auto scrollbar-none ">
            <div className=" py-1 px-3 overflow-x-auto scrollbar-none ">
                <div className="relative  sm:rounded-lg">
                    <div className="px-4 ">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {cards.map((card, index) => (
                                <div  key={index} className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4" >
                                    {/* Icon Section */}
                                    <div className="bg-[#F2F6FE] p-3 rounded-lg flex items-center justify-center w-14 h-14">
                                        {card.card_logoIcon}
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-[#6B6B6B] mt-2">
                                            {card.card_data_value}
                                        </p>
                                        <h4 className="text-[18px]  text-[#25064C] leading-none">
                                            {card.card_title}
                                        </h4>
                                        
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default DashboardCard;
