import { Link } from "react-router-dom";
import "./TabmenuRespond.css";
import { useContext, useEffect, useCallback } from "react";
import { AppContext } from "../AppContext";
import { HiOutlineUser } from "react-icons/hi";
export default function TabmenuRespond() {
  const {
    hidesidebar,
    nav,
    setNav,
    navmenu,
    setNavmenu,
    show,
    setShow,
    handle_tabmenu_show,
  } = useContext(AppContext);
  const handle_resize = useCallback(() => {
    setNav(!nav);
    setShow(show);
    if (window.innerWidth <= 600) {
      setNav(true);
      setShow(false);
    }
  }, [nav, show, setNav, setShow]);
  useEffect(() => {
    handle_resize();
    window.addEventListener("resize", handle_resize);
    return () => {
      window.removeEventListener("resize", handle_resize);
    };
  }, [handle_resize]);
  const handle_close = () => {
    setNavmenu(false);
  };
  const handleHome = () => {
    window.location.href = `/home`;
    handle_tabmenu_show();
  };
  const handleContact = () => {
    window.location.href = `/contact`;
    handle_tabmenu_show();
  };
  const handleDelivery = () => {
    window.location.href = `/delivery`;
    handle_tabmenu_show();
  };
  const handleAboutUs = () => {
    window.location.href = `/aboutus`;
    handle_tabmenu_show();
  };
  const handleSiteMap = () => {
    window.location.href = `/sitemap`;
    handle_tabmenu_show();
  };
  const handleBlogs = () => {
    window.location.href = `/blogs`;
    handle_tabmenu_show();
  };
  const handleSignIn = () => {
    window.location.href = `/user`;
    hidesidebar();
  };
  return (
    <div className={`tabmenurespond ${navmenu ? "active" : ""}`}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="handle_close">
          <button onClick={handle_close}>X</button>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <Link
          onClick={handleSignIn}
          // to={`/user`}
        >
          <HiOutlineUser style={{ cursor: "pointer", fontSize: "1.8rem" }} />
        </Link>
      </div>
      <nav>
        <ul>
          <li onClick={handleHome} className="menu_li">
            <Link to={`/home`}>HOME</Link>
          </li>
          <li onClick={handleContact} className="menu_li">
            <Link to={`/contact`}>CONTACT</Link>
          </li>
          <li onClick={handleDelivery} className="menu_li">
            <Link to={`/delivery`}>DELIVERY</Link>
          </li>
          <li onClick={handleAboutUs} className="menu_li">
            <Link to={`/aboutus`}>ABOUT US</Link>
          </li>
          <li onClick={handleSiteMap} className="menu_li">
            <Link to={`/sitemap`}>SITE MAP</Link>
          </li>
          <li onClick={handleBlogs} className="menu_li">
            <Link to={`/blogs`}>BLOGS</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
