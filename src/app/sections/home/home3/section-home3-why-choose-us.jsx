import { route } from "../../../../globals/constants";
import { NavLink } from "react-router-dom";

function SectionHome3WhyChooseUs() {
    return (
        <div className="section-full bg-gray p-t80  p-b50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        {/* TITLE START*/}
                        <div className="section-head text-left">
                            <h2>Why Choose us</h2>
                            <div className="mt-separator-outer">
                                <div className="mt-separator site-bg-primary" />
                            </div>
                        </div>
                        {/* TITLE END*/}
                        <div className="section-content sx-why-choose">
                            <div className="mt-box">
                                <div className="mt-info bg-white text-left p-a20 m-b30">
                                    <h4>Efficient Logistics Solutions</h4>
                                    <p>EZ Logistics provides complete warehousing and distribution solutions designed for speed, reliability, and scalability. From inbound storage to last-mile delivery, we ensure every process runs with precision and transparency.</p>
                                    <NavLink to={route.services.SERVICES} className="site-button-link site-text-primary font-weight-600">Learn More →</NavLink>
                                </div>
                            </div>
                            <div className="mt-box m-b30">
                                <div className="mt-info bg-white text-left p-a20">
                                    <h4>Innovative Facility &amp; Technology</h4>
                                    <p>Our Ardiya-based facility is powered by modern infrastructure, automated tracking systems, and 24/7 surveillance. We combine technology with over 20 years of experience under the Zenith Group to deliver efficiency and safety at every stage.</p>
                                    <NavLink to={route.services.SERVICES} className="site-button-link site-text-primary font-weight-600">Explore Features →</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        {/* TITLE START*/}
                        <div className="section-head text-left">
                            <h2>Our Skills</h2>
                            <div className="mt-separator-outer">
                                <div className="mt-separator site-bg-primary" />
                            </div>
                        </div>
                        {/* TITLE END*/}
                        <div className="section-content  clearfix ">
                            <div className="p-b0">
                                <div className="mt-box">
                                    <h2 className="m-t0"><span className="site-text-primary"> 20+ years</span> of excellence in warehousing and logistics solutions</h2>
                                </div>
                                <div className="our-exp">
                                    <span className="progressText text-black"><b>Warehouse &amp; Fulfillment</b></span>
                                    <div className="progress m-b30 m-t10">
                                        <div className="progress-bar site-bg-primary progress-bar-striped progress-bar-animated text-black" role="progressbar" style={{ width: '90%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>90%</div>
                                    </div>
                                    <span className="progressText text-black"><b>Inventory Management</b></span>
                                    <div className="progress m-b30 m-t10">
                                        <div className="progress-bar site-bg-primary progress-bar-striped progress-bar-animated text-black" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>80%</div>
                                    </div>
                                    <span className="progressText text-black"><b>Distribution &amp; Transport</b></span>
                                    <div className="progress m-b30 m-t10">
                                        <div className="progress-bar site-bg-primary progress-bar-striped progress-bar-animated text-black" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>75%</div>
                                    </div>
                                    <span className="progressText text-black"><b>Co-Packing &amp; Labeling</b></span>
                                    <div className="progress m-b30 m-t10">
                                        <div className="progress-bar site-bg-primary progress-bar-striped progress-bar-animated text-black" role="progressbar" style={{ width: '70%' }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}>70%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionHome3WhyChooseUs;
