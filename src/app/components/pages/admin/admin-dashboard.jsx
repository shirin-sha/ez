import { useState, useEffect } from 'react';
import { useAuth } from '../../../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { route } from '../../../../globals/constants';

function AdminDashboard() {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [contactCount, setContactCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchContactCount();
    }, []);

    const fetchContactCount = async () => {
        try {
            const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
            const response = await fetch(`${API_URL}/api/contacts`);
            const data = await response.json();

            if (data.success) {
                setContactCount(data.count || 0);
            }
        } catch (error) {
            console.error('Fetch contact count error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="section-full p-t80 p-b80">
            <div className="container">
                <div className="section-head m-b50">
                    <h2>Dashboard Overview</h2>
                    <div className="mt-separator-outer m-b30">
                        <div className="mt-separator site-bg-primary" />
                    </div>
                    <p>Welcome back, <strong>{user?.username}</strong>!</p>
                </div>

                <div className="section-content">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 m-b30">
                            <div 
                                className="mt-icon-box-wraper center p-a30 bg-gray" 
                                style={{ cursor: 'pointer' }}
                                onClick={() => navigate(route.admin.MESSAGES)}
                            >
                                <div className="icon-sm m-b10">
                                    <i className="iconmoon-smartphone-1" style={{ fontSize: '40px' }} />
                                </div>
                                <div className="icon-content">
                                    <h4 className="site-text-primary">Messages</h4>
                                    <p>{loading ? '...' : contactCount}</p>
                                    <small>Contact form submissions</small>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 m-b30">
                            <div className="mt-icon-box-wraper center p-a30 bg-gray">
                                <div className="icon-sm m-b10">
                                    <i className="iconmoon-email" style={{ fontSize: '40px' }} />
                                </div>
                                <div className="icon-content">
                                    <h4 className="site-text-primary">Users</h4>
                                    <p>1</p>
                                    <small>Total admin users</small>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 m-b30">
                            <div className="mt-icon-box-wraper center p-a30 bg-gray">
                                <div className="icon-sm m-b10">
                                    <i className="iconmoon-travel" style={{ fontSize: '40px' }} />
                                </div>
                                <div className="icon-content">
                                    <h4 className="site-text-primary">Services</h4>
                                    <p>0</p>
                                    <small>Active services</small>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 m-b30">
                            <div className="mt-icon-box-wraper center p-a30 bg-gray">
                                <div className="icon-sm m-b10">
                                    <i className="fa fa-chart-line" style={{ fontSize: '40px' }} />
                                </div>
                                <div className="icon-content">
                                    <h4 className="site-text-primary">Analytics</h4>
                                    <p>-</p>
                                    <small>View reports</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row m-t50">
                        <div className="col-md-12">
                            <div className="p-a30 bg-gray radius-10">
                                <h4 className="m-b20">Quick Actions</h4>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>Your admin panel is ready. Add more features as needed:</p>
                                        <ul className="m-t20">
                                            <li>Contact form submissions management</li>
                                            <li>Content management system</li>
                                            <li>User management</li>
                                            <li>Analytics & reports</li>
                                            <li>Service management</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-a20 bg-white radius-10">
                                            <h5 className="m-b15">System Status</h5>
                                            <p><strong>MongoDB:</strong> <span className="site-text-primary">Connected</span></p>
                                            <p><strong>Backend API:</strong> <span className="site-text-primary">Running</span></p>
                                            <p><strong>Version:</strong> 1.0.0</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
