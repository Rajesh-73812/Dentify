<div className=" px-6 py-3 flex items-center justify-between">
<span className="text-xl sm:text-2xl w-16 h-9" style={{color:'#131313',fontFamily: 'Montserrat',fontSize:'24px',lineHeight:'38px',left:'24px'}}>Roles</span>
<div className="flex items-center gap-4">
    {/* Search Input */}
    <div className="hidden sm:flex  items-center border rounded-lg bg-white shadow-sm" style={{ top:'104px', height: '48px', opacity: 1, border: '1px solid #EAE5FF', boxShadow: '0px 0px 4px 1px #00000033' }}>
        <input type="search" placeholder="Search" className="outline-none text-sm placeholder-gray-500 px-3 py-2 rounded-l-lg"  style={{ fontFamily: 'Montserrat', padding: '10px 12px', height: '100%', borderRadius: '8px 0 0 8px' }}  />
        <img src="/image/action/search-normal.svg" alt="Search" className="w-9 h-5 " style={{color:'#131313'}} />
    </div>
    <div className="relative inline-block text-left">
<div className="flex items-center border rounded-lg bg-white shadow-sm cursor-pointer" style={{ width: '115px', height: '48px', borderRadius: '8px', border: '1px solid #EAE5FF' }} onClick={toggleTypeDropdown}>
    <input type="text" readOnly value={typeValue} className="outline-none text-sm placeholder-gray-500 px-3 py-2 rounded-l-lg" style={{ fontFamily: 'Montserrat', width: '100%' }} />
    <img src="/image/action/Down Arrow.svg" alt="Dropdown" className="w-6 h-6" style={{ marginLeft: '-8px' }} />
</div>

{isTypeOpen && (
    <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" tabIndex="-1">
        <div className="py-1" role="none">
            <a href="#" onClick={() => handleTypeSelect('type 1')} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">type 1</a>
            <div className="border-t border-gray-200"></div> {/* Divider */}
            <a href="#" onClick={() => handleTypeSelect('type 2')} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">type 2</a>
            <div className="border-t border-gray-200"></div> {/* Divider */}
            <a href="#" onClick={() => handleTypeSelect('type 3')} className="block px-4 py-2 text-sm text-gray-700" role=" menuitem" tabIndex="-1">type 3</a>
        </div>
    </div>
)}
</div>

{/* Sort By Dropdown */}
<div className="relative inline-block text-left">
<div className="flex items-center border rounded-lg bg-white shadow-sm cursor-pointer" style={{ width: '108px', height: '48px', borderRadius: '8px', border: '1px solid #EAE5FF' }} onClick={toggleSortDropdown}>
    <input type="text" readOnly value={sortValue} className="outline-none text-sm placeholder-gray-500 px-3 py-2 rounded-l-lg" style={{ fontFamily: 'Montserrat', width: '100%' }} />
    <img src="/image/action/Down Arrow.svg" alt="Dropdown" className="w-6 h-6" style={{ marginLeft: '-8px' }} />
</div>

{isSortOpen && (
    <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" tabIndex="-1">
        <div className="py-1" role="none">
            <a href="#" onClick={() => handleSortSelect('sort by 1')} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">sort by 1</a>
            <div className="border-t border-gray-200"></div> {/* Divider */}
            <a href="#" onClick={() => handleSortSelect('sort by 2')} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">sort by 2</a>
            <div className="border-t border-gray-200"></div> {/* Divider */}
            <a href="#" onClick={() => handleSortSelect('sort by 3')} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">sort by 3</a>
        </div>
    </div>
)}
</div>
    <div className="relative inline-block text-left">
        <div className="flex items-center border rounded-lg bg-white shadow-sm cursor-pointer" style={{ width: '103px', height: '48px', borderRadius: '8px', border: '1px solid #EAE5FF' }} onClick={toggleDropdown}>
            <input type="text" readOnly value={selectedStatus} className="outline-none text-sm placeholder-gray-500 px-3 py-2 rounded-l-lg" style={{ fontFamily: 'Montserrat', width: '100%' }} />
            <img src="/image/action/Down Arrow.svg" alt="Dropdown" className="w-6 h-6" style={{ marginLeft: '-8px' }} />
        </div>

        {isOpen && (
            <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" tabIndex="-1">
                <div className="py-1" role="none">
                    <a href="#" onClick={() => handleStatusSelect('Active')} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">Active</a>
                    <div className="border-t border-gray-200"></div> {/* Divider */}
                    <a href="#" onClick={() => handleStatusSelect('Inactive')} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">Inactive</a>
                    <div className="border-t border-gray-200"></div> {/* Divider */}
                    <a href="#" onClick={() => handleStatusSelect('Pending')} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">Pending</a>
                </div>
            </div>
        )}
    </div>
    <div className="bg-[#115CC9] flex items-center justify-center text-white  px-2.5 py-1 sm:px-4 sm:py-2  rounded-lg shadow-sm cursor-pointer">
        <button style={{ fontFamily: 'Montserrat' }} className="flex items-center gap-2" onClick={()=>{navigateToAddRole()}}>
            <span className="text-xl font-bold ">+</span> 
            <span className='hidden sm:inline'>Create Role</span>
        </button>
    </div>
</div>
</div>