import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from "../api";
import { toast } from 'react-toastify';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const logoutUser = async () => {
            try {
                const response = await api.post("/logout");
                toast.success(response.data.message);
                navigate("/login");
            } catch (error) {
                console.error('Error logging out:', error);
                toast.error("Failed to log out. Please try again.");
            }
        };

        logoutUser();
    }, [navigate]);

    return null; 
};

export default Logout;
