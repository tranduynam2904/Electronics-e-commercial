import React, { useContext } from "react";
import { LoremIpsum, Avatar } from 'react-lorem-ipsum';
import './BlogPage.css'
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { IoCalendarOutline } from 'react-icons/io5';
import { FaRegComments } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { AppContext } from "../../../AppContext";
export default function BlogPages4() {
    const { showsidebar } = useContext(AppContext)
    return (
        <div className="handle_blogpage">
            <h2>Razer's ultra-premium ultra-light mouse</h2>
            <div className="handle_blogpageinfo">
                <div className="blogpage_img">
                <img src='https://assetsio.reedpopcdn.com/razer-deathadder-v3-pro-hero-desktop_BIUmyeN.jpg?width=880&quality=80&format=jpg&auto=webp'></img>
                </div>
                <div className="handle_info">
                    <AiOutlineMenuUnfold className="blog_icon icon1" />
                    {/* <span>In: </span> */}
                    <Link onClick={() => showsidebar()} to={`/blogs`}><span></span>BACK TO BLOGS</Link>
                    <IoCalendarOutline className="blog_icon" />
                    <span>On: Friday, June 05, 2023</span>
                    <FaRegComments className="blog_icon" />
                    <span>Comment: 0</span>
                </div>
            </div>
            <div className="handle_lorem">
            <LoremIpsum p={4} />
            </div>
        </div>
    )
}