import { useEffect, useState } from "react";
import { loadScript, route } from "../../../../globals/constants";
import FastImage from "../../../../globals/elements/fastimg";
import { NavLink } from "react-router-dom";

function SectionHeader1() {

    const [isActive, setIsActive] = useState(false);

    useEffect(()=>{
        loadScript("js/sticky-header.js");
    })

    const handleToggleMenu = () => {
        setIsActive(!isActive);
    }

    return (
        <header className={"site-header header-style-1 mobile-sider-drawer-menu "+(isActive? 'active' : '')}>
            <div className="top-bar top-bar-liner bg-secondry">
                <div className="container">
                    <div className="row">
                        <div className="mt-topbar-right">
                            <ul className="list-unstyled  tb-info-liner">
                                <li><i className="site-text-primary" />Your Trusted 24 Hours Service Provider!</li>
                            </ul>
                            <ul className="list-inline tb-social-liner">
                                <li><a href="https://www.facebook.com/" className="fa fa-facebook" /></li>
                                <li><a href="https://twitter.com/" className="fa fa-twitter" /></li>
                                <li><a href="https://in.linkedin.com/" className="fa fa-linkedin" /></li>
                                <li><a href="https://www.instagram.com/" className="fa fa-instagram" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Search Link */}
            <div className="header-middle bg-white">
                <div className="container">
                    <div className="logo-header">
                        <NavLink to={route.home.HOME1}>
                            <FastImage src="images/logo-1.png" width={216} height={37} alt="" />
                        </NavLink>
                    </div>
                    <div className="header-info">
                        <ul>
                            <li>
                                <div>
                                    <div className="icon-sm">
                                        <span className="icon-cell  site-text-primary"><i className="iconmoon-smartphone" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <strong>Phone Number</strong>
                                        <span>+965 6705 0911</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div className="icon-sm">
                                        <span className="icon-cell  site-text-primary"><i className="iconmoon-envelope" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <strong>Email Address</strong>
                                        <span>sales@ezlogisticskw.com</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="sticky-header main-bar-wraper">
                <div className="main-bar header-botton nav-bg-primary">
                    <div className="container">
                        {/* NAV Toggle Button */}
                        <button id="mobile-side-drawer" data-target=".header-nav" data-toggle="collapse" type="button" className="navbar-toggler collapsed" onClick={handleToggleMenu}>
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar icon-bar-first" />
                            <span className="icon-bar icon-bar-two" />
                            <span className="icon-bar icon-bar-three" />
                        </button>
                        {/* ETRA Nav */}
                        <div className="extra-nav">
                            <div className="extra-cell">
                                <NavLink to={route.pages.contact.CONTACT1} className="site-search-btn" title="Get A Quote" style={{ fontSize: '20px' }}><i className="fa fa-calculator" /></NavLink>
                            </div>
                            <div className="extra-cell">
                                <a href="#download" className="site-search-btn" title="Download Profile" style={{ fontSize: '20px' }}><i className="fa fa-download" /></a>
                            </div>
                        </div>
                        {/* SITE Download placeholder (anchor only) */}
                        <div className="logo-show-in-mobile">
                            <NavLink to={route.home.HOME1}>
                                <FastImage src="images/logo-1.png" width={216} height={37} alt="" />
                            </NavLink>
                        </div>
                        {/* MAIN Nav */}
                        <div className="header-nav navbar-collapse collapse d-flex justify-content-start">
                            <ul className=" nav navbar-nav">
                                <li className="active"><NavLink to={route.home.HOME1}>HOME</NavLink></li>
                                <li><NavLink to={route.pages.ABOUT}>ABOUT US</NavLink></li>
                                <li>
                                    <a href="/services">SERVICES<i className="fa fa-chevron-down" /></a>
                                    <ul className="sub-menu">
                                        <li><NavLink to={route.services.SERVICES}>Fulfillment & Warehousing</NavLink></li>
                                        <li><NavLink to={route.services.SERVICES}>Palletization & Shrink Wrapping</NavLink></li>
                                        <li><NavLink to={route.services.SERVICES}>Co-Packing & Labeling</NavLink></li>
                                        <li><NavLink to={route.services.SERVICES}>Inbound & Outbound Logistics</NavLink></li>
                                        <li><NavLink to={route.services.SERVICES}>Inventory Management</NavLink></li>
                                        <li><NavLink to={route.services.SERVICES}>Quality Reporting</NavLink></li>
                                    </ul>
                                </li>
                                <li><NavLink to={route.pages.FEATURE}>FEATURES</NavLink></li>
                                <li><NavLink to={route.pages.gallery.GALLERY1}>GALLERY</NavLink></li>
                                <li><NavLink to={route.blog.LIST}>BLOG</NavLink></li>
                                <li><NavLink to={route.pages.contact.CONTACT1}>CONTACT</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default SectionHeader1;