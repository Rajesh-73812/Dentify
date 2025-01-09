import React from 'react'
import ArrowBackIosNewIcon  from '@mui/icons-material/ArrowBackIosNew';
import { Link, useNavigate } from 'react-router-dom';

const CategoryHeader = ({ onSearch }) => {

    const navigate = useNavigate()

    return (
        <div>
            <div className="bg-[#f7fbff] p-6 w-[1000px]">
                <div className=" flex items-center justify-between h-9" style={{ height: "36px" }}>
                    <div className="flex items-center mt-6  mb-4">
                        <Link onClick={() => { navigate(-1) }} className="cursor-pointer ml-6">
                            <ArrowBackIosNewIcon style={{color:'#045D78'}} />
                        </Link>
                        <h2 className="text-lg font-semibold ml-4 " style={{ color: '#000000', fontSize: '24px', fontFamily: 'Montserrat' }}> Category List</h2>
                    </div>
                    <div className="flex items-center gap-3">
                        <div
                            className="hidden sm:flex items-center border rounded-lg bg-white shadow-sm h-10"
                            style={{
                            border: '1px solid #EAE5FF',
                            boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <input
                            type="search"
                            placeholder="Search"
                            className="outline-none text-sm placeholder-gray-500 px-4 w-72 h-full rounded-l-lg font-sans"
                            style={{ borderRadius: '8px 0 0 8px' }}
                            onChange={onSearch}
                            />
                            <div
                            className="flex items-center justify-center w-12 h-full bg-purple-100 rounded-r-lg"
                            style={{ backgroundColor: '#F6F1FF' }}
                            >
                            <img
                                src="/image/action/search-normal.svg"
                                alt="Search"
                                className="w-5 h-5"
                            />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CategoryHeader