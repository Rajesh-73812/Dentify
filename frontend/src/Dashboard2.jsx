import React, { useState } from 'react';
import { NotificationIcon, ProfileIcon, RolesIcon, UsersIcon } from './components/Icons';
import Swal from 'sweetalert2';

const roleData = [
  { id: 1, roleName: 'Admin', fromDate: '01-01-2023', toDate: '31-12-2023' },
  { id: 2, roleName: 'Editor', fromDate: '01-01-2023', toDate: '31-12-2023' },
  { id: 3, roleName: 'Viewer', fromDate: '01-01-2023', toDate: '31-12-2023' },
  { id: 4, roleName: 'Contributor', fromDate: '01-01-2023', toDate: '31-12-2023' },
  { id: 5, roleName: 'Moderator', fromDate: '01-01-2023', toDate: '31-12-2023' },
  { id: 6, roleName: 'Super Admin', fromDate: '01-01-2023', toDate: '31-12-2023' },
];

const DashBoard2 = () => {
    const [isOpen,setIsOpen]=useState(false)
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

    return (
        <div className='h-[100vh] flex'>
            <div className="bg-[#439bff] w-[250px] h-full">
                <div className="h-[80px] bg-white flex justify-center items-center gap-2">
                <img src="/image/logo frame.svg" alt="Logo" className="h-[46px] w-[46px]" />
                <span className='text-2xl font-normal'>DENTIIFY</span>
                </div>
                <div className="px-5 py-9 flex flex-col gap-4">
                <div className="h-8 bg-[#FFFFFF] rounded-lg flex items-center gap-3 px-3">
                    <RolesIcon />
                    <span className="text-xs font-medium text-[#439bff]">Role</span>
                </div>
                <div className="h-8 rounded-lg flex items-center gap-3 px-3">
                    <img src="/image/sidebar/Users icon.svg" alt="" />
                    <span className="text-xs font-medium text-white">Users</span>
                </div>
                <div className="h-8 rounded-lg flex items-center gap-3 px-3">
                    <img src="/image/sidebar/Users icon.svg" alt="" />
                    <span className="text-xs font-medium text-white">Products</span>
                </div>
                <div className="h-8 rounded-lg flex items-center gap-3 px-3">
                    <img src="/image/sidebar/Users icon.svg" alt="" />
                    <span className="text-xs font-medium text-white">Service</span>
                </div>
                <div className="h-8 rounded-lg flex items-center gap-3 px-3">
                    <img src="/image/sidebar/Users icon.svg" alt="" />
                    <span className="text-xs font-medium text-white">Service Provider</span>
                </div>
                <div className="h-8 rounded-lg flex items-center gap-3 px-3">
                    <img src="/image/sidebar/Users icon.svg" alt="" />
                    <span className="text-xs font-medium text-white">Materials</span>
                </div>
                <div className="h-8 rounded-lg flex items-center gap-3 px-3">
                    <img src="/image/sidebar/jobs.svg" alt="" />
                    <span className="text-xs font-medium text-white">Jobs</span>
                </div>
                <div className="h-8 rounded-lg flex items-center gap-3 px-3">
                    <img src="/image/sidebar/Users icon.svg" alt="" />
                    <span className="text-xs font-medium text-white">Courses</span>
                </div>
                </div>
            </div>
            
            <div className="h-full flex-1">
                <div className="bg-white h-[80px] px-6 flex items-center justify-between">
                    <span className="text-2xl font-bold">Roles</span>
                    <div className="flex items-center gap-5">
                        <div className="bg-[#f7fbff] rounded-full w-11 h-11 flex items-center justify-center"><NotificationIcon /></div>
                        <div className="bg-[#f7fbff] rounded-full w-11 h-11 flex items-center justify-center"><ProfileIcon/></div>
                    </div>
                </div>
                {/* searching sorting */}
                <div className="">
                    <div className=" h-[80px] px-6 flex items-center justify-between">
                        <span className="text-2xl w-16 h-9" style={{color:'#131313',fontFamily: 'Montserrat',fontSize:'24px',lineHeight:'38px',left:'24px'}}>Roles</span>
                        <div className="flex items-center gap-4">
                            {/* Search Input */}
                            <div className="flex items-center border rounded-lg bg-white shadow-sm" style={{ top:'104px', height: '48px', opacity: 1, border: '1px solid #EAE5FF', boxShadow: '0px 0px 4px 1px #00000033' }}>
                                <input type="search" placeholder="Search" className="outline-none text-sm placeholder-gray-500 px-3 py-2 rounded-l-lg"  style={{ fontFamily: 'Montserrat', padding: '10px 12px', height: '100%', borderRadius: '8px 0 0 8px' }}  />
                                <img src="/image/action/search-normal.svg" alt="Search" className="w-9 h-5 " style={{color:'#131313'}} />
                            </div>
                            <div  className="flex items-center border rounded-lg px-3 py-2 bg-white shadow-sm"  style={{width:'115px',height:'48px',borderRadius:'8px',border:'1px solid #EAE5FF',gap:'16px',padding:'10px 12px 10px 12px',gap:'16px'}}>
                                <input type="text" value={'Type All'} className="outline-none text-sm placeholder-gray-500"  style={{ fontFamily: 'Montserrat',marginRight: '4px' }}/>
                                <img src="/image/action/Down Arrow.svg" alt="Dropdown" className=" w-6 h-6"  style={{marginLeft:'-7.5rem'}} />
                            </div>
                            <div  className="flex items-center border rounded-lg px-3 py-2 bg-white shadow-sm"  style={{width:'108px',height:'48px',borderRadius:'8px',border:'1px solid #EAE5FF',gap:'16px',padding:'10px 12px 10px 12px'}}>
                                <input type="text" value={'sort by'} className="outline-none text-sm placeholder-gray-500"  style={{ fontFamily: 'Montserrat',marginRight: '4px' }}/>
                                <img src="/image/action/Down Arrow.svg" alt="Dropdown" className=" w-6 h-6"  style={{marginLeft:'-7.5rem'}} />
                            </div>
                            <div  className="flex items-center border rounded-lg px-3 py-2 bg-white shadow-sm" style={{width:'103px',height:'48px',borderRadius:'8px',border:'1px solid #EAE5FF',gap:'16px',padding:'10px 12px 10px 12px'}}>
                                <input type="text" value={'status'} className="outline-none text-sm placeholder-gray-500"  style={{ fontFamily: 'Montserrat',marginRight: '4px' }}/>
                                <img src="/image/action/Down Arrow.svg" alt="Dropdown" className=" w-6 h-6 " style={{marginLeft:'-8.5rem'}} />
                            </div>
                            <div className="bg-[#115CC9] flex items-center justify-center text-white px-4 py-2 rounded-lg shadow-sm cursor-pointer">
                                <button style={{ fontFamily: 'Montserrat' }} className="flex items-center gap-2">
                                    <span className="text-xl font-bold">+</span> Create Role
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card */}
                <div className="bg-[#f7fbff] h-full py-6 px-6">
                    <div className="bg-white w-full rounded-xl border border-[#EAE5FF] py-4 px-3">
                        <div className="relative overflow-x-auto sm:rounded-lg">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                    <tr>
                                        <th scope="col" className="w-[64px] h-[40px] px-4 py-2 border-b border-[#EAE5FF]" style={{ fontFamily: 'Montserrat', color: '#090713' }}>Sr.</th>
                                        <th scope="col" className="w-[410px] h-[40px] px-4 py-2 border-b border-[#EAE5FF]" style={{ fontFamily: 'Montserrat', color: '#090713' }}>Role Name</th>
                                        <th scope="col" className="w-[410px] h-[40px] px-4 py-2 border-b border -[#EAE5FF]" style={{ fontFamily: 'Montserrat', color: '#090713' }}>From Date</th>
                                        <th scope="col" className="w-[410px] h-[40px] px-4 py-2 border-b border-[#EAE5FF]" style={{ fontFamily: 'Montserrat', color: '#090713' }}>To Date</th>
                                        <th scope="col" className="w-[180px] h-[40px] px-4 py-2 border-b border-[#EAE5FF]" style={{ fontFamily: 'Montserrat', color: '#090713' }}>Action</th>
                                        <th scope="col" className="w-[100px] h-[40px] px-4 py-2 border-b border-[#EAE5FF]" style={{ fontFamily: 'Montserrat', color: '#090713' }}>View</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {roleData.map((role, index) => (
                                        <tr key={role.id} className="bg-white hover:bg-gray-50">
                                            <td className="px-4 py-2 border-b border-[#EAE5FF]">{index + 1}</td>
                                            <td className="px-4 py-2 border-b border-[#EAE5FF]">{role.roleName}</td>
                                            <td className="px-4 py-2 border-b border-[#EAE5FF]">{role.fromDate}</td>
                                            <td className="px-4 py-2 border-b border-[#EAE5FF]">{role.toDate}</td>
                                            <td className="px-4 py-2 border-b border-[#EAE5FF]">
                                                <div className='flex gap-2'>
                                                    <div className="relative group">
                                                        <div className="flex items-center justify-center w-[40px] h-[40px] bg-[#F7FBFF] rounded-[10px] cursor-pointer">
                                                            <img src="/image/action/Frame 33573.svg"  alt="Edit" className='size-6' />
                                                        </div>
                                                        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-1 w-max bg-gray-700 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">Edit</span>
                                                    </div>
                                                    <div className="relative group">
                                                        <div className="flex items-center justify-center w-[40px] h-[40px] bg-[#F7FBFF] rounded-[10px] cursor-pointer">
                                                            <img src="/image/action/Frame 33572 (2).svg" alt="Delete" className='size-6' onClick={() => handleDelete(role.id)} />
                                                        </div>
                                                        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-1 w-max bg-gray-700 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">Delete</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-2 border-b border-[#EAE5FF]">
                                                <div className='flex gap-2'>
                                                    <div className="relative group">
                                                        <div className="flex items-center justify-center w-[40px] h-[40px] bg-[#F7FBFF] rounded-[10px] cursor-pointer">
                                                            <img src="/image/action/Frame 33574 (2).svg" alt="View" className='size-6' />
                                                        </div>
                                                        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-1 w-max bg-gray-700 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">View</span>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="mt-6"> {/* Added margin-top for spacing */}
                                <nav className=" pt-4 " aria-label="Table navigation">
                                    <div className="flex  justify-between"> {/* Wrap showing text and pagination in a div */}
                                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-[104px] h-[18px] ">
                                            Showing <span className="font-semibold text-gray-900">01</span> of <span className="font-semibold text-gray-900">{roleData.length}</span>
                                        </span>
                                        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8 w-[276px]">
                                            <li>
                                                <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white  rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                                    <img src="/image/action/Left Arrow.svg" alt="Left" /> Previous
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" style={{font:'Poppins',color:'#090713',fontWeight:'400px',fontSize:'12px',lineHeight:'18px'}}>
                                                    Page 01 of 01
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" style={{borderRadius:'6px',gap:'8px',background: '#115CC9',color:'#ffffff'}}>
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

export default DashBoard2;