import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import './AdminList.css'; // Custom CSS file for additional styles

const AdminList = () => {
    const [admins, setAdmins] = useState([]);
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
            setAdmins(admins.filter(admin => admin.id !== adminId));
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
            setAdmins(admins.map(admin => admin.id === adminId ? { ...admin, ...editForm } : admin));
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
            setAdmins([...admins, response.data.admin]);
            setShowAddModal(false);
        } catch (error) {
            console.error('Error adding admin:', error);
        }
    };

    return (
        <div className="admin-container">
            <div className="header">
                <h1 className="title">Admins</h1>
                <div className="icons">
                    <NotificationsIcon className="icon" />
                    <PersonIcon className="icon" />
                </div>
            </div>
            <div className="sub-header">
                <h1 className='title'>Admin List</h1>
                <div className="icons">
                    <div className="search-container">
                        <input type="text" className="search-input" placeholder="Search admins..." />
                        <SearchIcon className="search-icon" />
                    </div>
                    <Button variant="primary" className="mb-4" onClick={() => setShowAddModal(true)}>+ Create</Button>
                </div>
            </div>
            <div className="tbl-container">
                <Table bordered hover className="admin-table">
                    <thead>
                        <tr>
                            <th>Sr No</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>User Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {admins.map((admin, index) => (
                            <tr key={admin.id}>
                                <td>{index + 1}</td>
                                <td>{admin.username}</td>
                                <td>{admin.password}</td>
                                <td>{admin.userType}</td>
                                <td>
                                    <Button variant="" className="mr-2" onClick={() => confirmEdit(admin)}><BorderColorOutlinedIcon /></Button>
                                    <Button variant="" onClick={() => confirmDelete(admin)}><DeleteOutlineOutlinedIcon /></Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
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
    );
};

export default AdminList;
