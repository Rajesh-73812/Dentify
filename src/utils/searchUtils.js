import axios from "axios";
import { NotificationManager } from "react-notifications";

export const SearchEntity = async (entity, query) => {
    const BASE_URL = `http://localhost:5000`;
    try {
        let response;

        switch (entity) {
            case 'Country':
                response = await axios.get(`${BASE_URL}/countries/search`, {
                    params: { query },
                    withCredentials: true
                });
                break;

            case 'Category':
                response = await axios.get(`${BASE_URL}/categories/search`, {
                    params: { query },
                    withCredentials: true
                });
                break;

            case 'Coupon':
                response = await axios.get(`${BASE_URL}/coupons/search`, {
                    params: { query },
                    withCredentials: true
                });
                break;

            case 'Page':
                response = await axios.get(`${BASE_URL}/pages/search`, {
                    params: { query },
                    withCredentials: true
                });
                break;

            case 'Faq':
                response = await axios.get(`${BASE_URL}/faq/search`, {
                    params: { query },
                    withCredentials: true
                });
                break;

            default:
                throw new Error(`Unknown entity: ${entity}`);
        }

        // Assuming the response contains the search results
        NotificationManager.success(`${entity} search completed successfully!`);
        return response.data; // Return the search results
    } catch (error) {
        console.error(error);
        NotificationManager.error(`Failed to search ${entity}.`);
        throw error;
    }
};

const handleSearch = async () => {
    try {
        const entity = 'Country'; // Change this based on your needs
        const searchResults = await SearchEntity(entity, query);
        setResults(searchResults);
    } catch (error) {
        console.error("Search error:", error);
    }
};