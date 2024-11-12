import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Sidebar from '../components/SideBar';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

// Dummy data
const initialRows = [
  { id: 1, name: 'Role name 1', hospitalName: 'Hospital A', email: 'hospitalA@example.com', mobileNo: '1234567890', qualification: 'MBBS', fromDate: '30-09-2024', toDate: '30-09-2024' },
  { id: 2, name: 'Role name 2', hospitalName: 'Hospital B', email: 'hospitalB@example.com', mobileNo: '2345678901', qualification: 'MD', fromDate: '01-10-2024', toDate: '01-11-2024' },
  { id: 3, name: 'Role name 3', hospitalName: 'Hospital C', email: 'hospitalC@example.com', mobileNo: '3456789012', qualification: 'BDS', fromDate: '01-11-2024', toDate: '30-11-2024' },
  { id: 4, name: 'Role name 4', hospitalName: 'Hospital D', email: 'hospitalD@example.com', mobileNo: '4567890123', qualification: 'BAMS', fromDate: '01-12-2024', toDate: '31-12-2024' },
  { id: 5, name: 'Role name 5', hospitalName: 'Hospital E', email: 'hospitalE@example.com', mobileNo: '5678901234', qualification: 'BHMS', fromDate: '01-01-2025', toDate: '31-01-2025' },
  { id: 6, name: 'Role name 6', hospitalName: 'Hospital F', email: 'hospitalF@example.com', mobileNo: '6789012345', qualification: 'MBBS', fromDate: '01-02-2025', toDate: '28-02-2025' },
];

const JobsList = () => {
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
      navigate('/create-job')
    }
    return (
        <div className='h-screen flex'>
        {/* sidebar */}
            <Sidebar />
            
            <div className="flex flex-1 flex-col">
            {/* header */}
                <Header />
                {/* searching sorting  and main content area*/}
                <div className=" px-6 py-3 flex items-center justify-between">
                    <span className="text-xl sm:text-2xl w-16 h-9" style={{color:'#131313',fontFamily: 'Montserrat',fontSize:'24px',lineHeight:'38px',left:'24px'}}>Roles</span>
                    <div className="flex items-center gap-4">
                         {/* Search Input */}
                         <div className="hidden sm:flex  items-center border rounded-lg bg-white shadow-sm" style={{ top:'104px', height: '48px', opacity: 1, border: '1px solid #EAE5FF', boxShadow: '0px 0px 4px 1px #00000033' }}>
                            <input type="search" placeholder="Search" className="outline-none text-sm placeholder-gray-500 px-3 py-2 rounded-l-lg"  style={{ fontFamily: 'Montserrat', padding: '10px 12px', height: '100%', borderRadius: '8px 0 0 8px' }}  />
                            <img src="/image/action/search-normal.svg" alt="Search" className="w-9 h-5 " style={{color:'#131313'}} />
                        </div>
                        <div className="bg-[#115CC9] flex items-center justify-center text-white  px-2.5 py-1 sm:px-4 sm:py-2  rounded-lg shadow-sm cursor-pointer">
                            <button style={{ fontFamily: 'Montserrat' }} className="flex items-center gap-2" onClick={()=>{navigateToCreateUser()}}>
                                <span className="text-xl font-bold ">+</span> 
                                <span className='hidden sm:inline'>Create Jobs</span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* card */}
                <div className="bg-[#f7fbff] h-full py-6 px-6 " style={{width:'1000px',overflow:'scroll'}}>
                    <div className="bg-white w-full rounded-xl border border-[#EAE5FF] py-4 px-3 " style={{overflowX:'scroll'}}>
                        <div className="relative overflow-x-auto sm:rounded-lg">
                            <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 divide-y divide-gray-200">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                    <tr>
                                        <th scope="col" className="w-[64px]  h-[40px] px-4 py-2 border-b border-[#EAE5FF] text-left text-xs  font-medium tracking-wider" style={{ fontFamily: 'Montserrat', color: '#090713' }}>Sr.</th>
                                        <th scope="col" className="w-[205px] h-[40px] px-4 py-2 border-b border-[#EAE5FF] text-left text-xs font-medium tracking-wider" style={{ fontFamily: 'Montserrat', color: '#090713' }}>Opportunity</th>
                                        <th scope="col" className="w-[205px] h-[40px] px-4 py-2 border-b border-[#EAE5FF] text-left text-xs font-medium tracking-wider" style={{ fontFamily: 'Montserrat', color: '#090713' }}>Hospital Name</th>
                                        <th scope="col" className="w-[205px] h-[40px] px-4 py-2 border-b border-[#EAE5FF] text-left text-xs font-medium tracking-wider" style={{ fontFamily: 'Montserrat', color: '#090713' }}>Email</th>
                                        <th scope="col" className="w-[205px] h-[40px] px-4 py-2 border-b border-[#EAE5FF] text-left text-xs font-medium tracking-wider" style={{ fontFamily: 'Montserrat', color: '#090713' }}>Mobile No</th>
                                        <th scope="col" className="w-[205px] h-[40px] px-4 py-2 border-b border-[#EAE5FF] text-left text-xs font-medium tracking-wider" style={{ fontFamily: 'Montserrat', color: '#090713' }}>Qualification</th>
                                        <th scope="col" className="w-[205px] h-[40px] px-4 py-2 border-b border-[#EAE5FF] text-left text-xs font-medium tracking-wider" style={{ fontFamily: 'Montserrat', color: '#090713' }}>To Date </th>
                                        <th scope="col" className="w-[180px] h-[40px] px-4 py-2 border-b border-[#EAE5FF] text-left text-xs font-medium tracking-wider" style={{ fontFamily: 'Montserrat', color: '#090713' }}>Action</th>
                                        <th scope="col" className="w-[100px] h-[40px] px-4 py-2 border-b border-[#EAE5FF] text-left text-xs font-medium tracking-wider" style={{ fontFamily: 'Montserrat', color: '#090713' }}>View</th>
                                    </tr>
                                </thead>
                                <tbody className='divide-y divide-gray-200'>
                                    {initialRows.map((role,index)=>(
                                        <tr key={index}>
                                            <td className="px-4 py-2 border-b border-[#EAE5FF] whitespace-nowrap">{index + 1}</td>
                                            <td className="px-4 py-2 border-b border-[#EAE5FF] whitespace-nowrap">{role.name}</td>
                                            <td className="px-4 py-2 border-b border-[#EAE5FF] whitespace-nowrap">{role.hospitalName}</td>
                                            <td className="px-4 py-2 border-b border-[#EAE5FF] whitespace-nowrap">{role.email}</td>
                                            <td className="px-4 py-2 border-b border-[#EAE5FF] whitespace-nowrap">{role.mobileNo}</td>
                                            <td className="px-4 py-2 border-b border-[#EAE5FF] whitespace-nowrap">{role.qualification}</td>
                                            <td className="px-4 py-2 border-b border-[#EAE5FF] whitespace-nowrap">{role.toDate}</td>
                                            <td className="px-4 py-2 border-b border-[#EAE5FF] whitespace-nowrap" style={{position:'sticky'}}>
                                                <div className='flex gap-2  '>
                                                    <div className="relative group">
                                                        <div className="flex items-center justify-center w-[40px] h-[40px] bg-[#F7FBFF] rounded-[10px] cursor-pointer ">
                                                            <img src="/image/action/Frame 33573.svg" alt="Edit" className='size-6' />
                                                        </div>
                                                        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-1 w-max bg-gray-700 text-white text-xs rounded py-1 px-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">Edit</span>
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
                            <div className="mt-6">
                                <nav className="pt-4" aria-label="Table navigation">
                                    <div className="flex justify-between">
                                        <span className="text-sm font-normal text-gray-500 mb-4 md:mb-0 block w-[104px] h-[18px] ">
                                            Showing <span className="font-semibold text-gray-900">01</span> of <span className="font-semibold text-gray-900">{initialRows.length}</span>
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

export default JobsList;