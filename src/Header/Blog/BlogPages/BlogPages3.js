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
                <div className="handle_bloginfo">
                    <span>
                        <AiOutlineMenuUnfold className="blog_icon" /><Link onClick={() => showsidebar()} to={`/blogs`}>BACK TO BLOGS</Link>
                    </span>
                    <span>
                        <IoCalendarOutline className="blog_icon" /><p>On: Friday, June 05, 2023</p>
                    </span>
                    <span>
                        <FaRegComments className="blog_icon" /><p>Comment: 0</p>
                    </span>
                </div>

            </div>
            <div className="handle_lorem">
                <LoremIpsum p={4} />
            </div>
        </div>

    )
}