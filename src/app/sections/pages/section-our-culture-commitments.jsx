import React from 'react';
import { publicUrlFor } from "../../../globals/constants";

const commitments = [
    {
        icon: "fa-solid fa-handshake",
        title: "Trusted Expertise",
        description: "With over two decades of experience in logistics and warehousing, EZ Logistics stands as a trusted partner delivering reliability and precision every day."
    },
    {
        icon: "fa-solid fa-warehouse",
        title: "Advanced Facility",
        description: "Our Ardiya-based warehouse features modern infrastructure, safety compliance, and automated systems designed for efficiency and security."
    },
    {
        icon: "fa-solid fa-people-group",
        title: "Skilled Workforce",
        description: "A team of professionals trained in global best practices ensures your goods are handled with care, speed, and attention to detail."
    },
    {
        icon: "fa-solid fa-laptop-code",
        title: "Technology Integration",
        description: "Our operations are supported by digital tracking, cloud-based reports, and inventory systems that keep our clients informed in real time."
    },
    {
        icon: "fa-solid fa-leaf",
        title: "Sustainable Practices",
        description: "We promote eco-friendly initiatives by optimizing transport routes, reducing waste, and supporting green packaging methods."
    },
    {
        icon: "fa-solid fa-chart-line",
        title: "Continuous Growth",
        description: "Backed by the Zenith Group, we continue to expand our capacity, upgrade systems, and raise service benchmarks across Kuwait."
    }
];

function SectionOurCultureCommitments() {
    return (
        <div className="section-full bg-change-section overlay-wraper p-t80 p-b50">
            <div className="overlay-main bg-secondry opacity-09" />
          
                <div className="section-bg" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg1.jpg")})` }} />

            <div className="container">
                {/* TITLE START*/}
                <div className="section-head text-center text-white">
                    <h2 data-title="">Our Culture &amp; Commitments </h2>
                    <div className="mt-separator-outer">
                        <div className="mt-separator site-bg-primary" />
                    </div>
                </div>
                {/* TITLE END*/}
                <div className="section-content">
                    <div className="row d-flex justify-content-center">
                        {commitments.map((commitment, index) => (
                            <div key={index} className="col-lg-4 col-md-6 m-b30">
                                <div className="mt-icon-box-wraper center p-a30 bgcall-block bdr-1 bdr-solid bdr-primary hover-shadow">
                                    <div className="mt-icon-box-sm radius bdr-2 bdr-solid bdr-white m-b20">
                                        <span className="icon-cell site-text-primary">
                                            <i className={commitment.icon} />
                                        </span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="mt-tilte m-b15 site-text-primary">{commitment.title}</h4>
                                        <p className="text-white">{commitment.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionOurCultureCommitments;





