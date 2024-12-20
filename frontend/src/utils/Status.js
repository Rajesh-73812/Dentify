import axios from "axios";
import { NotificationManager } from "react-notifications";

const BASE_URL = `http://localhost:5000`; // Ensure this matches your backend URL

export const StatusEntity = async (
  entityType,
  id,
  currentStatus,
  setData,
  data,
  field = ["status", "p_show", "s_show"]
) => {
  try {
    const newStatus = currentStatus === 1 ? 0 : 1;
    let url;

    switch (entityType) {
        case "Category":
          url = `${BASE_URL}/categories/toggle-status`; // Correct endpoint for Category
          break;
        case "Property":
        case "ExtraImage":
        case "Facility":
        case "Package":
        case "Coupon":
          url = `${BASE_URL}/coupons/toggle-status`;
          break;
        case "UserList":
          url = `${BASE_URL}/users/user/toggle-update`;
          break;
        case "Payment":
          url = `${BASE_URL}/payment-methods/toggle-status`; // Ensure this matches backend route
          break;
        default:
          throw new Error(`Invalid entity type: ${entityType}`);
      }
      
      // Send the request to toggle the status
      const response = await axios.patch(url, {
        id,
        field,
        value: newStatus,
      });
      
      // Update the local state if successful
      const updatedData = data.map((item) =>
        item.id === id ? { ...item, [field]: newStatus } : item
      );
      
      setData(updatedData);
      NotificationManager.removeAll();
      NotificationManager.success(`${entityType} ${field} updated successfully!`);
  } catch (error) {
    console.error("Error updating status:", error);
    NotificationManager.removeAll();
    NotificationManager.error("An error occurred while updating the status.");
  }
};
