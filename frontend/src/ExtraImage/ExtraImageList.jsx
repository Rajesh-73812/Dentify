import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SidebarMenu from "../components/SideBar";
import ExtraImageHeader from "./ExtraImageHeader";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import { FaPen, FaTrash } from "react-icons/fa";
import { searchFunction } from "../Entity/SearchEntity";
import Loader from "../common/Loader";
import axios from "axios";

const ExtraImageList = () => {
    const [extraImages, setExtraImages] = useState([]);
    const [filteredImages, setFilteredImages] = useState([]);
    const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const itemsPerPage = 10;

    useEffect(() => {
        const fetchExtraImages = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get("http://localhost:5000/extra", {
                    withCredentials: true,
                });
                console.log(response.data);
                setExtraImages(response.data);
                setFilteredImages(response.data);
            } catch (error) {
                console.error(
                    "Error fetching extra images:",
                    error.response ? error.response.data : error.message
                );
            } finally {
                setIsLoading(false);
            }
        };
        fetchExtraImages();
    }, []);
    const handleSearch = (event) => {
        searchFunction(event, extraImages, setFilteredImages);
        setCurrentPage(1);
    };
    const handleSort = (key) => {
        let direction = "asc";
        if (sortConfig.key === key && sortConfig.direction === "asc") {
            direction = "desc";
        }
        const sortedData = [...filteredImages].sort((a, b) => {
            if (key === "id") {
                return direction === "asc" ? a.id - b.id : b.id - a.id;
            }
            return a[key] < b[key]
                ? direction === "asc" ? -1 : 1 : direction === "asc" ? 1 : -1;
        });
        setFilteredImages(sortedData);
        setSortConfig({ key, direction });
        setCurrentPage(1);
    };
    const indexOfLastImage = currentPage * itemsPerPage;
    const indexOfFirstImage = indexOfLastImage - itemsPerPage;
    const currentImages = filteredImages.slice(indexOfFirstImage, indexOfLastImage);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const totalPages = Math.ceil(filteredImages.length / itemsPerPage);

    return (
        <div>
            {isLoading && <Loader />}
            <div className="h-screen flex">

                {/* Sidebar */}

                <div className="flex flex-1 flex-col bg-[#f7fbff]">
                    <Header />
                    <ExtraImageHeader onSearch={handleSearch} />
                    <div className="py-6 px-6 h-full w-[1000px] overflow-scroll scrollbar-none">
                        <div className="bg-white w-full rounded-xl border border-[#EAE5FF] py-4 px-3 overflow-x-auto scrollbar-none">
                            <div className="relative sm:rounded-lg">
                                <table className="min-w-full text-sm text-left text-gray-700">
                                    <thead className="bg-gray-50 text-xs uppercase font-medium text-gray-500">
                                        <tr>
                                            <th className="px-4 py-3 min-w-[100px]">
                                                Sr. No
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp
                                                        className="text-gray-500 hover:text-gray-700 cursor-pointer"
                                                        onClick={() => handleSort("slno")}
                                                    />
                                                    <GoArrowDown
                                                        className="text-gray-500 hover:text-gray-700 cursor-pointer"
                                                        onClick={() => handleSort("slno")}
                                                    />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                Gallery Image
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp
                                                        className="text-gray-500 hover:text-gray-700 cursor-pointer"
                                                        onClick={() => handleSort("name")}
                                                    />
                                                    <GoArrowDown
                                                        className="text-gray-500 hover:text-gray-700 cursor-pointer"
                                                        onClick={() => handleSort("name")}
                                                    />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                Property Title
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp
                                                        className="text-gray-500 hover:text-gray-700 cursor-pointer"
                                                        onClick={() => handleSort("name")}
                                                    />
                                                    <GoArrowDown
                                                        className="text-gray-500 hover:text-gray-700 cursor-pointer"
                                                        onClick={() => handleSort("name")}
                                                    />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[100px]">
                                                Gallery Status
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp
                                                        className="text-gray-500 hover:text-gray-700 cursor-pointer"
                                                        onClick={() => handleSort("totalProperties")}
                                                    />
                                                    <GoArrowDown
                                                        className="text-gray-500 hover:text-gray-700 cursor-pointer"
                                                        onClick={() => handleSort("totalProperties")}
                                                    />
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 min-w-[100px]">
                                                Action
                                                <div className="inline-flex items-center ml-2">
                                                    <GoArrowUp
                                                        className="text-gray-500 hover:text-gray-700 cursor-pointer"
                                                        onClick={() => handleSort("action")}
                                                    />
                                                    <GoArrowDown
                                                        className="text-gray-500 hover:text-gray-700 cursor-pointer"
                                                        onClick={() => handleSort("action")}
                                                    />
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {currentImages.map((extraImage, index) => (
                                            <tr key={extraImage.id}>
                                                <td className="px-4 py-3">
                                                    {index + 1 + indexOfFirstImage}
                                                </td>
                                                <td className="px-4 py-3">
                                                    {" "}
                                                    {extraImage.img && extraImage.img.trim() !== "" ? (
                                                        <img
                                                            src={`http://localhost:5000/${extraImage.img}`}
                                                            className="w-16 h-16 object-cover rounded-full"
                                                            height={50}
                                                            width={50}
                                                            loading="lazy"
                                                            alt=""
                                                            onError={(e) => {
                                                                if (
                                                                    e.target.src !==
                                                                    "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
                                                                ) {
                                                                    e.target.src =
                                                                        "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg";
                                                                }
                                                            }}
                                                        />
                                                    ) : (
                                                        <img
                                                            src={
                                                                "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
                                                            }
                                                            height={50}
                                                            width={50}
                                                            loading="lazy"
                                                            alt=""
                                                        />
                                                    )}{" "}
                                                </td>{" "}
                                                <td className="px-4 py-3">{extraImage.properties?.title || "No Title"}</td>
                                                <td className="px-4 py-3">
                                                    {" "}
                                                    <span
                                                        className={`px-3 py-1 text-sm rounded-full ${extraImage.status === 1
                                                            ? "bg-green-500 text-white"
                                                            : "bg-gray-400 text-white"
                                                            }`}
                                                    >
                                                        {" "}
                                                        {extraImage.status === 1
                                                            ? "Published"
                                                            : "Unpublished"}{" "}
                                                    </span>{" "}
                                                </td>
                                                <td className="px-4 py-3">
                                                    <button className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition mr-2">
                                                        <FaPen />
                                                    </button>
                                                    <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
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
                                <span className="font-semibold text-gray-900">
                                    {indexOfFirstImage + 1}
                                </span>{" "}
                                to{" "}
                                <span className="font-semibold text-gray-900">
                                    {Math.min(indexOfLastImage, filteredImages.length)}
                                </span>{" "}
                                of{" "}
                                <span className="font-semibold text-gray-900">
                                    {filteredImages.length}
                                </span>
                            </span>
                            <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                                <li>
                                    <button
                                        onClick={() =>
                                            paginate(currentPage > 1 ? currentPage - 1 : 1)
                                        }
                                        className="previous-button"
                                        disabled={currentPage === 1}
                                    >
                                        <img src="/image/action/Left Arrow.svg" alt="Left" />{" "}
                                        Previous
                                    </button>
                                </li>
                                <li>
                                    <span className="current-page">
                                        Page {currentPage} of {totalPages}
                                    </span>
                                </li>
                                <li>
                                    <button
                                        onClick={() =>
                                            paginate(
                                                currentPage < totalPages ? currentPage + 1 : totalPages
                                            )
                                        }
                                        className="next-button"
                                        disabled={currentPage === totalPages}
                                    >
                                        Next{" "}
                                        <img src="/image/action/Right Arrow (1).svg" alt="Right" />
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

export default ExtraImageList;