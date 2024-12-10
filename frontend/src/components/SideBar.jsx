import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useNavigate, useLocation } from "react-router-dom";
import { RiHome6Line } from "react-icons/ri";
import { FaUser, FaLayerGroup } from "react-icons/fa";
import { MdOutlineBluetooth } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdHome } from "react-icons/io";
import { PiUsersBold } from "react-icons/pi";
import { FaRegFolder } from "react-icons/fa";
import { TiUserOutline } from "react-icons/ti";
import { LuSettings2 } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { TbSquareRoundedPercentage } from "react-icons/tb";
import { CiImageOn } from "react-icons/ci";
import { CgCalendarDates } from "react-icons/cg";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { IoCheckboxOutline } from "react-icons/io5";
import axios from "axios";

const SidebarMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading,setloading]=useState(false)

  const logout = async () => {
    setloading(true)
    try {
      const response = await axios.post(`http://localhost:5000/admin/logout`,{},{ withCredentials: true });
      // console.log(response.data);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Error during logout:", error.response?.data || error.message);
    }finally{
      setloading(false)
    }
  };
  
  return (
    <Sidebar  breakPoint="sm"  width="250px"  style={{overflowY:'auto',height:'100vh'}}>
      <div className="h-[80px] bg-white flex justify-center items-center gap-2" >
        <img src="/image/logo frame.svg" alt="Logo" className="h-[46px] w-[46px]" />
        <span className="text-2xl font-normal">RENTAL</span>
      </div>

      <div style={{ overflowY: 'auto', height: 'calc(100vh - 80px)', scrollbarWidth:'none'}}>
      <Menu iconShape="circle">
        {/* dashBoard */}
          <MenuItem icon={<RiHome6Line />}
            active={location.pathname === "/dashboard"}
            onClick={() => navigate("/dashboard")}
          >
           Dashboard
          </MenuItem>

        {/* country */}
        <SubMenu  label="Country"  icon={<IoLocationOutline />}>
          <MenuItem className="sub-menu-item"
            active={location.pathname === "/add-country"}
            onClick={() => navigate("/add-country")}
          >
           Add Country
          </MenuItem>
          <MenuItem className="sub-menu-item"
            active={location.pathname === "/country-list"}
            onClick={() => navigate("/country-list")}
          >
           List Country
          </MenuItem>
        </SubMenu>

        {/* category */}
        <SubMenu label="Category"  icon={<RxHamburgerMenu />}>
          <MenuItem className="sub-menu-item"
            active={location.pathname === "/add-category"}
            onClick={() => navigate("/add-category")}
          >
           Add Category
          </MenuItem>
          <MenuItem className="sub-menu-item"
            active={location.pathname === "/category-list"}
            onClick={() => navigate("/category-list")}
          >
           List Category
          </MenuItem>
        </SubMenu>

        {/* cuppon */}
        <SubMenu label="Cuppon"  icon={<TbSquareRoundedPercentage />}>
          <MenuItem className="sub-menu-item"
            active={location.pathname === "/add-cuppon"}
            onClick={() => navigate("/add-cuppon")}
          >
           Add Cuppon
          </MenuItem>
          <MenuItem className="sub-menu-item"
            active={location.pathname === "/cuppon-list"}
            onClick={() => navigate("/cuppon-list")}
          >
           List Cuppon
          </MenuItem>
        </SubMenu>

        {/* payment gateway */}
          <MenuItem icon={<CiWallet />}
            active={location.pathname === "/payment-list"}
            onClick={() => navigate("/payment-list")}
          >
           Payment Gateway
          </MenuItem>
          
        {/* enquiry list */}
          <MenuItem icon={<PiUsersBold />}
            active={location.pathname === "/enquiry-list"}
            onClick={() => navigate("/enquiry-list")}
          >
           Enquiry List
          </MenuItem>

        {/* Payout List */}
          <MenuItem icon={<FaUser />}
            active={location.pathname === "/payout-list"}
            onClick={() => navigate("/payout-list")}
          >
           Payout List
          </MenuItem>

        {/* propoties */}
        <SubMenu label="Propoties"  icon={<IoMdHome />}>
          <MenuItem className="sub-menu-item"
            active={location.pathname === "/create-property"}
            onClick={() => navigate("/create-property")}
          >
            Add  Propoties
          </MenuItem>
          <MenuItem className="sub-menu-item"
            active={location.pathname === "/property-list"}
            onClick={() => navigate("/property-list")}
          >
            List Propoties
          </MenuItem>
        </SubMenu>

        {/* Extra Images */}
        <SubMenu label="Extra Images"  icon={<CiImageOn />}>
          <MenuItem className="sub-menu-item"
            active={location.pathname === "/create-extra-image"}
            onClick={() => navigate("/create-extra-image")}
          >
            Add Extra Images
          </MenuItem>
          <MenuItem className="sub-menu-item"
            active={location.pathname === "/extra-image-list"}
            onClick={() => navigate("/extra-image-list")}
          >
            List Extra Images
          </MenuItem>
        </SubMenu>

        {/* Facility */}
        <SubMenu label="Facility"  icon={<MdOutlineBluetooth />}>
          <MenuItem className="sub-menu-item"
            active={location.pathname === "/create-facility"}
            onClick={() => navigate("/create-facility")}
          >
            Add Facility
          </MenuItem>
          <MenuItem className="sub-menu-item"
            active={location.pathname === "/facility-list"}
            onClick={() => navigate("/facility-list")}
          >
            List Facility
          </MenuItem>
        </SubMenu>

        {/* Gallery Category */}
        <SubMenu label="Gallery Category"  icon={<FaRegFolder />}>
          <MenuItem className="sub-menu-item"
            active={location.pathname === "/create-gallery-category"}
            onClick={() => navigate("/create-gallery-category")}
          >
            Add Gallery Category 
          </MenuItem>
          <MenuItem className="sub-menu-item"
            active={location.pathname === "/gallery-category-list"}
            onClick={() => navigate("/gallery-category-list")}
          >
            List Gallery Category
          </MenuItem>
        </SubMenu>

        {/* gallery */}
        <SubMenu label="Gallery "  icon={<CiImageOn />}>
          <MenuItem className="sub-menu-item"
            active={location.pathname === "/create-gallery"}
            onClick={() => navigate("/create-gallery")}
          >
            Add Gallery
          </MenuItem>
          <MenuItem className="sub-menu-item"
            active={location.pathname === "/gallery-list"}
            onClick={() => navigate("/gallery-list")}
          >
            List Gallery
          </MenuItem>
        </SubMenu>

        {/* package */}
        <SubMenu label="Package "  icon={<FaLayerGroup />}>
          <MenuItem className="sub-menu-item"
            active={location.pathname === "/create-package"}
            onClick={() => navigate("/create-package")}
          >
            Add Package
          </MenuItem>
          <MenuItem className="sub-menu-item"
            active={location.pathname === "/package-list"}
            onClick={() => navigate("/package-list")}
          >
            List Package
          </MenuItem>
        </SubMenu>

        {/* Booking */}
        <SubMenu label="Booking "  icon={<CgCalendarDates />}>
        {/* Pending Booking */}
          <MenuItem className="sub-menu-item"
            active={location.pathname === "/pending-book-list"}
            onClick={() => navigate("/pending-book-list")}
          >
            Pending Booking
          </MenuItem>

          {/*  Approved Booking */}
          <MenuItem className="sub-menu-item"
            active={location.pathname === "/approved-book-list"}
            onClick={() => navigate("/approved-book-list")}
          >
            Approved Booking
          </MenuItem>

          {/* Check In Booking */}
          <MenuItem className="sub-menu-item"
            active={location.pathname === "/check-in-list"}
            onClick={() => navigate("/check-in-list")}
          >
            Check In Booking
          </MenuItem>

          {/* Completed Booking */}
          <MenuItem className="sub-menu-item"
            active={location.pathname === "/completed-list"}
            onClick={() => navigate("/completed-list")}
          >
            Completed Booking
          </MenuItem>

          {/* Cancelled Booking */}
          <MenuItem className="sub-menu-item"
            active={location.pathname === "/cancelled-list"}
            onClick={() => navigate("/cancelled-list")}
          >
            Cancelled Booking
          </MenuItem>
        </SubMenu>

        {/* page */}
        <SubMenu label="Page "  icon={<BsFileEarmarkPlus />}>
          <MenuItem className="sub-menu-item"
            active={location.pathname === "/create-page"}
            onClick={() => navigate("/create-page")}
          >
            Add Page
          </MenuItem>
          <MenuItem className="sub-menu-item"
            active={location.pathname === "/page-list"}
            onClick={() => navigate("/page-list")}
          >
            List Page
          </MenuItem>
        </SubMenu>

        {/* faq */}
        <SubMenu label="Faq "  icon={<IoCheckboxOutline />}>
          <MenuItem className="sub-menu-item"
            active={location.pathname === "/create-faq"}
            onClick={() => navigate("/create-faq")}
          >
            Add Faq
          </MenuItem>
          <MenuItem className="sub-menu-item"
            active={location.pathname === "/faq-list"}
            onClick={() => navigate("/faq-list")}
          >
            List Faq
          </MenuItem>
        </SubMenu>

        {/* userlist */}
        <MenuItem 
            active={location.pathname === "/user-list"} icon={<PiUsersBold />}
            onClick={() => navigate("/user-list")}
          >
            User List
        </MenuItem>

        {/* account */}
        <MenuItem 
            active={location.pathname === "/profile"} icon={<TiUserOutline />}
            onClick={() => navigate("/profile")}
          >
            Account
        </MenuItem>

        {/* settings */}
        <MenuItem 
            active={location.pathname === "/settings"} icon={<LuSettings2 />}
            onClick={() => navigate("/settings")}
          >
            Setting
        </MenuItem>

        {/* logout */}
        <MenuItem 
            active={location.pathname === "/"} icon={<CiLogout />}
            onClick={logout}
          >
            Logout
        </MenuItem>

      </Menu>
      </div>
    </Sidebar>
  );
};

export default SidebarMenu;
