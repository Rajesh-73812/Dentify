import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useNavigate, useLocation } from "react-router-dom";
import { RiHome6Line } from "react-icons/ri";
import { FaUser, FaLayerGroup } from "react-icons/fa";
import { MdOutlineBluetooth, MdQuestionMark, MdOutlineCalendarToday, MdOutlineCameraAlt,MdOutlinePayment } from "react-icons/md";
import { FaMinus } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdHome } from "react-icons/io";
import { FiBook } from "react-icons/fi";
import { FaGift } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";
import { PiUsersBold } from "react-icons/pi";
import { FaRegFolder } from "react-icons/fa";
import { LuCheckSquare } from "react-icons/lu";
import { BsCheck2Circle } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { TiUserOutline } from "react-icons/ti";
import { LuSettings2 } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { TbSquareRoundedPercentage } from "react-icons/tb";
import { CiImageOn } from "react-icons/ci";
import { CgCalendarDates } from "react-icons/cg";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { IoCheckboxOutline } from "react-icons/io5";

const SidebarMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Sidebar  breakPoint="sm"  width="250px"  style={{overflowY:'auto',height:'100vh'}}>
      <div className="h-[80px] bg-white flex justify-center items-center gap-2">
        <img src="/image/logo frame.svg" alt="Logo" className="h-[46px] w-[46px]" />
        <span className="text-2xl font-normal">DENTIIFY</span>
      </div>

      <Menu iconShape="circle">
        {/* dashBoard */}
          <MenuItem icon={<RiHome6Line />}
            active={location.pathname === "/dashboard"}
            onClick={() => navigate("/dashboard")}
          >
           Dashboard
          </MenuItem>
        {/* country */}
        <SubMenu label="Country"  icon={<IoLocationOutline />}>
          <MenuItem icon={<FaMinus />}
            active={location.pathname === "/add-country"}
            onClick={() => navigate("/add-country")}
          >
           Add Country
          </MenuItem>
          <MenuItem icon={<FaMinus />}
            active={location.pathname === "/country-list"}
            onClick={() => navigate("/country-list")}
          >
           List Country
          </MenuItem>
        </SubMenu>

        {/* category */}
        <SubMenu label="Category"  icon={<RxHamburgerMenu />}>
          <MenuItem icon={<FaMinus />}
            active={location.pathname === "/create-product"}
            onClick={() => navigate("/create-product")}
          >
           Add Category
          </MenuItem>
          <MenuItem icon={<FaMinus />}
            active={location.pathname === "/product-list"}
            onClick={() => navigate("/product-list")}
          >
           List Category
          </MenuItem>
        </SubMenu>

        {/* cuppon */}
        <SubMenu label="Cuppon"  icon={<TbSquareRoundedPercentage />}>
          <MenuItem icon={<FaMinus />}
            active={location.pathname === "/create-product"}
            onClick={() => navigate("/create-product")}
          >
           Add Cuppon
          </MenuItem>
          <MenuItem icon={<FaMinus />}
            active={location.pathname === "/product-list"}
            onClick={() => navigate("/product-list")}
          >
           List Cuppon
          </MenuItem>
        </SubMenu>

        {/* payment gateway */}
          <MenuItem icon={<CiWallet />}
            active={location.pathname === "/product-list"}
            onClick={() => navigate("/product-list")}
          >
           Payment Gateway
          </MenuItem>
          
        {/* enquiry list */}
          <MenuItem icon={<PiUsersBold />}
            active={location.pathname === "/product-list"}
            onClick={() => navigate("/product-list")}
          >
           Enquiry List
          </MenuItem>

        {/* Payout List */}
          <MenuItem icon={<FaUser />}
            active={location.pathname === "/product-list"}
            onClick={() => navigate("/product-list")}
          >
           Payout List
          </MenuItem>

        {/* propoties */}
        <SubMenu label="Propoties"  icon={<IoMdHome />}>
          <MenuItem
            active={location.pathname === "/create-product"}
            onClick={() => navigate("/create-product")}
          >
            Add  Propoties
          </MenuItem>
          <MenuItem
            active={location.pathname === "/product-list"}
            onClick={() => navigate("/product-list")}
          >
            List Propoties
          </MenuItem>
        </SubMenu>

        {/* Extra Images */}
        <SubMenu label="Extra Images"  icon={<CiImageOn />}>
          <MenuItem
            active={location.pathname === "/create-product"}
            onClick={() => navigate("/create-product")}
          >
            Add Extra Images
          </MenuItem>
          <MenuItem
            active={location.pathname === "/product-list"}
            onClick={() => navigate("/product-list")}
          >
            List Extra Images
          </MenuItem>
        </SubMenu>

        {/* Facility */}
        <SubMenu label="Facility"  icon={<MdOutlineBluetooth />}>
          <MenuItem
            active={location.pathname === "/create-product"}
            onClick={() => navigate("/create-product")}
          >
            Add Facility
          </MenuItem>
          <MenuItem
            active={location.pathname === "/product-list"}
            onClick={() => navigate("/product-list")}
          >
            List Facility
          </MenuItem>
        </SubMenu>

        {/* Gallery Category */}
        <SubMenu label="Gallery Category"  icon={<FaRegFolder />}>
          <MenuItem
            active={location.pathname === "/create-product"}
            onClick={() => navigate("/create-product")}
          >
            Add Gallery Category 
          </MenuItem>
          <MenuItem
            active={location.pathname === "/product-list"}
            onClick={() => navigate("/product-list")}
          >
            List Gallery Category
          </MenuItem>
        </SubMenu>

        {/* gallery */}
        <SubMenu label="Gallery "  icon={<CiImageOn />}>
          <MenuItem
            active={location.pathname === "/create-product"}
            onClick={() => navigate("/create-product")}
          >
            Add Gallery
          </MenuItem>
          <MenuItem
            active={location.pathname === "/product-list"}
            onClick={() => navigate("/product-list")}
          >
            List Gallery
          </MenuItem>
        </SubMenu>

        {/* package */}
        <SubMenu label="Package "  icon={<FaLayerGroup />}>
          <MenuItem
            active={location.pathname === "/create-product"}
            onClick={() => navigate("/create-product")}
          >
            Add Package
          </MenuItem>
          <MenuItem
            active={location.pathname === "/product-list"}
            onClick={() => navigate("/product-list")}
          >
            List Package
          </MenuItem>
        </SubMenu>

        {/* Booking */}
        <SubMenu label="Booking "  icon={<CgCalendarDates />}>
        {/* Pending Booking */}
          <MenuItem
            active={location.pathname === "/create-product"}
            onClick={() => navigate("/create-product")}
          >
            Pending Booking
          </MenuItem>

          {/*  Approved Booking */}
          <MenuItem
            active={location.pathname === "/create-product"}
            onClick={() => navigate("/create-product")}
          >
            Approved Booking
          </MenuItem>

          {/* Check In Booking */}
          <MenuItem
            active={location.pathname === "/create-product"}
            onClick={() => navigate("/create-product")}
          >
            Check In Booking
          </MenuItem>

          {/* Completed Booking */}
          <MenuItem
            active={location.pathname === "/create-product"}
            onClick={() => navigate("/create-product")}
          >
            Completed Booking
          </MenuItem>

          {/* Cancelled Booking */}
          <MenuItem
            active={location.pathname === "/create-product"}
            onClick={() => navigate("/create-product")}
          >
            Cancelled Booking
          </MenuItem>
        </SubMenu>

        {/* page */}
        <SubMenu label="Page "  icon={<BsFileEarmarkPlus />}>
          <MenuItem
            active={location.pathname === "/create-product"}
            onClick={() => navigate("/create-product")}
          >
            Add Page
          </MenuItem>
          <MenuItem
            active={location.pathname === "/product-list"}
            onClick={() => navigate("/product-list")}
          >
            List Page
          </MenuItem>
        </SubMenu>

        {/* faq */}
        <SubMenu label="Faq "  icon={<IoCheckboxOutline />}>
          <MenuItem
            active={location.pathname === "/create-product"}
            onClick={() => navigate("/create-product")}
          >
            Add Faq
          </MenuItem>
          <MenuItem
            active={location.pathname === "/product-list"}
            onClick={() => navigate("/product-list")}
          >
            List Faq
          </MenuItem>
        </SubMenu>

        {/* userlist */}
        <MenuItem
            active={location.pathname === "/create-product"} icon={<PiUsersBold />}
            onClick={() => navigate("/create-product")}
          >
            User List
        </MenuItem>

        {/* account */}
        <MenuItem
            active={location.pathname === "/create-product"} icon={<TiUserOutline />}
            onClick={() => navigate("/create-product")}
          >
            Account
        </MenuItem>

        {/* settings */}
        <MenuItem
            active={location.pathname === "/create-product"} icon={<LuSettings2 />}
            onClick={() => navigate("/create-product")}
          >
            Setting
        </MenuItem>

        {/* settings */}
        <MenuItem
            active={location.pathname === "/create-product"} icon={<CiLogout />}
            onClick={() => navigate("/create-product")}
          >
            Logout
        </MenuItem>

      </Menu>
    </Sidebar>
  );
};

export default SidebarMenu;
