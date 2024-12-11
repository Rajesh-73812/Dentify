import axios from "axios";
import { NotificationManager } from "react-notifications";
import Swal from "sweetalert2";

export const DeleteEntity = async (entity, id) => {
    const BASE_URL = `http://localhost:5000`;
    try {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'This action cannot be undone.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        });

        if (result.isConfirmed) {
            switch (entity) {
                case 'Country':
                    await axios.delete(`${BASE_URL}/countries/delete/${id}`, { withCredentials: true });
                    break;

                case 'Category':
                    await axios.delete(`${BASE_URL}/categories/delete/${id}`, { withCredentials: true });
                    break;

                case 'Cuppon':
                    await axios.delete(`${BASE_URL}/coupons/delete/${id}`, { withCredentials: true });
                    break;

                case 'Page':
                    await axios.delete(`${BASE_URL}/pages/delete/${id}`, { withCredentials: true });
                    break;

                case 'Faq':
                    await axios.delete(`${BASE_URL}/faq/delete/${id}`, { withCredentials: true });
                    break;

                default:
                    throw new Error(`Unknown entity: ${entity}`);
            }

            NotificationManager.success(`${entity} deleted successfully!`);
            return true; 
        } else {
            NotificationManager.info(`${entity} deletion was canceled.`);
            return false;
        }
    } catch (error) {
        console.error(error);
        NotificationManager.error(`Failed to delete ${entity}.`);
        throw error;
    }
};