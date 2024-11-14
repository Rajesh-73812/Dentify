import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Sidebar from '../components/SideBar';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import RoleHeader from './RoleHeader';

const roleData = [
  { id: 1, roleName: 'Admin', fromDate: '01-01-2023', toDate: '31-12-2023' },
  { id: 2, roleName: 'Editor', fromDate: '01-01-2023', toDate: '31-12-2023' },
  { id: 3, roleName: 'Viewer', fromDate: '01-01-2023', toDate: '31-12-2023' },
  { id: 4, roleName: 'Contributor', fromDate: '01-01-2023', toDate: '31-12-2023' },
  { id: 5, roleName: 'Moderator', fromDate: '01-01-2023', toDate: '31-12-2023' },
  { id: 6, roleName: 'Super Admin', fromDate: '01-01-2023', toDate: '31-12-2023' },
];

const RoleList = () => {
  const navigate=useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [isTypeOpen, setIsTypeOpen] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);

    const [selectedStatus, setSelectedStatus] = useState('Status');
    const [typeValue, setTypeValue] = useState('Type All');
    const [sortValue, setSortValue] = useState('Sort By');

    const toggleTypeDropdown = () => setIsTypeOpen(!isTypeOpen);
    const toggleSortDropdown = () => setIsSortOpen(!isSortOpen);

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

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleStatusSelect = (status) => {
        setSelectedStatus(status);
        setIsOpen(false);
    };
    
    const handleTypeSelect = (type) => {
        setTypeValue(type);
        setIsTypeOpen(false);
    };

    const handleSortSelect = (sort) => {
        setSortValue(sort);
        setIsSortOpen(false);
    };

    // navigation to add new role 
    const navigateToAddRole=()=>{
      // alert(1)
      navigate('/create-role')
    }
    return (
        <div className='h-screen flex'>
        {/* sidebar */}
            <Sidebar />
            
            <div className="flex flex-1 flex-col">
            {/* header */}
                <Header />
                {/* searching sorting  and main content area*/}


               <RoleHeader/>

                {/* card */}
                <div className="bg-[#f7fbff] h-full py-6 px-6">
                    <div className="bg-white w-full rounded-xl border border-[#EAE5FF] py-4 px-3">
                        <div className="relative overflow-x-auto sm:rounded-lg">
                            <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 divide-y divide-gray-200">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                    <tr>
                                        <th scope="col" className="w-[64px] h-[40px] px-4 py-2 border-b border-[#EAE5FF] text-left text-xs  font-medium tracking-wider" style={{ fontFamily: 'Montserrat', color: '#090713' }}>Sr.</th>
                                        <th scope="col" className="w-[410px] h-[40px] px-4 py-2 border-b border-[#EAE5FF] text-left text-xs font-medium tracking-wider" style={{ fontFamily: 'Montserrat', color: '#090713' }}>Role Name</th>
                                        <th scope="col" className="w-[410px] h-[40px] px-4 py-2 border-b border-[#EAE5FF] text-left text-xs font-medium tracking-wider" style={{ fontFamily: 'Montserrat', color: '#090713' }}>From Date</th>
                                        <th scope="col" className="w-[410px] h-[40px] px-4 py-2 border-b border-[#EAE5FF] text-left text-xs font-medium tracking-wider" style={{ fontFamily: 'Montserrat', color: '#090713' }}>To Date</th>
                                        <th scope="col" className="w-[180px] h-[40px] px-4 py-2 border-b border-[#EAE5FF] text-left text-xs font-medium tracking-wider" style={{ fontFamily: 'Montserrat', color: '#090713' }}>Action</th>
                                        <th scope="col" className="w-[100px] h-[40px] px-4 py-2 border-b border-[#EAE5FF] text-left text-xs font-medium tracking-wider" style={{ fontFamily: 'Montserrat', color: '#090713' }}>View</th>
                                    </tr>
                                </thead>
                                <tbody className='divide-y divide-gray-200'>
                                    {roleData.map((role, index) => (
                                        <tr key={role.id} className="bg-white hover:bg-gray-50">
                                            <td className="px-4 py-2 border-b border-[#EAE5FF] whitespace-nowrap">{index + 1}</td>
                                            <td className="px-4 py-2 border-b border-[#EAE5FF] whitespace-nowrap">{role.roleName}</td>
                                            <td className="px-4 py-2 border-b border-[#EAE5FF] whitespace-nowrap">{role.fromDate}</td>
                                            <td className="px-4 py-2 border-b border-[#EAE5FF] whitespace-nowrap">{role.toDate}</td>
                                            <td className="px-4 py-2 border-b border-[#EAE5FF] whitespace-nowrap ">
                                                <div className='flex gap-2  '>
                                                    <div className="relative group">
                                                        <div className="flex items-center justify-center w-[40px] h-[40px] bg-[#F7FBFF] rounded-[10px] cursor-pointer ">
                                                            <img src="/image/action/Frame 33573.svg" alt="Edit" className='size-6' />
                                                        </div>
                                                        <span className="tooltip-text">
                                                            Edit
                                                            <span className="tooltip-arrow"></span>
                                                       </span>  
                                                    </div>
                                                    <div className="relative group">
                                                        <div className="flex items-center justify-center w-[40px] h-[40px] bg-[#F7FBFF] rounded-[10px] cursor-pointer">
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
                            <div className="mt-6">
                                <nav className="pt-4" aria-label="Table navigation">
                                    <div className="flex justify-between">
                                        <span className="text-sm font-normal text-gray-500 mb-4 md:mb-0 block w-[104px] h-[18px] ">
                                            Showing <span className="font-semibold text-gray-900">01</span> of <span className="font-semibold text-gray-900">{roleData.length}</span>
                                        </span>
                                        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8 w-[276px]">
                                            <li>
                                                <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white rounded-s-lg hover:bg-gray-100 hover:text-gray-700">
                                                    <img src="/image/action/Left Arrow.svg" alt="Left" /> Previous
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700" style={{ font: 'Poppins', color: '#090713', fontWeight: '400', fontSize: '12px', lineHeight: '18px' }}>
                                                    Page 01 of 01
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700" style={{ borderRadius: '6px', gap: '8px', background: '#115CC9', color: '#ffffff' }}>
                                                    Next <img src="/image/action/Right Arrow (1).svg" alt="Right" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoleList;