import React from "react";
import { useLocation } from "react-router-dom";
import { NotificationIcon, ProfileIcon } from "./Icons";

const Header = () => {
  const location = useLocation();
  
  // Function to get the title based on the current pathname
  const getTitle = () => {
    switch (location.pathname) {
      case '/user-list':
      case '/create-user':
        return 'Users';

      case '/service-list':
      case '/create-service':
        return 'Services';

      case '/service-provider-list':
      case '/create-service-rovider':
        return 'Service Provider';

      case '/role-list':
      case '/create-role':
        return 'Roles';

      case '/product-list':
      case '/create-product':
        return 'Products';

      case '/job-list':
      case '/create-job':
        return 'Jobs';

      case '/course-list':
      case '/create-course':
        return 'Courses';

      case '/material-list':
      case '/create-material':
        return 'Materials';

      default:
        return 'Dashboard'; 
    }
  };

  return (
    <div className="bg-white h-[65px] sm:h-[80px] p-6 flex items-center justify-between ">
      <div className="flex items-center gap-2.5 ">
        <span className="text-2xl font-bold">{getTitle()}</span>
      </div>
      <div className="flex items-center gap-5">
        <div className="bg-[#f7fbff] rounded-full size-8 sm:size-11 flex items-center justify-center">
          <NotificationIcon />
        </div>
        <div className="bg-[#f7fbff] rounded-full size-8 sm:size-11 flex items-center justify-center">
          <ProfileIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;