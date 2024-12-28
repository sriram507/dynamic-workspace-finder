import axios from "axios";

const API_URL = "https://api.example.com/workspaces";

export const fetchWorkspaces = async (location) => {
    try {
        const response = await axios.get(`${API_URL}?location=${location}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching workspaces:", error);
        throw error;
    }
};
