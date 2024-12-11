
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SidebarMenu from "../components/SideBar";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import { FaPen, FaTrash } from "react-icons/fa";
import { searchFunction } from "../Entity/SearchEntity";
import CategoryHeader from "./CategoryHeader";
import axios from "axios";
import { useLoading } from '../Context/LoadingContext';
import { useLocation } from 'react-router-dom';
import Loader from '../common/Loader';


import { DeleteEntity } from '../utils/Delete';



const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [filteredcategories, setFilteredcategories] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

 

  // Fetch categories from API
  useEffect(() => {
    async function fetchCategories() {
      try {
       
        const response = await axios.get("http://localhost:5000/categories/all", {
          withCredentials: true,
        });
        console.log("Fetched categories:", response.data);
        setCategories(response.data);
        setFilteredcategories(response.data);
        
      } catch (error) {
        console.error("Error fetching categories:", error);
        
      }
    }

    fetchCategories();
  }, []);


  const location = useLocation();
  const { isLoading, setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, [location, setIsLoading]);

  // Handle search
  const handleSearch = (event) => {
    searchFunction(event, categories, setFilteredcategories);
    setCurrentPage(1);
  };

  // Handle sorting
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sortedData = [...filteredcategories].sort((a, b) => {
      if (key === "slno") {
        return direction === "asc" ? a.id - b.id : b.id - a.id;
      }
      return a[key] < b[key]
        ? direction === "asc"
          ? -1
          : 1
        : direction === "asc"
        ? 1
        : -1;
    });

    setFilteredcategories(sortedData);
    setSortConfig({ key, direction });
    setCurrentPage(1);
  };

  // Get sort icon
  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === "asc" ? <GoArrowUp /> : <GoArrowDown />;
  };

  // Calculate paginated categories
  const indexOfLastCategory = currentPage * itemsPerPage;
  const indexOfFirstCategory = indexOfLastCategory - itemsPerPage;
  const currentCategories = filteredcategories.slice(indexOfFirstCategory, indexOfLastCategory);


  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(filteredcategories.length / itemsPerPage);

 

    // update 
    
    const handledelete=async(id)=>{
        const success=await DeleteEntity('Category',id);
        if(success){
            const updatedCategories=categories.filter((item)=> categories.id !== id);
            setCategories(updatedCategories);
            setFilteredcategories(updatedCategories)
        }
    }
    return (
        <div>
      {isLoading && <Loader />}
            <div className="h-screen flex">
                {/* Sidebar */}
              

                <div className="flex flex-1 flex-col bg-[#f7fbff]">
                    {/* Header */}
                    <Header />
                    {/* Searching, sorting, and main content area */}
                    <CategoryHeader onSearch={handleSearch} />
                    {/* Card */}
                    <div className="py-6 px-6 h-full w-[1000px] overflow-scroll scrollbar-none">
                        <div className="bg-white w-full rounded-xl border border-[#EAE5FF] py-4 px-3 overflow-x-auto scrollbar-none">
                            <div className="relative sm:rounded-lg">
                                <table className="min-w-full text-sm text-left text-gray-700">
                                    <thead className="bg-gray-50 text-xs uppercase font-medium text-gray-500">
                                        <tr>
                                            <th className="px-4 py-3 min-w-[100px]">
                                                Sr. No
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => handleSort('slno')} />
                                                    <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => handleSort('slno')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                Category Title
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => handleSort('title')} />
                                                    <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => handleSort('title')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                Category Image
                                            </th>
                                            <th className="px-4 py-3 min-w-[100px]">
                                                Category Status
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => handleSort('status')} />
                                                    <GoArrowDown className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => handleSort('status')} />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[100px]">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {currentCategories.map((category, index) => (
                                            <tr key={category.id}>
                                                <td className="px-4 py-3">{index + 1 + indexOfFirstCategory}</td>
                                                <td className="px-4 py-3">{category.title}</td>
                                                <td className="px-4 py-3">
                                                    <img
                                                        src={category.img || 'https://via.placeholder.com/50'}
                                                        alt="Category"
                                                        className="w-16 h-16 object-cover rounded-full"
                                                        onError={(e) => (e.target.src = 'https://via.placeholder.com/50')}
                                                    />
                                                </td>
                                                <td className="px-4 py-3">
                                                    <span className={`px-3 py-1 text-sm rounded-full ${category.status === 1 ? 'bg-green-500 text-white' : 'bg-gray-400 text-white'}`}>
                                                        {category.status == 1 ? "publish": "unpublish"}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <button className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition mr-2">
                                                        <FaPen />
                                                    </button>
                                                    <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition" onClick={()=>{handledelete(category.id)}}>
                                                        <FaTrash />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>


                        </div>
                      
            <div className="bottom-0 left-0 w-full bg-[#f7fbff] py-4 flex justify-between items-center">
              <span className="text-sm font-normal text-gray-500">
                Showing{" "}
                <span className="font-semibold text-gray-900">{indexOfFirstCategory + 1}</span> to{" "}
                <span className="font-semibold text-gray-900">
                  {Math.min(indexOfLastCategory, filteredcategories.length)}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-gray-900">{filteredcategories.length}</span>
              </span>
              <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                <li>
                  <button
                    onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                    disabled={currentPage === 1}
                    className={`previous-button ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    Previous
                  </button>
                </li>
                <li>
                  <span className="current-page">Page {currentPage} of {totalPages}</span>
                </li>
                <li>
                  <button
                    onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
                    disabled={currentPage === totalPages}
                    className={`next-button ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
