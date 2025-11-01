import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../contexts/AuthContext';
import { route } from '../../../../globals/constants';
import Loader from '../../../../globals/elements/loader';

function AdminLoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { login, isAuthenticated, isLoading } = useAuth();
    const navigate = useNavigate();

    // Redirect if already authenticated
    useEffect(() => {
        if (!isLoading && isAuthenticated) {
            navigate(route.admin.MESSAGES);
        }
    }, [isAuthenticated, isLoading, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);

        const result = await login(username, password);
        
        if (result.success) {
            navigate(route.admin.MESSAGES);
        } else {
            setError(result.error || 'Login failed. Please try again.');
        }
        
        setIsSubmitting(false);
    };

    // Show loader while checking authentication
    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="section-full p-t80 p-b80" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5 col-sm-12">
                        <div className="p-a30 bg-gray radius-10">
                            <div className="section-head text-center m-b30">
                                <h2>Admin Login</h2>
                                <div className="mt-separator-outer m-b30">
                                    <div className="mt-separator site-bg-primary" />
                                </div>
                            </div>

                            {error && (
                                <div className="alert alert-danger m-b20" role="alert">
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="cons-contact-form">
                                <div className="form-group">
                                    <label htmlFor="username" className="m-b10">Username</label>
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        required
                                        className="form-control"
                                        placeholder="Enter username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password" className="m-b10">Password</label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        className="form-control"
                                        placeholder="Enter password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div className="form-group m-t30">
                                    <button
                                        type="submit"
                                        className="site-button-secondry admin-login-button"
                                        disabled={isSubmitting}
                                        style={{ width: '100%' }}
                                    >
                                        {isSubmitting ? 'Logging in...' : 'Login'}
                                    </button>
                                </div>
                            </form>

                         
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminLoginPage;

