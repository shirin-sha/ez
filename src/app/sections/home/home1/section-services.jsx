import React from 'react';

const services = [
    {
        icon: "fa-solid fa-warehouse",
        title: "Fulfillment & Warehousing",
        description: "Comprehensive storage, order fulfillment, and distribution for all business sizes — managed with precision and daily stock reporting."
    },
    {
        icon: "fa-solid fa-boxes-stacked",
        title: "Palletization & Shrink Wrapping",
        description: "Professional pallet wrapping and secure packaging solutions tailored to protect your goods during handling and transport."
    },
    {
        icon: "fa-solid fa-tags",
        title: "Co-Packing & Labeling",
        description: "Contract packaging and labeling services with full traceability — from branded product labels to shipment barcoding systems."
    },
    {
        icon: "fa-solid fa-truck-moving",
        title: "Inbound & Outbound Logistics",
        description: "End-to-end movement of goods with optimized routing, real-time tracking, and seamless coordination across your supply chain."
    },
    {
        icon: "fa-solid fa-chart-line",
        title: "Inventory Management Solutions",
        description: "Smart software integration to track stock levels, manage reorders, and generate detailed reports instantly from any device."
    },
    {
        icon: "fa-solid fa-clipboard-check",
        title: "Quality & Discrepancy Reporting",
        description: "Comprehensive quality control, performance analysis, and discrepancy reporting to maintain accuracy and operational consistency."
    }
];

function SectionServices() {
    return (
        <div className="section-full p-t80 p-b50 bg-gray">
            <div className="container">
                {/* TITLE START*/}
                <div className="section-head text-center">
                    <h2 data-title="Services">Services We Offer </h2>
                    <div className="mt-separator-outer">
                        <div className="mt-separator site-bg-primary" />
                    </div>
                </div>
                {/* TITLE END*/}
                <div className="section-content">
                    <div className="row">
                        {services.map((service, index) => (
                            <div key={index} className="col-lg-4 col-md-6 m-b30">
                                <div className="mt-icon-box-wraper p-a30 hover-border-outer hover-border bg-white m-b30">
                                    <div className="icon-md radius m-b15">
                                        <span className="icon-cell site-text-primary">
                                            <i className={service.icon} />
                                        </span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="mt-tilte m-b15">{service.title}</h4>
                                        <p>{service.description}</p>
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

export default SectionServices;


