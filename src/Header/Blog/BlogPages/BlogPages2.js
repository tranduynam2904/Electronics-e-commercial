import React, { useContext } from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import "./BlogPage.css";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { FaRegComments } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AppContext } from "../../../AppContext";
export default function BlogPages2() {
  const { showsidebar } = useContext(AppContext);
  return (
    <div className="handle_blogpage">
      <h2>
        Acer introduced updated of Nitro 5 and Aspire 3 laptops based on AMD
        Ryzen 7000 series
      </h2>
      <div className="handle_blogpageinfo">
        <div className="blogpage_img">
          <img
            src="https://ei5t3fq5d7s.exactdn.com/wp-content/uploads/2023/04/Acer_Nitro5_Lifestyle_01.tif-custom-900x600.jpg?strip=all&lossy=1&webp=80&avif=80&ssl=1"
            alt="Acer Nitro 5 and Aspire 3 Laptops"
          ></img>
        </div>
        <div className="handle_bloginfo">
          <span>
            <AiOutlineMenuUnfold className="blog_icon" />
            <Link onClick={() => showsidebar()} to={`/blogs`}>
              BACK TO BLOGS
            </Link>
          </span>
          <span>
            <IoCalendarOutline className="blog_icon" />
            <p>On: Thursday, June 04, 2023</p>
          </span>
          <span>
            <FaRegComments className="blog_icon" />
            <p>Comment: 0</p>
          </span>
        </div>
      </div>
      <div className="handle_lorem">
        <LoremIpsum p={4} />
      </div>
    </div>
  );
}
