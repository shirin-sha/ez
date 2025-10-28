import { NavLink } from "react-router-dom";
import FastImage from "../../../../globals/elements/fastimg";
import { route, publicUrlFor, loadScript } from "../../../../globals/constants";
import { useEffect } from "react";
import _data from "../../../../globals/data/data.json";


function FeaturePage() {

    const features = _data.features;

    useEffect(() => {
        loadScript("js/custom.js")
    })

    return (
        <>
            {/* Our Services */}
            <div className="section-full bg-white p-t80 p-b50">
                <div className="container">
                    {/* TITLE START*/}
                    <div className="section-head text-center">
                        <h2 data-title="Features">Our Features</h2>
                        <div className="mt-separator-outer">
                            <div className="mt-separator site-bg-primary" />
                        </div>
                    </div>
                    {/* TITLE END*/}
                    <div className="mfp-gallery clearfix">
                        <div className="row d-flex justify-content-center">

                            {
                                features.map((_item, index) => {
                                    return <div key={index} className="col-lg-4 col-md-6 m-b30">
                                        <div className="mt-box bg-white bdr-1 bdr-solid bdr-gray-light mt-service-1">
                                            <div className="mt-thum-bx mt-img-overlay3 mt-img-effect">
                                                <FastImage src={_item.image} alt="" />
                                                <div className="overlay-bx">
                                                    <div className="overlay-icon">
                                                        <NavLink to={route.services.DETAIL}>
                                                            <i className="fa fa-external-link-square mt-icon-box-xs" />
                                                        </NavLink>
                                                        <a className="mfp-link" href={publicUrlFor(_item.image_preview)}>
                                                            <i className="fa fa-search-plus mt-icon-box-xs" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-info p-a20">
                                                <h4 className="m-t0">{_item.title}</h4>
                                                <p>{_item.desc_short}</p>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FeaturePage;