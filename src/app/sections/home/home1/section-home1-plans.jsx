import { NavLink } from "react-router-dom";
import { route } from "../../../../globals/constants";

const foundations = [
    {
        title: "Operational Excellence",
        items: [
            "Strategic Planning",
            "Process Accuracy",
            "Quality Control",
            "Continuous Improvement",
            "Timely Execution",
            "Reliable Systems"
        ]
    },
    {
        title: "Innovation & Technology",
        items: [
            "Smart Warehousing",
            "Digital Tracking",
            "Inventory Insights",
            "Data Automation",
            "Cloud Integration",
            "Process Optimization"
        ]
    },
    {
        title: "Customer Commitment",
        items: [
            "24/7 Support",
            "Transparent Communication",
            "Client Partnership",
            "Tailored Solutions",
            "Service Flexibility",
            "Long-Term Trust"
        ]
    }
];

function SectionHome1Plans() {
    return (
        <div className="section-full text-center sx-pricing-plan-area bg-gray p-t80 p-b50">
            <div className="container">
                {/* TITLE START*/}
                <div className="section-head text-center">
                    <h2 data-title="Our Plan">Our Foundation</h2>
                    <div className="mt-separator-outer">
                        <div className="mt-separator site-bg-primary" />
                    </div>
                </div>
                {/* TITLE END*/}
                <div className="section-content">
                    <div className="pricingtable-row">
                        <div className="row">
                            {foundations.map((foundation, index) => (
                                <div key={index} className="col-lg-4 col-md-6 m-b30">
                                    <div className="pricingtable-wrapper pricing-table-style-5 pricing-table-shadow">
                                        <div className="pricingtable-inner bg-gray">
                                            <div className="pricingtable-title">
                                                <h3>{foundation.title}</h3>
                                            </div>
                                            <ul className="pricingtable-features text-black bg-gray">
                                                {foundation.items.map((item, itemIndex) => (
                                                    <li key={itemIndex}>{item}</li>
                                                ))}
                                            </ul>
                                            <div className="overlay-main bg-white opacity-07" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionHome1Plans;
