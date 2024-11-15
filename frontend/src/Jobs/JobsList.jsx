import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Sidebar from '../components/SideBar';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import JobHeader from './JobHeader';

// Dummy data
const initialRows = [
  { id: 1, name: 'Role name 1', hospitalName: 'Hospital A', email: 'hospitalA@example.com', mobileNo: '1234567890', qualification: 'MBBS', fromDate: '30-09-2024', toDate: '30-09-2024' },
  { id: 2, name: 'Role name 2', hospitalName: 'Hospital B', email: 'hospitalB@example.com', mobileNo: '2345678901', qualification: 'MD', fromDate: '01-10-2024', toDate: '01-11-2024' },
  { id: 3, name: 'Role name 3', hospitalName: 'Hospital C', email: 'hospitalC@example.com', mobileNo: '3456789012', qualification: 'BDS', fromDate: '01-11-2024', toDate: '30-11-2024' },
  { id: 4, name: 'Role name 4', hospitalName: 'Hospital D', email: 'hospitalD@example.com', mobileNo: '4567890123', qualification: 'BAMS', fromDate: '01-12-2024', toDate: '31-12-2024' },
  { id: 5, name: 'Role name 5', hospitalName: 'Hospital E', email: 'hospitalE@example.com', mobileNo: '5678901234', qualification: 'BHMS', fromDate: '01-01-2025', toDate: '31-01-2025' },
  { id: 6, name: 'Role name 6', hospitalName: 'Hospital F', email: 'hospitalF@example.com', mobileNo: '6789012345', qualification: 'MBBS', fromDate: '01-02-2025', toDate: '28-02-2025' },
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
            
            <div className="flex flex-1 flex-col bg-[#f7fbff]">
            {/* header */}
                <Header />
                {/* searching sorting  and main content area*/}
                {/* <div className='h-screen overflow-x-auto' style={{scrollbarWidth:'none'}}> */}
                 <JobHeader />
                    {/* card */}
                    <div className=" h-full py-6 px-6 w-[1000px]" style={{overflow:'scroll',scrollbarWidth:'none'}} >
                        <div className="bg-white w-[100%] rounded-xl border border-[#EAE5FF] py-4 px-3 " style={{overflowX:'scroll',scrollbarWidth:'none'}} >
                            <div className="relative  sm:rounded-lg">
                                <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 divide-y divide-gray-200">
                                    <thead className="text-xs text-gray-700  bg-gray-50">
                                        <tr>
                                            <th scope="col" className="min-w-16  h-10 px-4 py-2 border-b border-[#EAE5FF] text-left text-xs  font-medium tracking-wider" style={{ fontFamily: 'Montserrat', color: '#090713' }}>Sr.</th>
                                            <th scope="col" className="min-w-[205px] h-10 px-4 py-2 border-b border-[#EAE5FF] text-left text-xs font-medium tracking-wider" style={{ fontFamily: 'Montserrat', color: '#090713' }}>Opportunity</th>
                                            <th scope="col" className="min-w-[205px] h-10 px-4 py-2 border-b border-[#EAE5FF] text-left text-xs font-medium tracking-wider" style={{ fontFamily: 'Montserrat', color: '#090713' }}>Hospital Name</th>
                                            <th scope="col" className="min-w-[205px] h-10 px-4 py-2 border-b border-[#EAE5FF] text-left text-xs font-medium tracking-wider" style={{ fontFamily: 'Montserrat', color: '#090713' }}>Email</th>
                                            <th scope="col" className="min-w-[205px] h-10 px-4 py-2 border-b border-[#EAE5FF] text-left text-xs font-medium tracking-wider" style={{ fontFamily: 'Montserrat', color: '#090713' }}>Mobile No</th>
                                            <th scope="col" className="min-w-[205px] h-10 px-4 py-2 border-b border-[#EAE5FF] text-left text-xs font-medium tracking-wider" style={{ fontFamily: 'Montserrat', color: '#090713' }}>Qualification</th>
                                            <th scope="col" className="min-w-[205px] h-10 px-4 py-2 border-b border-[#EAE5FF] text-left text-xs font-medium tracking-wider" style={{ fontFamily: 'Montserrat', color: '#090713' }}>To Date </th>
                                            <th scope="col" className="min-w-[180px] h-10 px-4 py-2 border-b border-[#EAE5FF] text-left text-xs font-medium tracking-wider" style={{ fontFamily: 'Montserrat', color: '#090713' }}>Action</th>
                                            <th scope="col" className="min-w-[100px] h-10 px-4 py-2 border-b border-[#EAE5FF] text-left text-xs font-medium tracking-wider" style={{ fontFamily: 'Montserrat', color: '#090713' }}>View</th>
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

export default JobsList;