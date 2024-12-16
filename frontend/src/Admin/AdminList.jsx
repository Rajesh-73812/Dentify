import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Header from '../components/Header';
import { useLoading } from '../Context/LoadingContext';
import { useLocation, useNavigate } from 'react-router-dom';
import Loader from '../common/Loader';
import AdminHeader from './AdminHeader';

const AdminList = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const adminsPerPage = 5;
    const { isLoading, setIsLoading } = useLoading();
    const location = useLocation();
    const [admins, setAdmins] = useState([]);
    const [filteredAdmins, setFilteredAdmins] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [adminToDelete, setAdminToDelete] = useState(null);
    const [adminToEdit, setAdminToEdit] = useState(null);
    const [editForm, setEditForm] = useState({
        username: '',
        password: '',
        userType: ''
    });
    const [addForm, setAddForm] = useState({
        username: '',
        password: '',
        userType: ''
    });

    useEffect(() => {
        fetchAdmins();
    }, []);

    const fetchAdmins = async () => {
        try {
            const response = await axios.get('http://localhost:5000/admin/all-admins', {
                withCredentials: true,
            });
            setAdmins(response.data);
            setFilteredAdmins(response.data)
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching admins:', error);
        }
    };

    const handleDelete = async (adminId) => {
        try {
            await axios.delete(`http://localhost:5000/admin/delete/${adminId}?forceDelete=true`, {
                withCredentials: true,
            });
            // setAdmins(admins.filter(admin => admin.id !== adminId));
            const updatedAdmins = admins.filter(admin => admin.id !== adminId);
            setAdmins(updatedAdmins);
            setFilteredAdmins(updatedAdmins);
            setShowDeleteModal(false);
        } catch (error) {
            console.error('Error deleting admin:', error);
        }
    };

    const confirmDelete = (admin) => {
        setAdminToDelete(admin);
        setShowDeleteModal(true);
    };

    const confirmEdit = (admin) => {
        setAdminToEdit(admin);
        setEditForm({ username: admin.username, password: admin.password, userType: admin.userType });
        setShowEditModal(true);
    };

    const handleEditChange = (e) => {
        setEditForm({ ...editForm, [e.target.name]: e.target.value });
    };

    const handleUpdate = async (adminId) => {
        try {
            await axios.put(`http://localhost:5000/admin/update/${adminId}`, editForm, {
                withCredentials: true,
            });
            // setAdmins(admins.map(admin => admin.id === adminId ? { ...admin, ...editForm } : admin));
            const updatedAdmins = admins.map(admin => admin.id === adminId ? { ...admin, ...editForm } : admin);
            setAdmins(updatedAdmins);
            setFilteredAdmins(updatedAdmins);
            setShowEditModal(false);
        } catch (error) {
            console.error('Error updating admin:', error);
        }
    };

    const handleAddChange = (e) => {
        setAddForm({ ...addForm, [e.target.name]: e.target.value });
    };

    const handleAdd = async () => {
        try {
            const response = await axios.post('http://localhost:5000/admin/register', addForm, {
                withCredentials: true,
            });
            // setAdmins([...admins, response.data.admin]);
            const updatedAdmins = [...admins, response.data.admin];
            setAdmins(updatedAdmins);
            setFilteredAdmins(updatedAdmins);
            setShowAddModal(false);
        } catch (error) {
            console.error('Error adding admin:', error);
        }
    };

    const handleSearch = async (query) => {
        if (!query) {
            setFilteredAdmins(admins); // Reset to full list if the search box is cleared
            return;
        }
        try {
            const response = await axios.get(`http://localhost:5000/admin/search?username=${query}`, {
                withCredentials: true,
            });
            setFilteredAdmins(response.data);
            setCurrentPage(1); // Reset to the first page after search
        } catch (error) {
            console.error("Error searching admins:", error);
        }
    };

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, [location, setIsLoading])

    const indexOfLastAdmin = currentPage * adminsPerPage;
    const indexOfFirstAdmin = indexOfLastAdmin - adminsPerPage;
    const currentAdmins = admins.slice(indexOfFirstAdmin, indexOfLastAdmin, filteredAdmins);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            {isLoading && <Loader />}
            <div className="h-screen flex">
                <div className="flex flex-1 flex-col bg-[#f7fbff]">
                    <Header />
                    <AdminHeader setShowAddModal={setShowAddModal} onSearch={handleSearch} />
                    <div className="py-6 px-6 h-full w-[1000px] overflow-scroll scrollbar-none">
                        <div className="bg-white w-full rounded-xl border border-[#EAE5FF] py-4 px-3 overflow-x-auto scrollbar-none">
                            <div className="relative sm:rounded-lg">
                                <table className="min-w-full text-sm text-left text-gray-700">
                                    <thead className="bg-gray-50 text-xs uppercase font-medium text-gray-500">
                                        <tr>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                Sr. No
                                            </th>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                Username
                                            </th>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                Password
                                            </th>

                                            <th className="px-4 py-3 min-w-[150px]">
                                                User Type
                                            </th>
                                            <th className="px-4 py-3 min-w-[150px]">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {filteredAdmins.length > 0 ? (
                                            filteredAdmins.map((admin, index) => (
                                                <tr key={admin.id}>
                                                    <td className="px-4 py-3">{indexOfFirstAdmin + index + 1}</td>
                                                    <td className="px-4 py-3">{admin.username}</td>
                                                    <td className="px-4 py-3">{admin.password}</td>
                                                    <td className="px-4 py-3">{admin.userType}</td>
                                                    <td className="px-4 py-3">
                                                        <Button variant="" className="mr-2" onClick={() => confirmEdit(admin)}>
                                                            <BorderColorOutlinedIcon />
                                                        </Button>
                                                        <Button variant="" onClick={() => confirmDelete(admin)}>
                                                            <DeleteOutlineOutlinedIcon />
                                                        </Button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="5" className="text-center py-4">
                                                    No admins found.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="bottom-0 left-0 w-full bg-[#f7fbff] py-4 flex justify-between items-center">
                            <span className="text-sm font-normal text-gray-500">
                                Showing <span className="font-semibold text-gray-900">{indexOfFirstAdmin + 1}</span> to <span className="font-semibold text-gray-900">{Math.min(indexOfLastAdmin, admins.length)}</span> of <span className="font-semibold text-gray-900">{admins.length}</span>
                            </span>
                            <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                                <li>
                                    <button onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)} className="previous-button" disabled={currentPage === 1}>
                                        <img src="/image/action/Left Arrow.svg" alt="Left" /> Previous
                                    </button>
                                </li>
                                <li>
                                    <span className="current-page">
                                        Page {currentPage} of {Math.ceil(admins.length / adminsPerPage)}
                                    </span>
                                </li>
                                <li>
                                    <button onClick={() => paginate(currentPage < Math.ceil(admins.length / adminsPerPage) ? currentPage + 1 : Math.ceil(admins.length / adminsPerPage))} className="next-button" disabled={currentPage === Math.ceil(admins.length / adminsPerPage)}>
                                        Next <img src="/image/action/Right Arrow (1).svg" alt="Right" />
                                    </button>
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* Delete Confirmation Modal */}
                    <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Confirm Delete</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Are you sure you want to delete {adminToDelete?.username}?
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                                Cancel
                            </Button>
                            <Button variant="danger" onClick={() => handleDelete(adminToDelete?.id)}>
                                Delete
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    {/* Edit Admin Modal */}
                    <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Admin</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group controlId="formUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="username"
                                        value={editForm.username}
                                        onChange={handleEditChange} />
                                </Form.Group>
                                <Form.Group controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        value={editForm.password}
                                        onChange={handleEditChange} />
                                </Form.Group>
                                <Form.Group controlId="formUserType">
                                    <Form.Label>User Type</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="userType"
                                        value={editForm.userType}
                                        onChange={handleEditChange} />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShowEditModal(false)}>
                                Cancel
                            </Button>
                            <Button variant="primary" onClick={() => handleUpdate(adminToEdit?.id)}>
                                Update
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    {/* Add Admin Modal */}
                    <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Admin</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group controlId="formAddUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="username"
                                        value={addForm.username}
                                        onChange={handleAddChange} />
                                </Form.Group>
                                <Form.Group controlId="formAddPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        value={addForm.password}
                                        onChange={handleAddChange} />
                                </Form.Group>
                                <Form.Group controlId="formAddUserType">
                                    <Form.Label>User Type</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="userType"
                                        value={addForm.userType}
                                        onChange={handleAddChange} />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShowAddModal(false)}>
                                Cancel
                            </Button>
                            <Button variant="primary" onClick={handleAdd}>
                                Add
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default AdminList;
