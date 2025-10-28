import React from 'react';
import { publicUrlFor } from "../../../../globals/constants";

const features = [
    {
        icon: "fa-solid fa-trophy",
        title: "Trusted Industry Expertise",
        description: "With over 20 years of experience under the Zenith Group, EZ Logistics delivers proven warehousing and supply chain excellence for every business sector."
    },
    {
        icon: "fa-solid fa-chart-pie",
        title: "Advanced Management & Reporting",
        description: "Real-time dashboards and automated daily reports help clients monitor inventory, space utilization, and operations with complete transparency."
    },
    {
        icon: "fa-solid fa-sliders",
        title: "Flexible Service Options",
        description: "From short-term storage to long-term fulfillment and co-packing, our solutions are built to scale according to your business requirements."
    },
    {
        icon: "fa-solid fa-file-shield",
        title: "Compliance & Safety Standards",
        description: "Our Ardiya facility is certified by Kuwait Fire Department (KFD) and maintained under international safety and hygiene standards."
    },
    {
        icon: "fa-solid fa-clock",
        title: "On-Time Deliveries",
        description: "Our efficient inbound and outbound logistics systems ensure every delivery is completed on schedule — accurately and reliably."
    },
    {
        icon: "fa-solid fa-headset",
        title: "24/7 Customer Support",
        description: "Our dedicated operations team is available around the clock to provide updates, assistance, and proactive issue resolution."
    }
];

function SectionWhyChooseUsDark() {
    return (
        <div className="section-full bg-change-section overlay-wraper p-t80 p-b50">
            <div className="overlay-main bg-secondry opacity-09" />
            <div className="bg-changer">
                <div className="section-bg active" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg1.jpg")})` }} />
                <div className="section-bg" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg2.jpg")})` }} />
                <div className="section-bg" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg3.jpg")})` }} />
                <div className="section-bg" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg4.jpg")})` }} />
                <div className="section-bg" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg5.jpg")})` }} />
                <div className="section-bg" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg6.jpg")})` }} />
            </div>
            <div className="container">
                {/* TITLE START*/}
                <div className="section-head text-center text-white">
                    <h2 data-title="Choose us">Why Choose Us </h2>
                    <div className="mt-separator-outer">
                        <div className="mt-separator site-bg-primary" />
                    </div>
                </div>
                {/* TITLE END*/}
                <div className="section-content">
                    <div className="row">
                        {features.map((feature, index) => (
                            <div key={index} className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                <div className="mt-icon-box-wraper p-a30 bgcall-block hover-shadow hover-border-outer hover-border m-b30">
                                    <div className="icon-md radius m-b15">
                                        <span className="icon-cell text-white">
                                            <i className={feature.icon} />
                                        </span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="mt-tilte m-b15 site-text-primary">{feature.title}</h4>
                                        <p className="text-white">{feature.description}</p>
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

export default SectionWhyChooseUsDark;

