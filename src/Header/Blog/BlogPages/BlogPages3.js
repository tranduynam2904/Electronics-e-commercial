import React, { useContext } from "react";
import { LoremIpsum, Avatar } from 'react-lorem-ipsum';
import './BlogPage.css'
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { IoCalendarOutline } from 'react-icons/io5';
import { FaRegComments } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { AppContext } from "../../../AppContext";
export default function BlogPages3() {
    const { showsidebar } = useContext(AppContext)
    return (
        <div className="handle_blogpage">
            <h2>New 15-inch MacBook Air is the World’s Thinnest 15-inch Laptop</h2>
            <div className="handle_blogpageinfo">
                <div className="blogpage_img">
                <img src='https://petapixel.com/assets/uploads/2023/06/macbook-air-featured-800x420.jpg'></img>
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