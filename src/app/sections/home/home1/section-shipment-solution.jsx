import React from 'react';
import FastImage from "../../../../globals/elements/fastimg";
import CountUp from "react-countup";
import { NavLink } from "react-router-dom";
import { route, publicUrlFor } from "../../../../globals/constants";

const stats = [
    { end: 450, label: "Delivered Shipments" },
    { end: 45, label: "Clients Served" },
    { end: 100, label: "Satisfied Partners" },
    { end: 1500, label: "Tons of Goods Handled" }
];

function SectionShipmentSolution() {
    return (
        <div className="section-full p-t80 p-b50 bg-no-repeat bg-center bg-white" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg-map.png")})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-12">
                        <div className="mt-box m-b30">
                            <div className="mt-thum-bx mt-img-effect mt-img-overlay2">
                                <FastImage src="images/background/bg12.jpg" alt="" />
                                <a href="https://player.vimeo.com/video/66491481" className="mfp-video play-now">
                                    <i className="icon fa fa-play" />
                                    <span className="ripple" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12">
                        <div className="sx-shipment-wrap">
                            <div className="mt-box m-b25">
                                <h2 className="display-block m-b15 m-t0">We give you complete control of your logistics — simplified and secure.</h2>
                                <p className="m-b15">At EZ Logistics, we integrate advanced warehouse management systems with
                                    real-time tracking to give our clients full visibility and control over their goods.
                                    Our Ardiya-based facility, combined with two decades of logistics and racking
                                    experience under the Zenith Group, ensures your business operates smoothly,
                                    efficiently, and without interruptions.</p>
                                <ul className="list-check-circle primary m-b20">
                                    <li>Real-time visibility of inbound and outbound operations.</li>
                                    <li>Daily stock and utilization reports for full inventory control.</li>
                                    <li>Seamless integration of technology and trained manpower.</li>
                                </ul>
                                <NavLink to={route.services.SERVICES} className="site-button">Read more</NavLink>
                            </div>
                            <div className="row">
                                {stats.map((stat, index) => (
                                    <div key={index} className="col-md-6 col-sm-6">
                                        <div className="m-b30 text-black mt-icon-box-wraper center bdr-1 bdr-solid bdr-gray-light bg-white p-a20">
                                            <div className="counter font-42 font-weight-800 m-b15 site-text-primary">
                                                <CountUp end={stat.end} duration={10} />
                                            </div>
                                            <h4 className="m-tb0">{stat.label}</h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionShipmentSolution;

