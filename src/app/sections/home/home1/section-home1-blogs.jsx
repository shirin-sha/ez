import { route } from "../../../../globals/constants";
import FastImage from "../../../../globals/elements/fastimg";
import { NavLink } from "react-router-dom";
import blogData from "./blog-data.json";

function SectionHome1Blogs() {
    return (
        <div className="section-full  p-t80 p-b50 bg-white sx-news-blog-1">
            <div className="container">
                {/* TITLE START*/}
                <div className="section-head text-center">
                    <h2 data-title="Blog">{blogData.title}</h2>
                    <p className="m-b30">{blogData.introText}</p>
                    <div className="mt-separator-outer">
                        <div className="mt-separator site-bg-primary" />
                    </div>
                </div>
                {/* TITLE END*/}
                <div className="section-content ">
                    <div className="row">
                        {blogData.posts.map((post, index) => (
                            <div key={index} className="col-lg-4 col-md-6">
                                <div className="blog-post latest-blog-1 date-style-2 overflow-hide bg-white bdr-1 bdr-solid bdr-gray-light m-b30">
                                    <div className="mt-post-media">
                                        <FastImage src={post.image} alt="" />
                                    </div>
                                    <div className="mt-post-info p-a30">
                                        <div className="mt-post-meta text-black bdr-1 bdr-solid bdr-b-1 bdr-gray-light p-b20">
                                            <ul>
                                                <li className="post-date">
                                                    <i className="fa fa-calendar site-text-primary" />
                                                    <strong>{post.day}</strong>
                                                    <span>{post.date}</span>
                                                </li>
                                                <li className="post-author">
                                                    <i className="fa fa-user site-text-primary" />
                                                    <NavLink to={route.pages.team.DETAIL}>By <span>{post.author}</span></NavLink>
                                                </li>
                                                <li className="post-comment">
                                                    <i className="fa fa-comments site-text-primary" />
                                                    <NavLink to={route.blog.POST_SINGLE}>{post.comments} Comment</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="mt-post-title">
                                            <h4 className="post-title">{post.title}</h4>
                                        </div>
                                        <div className="mt-post-text">
                                            <p>{post.description}</p>
                                        </div>
                                        <NavLink to={route.blog.POST_SINGLE} className="site-button-link">Read More</NavLink>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionHome1Blogs;
