import axios from 'axios';

const initAPI = async (endpoint) => {
    const baseUrl = import.meta.env.VITE_APP_API_BASE_URL;

    try {
        const response = await axios({
            method: 'GET',
            maxBodyLength: Infinity,
            url: `${baseUrl}${endpoint}`,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching data from API:', error);
        throw error;  // Rethrow the error after handling
    }
};

export default initAPI;
