import React, { useContext } from "react";
import { LoremIpsum, Avatar } from 'react-lorem-ipsum';
import './BlogPage.css'
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { IoCalendarOutline } from 'react-icons/io5';
import { FaRegComments } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { AppContext } from "../../../AppContext";
export default function BlogPages2() {
    const { showsidebar } = useContext(AppContext)
    return (
        <div className="handle_blogpage">
            <h2>Acer introduced updated of Nitro 5 and Aspire 3 laptops based on AMD Ryzen 7000 series</h2>
            <div className="handle_blogpageinfo">
                <div className="blogpage_img">
                    <img src='https://eicvs459tys.exactdn.com/wp-content/uploads/2023/04/Acer_Nitro5_Lifestyle_01.tif-custom-900x600.jpg?strip=all&lossy=1&webp=80&avif=80&ssl=1'></img>
                </div>
                <div className="handle_info">
                    <AiOutlineMenuUnfold className="blog_icon icon1" />
                    <span>In: </span>
                    <Link onClick={() => showsidebar()} to={`/blogs`}><span></span>BACK TO BLOGS</Link>
                    <IoCalendarOutline className="blog_icon" />
                    <span>On: Thursday, June 04, 2023</span>
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