import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const pathName = location.pathname;
  const navigate = useNavigate();

  return (
    <div className="bg-[#439bff] hidden sm:block w-[250px] h-screen">
      <div className="h-[80px] bg-white flex justify-center items-center gap-2">
        <img src="/image/logo frame.svg" alt="Logo" className="h-[46px] w-[46px]" />
        <span className="text-2xl font-normal">DENTIIFY</span>
      </div>
      <div className="px-5 py-7 flex flex-col gap-4">
        {/* Role Item */}
        <div
          onClick={() => navigate("/dashboard")}
          className={`h-8 rounded-lg flex items-center gap-3 px-3 cursor-pointer ${
            pathName === "/create-role" || pathName === "/dashboard" ? "bg-white" : ""
          }`}
        >
          <img
            src={
              pathName === "/create-role" || pathName === "/dashboard"
                ? "/image/sidebar/roles/roles icon (1).svg"
                : "/image/sidebar/roles/roles icon (2).svg"
            }
            alt="Role Icon"
            className="h-[24px] w-[24px]"
          />
          <span
            className={`text-xs font-medium ${
              pathName === "/create-role" || pathName === "/dashboard"
                ? "text-[#439bff]"
                : "text-white"
            }`}
          >
            Roles
          </span>
        </div>

        {/* Users Item */}
        <div
          onClick={() => navigate("/user-list")}
          className={`h-8 rounded-lg flex items-center gap-3 px-3 cursor-pointer ${
            pathName === "/user-list" || pathName === "/create-user"  ? "bg-white" : ""
          }`}
        >
          <img
            src={pathName === "/user-list" || pathName === "/create-user" ? "/image/sidebar/users/Users icon (1).svg" : "/image/sidebar/users/Users icon (2).svg"}
            alt="Users Icon"
            className="h-[24px] w-[24px]"
          />
          <span
            className={`text-xs font-medium ${pathName === "/user-list" || pathName === "/create-user" ? "text-[#439bff]" : "text-white"}`}
          >
            Users
          </span>
        </div>

        {/* Products Item */}
        <div
          onClick={() => navigate("/product-list")}
          className={`h-8 rounded-lg flex items-center gap-3 px-3 cursor-pointer ${
            pathName === "/create-product" || pathName === "/product-list" ? "bg-white" : ""
          }`}
        >
          <img
            src={
              pathName === "/create-product" || pathName === "/product-list"
                ? "/image/sidebar/products/fluent-mdl2_product-variant (1).svg"
                : "/image/sidebar/products/fluent-mdl2_product-variant (2).svg"
            }
            alt="Products Icon"
            className="h-[24px] w-[24px]"
          />
          <span
            className={`text-xs font-medium ${pathName === "/create-product" || pathName === "/product-list" ? "text-[#439bff]" : "text-white"}`}
          >
            Products
          </span>
        </div>

        {/* Service Item */}
        <div
          onClick={() => navigate("/service-list")}
          className={`h-8 rounded-lg flex items-center gap-3 px-3 cursor-pointer ${
            pathName === "/create-service" || pathName === "/service-list" ? "bg-white" : ""
          }`}
        >
          <img
            src={pathName === "/create-service" || pathName === "/service-list" ? "/image/sidebar/service/services (1).svg" : "/image/sidebar/service/services (2).svg"}
            alt="Service Icon"
            className="h-[24px] w-[24px]"
          />
          <span
            className={`text-xs font-medium ${pathName === "/create-service" || pathName === "/service-list" ? "text-[#439bff]" : "text-white"}`}
          >
            Service
          </span>
        </div>

        {/* Service Provider Item */}
        <div
          onClick={() => navigate("/service-provider-list")}
          className={`h-8 rounded-lg flex items-center gap-3 px-3 cursor-pointer ${
            pathName === "/service-provider-list" || pathName === "/create-service-provider" ? "bg-white" : ""
          }`}
        >
          <img
            src={
              pathName === "/service-provider-list" || pathName === "/create-service-provider"
                ? "/image/sidebar/serviceProvider/Vector (1).svg"
                : "/image/sidebar/serviceProvider/service icon (1).svg"
            }
            alt="Service Provider Icon"
            className="h-[24px] w-[24px]"
          />
          <span
            className={`text-xs font-medium ${pathName === "/service-provider-list" || pathName === "/create-service-provider" ? "text-[#439bff]" : "text-white"}`}
          >
            Service Provider
          </span>
        </div>

        {/* Materials Item */}
        <div
          onClick={() => navigate("/material-list")}
          className={`h-8 rounded-lg flex items-center gap-3 px-3 cursor-pointer ${
            pathName === "/create-material" || pathName === "/material-list" ? "bg-white" : ""
          }`}
        >
          <img
            src={
              pathName === "/create-material" || pathName === "/material-list"
                ? "/image/sidebar/materials/flowbite_draw-square-outline (1).svg"
                : "/image/sidebar/materials/flowbite_draw-square-outline (2).svg"
            }
            alt="Materials Icon"
            className="h-[24px] w-[24px]"
          />
          <span
            className={`text-xs font-medium ${pathName === "/create-material" || pathName === "/material-list" ? "text-[#439bff]" : "text-white"}`}
          >
            Materials
          </span>
        </div>

        {/* Jobs Item */}
        <div
          onClick={() => navigate("/job-list")}
          className={`h-8 rounded-lg flex items-center gap-3 px-3 cursor-pointer ${
            pathName === "/create-job" || pathName === "/job-list" ? "bg-white" : ""
          }`}
        >
          <img
            src={pathName === "/create-job" || pathName === "/job-list" ? "/image/sidebar/jobs/jobs (1).svg" : "/image/sidebar/jobs/jobs (2).svg"}
            alt="Jobs Icon"
            className="h-[24px] w-[24px]"
          />
          <span
            className={`text-xs font-medium ${pathName === "/create-job" || pathName === "/job-list" ? "text-[#439bff]" : "text-white"}`}
          >
            Jobs
          </span>
        </div>

        {/* Courses Item */}
        <div
          onClick={() => navigate("/course-list")}
          className={`h-8 rounded-lg flex items-center gap-3 px-3 cursor-pointer ${
            pathName === "/create-course" || pathName === "/course-list" ? "bg-white" : ""
          }`}
        >
          <img
            src={
              pathName === "/create-course" || pathName === "/course-list"
                ? "/image/sidebar/courses/tdesign_education (1).svg"
                : "/image/sidebar/courses/tdesign_education (2).svg"
            }
            alt="Courses Icon"
            className="h-[24px] w-[24px]"
          />
          <span
            className={`text-xs font-medium ${pathName === "/create-course" || pathName === "/course-list" ? "text-[#439bff]" : "text-white"}`}
          >
            Courses
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
