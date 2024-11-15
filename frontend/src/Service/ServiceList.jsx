import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Sidebar from '../components/SideBar';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import ServiceHeader from './ServiceHeader';

const initialRows = [
  { id: 1, serviceName: 'Service 1', category: 'Category 1', mobileNo: '1234567890', provider: 'Provider 1' },
  { id: 2, serviceName: 'Service 2', category: 'Category 2', mobileNo: '0987654321', provider: 'Provider 2' },
  { id: 3, serviceName: 'Service 3', category: 'Category 3', mobileNo: '1122334455', provider: 'Provider 3' },
  { id: 4, serviceName: 'Service 4', category: 'Category 4', mobileNo: '2233445566', provider: 'Provider 4' },
  { id: 5, serviceName: 'Service 5', category: 'Category 5', mobileNo: '3344556677', provider: 'Provider 5' },
  { id: 6, serviceName: 'Service 6', category: 'Category 6', mobileNo: '4455667788', provider: 'Provider 6' },
];

const ServiceList = () => {
    const navigate=useNavigate();

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                // Implement the delete functionality here
                Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            }
        });
    }

    // navigation to add new role 
    const navigateToCreateUser=()=>{
      // alert(1)
      navigate('/create-service')
    }
    return (
        <div className='h-screen flex'>
        {/* sidebar */}
            <Sidebar />
            
            <div className="flex flex-1 flex-col bg-[#f7fbff]">
            {/* header */}
                <Header />
                {/* searching sorting  and main content area*/}
                {/* <div className='h-screen overflow-y-auto' style={{scrollbarWidth:'none'}}> */}
                    <ServiceHeader />
                    {/* card */}
                    <div className=" py-6 px-6 h-full w-[1000px] overflow-scroll " style={{scrollbarWidth:'none'}}>
                        <div className="bg-white w-[100%] rounded-xl border border-[#EAE5FF] py-4 px-3 " style={{overflowX:'scroll',scrollbarWidth:'none'}}>
                            <div className="relative sm:rounded-lg" >
                                <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 divide-y divide-gray-200">
                                    <thead className="text-xs text-gray-700  bg-gray-50">
                                        <tr>
                                            <th scope="col" className="min-w-16      h-10 px-4 py-2 border-b border-[#EAE5FF] text-left text-xs  font-medium tracking-wider" style={{ fontFamily: 'Montserrat', color: '#090713' }}>Sr.</th>
                                            <th scope="col" className="min-w-[207px] h-10 px-4 py-2 border-b border-[#EAE5FF] text-left text-xs font-medium tracking-wider" style={{ fontFamily: 'Montserrat', color: '#090713' }}>Service Name</th>
                                            <th scope="col" className="min-w-[207px] h-10 px-4 py-2 border-b border-[#EAE5FF] text-left text-xs font-medium tracking-wider" style={{ fontFamily: 'Montserrat', color: '#090713' }}>Service Category</th>
                                            <th scope="col" className="min-w-[207px] h-10 px-4 py-2 border-b border-[#EAE5FF] text-left text-xs font-medium tracking-wider" style={{ fontFamily: 'Montserrat', color: '#090713' }}>Mobile No</th>
                                            <th scope="col" className="min-w-[207px] h-10 px-4 py-2 border-b border-[#EAE5FF] text-left text-xs font-medium tracking-wider" style={{ fontFamily: 'Montserrat', color: '#090713' }}>Service Provider</th>
                                            <th scope="col" className="min-w-[180px] h-10 px-4 py-2 border-b border-[#EAE5FF] text-left text-xs font-medium tracking-wider" style={{ fontFamily: 'Montserrat', color: '#090713' }}>Action</th>
                                            <th scope="col" className="min-w-[100px] h-10 px-4 py-2 border-b border-[#EAE5FF] text-left text-xs font-medium tracking-wider" style={{ fontFamily: 'Montserrat', color: '#090713' }}>View</th>
                                        </tr>
                                    </thead>
                                    <tbody className='divide-y divide-gray-200'>
                                        {initialRows.map((role, index) => (
                                            <tr key={role.id} className="bg-white hover:bg-gray-50">
                                                <td className="px-4 py-2 border-b border-[#EAE5FF] whitespace-nowrap">{index + 1}</td>
                                                <td className="px-4 py-2 border-b border-[#EAE5FF] whitespace-nowrap">{role.serviceName}</td>
                                                <td className="px-4 py-2 border-b border-[#EAE5FF] whitespace-nowrap">{role.category}</td>
                                                <td className="px-4 py-2 border-b border-[#EAE5FF] whitespace-nowrap">{role.mobileNo}</td>
                                                <td className="px-4 py-2 border-b border-[#EAE5FF] whitespace-nowrap">{role.provider}</td>
                                                <td className="px-4 py-2 border-b border-[#EAE5FF] whitespace-nowrap ">
                                                    <div className='flex gap-2  '>
                                                        <div className="relative group">
                                                            <div className="flex items-center  w-10 h-10 bg-[#F7FBFF] rounded-[10px] cursor-pointer ">
                                                                <img src="/image/action/Frame 33573.svg" alt="Edit" className='size-6' />
                                                            </div>
                                                            <span className="tooltip-text">
                                                                Edit
                                                                <span className="tooltip-arrow"></span>
                                                            </span>  
                                                        </div>
                                                        <div className="relative group">
                                                            <div className="flex items-center  w-10 h-10 bg-[#F7FBFF] rounded-[10px] cursor-pointer">
                                                                <img src="/image/action/Frame 33572 (2).svg" alt="Delete" className='size-6' onClick={() => handleDelete(role.id)} />
                                                            </div>
                                                            <span className="tooltip-text">
                                                                Delete
                                                                <span className="tooltip-arrow"></span>
                                                            </span>  
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-2 border-b border-[#EAE5FF]">
                                                    <div className='flex gap-2'>
                                                        <div className="relative group">
                                                            <div className="flex items-center  w-10 h-10 bg-[#F7FBFF] rounded-[10px] cursor-pointer">
                                                                <img src="/image/action/Frame 33574 (2).svg" alt="View" className='size-6' />
                                                            </div>
                                                            <span className="tooltip-text">
                                                                View
                                                                <span className="tooltip-arrow"></span>
                                                            </span> 
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className=" bottom-0 left-0 w-full bg-[#f7fbff] py-4 flex justify-between items-center">
                                <span className="text-sm font-normal text-gray-500">
                                    Showing <span className="font-semibold text-gray-900">01</span> of <span className="font-semibold text-gray-900">{initialRows.length}</span>
                                </span>
                                <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                                    <li>
                                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white rounded-md hover:bg-gray-100 hover:text-gray-700" >
                                            <img src="/image/action/Left Arrow.svg" alt="Left" /> Previous
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-4 text-[#090713] font-normal   bg-white" style={{fontFamily: 'Poppins', fontSize: '12px',}}  >
                                            Page 01 of 01
                                        </a>
                                    </li>
                                    <li>
                                        <a  href="#"  className="flex items-center justify-center px-3 h-8 leading-tight text-white bg-[#115CC9] rounded-md hover:bg-blue-600 hover:text-white">
                                            Next <img src="/image/action/Right Arrow (1).svg" alt="Right" />
                                        </a>
                                    </li>
                                </ul>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </div>
    );
}

export default ServiceList;