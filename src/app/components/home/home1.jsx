import { useEffect } from "react";
import { loadScript, route, publicUrlFor } from "../../../globals/constants";
import FastImage from "../../../globals/elements/fastimg";
import CountUp from "react-countup";
import SectionSlider1 from "../../sections/home/home1/section-slider1";
import { NavLink } from "react-router-dom";
import SectionHome1Team from "../../sections/home/home1/section-home1-team";
import SectionHome1Plans from "../../sections/home/home1/section-home1-plans";
import SectionHome1Blogs from "../../sections/home/home1/section-home1-blogs";
import SectionHome1Testimonials from "../../sections/home/home1/section-home1-testimonials";
import SectionServices from "../../sections/home/home1/section-services";
import SectionShipmentSolution from "../../sections/home/home1/section-shipment-solution";
import SectionLatestProjects from "../../sections/home/home1/section-latest-projects";
import SectionWhyChooseUsDark from "../../sections/home/home1/section-why-choose-us-dark";
import _data from "../../../globals/data/data.json";

function Home1Page() {

    const { clients } = _data;

    useEffect(() => {
        loadScript("js/custom.js");
    })

    return (
        <>
            {/* Slider */}
            <SectionSlider1 />
            {/* Serivices */}
            <SectionServices />
            {/* How it Work */}
       
            {/* Shipment Solution*/}
            <SectionShipmentSolution />
            {/* Latest Project */}
            <SectionLatestProjects />
       

            {/* MY BLOG */}
            <SectionHome1Blogs />

            {/* Why Choose */}
            <SectionWhyChooseUsDark />
            {/* Testimonials */}
            <SectionHome1Testimonials />

            {/* Contact Us  */}
            <div className="section-full bg-white bg-right-center bg-no-repeat" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg-trans-2.png")})` }}>
                <div className="container">
                    <div className="row conntact-home">
                        <div className="col-lg-5 col-md-5 col-sm-12">
                            <div className="contact-home1-left bg-secondry">
                                <div className="contact-tag-line bg-white site-text-primary">Contact us</div>
                                <div className="section-content p-lr30 p-tb30">
                                    <div className="call-back-form" style={{ zIndex: 1, position: 'relative' }}>
                                        <h2 className="text-white m-t0">Contact Us</h2>
                                        <form className="cons-contact-form2 form-transparent" method="post" action="form-handler2.php">
                                            <div className="form-group">
                                                <input name="username" type="text" required className="form-control" placeholder="Name" />
                                            </div>
                                            <div className="form-group">
                                                <input name="email" type="text" className="form-control" required placeholder="Email" />
                                            </div>
                                            <div className="form-group">
                                                <input name="phone" type="text" className="form-control" required placeholder="Phone" />
                                            </div>
                                            <div className="form-group">
                                                <textarea name="message" className="form-control" rows={3} placeholder="Message" defaultValue={""} />
                                            </div>
                                            <button type="submit" className="site-button ">
                                                <span className="font-weight-700 inline-block  p-lr15">Submit</span>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-content  contact-home1-right">
                            <div className="mt-box">
                                <div className="mt-media">
                                    <FastImage src="images/con-1.png" alt="" style={{ maxWidth: '84%' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Our Client Logo */}
            <div className="section-full bg-white p-tb50">
                <div className="container">
                    <div className="section-content">
                        <div className="owl-carousel home-client-logo owl-btn-vertical-center">

                            {
                                clients.map((_item, index) => {
                                    return <div key={index} className="item">
                                        <div className="ow-client-logo">
                                            <div className="client-logo mt-img-effect on-color">
                                                <NavLink to={route.pages.team.TEAM}><FastImage src={_item} alt="" /></NavLink>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
            {/* OUR PLANS  */}
            <SectionHome1Plans />
        </>
    )
}
export default Home1Page;