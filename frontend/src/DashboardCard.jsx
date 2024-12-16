import React, { useEffect, useState } from "react";
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
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import axios from "axios";

const DashboardCard = () => {

    const [countryCount, setCountryCount] = useState(0);
    const [categoryCount, setCategoryCount] = useState(0);
    const [couponCount, setCouponCount] = useState(0);
    const [paymentCount, setpaymentCount] = useState(0);
    const [propertyCount, setPropertyCount] = useState(0);
    const [enquiryCount, setEnquiryCount] = useState(0);
    const [facilityCount, setFacilityCount] = useState(0);
    const [galleryCatCount, setGalleryCatCount] = useState(0);
    const [galleryCount, setGalleryCount] = useState(0);
    // ---  Bookings --- //
    const [bookedCount, setBookedCount] = useState(0);
    const [checkInCount, setCheckInCount] = useState(0);
    const [completedCount, setcompletedCount] = useState(0);
    const [confirmedCount, setconfirmedCount] = useState(0);

    // --- REVENUE --- //
    const [revenueCount, setRevenueCount] = useState(0);

    const [faqsCount, setFaqsCount] = useState(0);
    const [usersCount, setUserCount] = useState(0);
    const [packagesCount, setPackagesCount] = useState(0);

    // Countries
    useEffect(() => {
        const fetchCountryData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/countries/count");
                setCountryCount(response.data.count);
                console.log(response);
            } catch (error) {
                console.error("Error fetching country data:", error.message);
            }
        };
        fetchCountryData();
    }, []);

    // Categories
    useEffect(() => {
        const fetchCategoryData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/categories/count");
                setCategoryCount(response.data.count);
                console.log(response.data, "coupons");
            } catch (error) {
                console.error("Error fetching category data:", error.message);
            }
        };
        fetchCategoryData();
    }, []);

    // Coupon
    useEffect(() => {
        const fetchCouponData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/coupons/count", {
                    withCredentials: true
                });
                setCouponCount(response.data.count);
                console.log(response);
            } catch (error) {
                console.error("Error fetching coupon data:", error.message);
            }
        };
        fetchCouponData();
    }, []);

    // Payment List
    useEffect(() => {
        const fetchPaymentData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/payment-methods/count", {
                    withCredentials: true
                });
                setpaymentCount(response.data.count);
                console.log(response);
            } catch (error) {
                console.error("Error fetching payment list data:", error.message);
            }
        };
        fetchPaymentData();
    }, []);

    // Property List
    useEffect(() => {
        const fetchPropertyData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/properties/count", {
                    withCredentials: true
                });
                setPropertyCount(response.data.count);
                console.log(response);
            } catch (error) {
                console.error("Error fetching properties data:", error.message);
            }
        };
        fetchPropertyData();
    }, []);

    // Enquiry Count
    useEffect(() => {
        const fetchEnquiryData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/enquiries/count", {
                    withCredentials: true
                });
                setEnquiryCount(response.data.count);
                console.log(response);
            } catch (error) {
                console.error("Error fetching enquiries data:", error.message);
            }
        };
        fetchEnquiryData();
    }, []);

    // Facility Count
    useEffect(() => {
        const fetchFacilityData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/facilities/count", {
                    withCredentials: true
                });
                setFacilityCount(response.data.count);
                console.log(response);
            } catch (error) {
                console.error("Error fetching facilities data:", error.message);
            }
        };
        fetchFacilityData();
    }, []);

    // Gallery Category Count
    useEffect(() => {
        const fetchGalleryCatData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/galleryCategories/count", {
                    withCredentials: true
                });
                setGalleryCatCount(response.data.count);
                console.log(response);
            } catch (error) {
                console.error("Error fetching Gallery Category data:", error.message);
            }
        };
        fetchGalleryCatData();
    }, []);

    // Gallery Count
    useEffect(() => {
        const fetchGalleryData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/galleries/count", {
                    withCredentials: true
                });
                setGalleryCount(response.data.count);
                console.log(response);
            } catch (error) {
                console.error("Error fetching Gallery data:", error.message);
            }
        };
        fetchGalleryData();
    }, []);

    // -----  Bookings Count By Status ------ //
    useEffect(() => {
        const fetchBookedData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/bookings/count?status=Booked", {
                    withCredentials: true
                });
                setBookedCount(response.data.count);
                console.log(response);
            } catch (error) {
                console.error("Error fetching Booking data:", error.message);
            }
        };
        fetchBookedData();
    }, []);

    useEffect(() => {
        const fetchConfirmedData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/bookings/count?status=Confirmed", {
                    withCredentials: true
                });
                setconfirmedCount(response.data.count);
                console.log(response);
            } catch (error) {
                console.error("Error fetching Confirmed Data data:", error.message);
            }
        };
        fetchConfirmedData();
    }, []);

    useEffect(() => {
        const fetchCheckInData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/bookings/count?status=Check_in", {
                    withCredentials: true
                });
                setCheckInCount(response.data.count);
                console.log(response);
            } catch (error) {
                console.error("Error fetching Check In data:", error.message);
            }
        };
        fetchCheckInData();
    }, []);

    useEffect(() => {
        const fetchCompletedData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/bookings/count?status=Completed", {
                    withCredentials: true
                });
                setcompletedCount(response.data.count);
                console.log(response);
            } catch (error) {
                console.error("Error fetching Completed bookings data:", error.message);
            }
        };
        fetchCompletedData();
    }, []);

    useEffect(() => {
        const fetchFaqsData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/faqs/count");
                setFaqsCount(response.data.count);
                console.log(response);
            } catch (error) {
                console.error("Error fetching FAQ's data:", error.message);
            }
        };
        fetchFaqsData();
    }, []);

    useEffect(() => {
        const fetchUsersData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/users/user/count");
                setUserCount(response.data.count);
                console.log(response);
            } catch (error) {
                console.error("Error fetching Users data:", error.message);
            }
        };
        fetchUsersData();
    }, []);

    useEffect(() => {
        const fetchPackagesData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/packages/count");
                setPackagesCount(response.data.count);
                console.log(response);
            } catch (error) {
                console.error("Error fetching Packages data:", error.message);
            }
        };
        fetchPackagesData();
    }, []);

    const cards = [
        {
            card_logoIcon: <IoLocationOutline className="text-blue-500" />,
            card_title: "Total Country",
            card_desc: "Number of countries",
            card_data_value: countryCount,
        },

        {
            card_logoIcon: <GiHamburgerMenu className="text-blue-500" />,
            card_title: "Total Categories",
            card_desc: "Number of Categories",
            card_data_value: categoryCount,
        },

        {
            card_logoIcon: <FaGift className="text-blue-500" />,
            card_title: "Total Coupons",
            card_desc: "Number of Coupons",
            card_data_value: couponCount,
        },

        {
            card_logoIcon: <BsCurrencyDollar className="text-blue-500" />,
            card_title: "Total Payement Method",
            card_desc: "Today's Revenue",
            card_data_value: paymentCount,
        },

        {
            card_logoIcon: <IoMdHome className="text-blue-500" />,
            card_title: "Total Properties",
            card_desc: "Number of Properties",
            card_data_value: propertyCount,
        },

        {
            card_logoIcon: <PiUsersBold className="text-blue-500" />,
            card_title: "Total Enquiries",
            card_desc: "Number of Enquiries",
            card_data_value: enquiryCount,
        },

        {
            card_logoIcon: <MdOutlineBluetooth className="text-blue-500" />,
            card_title: "Total Facilities",
            card_desc: "Number of Facilities",
            card_data_value: facilityCount,
        },

        {
            card_logoIcon: <FaRegFolder className="text-blue-500" />,
            card_title: "Total Gallery Category",
            card_desc: "Number of Gallery Categories",
            card_data_value: galleryCatCount,
        },

        {
            card_logoIcon: <MdOutlineCameraAlt className="text-blue-500" />,
            card_title: "Total Gallery",
            card_desc: "Number of Gallery",
            card_data_value: galleryCount,
        },

        // ---- Bookings ----- //
        {
            card_logoIcon: <MdOutlineCalendarToday className="text-blue-500" />,
            card_title: "Total Bookings",
            card_desc: "Number of Bookings",
            card_data_value: bookedCount,
        },

        {
            card_logoIcon: <LuCheckSquare className="text-blue-500" />,
            card_title: "Total Confirmed Bookings",
            card_desc: "Number of Confirmed Bookings",
            card_data_value: confirmedCount,
        },

        {
            card_logoIcon: <IoEyeOutline className="text-blue-500" />,
            card_title: "Total Check-In",
            card_desc: "Number of Check-In",
            card_data_value: checkInCount,
        },

        {
            card_logoIcon: <BsCheck2Circle className="text-blue-500" />,
            card_title: "Total Completed Bookings",
            card_desc: "Number of Complted Bookings",
            card_data_value: completedCount,
        },

        // ----- TOTAL REVENUE NEED TO BE MODIFIED---- //
        {
            card_logoIcon: <CurrencyRupeeOutlinedIcon className="text-blue-500" />,
            card_title: "Total Revenue",
            card_desc: "Total Amount",
            card_data_value: "100000",
        },

        {
            card_logoIcon: <MdQuestionMark className="text-blue-500" />,
            card_title: "Total FAQ's",
            card_desc: "Number of FAQ'S",
            card_data_value: faqsCount,
        },

        {
            card_logoIcon: <PiUsersBold className="text-blue-500" />,
            card_title: "Total Users",
            card_desc: "Number of Users",
            card_data_value: usersCount,
        },

        {
            card_logoIcon: <LocalOfferOutlinedIcon className="text-blue-500" />,
            card_title: "Total Packages",
            card_desc: "Number of Packages",
            card_data_value: packagesCount,
        },

    ];

    return (
        <div className="overflow-auto scrollbar-none ">
            <div className=" py-1 px-3 overflow-x-auto scrollbar-none ">
                <div className="relative  sm:rounded-lg">
                    <div className="px-4 ">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {cards.map((card, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4" >
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
