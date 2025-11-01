import { useAuth } from '../contexts/AuthContext';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import { route } from '../globals/constants';

function AdminLayout({ children }) {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <div className="admin-wrapper">
            {/* Sidebar */}
            <div className="admin-sidebar">
                <div className="admin-sidebar-header">
                    <h3 className="site-text-primary">EZ Logistics</h3>
                    <p className="text-muted">Admin Panel</p>
                </div>
                
                <nav className="admin-sidebar-nav">
                    <ul>
                        <li>
                            <NavLink 
                                to={route.admin.MESSAGES}
                                className={({ isActive }) => isActive ? 'active' : ''}
                            >
                                <i className="fa fa-envelope" /> Messages
                            </NavLink>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-users" /> Users
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-cog" /> Settings
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Main Content Area */}
            <div className="admin-main">
                {/* Header */}
                <div className="admin-header">
                    <div className="admin-header-left">
                        <h4>Admin Panel</h4>
                    </div>
                    <div className="admin-header-right">
                        <span className="admin-user-info">
                            <i className="fa fa-user" /> {user?.username}
                        </span>
                        <button 
                            onClick={handleLogout}
                            className="site-button-secondry"
                            style={{ marginLeft: '15px' }}
                        >
                            <i className="fa fa-sign-out" /> Logout
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="admin-content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default AdminLayout;

