import { NavLink } from "react-router-dom";
import { publicUrlFor, route } from "../../../../globals/constants";

function SectionBanner(props) {
    const { data } = props;
    return (
        <>
            <div className="mt-bnr-inr overlay-wraper" style={{ backgroundImage: `url(${publicUrlFor("images/banner/"+data.background)})` }}>
                <div className="overlay-main bg-black opacity-07" />
                <div className="container">
                    <div className="mt-bnr-inr-entry">
                        <h1 className="text-white">{data.title}</h1>
                        {/* Breadcrumb */}
                        <ul className="mt-breadcrumb breadcrumb-style-1">
                            <li><NavLink to={route.home.HOME1}>Home</NavLink></li>
                            <li>{data.crumb}</li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}
export default SectionBanner;