import { route, publicUrlFor } from "../../../../globals/constants";
import FastImage from "../../../../globals/elements/fastimg";
import { NavLink } from "react-router-dom";

function SectionFooter1(props) {
    return (
        <>
            <footer className={"site-footer " + props.theme}>
                {/* Footer Top Part */}
                <div className="footer-top overlay-wraper">
                    <div className="overlay-main" />
                    <div className="container">
                        <div className="row">
                            {/* About */}
                            <div className="col-lg-3 col-md-6">
                                <div className="widget widget_about">
                                    <h4 className="widget-title">About Company</h4>
                                    <div className="logo-footer clearfix p-b15">
                                        <NavLink to={route.home.HOME1}><FastImage src="images/footer-logo.png" width={171} height={49} alt="" /></NavLink>
                                    </div>
                                    <p>EZ Logistics provides professional warehousing and 3PL solutions across Kuwait. As a proud member of Zenith Group, we combine 20 years of experience with advanced logistics technology to deliver secure and efficient services.</p>
                                    <ul>
                                        <li> <i className="fa fa-phone site-text-primary" /> <b className="p-lr5 text-uppercase">Phone :</b> +965 2398 6748 </li>
                                        <li><i className="fa fa-envelope site-text-primary" /> <b className="p-lr5 text-uppercase">Email : </b>info@ezlogisticskw.com</li>
                                        <li><i className="fa fa-location-arrow site-text-primary" /> <b className="p-lr5 text-uppercase">Location :</b> Ardiya Industrial Area, Kuwait</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Useful Links */}
                            <div className="col-lg-3 col-md-6">
                                <div className="widget widget_services">
                                    <h4 className="widget-title">Quick Links</h4>
                                    <ul>
                                        <li><NavLink to={route.pages.ABOUT}>About EZ Logistics</NavLink></li>
                                        <li><NavLink to={route.services.SERVICES}>Our Services</NavLink></li>
                                        <li><NavLink to={route.pages.FEATURE}>Our Features</NavLink></li>
                                        <li><a href="/careers">Careers</a></li>
                                        <li><NavLink to={route.pages.contact.CONTACT1}>Contact Us</NavLink></li>
                                        <li><NavLink to={route.pages.contact.CONTACT1}>Request a Quote</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            {/* Our Services list (replacing Recent Posts) */}
                            <div className="col-lg-3 col-md-6">
                                <div className="widget widget_services">
                                    <h4 className="widget-title">Our Services</h4>
                                    <ul>
                                        <li><NavLink to={route.services.SERVICES}>Fulfillment & Warehousing</NavLink></li>
                                        <li><NavLink to={route.services.SERVICES}>Palletization & Shrink Wrapping</NavLink></li>
                                        <li><NavLink to={route.services.SERVICES}>Co-Packing & Labeling</NavLink></li>
                                        <li><NavLink to={route.services.SERVICES}>Inbound & Outbound Logistics</NavLink></li>
                                        <li><NavLink to={route.services.SERVICES}>Inventory Management</NavLink></li>
                                        <li><NavLink to={route.services.SERVICES}>Quality Reporting</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            {/* Instagram Feed */}
                            <div className="col-lg-3 col-md-6">
                                <div className="widget widget_newsletter f-news-letter">
                                    <h4 className="widget-title">Newsletter</h4>
                                    <div className="newsletter-bx m-b30">
                                        <form role="search" method="post">
                                            <div className="input-group">
                                                <input name="news-letter" className="form-control" placeholder="ENTER YOUR EMAIL" type="text" />
                                                <span className="input-group-btn">
                                                    <button type="submit" className="site-button btn font-weight-600"><i className="fa fa-paper-plane" /></button>
                                                </span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="widget widget_services">
                                    <h4 className="widget-title">Stay Connected</h4>
                                    <ul>
                                        <li><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin site-text-primary" /> LinkedIn: EZ Logistics Kuwait</a></li>
                                        <li><a href="https://www.facebook.com/EZLogisticsKW" target="_blank" rel="noreferrer"><i className="fa fa-facebook site-text-primary" /> Facebook: @EZLogisticsKW</a></li>
                                        <li><a href="https://www.instagram.com/ezlogistics.kw" target="_blank" rel="noreferrer"><i className="fa fa-instagram site-text-primary" /> Instagram: @ezlogistics.kw</a></li>
                                        <li><a href="https://www.youtube.com/@EZLogisticsMedia" target="_blank" rel="noreferrer"><i className="fa fa-youtube-play site-text-primary" /> YouTube: EZ Logistics Media</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Copyright Part */}
                <div className="footer-bottom overlay-wraper">
                    <div className="overlay-main" />
                    <div className="container p-t30">
                        <div className="mt-footer-bot-center">
                            <span className="copyrights-text">© 2025 EZ Logistics Co. W.L.L. All Rights Reserved.</span>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
export default SectionFooter1;