import { useState } from 'react';

function ContactUs1Page() {
    const [formData, setFormData] = useState({
        fullName: '',
        companyName: '',
        mobile: '',
        email: '',
        services: [],
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleServiceChange = (e) => {
        const { value, checked } = e.target;
        setFormData(prev => {
            const services = prev.services || [];
            if (checked) {
                return { ...prev, services: [...services, value] };
            } else {
                return { ...prev, services: services.filter(s => s !== value) };
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        setErrorMessage('');

        try {
            const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
            const response = await fetch(`${API_URL}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setSubmitStatus('success');
                // Reset form
                setFormData({
                    fullName: '',
                    companyName: '',
                    mobile: '',
                    email: '',
                    services: [],
                    message: ''
                });
                // Reset checkboxes
                document.querySelectorAll('input[type="checkbox"][name="services"]').forEach(cb => {
                    cb.checked = false;
                });
            } else {
                setSubmitStatus('error');
                setErrorMessage(data.error || 'Failed to submit form. Please try again.');
            }
        } catch (error) {
            console.error('Submit error:', error);
            setSubmitStatus('error');
            setErrorMessage('Unable to connect to server. Please check your connection and try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleReset = () => {
        setFormData({
            fullName: '',
            companyName: '',
            mobile: '',
            email: '',
            services: [],
            message: ''
        });
        setSubmitStatus(null);
        setErrorMessage('');
        document.querySelectorAll('input[type="checkbox"][name="services"]').forEach(cb => {
            cb.checked = false;
        });
    };

    return (
        <>
            {/* CONTACT DETAIL BLOCK */}
            <div className="section-full p-t80">
                <div className="container">
                    {/* Google Map BLock */}
                    <div className="section-content">
                        {/* Location BLock */}
                        <div className="mt-box">
                            <div className="gmap-outline">
                                <div className="google-map" style={{ width: '100%' }}>
                                    <iframe height={460} src="https://www.google.com/maps?q=Ardiya,+Kuwait&z=14&output=embed" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-full p-t80">
                <div className="container">
                    <div className="section-head">
                        <h2>Contact Detail </h2>
                        <div className="mt-separator-outer m-b30">
                            <div className="mt-separator site-bg-primary" />
                        </div>
                    </div>
                    <div className="section-content m-b30">
                        <div className="row">
                            <div className="col-md-4 col-sm-12 m-b30">
                                <div className="mt-icon-box-wraper center p-a30 bg-gray">
                                    <div className="icon-sm m-b10"><i className="iconmoon-smartphone-1" /></div>
                                    <div className="icon-content">
                                        <h4 className="site-text-primary">Phone number</h4>
                                        <p>+965 6705 0911</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12 m-b30">
                                <div className="mt-icon-box-wraper center p-a30 bg-gray">
                                    <div className="icon-sm m-b10"><i className="iconmoon-email" /></div>
                                    <div className="icon-content">
                                        <h4 className="site-text-primary">Email address</h4>
                                        <p>sales@ezlogisticskw.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12 m-b30">
                                <div className="mt-icon-box-wraper center p-a30 bg-gray">
                                    <div className="icon-sm m-b10"><i className="iconmoon-travel" /></div>
                                    <div className="icon-content">
                                        <h4 className="site-text-primary">Address info</h4>
                                        <p>Block 1, Street 1, Ardiya, Kuwait</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-full">
                <div className="container">
                    <div className="section-head">
                        <h2>Contact Form </h2>
                        <div className="mt-separator-outer m-b30">
                            <div className="mt-separator site-bg-primary" />
                        </div>
                    </div>
                    {/* GOOGLE MAP & CONTACT FORM */}
                    <div className="section-content m-b50">
                        {/* CONTACT FORM*/}
                        <div className="mt-box">
                            <div className="p-a30 bg-gray radius-10 cons-contact-form-wrap">
                                {submitStatus === 'success' && (
                                    <div className="alert alert-success m-b20" role="alert" style={{ backgroundColor: '#d4edda', color: '#155724', padding: '15px', borderRadius: '5px', marginBottom: '20px' }}>
                                        <strong>Success!</strong> Thank you for contacting us! We will get back to you soon.
                                    </div>
                                )}
                                {submitStatus === 'error' && (
                                    <div className="alert alert-danger m-b20" role="alert" style={{ backgroundColor: '#f8d7da', color: '#721c24', padding: '15px', borderRadius: '5px', marginBottom: '20px' }}>
                                        <strong>Error!</strong> {errorMessage || 'Failed to submit form. Please try again.'}
                                    </div>
                                )}
                                <form className="cons-contact-form contact-style-1" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input 
                                                    name="fullName" 
                                                    type="text" 
                                                    required 
                                                    className="form-control" 
                                                    placeholder="Full Name"
                                                    value={formData.fullName}
                                                    onChange={handleInputChange}
                                                    disabled={isSubmitting}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input 
                                                    name="companyName" 
                                                    type="text" 
                                                    required 
                                                    className="form-control" 
                                                    placeholder="Company Name"
                                                    value={formData.companyName}
                                                    onChange={handleInputChange}
                                                    disabled={isSubmitting}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input 
                                                    name="mobile" 
                                                    type="tel" 
                                                    required 
                                                    className="form-control" 
                                                    placeholder="Mobile"
                                                    value={formData.mobile}
                                                    onChange={handleInputChange}
                                                    disabled={isSubmitting}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input 
                                                    name="email" 
                                                    type="email" 
                                                    className="form-control" 
                                                    required 
                                                    placeholder="Email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    disabled={isSubmitting}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label className="m-b10">Services:</label>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-check m-b10">
                                                            <input 
                                                                className="form-check-input" 
                                                                type="checkbox" 
                                                                name="services" 
                                                                value="Fulfillment & Warehousing" 
                                                                id="service-fulfillment"
                                                                onChange={handleServiceChange}
                                                                disabled={isSubmitting}
                                                            />
                                                            <label className="form-check-label" htmlFor="service-fulfillment">Fulfillment & Warehousing</label>
                                                        </div>
                                                        <div className="form-check m-b10">
                                                            <input 
                                                                className="form-check-input" 
                                                                type="checkbox" 
                                                                name="services" 
                                                                value="Palletization & Shrink Wrapping" 
                                                                id="service-palletization"
                                                                onChange={handleServiceChange}
                                                                disabled={isSubmitting}
                                                            />
                                                            <label className="form-check-label" htmlFor="service-palletization">Palletization & Shrink Wrapping</label>
                                                        </div>
                                                        <div className="form-check m-b10">
                                                            <input 
                                                                className="form-check-input" 
                                                                type="checkbox" 
                                                                name="services" 
                                                                value="Co-Packing & Labeling" 
                                                                id="service-copacking"
                                                                onChange={handleServiceChange}
                                                                disabled={isSubmitting}
                                                            />
                                                            <label className="form-check-label" htmlFor="service-copacking">Co-Packing & Labeling</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-check m-b10">
                                                            <input 
                                                                className="form-check-input" 
                                                                type="checkbox" 
                                                                name="services" 
                                                                value="Inbound & Outbound Logistics" 
                                                                id="service-logistics"
                                                                onChange={handleServiceChange}
                                                                disabled={isSubmitting}
                                                            />
                                                            <label className="form-check-label" htmlFor="service-logistics">Inbound & Outbound Logistics</label>
                                                        </div>
                                                        <div className="form-check m-b10">
                                                            <input 
                                                                className="form-check-input" 
                                                                type="checkbox" 
                                                                name="services" 
                                                                value="Inventory Management" 
                                                                id="service-inventory"
                                                                onChange={handleServiceChange}
                                                                disabled={isSubmitting}
                                                            />
                                                            <label className="form-check-label" htmlFor="service-inventory">Inventory Management</label>
                                                        </div>
                                                        <div className="form-check m-b10">
                                                            <input 
                                                                className="form-check-input" 
                                                                type="checkbox" 
                                                                name="services" 
                                                                value="Quality Reporting" 
                                                                id="service-quality"
                                                                onChange={handleServiceChange}
                                                                disabled={isSubmitting}
                                                            />
                                                            <label className="form-check-label" htmlFor="service-quality">Quality Reporting</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea 
                                                    name="message" 
                                                    rows={5} 
                                                    className="form-control" 
                                                    placeholder="Message (optional)"
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    disabled={isSubmitting}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button 
                                                name="reset" 
                                                type="button" 
                                                onClick={handleReset}
                                                className="site-button m-r10"
                                                disabled={isSubmitting}
                                            >
                                                Reset
                                            </button>
                                            <button 
                                                name="submit" 
                                                type="submit" 
                                                className="site-button-secondry"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? 'Submitting...' : 'Submit'}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactUs1Page;