import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Sidebar from '../components/SideBar';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import MaterialHeader from './MaterialHeader';

// dummy data
const initialRows = [
  { id: 1, name: 'Material 1', category: 'Category A', supplierName: 'Supplier A', manufacturerName: 'Manufacturer A', costPrice: 100, fromDate: '30-09-2024', toDate: '30-09-2024' },
  { id: 2, name: 'Material 2', category: 'Category B', supplierName: 'Supplier B', manufacturerName: 'Manufacturer B', costPrice: 150, fromDate: '30-09-2024', toDate: '30-09-2024' },
  { id: 3, name: 'Material 3', category: 'Category C', supplierName: 'Supplier C', manufacturerName: 'Manufacturer C', costPrice: 200, fromDate: '30-09-2024', toDate: '30-09-2024' },
  { id: 4, name: 'Material 4', category: 'Category D', supplierName: 'Supplier D', manufacturerName: 'Manufacturer D', costPrice: 250, fromDate: '30-09-2024', toDate: '30-09-2024' },
  { id: 5, name: 'Material 5', category: 'Category E', supplierName: 'Supplier E', manufacturerName: 'Manufacturer E', costPrice: 300, fromDate: '30-09-2024', toDate: '30-09-2024' },
  { id: 6, name: 'Material 6', category: 'Category F', supplierName: 'Supplier F', manufacturerName: 'Manufacturer F', costPrice: 350, fromDate: '30-09-2024', toDate: '30-09-2024' },
  { id: 7, name: 'Material 6', category: 'Category F', supplierName: 'Supplier F', manufacturerName: 'Manufacturer F', costPrice: 350, fromDate: '30-09-2024', toDate: '30-09-2024' },
  { id: 8, name: 'Material 6', category: 'Category F', supplierName: 'Supplier F', manufacturerName: 'Manufacturer F', costPrice: 350, fromDate: '30-09-2024', toDate: '30-09-2024' },
];

const MaterialList = () => {
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
      navigate('/create-material')
    }
    return (
        <div className='h-screen flex'>
        {/* sidebar */}
            <Sidebar />
            
            <div className="flex flex-1 flex-col">
            {/* header */}
                <Header />
                {/* searching sorting  and main content area*/}
                    {/* <div className='h-screen overflow-y-auto ' style={{scrollbarWidth:'none'}}> */}
                    <MaterialHeader />
                    {/* card */}
                    <div className="bg-[#f7fbff] h-full py-6 px-6 w-[1000px]" style={{overflow:'scroll',scrollbarWidth:'none'}}>
                        <div className="bg-white w-[102.5%] rounded-xl border border-[#EAE5FF] py-4 px-3 " style={{overflowX:'scroll',scrollbarWidth:'none'}} >
                            <div className="relative  sm:rounded-lg" >
                                <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 divide-y divide-gray-200" >
                                    <thead className="text-xs text-gray-700  bg-gray-50">
                                    <tr>
                                        <th className="min-w-16  h-10 px-4 py-2 border-b border-[#EAE5FF] text-left text-xs  font-medium tracking-wider">Sr.</th>
                                        <th className="min-w-[246px] h-10 px-4 py-2 border-b border-[#EAE5FF] text-left text-xs  font-medium tracking-wider">Material Category</th>
                                        <th className="min-w-[246px] h-10 px-4 py-2 border-b border-[#EAE5FF] text-left text-xs  font-medium tracking-wider">Supplier Name</th>
                                        <th className="min-w-[246px] h-10 px-4 py-2 border-b border-[#EAE5FF] text-left text-xs  font-medium tracking-wider">Manufacturer Name</th>
                                        <th className="min-w-[246px] h-10 px-4 py-2 border-b border-[#EAE5FF] text-left text-xs  font-medium tracking-wider">Material Cost Price</th>
                                        <th className="min-w-[246px] h-10 px-4 py-2 border-b border-[#EAE5FF] text-left text-xs  font-medium tracking-wider">Material Name</th>
                                        <th className="min-w-[146px] h-10 px-4 py-2 border-b border-[#EAE5FF] text-left text-xs  font-medium tracking-wider">From Date</th>
                                        <th className="min-w-[146px] h-10 px-4 py-2 border-b border-[#EAE5FF] text-left text-xs  font-medium tracking-wider">To Date</th>
                                        <th className="min-w-[180px] h-10 px-4 py-2 border-b border-[#EAE5FF] text-left text-xs  font-medium tracking-wider">Action</th>
                                        <th className="min-w-[100px] h-10 px-4 py-2 border-b border-[#EAE5FF] text-left text-xs  font-medium tracking-wider">View</th>
                                    </tr>
                                    </thead>
                                    <tbody className='divide-y divide-gray-200'>
                                        {initialRows.map((role, index) => (
                                            <tr key={role.id} className="bg-white hover:bg-gray-50">
                                                <td className="px-4 py-2  border-b border-[#EAE5FF] whitespace-nowrap">{index + 1}</td>
                                                <td className="px-4 py-2 border-b border-[#EAE5FF] whitespace-nowrap">{role.name}</td>
                                                <td className="px-4 py-2 border-b border-[#EAE5FF] whitespace-nowrap">{role.category}</td>
                                                <td className="px-4 py-2 border-b border-[#EAE5FF] whitespace-nowrap">{role.supplierName}</td>
                                                <td className="px-4 py-2 border-b border-[#EAE5FF] whitespace-nowrap">{role.manufacturerName}</td>
                                                <td className="px-4 py-2 border-b border-[#EAE5FF] whitespace-nowrap">{role.costPrice}</td>
                                                <td className="px-4 py-2 border-b border-[#EAE5FF] whitespace-nowrap">{role.fromDate}</td>
                                                <td className="px-4 py-2 border-b border-[#EAE5FF] whitespace-nowrap">{role.toDate}</td>
                                                <td className="px-4 py-2 border-b border-[#EAE5FF] whitespace-nowrap ">
                                                    <div className='flex gap-2  '>
                                                        <div className="relative group">
                                                            <div className="flex items-center  w-[40px] h-[40px] bg-[#F7FBFF] rounded-[10px] cursor-pointer ">
                                                                <img src="/image/action/Frame 33573.svg" alt="Edit" className='size-6' />
                                                            </div>
                                                            <span className="tooltip-text">
                                                                Edit
                                                                <span className="tooltip-arrow"></span>
                                                            </span>  
                                                        </div>
                                                        <div className="relative group">
                                                            <div className="flex items-center  w-[40px] h-[40px] bg-[#F7FBFF] rounded-[10px] cursor-pointer">
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
                                                            <div className="flex items-center justify-center w-[40px] h-[40px] bg-[#F7FBFF] rounded-[10px] cursor-pointer">
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
                {/* </div>   */}
            </div>
        </div>
    );
}

export default MaterialList;