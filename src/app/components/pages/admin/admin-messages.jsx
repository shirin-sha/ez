import { useState, useEffect } from 'react';
import { useAuth } from '../../../../contexts/AuthContext';

function AdminMessages() {
    const { user } = useAuth();
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        try {
            setLoading(true);
            const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
            const response = await fetch(`${API_URL}/api/contacts`);
            const data = await response.json();

            if (data.success) {
                setContacts(data.contacts || []);
            } else {
                setError(data.error || 'Failed to load contacts');
            }
        } catch (error) {
            console.error('Fetch contacts error:', error);
            setError('Unable to connect to server');
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        const date = new Date(dateString);
        return date.toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const getStatusBadge = (status) => {
        const badges = {
            'new': { class: 'bg-warning', text: 'New' },
            'read': { class: 'bg-info', text: 'Read' },
            'replied': { class: 'bg-success', text: 'Replied' }
        };
        const badge = badges[status] || badges['new'];
        return <span className={`badge ${badge.class} text-white`}>{badge.text}</span>;
    };

    if (loading) {
        return (
            <div className="section-full p-t80 p-b80">
                <div className="container">
                    <div className="text-center">
                        <p>Loading contacts...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="section-full p-t80 p-b80">
            <div className="container">
                <div className="section-head m-b50">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h2>Contact Messages</h2>
                            <div className="mt-separator-outer m-b30">
                                <div className="mt-separator site-bg-primary" />
                            </div>
                            <p>Total submissions: <strong>{contacts.length}</strong></p>
                        </div>
                        <button 
                            onClick={fetchContacts}
                            className="site-button-secondry"
                        >
                            <i className="fa fa-refresh" /> Refresh
                        </button>
                    </div>
                </div>

                {error && (
                    <div className="alert alert-danger m-b30" role="alert">
                        {error}
                    </div>
                )}

                {contacts.length === 0 ? (
                    <div className="text-center p-a50">
                        <p>No contact submissions yet.</p>
                    </div>
                ) : (
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped">
                            <thead className="bg-gray">
                                <tr>
                                    <th>Date</th>
                                    <th>Name</th>
                                    <th>Company</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Services</th>
                                    <th>Message</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact) => (
                                    <tr key={contact._id}>
                                        <td>{formatDate(contact.createdAt)}</td>
                                        <td><strong>{contact.fullName}</strong></td>
                                        <td>{contact.companyName}</td>
                                        <td>
                                            <a href={`mailto:${contact.email}`}>{contact.email}</a>
                                        </td>
                                        <td>
                                            <a href={`tel:${contact.mobile}`}>{contact.mobile}</a>
                                        </td>
                                        <td>
                                            {contact.services && contact.services.length > 0 ? (
                                                <ul style={{ margin: 0, paddingLeft: '20px' }}>
                                                    {contact.services.map((service, idx) => (
                                                        <li key={idx}>{service}</li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <span className="text-muted">-</span>
                                            )}
                                        </td>
                                        <td>
                                            {contact.message ? (
                                                <span title={contact.message}>
                                                    {contact.message.length > 50 
                                                        ? `${contact.message.substring(0, 50)}...` 
                                                        : contact.message}
                                                </span>
                                            ) : (
                                                <span className="text-muted">-</span>
                                            )}
                                        </td>
                                        <td>{getStatusBadge(contact.status)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AdminMessages;

