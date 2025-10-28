import { useEffect } from "react";
import FastImage from "../../../globals/elements/fastimg";
import { loadScript, route } from "../../../globals/constants";
import { NavLink } from "react-router-dom";
import blogData from "../../sections/home/home1/blog-data.json";

function BlogListPage() {

    useEffect(()=>{
        loadScript("js/custom.js")
    })

    return (
        <>
            {/* Blog List */}
            <div className="section-full p-t80 p-b50">
                <div className="container">
                    {/* Blog Posts (dynamic) */}
                    {Array.isArray(blogData.posts) && blogData.posts.map((post, idx) => {
                        const parts = (post.date || "").split(" ");
                        const day = post.day || parts[0] || "";
                        const month = post.month || parts[1] || "";
                        const year = parts[2] || "";
                        return (
                            <div key={idx} className={`blog-post blog-md date-style-2 clearfix ${idx === 0 ? "bdr-1" : ""} bg-white`}>
                                <div className="mt-post-media">
                                    <NavLink to={route.blog.POST_SINGLE}><FastImage src={post.image} alt="" /></NavLink>
                                </div>
                                <div className="mt-post-info p-m30 p-a30 overflow-hide">
                                    <div className="mt-post-meta">
                                        <ul>
                                            <li className="post-date"> <i className="fa fa-calendar site-text-primary" /><strong>{day}</strong> <span>{month} {year}</span> </li>
                                            <li className="post-author"><i className="fa fa-user site-text-primary" /><NavLink to={route.pages.team.DETAIL}>By <span>{post.author || "Admin"}</span></NavLink> </li>
                                            <li className="post-comment"><i className="fa fa-comments site-text-primary" /> <NavLink to={route.blog.POST_SINGLE}>{post.comments ?? 0} Comments</NavLink> </li>
                                        </ul>
                                    </div>
                                    <div className="mt-post-title">
                                        <h3 className="post-title"><NavLink to={route.blog.POST_SINGLE}>{post.title}</NavLink></h3>
                                    </div>
                                    <div className="mt-post-text">
                                        <p>{post.description}</p>
                                    </div>
                                    <div className="mt-post-readmore m-b0">
                                        <NavLink to={route.blog.POST_SINGLE} title="READ MORE" rel="bookmark" className="site-button-link">Read More</NavLink>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    {/* Blog Post End */}
                    {/* Pagination */}
                    <div className="pagination-bx clearfix ">
                        <ul className="pagination">
                            <li><a href="#">«</a></li>
                            <li className="active"><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#">»</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}
export default BlogListPage;