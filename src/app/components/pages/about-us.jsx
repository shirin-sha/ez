import SectionHome1Plans from "../../sections/home/home1/section-home1-plans";
import SectionHome1Team from "../../sections/home/home1/section-home1-team";
import SectionHome2Video from "../../sections/home/home2/section-home2-video";
import SectionHome3WhatWeDo from "../../sections/home/home3/section-home3-what-we-do";
import SectionHome3WhyChooseUs from "../../sections/home/home3/section-home3-why-choose-us";
import SectionOurCultureCommitments from "../../sections/pages/section-our-culture-commitments";

import { publicUrlFor } from "../../../globals/constants";
import FastImage from "../../../globals/elements/fastimg";
import CountUp from "react-countup";
     

function AboutUsPage() {
    return (
        <>
            {/* Our Mission */}
            <SectionHome3WhatWeDo />
            
            {/*Video Section */}
            <SectionHome2Video />
            {/* Why Choose us */}
            <SectionHome3WhyChooseUs />

            {/* Our Culture & Commitments */}
            <SectionOurCultureCommitments />
            

   {/* Shipment Section */}
   <div className="section-full p-t80 p-b50 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg15.jpg")})` }}>
                <div className="container">
                    <div className="row">
                        <div className="worker-ex-two">
                            <div className="mt-box">
                                <div className="mt-thum-bx">
                                    <FastImage src="images/worker.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12">
                            <div className="sx-shiment-wrap-2">
                                <div className="mt-box m-b30">
                                    <h2 className="display-block m-b15 m-t0">Building Trust Through Every Shipment</h2>
                                    <p className="m-b15">At EZ Logistics, our mission is to simplify logistics through reliability, technology, and customer-first service. We handle every process — from storage to final delivery — with precision and care to keep your business moving without interruption.</p>
                                    <ul className="list-check-circle primary m-b15">
                                        <li>Streamlined warehousing and distribution for faster, error-free handling.</li>
                                        <li>Advanced systems to monitor shipments and inventory anytime, anywhere.</li>
                                        <li>A skilled team ensuring safe, compliant, and efficient logistics support across Kuwait.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="m-b30 text-black mt-icon-box-wraper center bg-white p-a20">
                                <div className="counter font-50 font-weight-800 m-b15 site-text-primary">
                                    <CountUp end={950} duration={10} />
                                </div>
                                <h4 className="m-tb0">Projects Completed</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="m-b30 text-black mt-icon-box-wraper center bg-white p-a20">
                                <div className="counter font-50 font-weight-800 m-b15 site-text-primary">
                                    <CountUp end={120} duration={10} />
                                </div>
                                <h4 className="m-tb0">Business Clients</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="m-b30 text-black mt-icon-box-wraper center bg-white p-a20">
                                <div className="counter font-50 font-weight-800 m-b15  site-text-primary">
                                    35,000 m²
                                </div>
                                <h4 className="m-tb0">Storage Capacity</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="m-b30 text-black mt-icon-box-wraper center bg-white p-a20">
                                <div className="counter font-50 font-weight-800 m-b15 site-text-primary">
                                    24/7
                                </div>
                                <h4 className="m-tb0">Operational Support</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutUsPage;