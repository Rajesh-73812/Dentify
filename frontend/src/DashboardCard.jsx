import React, { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsCurrencyDollar } from "react-icons/bs";
import { PiUsersBold } from "react-icons/pi";
import { FaRegFolder } from "react-icons/fa";
import { LuCheckSquare } from "react-icons/lu";
import { BsCheck2Circle } from "react-icons/bs";
import { MdOutlineCameraAlt } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineCalendarToday } from "react-icons/md";
import { MdQuestionMark } from "react-icons/md";
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import axios from "axios";
import api from "./utils/api";

const DashboardCard = () => {
    const [dataCounts, setDataCounts] = useState({});

    const endpoints = [
        { key: "countryCount", url: "/countries/count" },
        { key: "categoryCount", url: "/categories/count" },
        { key: "couponCount", url: "/coupons/count" },
        { key: "paymentCount", url: "/payment-methods/count" },
        { key: "propertyCount", url: "/properties/count" },
        { key: "facilityCount", url: "/facilities/count" },
        { key: "galleryCatCount", url: "/galleryCategories/count" },
        { key: "galleryCount", url: "/galleries/count" },
        { key: "bookedCount", url: "/bookings/count?status=Booked" },
        { key: "confirmedCount", url: "/bookings/count?status=Confirmed" },
        { key: "checkInCount", url: "/bookings/count?status=Check_in" },
        { key: "completedCount", url: "/bookings/count?status=Completed" },
        { key: "extraImagesCount", url: "/extra/count" },
        { key: "packageCount", url: "/packages/count" },
        { key: "usersCount", url: "/users/user/count" },
        { key: "enquiryCount", url: "/enquiries/count" },
        { key: "faqsCount", url: "/faqs/count" },
    ];

    useEffect(() => {
        const fetchCounts = async () => {
            try {
                const requests = endpoints.map(endpoint => api.get(endpoint.url));
                const responses = await Promise.all(requests);
                const counts = responses.reduce((acc, response, index) => {
                    acc[endpoints[index].key] = response.data.count || 0;
                    return acc;
                }, {});
                setDataCounts(counts);
            } catch (error) {
                console.error("Error fetching counts:", error);
            }
        };
        fetchCounts();
    }, []);

    const cards = [
        {
            card_logoIcon: <IoLocationOutline className="text-blue-500" />,
            card_title: "Total Country",
            card_desc: "Number of countries",
            card_data_value: dataCounts.countryCount,
        },
        {
            card_logoIcon: <GiHamburgerMenu className="text-blue-500" />,
            card_title: "Total Categories",
            card_desc: "Number of Categories",
            card_data_value: dataCounts.categoryCount,
        },
        {
            card_logoIcon: <CardGiftcardOutlinedIcon className="text-blue-500" />,
            card_title: "Total Coupons",
            card_desc: "Number of Coupons",
            card_data_value: dataCounts.couponCount,
        },
        {
            card_logoIcon: <BsCurrencyDollar className="text-blue-500" />,
            card_title: "Total Payment Methods",
            card_desc: "Number of Payment Methods",
            card_data_value: dataCounts.paymentCount,
        },
        {
            card_logoIcon: <HomeOutlinedIcon className="text-blue-500" />,
            card_title: "Total Properties",
            card_desc: "Number of Properties",
            card_data_value: dataCounts.propertyCount,
        },
        {
            card_logoIcon: <ManageAccountsOutlinedIcon className="text-blue-500" />,
            card_title: "Total Facilities",
            card_desc: "Number of Facilities",
            card_data_value: dataCounts.facilityCount,
        },
        {
            card_logoIcon: <FaRegFolder className="text-blue-500" />,
            card_title: "Total Gallery Categories",
            card_desc: "Number of Gallery Categories",
            card_data_value: dataCounts.galleryCatCount,
        },
        {
            card_logoIcon: <MdOutlineCameraAlt className="text-blue-500" />,
            card_title: "Total Gallery",
            card_desc: "Number of Galleries",
            card_data_value: dataCounts.galleryCount,
        },
        {
            card_logoIcon: <MdOutlineCalendarToday className="text-blue-500" />,
            card_title: "Total Bookings",
            card_desc: "Number of Bookings",
            card_data_value: dataCounts.bookedCount,
        },
        {
            card_logoIcon: <LuCheckSquare className="text-blue-500" />,
            card_title: "Total Confirmed Bookings",
            card_desc: "Number of Confirmed Bookings",
            card_data_value: dataCounts.confirmedCount,
        },
        {
            card_logoIcon: <IoEyeOutline className="text-blue-500" />,
            card_title: "Total Check-In",
            card_desc: "Number of Check-In",
            card_data_value: dataCounts.checkInCount,
        },
        {
            card_logoIcon: <BsCheck2Circle className="text-blue-500" />,
            card_title: "Total Completed Bookings",
            card_desc: "Number of Completed Bookings",
            card_data_value: dataCounts.completedCount,
        },
        {
            card_logoIcon: <PermMediaOutlinedIcon className="text-blue-500" />,
            card_title: "Total Extra Images",
            card_desc: "Number of Extra Images",
            card_data_value: dataCounts.extraImagesCount,
        },
        {
            card_logoIcon: <LocalOfferOutlinedIcon className="text-blue-500" />,
            card_title: "Total Packages",
            card_desc: "Number of Packages",
            card_data_value: dataCounts.packageCount,
        },
        {
            card_logoIcon: <PiUsersBold className="text-blue-500" />,
            card_title: "Total Users",
            card_desc: "Number of Users",
            card_data_value: dataCounts.usersCount,
        },
        {
            card_logoIcon: <MdQuestionMark className="text-blue-500" />,
            card_title: "Total Enquiries",
            card_desc: "Number of Enquiries",
            card_data_value: dataCounts.enquiryCount,
        },
        {
            card_logoIcon: <ThumbUpAltOutlinedIcon className="text-blue-500" />,
            card_title: "Total FAQ's",
            card_desc: "Number of FAQ's",
            card_data_value: dataCounts.faqsCount,
        },
    ];

    return (
        <div className="overflow-auto scrollbar-none">
            <div className="py-1 px-3 overflow-x-auto scrollbar-none">
                <div className="relative sm:rounded-lg">
                    <div className="px-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {cards.map((card, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-md p-4  flex items-center gap-4 max-w-xs w-full">
                                    <div className="bg-[#F2F6FE] p-3 rounded-lg flex items-center justify-center w-14 h-14">
                                        {card.card_logoIcon}
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-[#6B6B6B] mt-2">
                                            {card.card_data_value ?? 0}
                                        </p>
                                        <h4 className="text-[18px] text-[#25064C] leading-none">
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
