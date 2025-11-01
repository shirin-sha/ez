import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Check if user is already logged in (from localStorage)
        const authToken = localStorage.getItem('adminAuthToken');
        const userData = localStorage.getItem('adminUser');
        
        if (authToken && userData) {
            setIsAuthenticated(true);
            setUser(JSON.parse(userData));
        }
        setIsLoading(false);
    }, []);

    const login = async (username, password) => {
        setIsLoading(true);
        
        try {
            const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
            const response = await fetch(`${API_URL}/api/admin/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (data.success) {
                const userData = data.user;
                const token = data.token || 'admin-token-' + Date.now();
                
                localStorage.setItem('adminAuthToken', token);
                localStorage.setItem('adminUser', JSON.stringify(userData));
                
                setIsAuthenticated(true);
                setUser(userData);
                setIsLoading(false);
                return { success: true };
            } else {
                setIsLoading(false);
                return { success: false, error: data.error || 'Login failed. Please try again.' };
            }
        } catch (error) {
            console.error('Login error:', error);
            setIsLoading(false);
            return { success: false, error: 'Unable to connect to server. Please try again later.' };
        }
    };

    const logout = () => {
        localStorage.removeItem('adminAuthToken');
        localStorage.removeItem('adminUser');
        setIsAuthenticated(false);
        setUser(null);
    };

    const value = {
        isAuthenticated,
        isLoading,
        user,
        login,
        logout
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

