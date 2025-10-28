import React from 'react';
import FastImage from "../../../../globals/elements/fastimg";
import { NavLink } from "react-router-dom";
import { route, publicUrlFor } from "../../../../globals/constants";

const projects = [
    { image: "images/gallery/portrait/pic1.jpg", title: "Storage & Fulfillment", description: "Smart warehousing and order fulfillment designed for speed, accuracy, and complete visibility across your supply chain.", showButton: false },
    { image: "images/gallery/portrait/pic2.jpg", title: "Co-Packing & Labeling", description: "From branded labeling to bulk packaging, we offer flexible co-packing services that support your brand and streamline production." },
    { image: "images/gallery/portrait/pic3.jpg", title: "Distribution & Delivery", description: "Reliable outbound logistics with route optimization and real-time tracking — ensuring your products reach their destination on time." }
];

function SectionLatestProjects() {
    return (
        <div className="section-full p-tb80 bg-full-height bg-secondry bg-repeat-x city-slide-image" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg-trans-1.png")})` }}>
            <div className="container-fluid">
                <div className="fillter-left-content">
                    <div className="filter-left-part shake_image">
                        <FastImage src="images/truck-2.png" alt="" />
                        <span className="tyre-position"><FastImage src="images/rotate-tyer.png" alt="" className="spin-tyres" /></span>
                        <FastImage className="blink-image" src="images/light-blink.png" alt="" />
                    </div>
                    <div className="container">
                        <div className="section-head text-center sx-title-mid-area">
                            <div className="mt-box text-white m-b30">
                                <h2 className="m-tb0">With <span className="site-text-primary">20 years</span> of experience, we deliver smarter logistics solutions.</h2>
                                <p className="m-b15">As a proud member of the Zenith Group, EZ Logistics brings two decades of proven excellence in warehousing, racking systems, and logistics management. Our facility in Ardiya, Kuwait is equipped to handle everything — from co-packing and labeling to storage, fulfillment, and distribution — ensuring your goods are managed with precision and care.</p>
                            </div>
                        </div>
                        <div className="filter-carousal-1-outer">
                            <div className="filter-carousal-1">
                                <div className="section-content">
                                    <div className="owl-carousel owl-carousel-filter owl-btn-vertical-center fillter-nav-left">
                                        {projects.map((project, index) => (
                                            <div key={index} className="item overflow-hide">
                                                <div className="mt-box">
                                                    <div className="mt-img-effect overlay-2">
                                                        <FastImage src={project.image} alt="" />
                                                        <div className="overlay-2-bg bg-black" />
                                                        <div className="overlay-2-content">
                                                            <div className="p-a30 p-b20">
                                                                <h4 className="m-t0 m-b15 site-text-primary">{project.title}</h4>
                                                                <p className="m-b20 text-white">{project.description}</p>
                                                                {project.showButton !== false && (
                                                                    <NavLink to={route.pages.ABOUT} className="site-button">Read More</NavLink>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center p-t30">
                            <NavLink to={route.services.SERVICES} className="site-button">View all gallery</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionLatestProjects;

