import React, { useContext, useEffect, useCallback } from "react";
import "./Home.css";
import CardProductHome from "../../CardProductHome/CardProductHome";
import { AppContext } from "../../AppContext";
import { SliderComponent } from "../../Slider/Slider";
export default function Home() {
  const { handleSortOrderChange, sortOrder, setUser } = useContext(AppContext);
  const handle_resize = useCallback(() => {
    setUser(false);
    if (window.innerWidth <= 600) {
      setUser(true);
    }
  }, [setUser]);
  useEffect(() => {
    handle_resize();
    window.addEventListener("resize", handle_resize);
    return () => {
      window.removeEventListener("resize", handle_resize);
    };
  }, [handle_resize]);
  return (
    <>
      <SliderComponent />
      <div className="product_home">
        <h2>LATEST PRODUCT</h2>
        <div className="handle_sort">
          <p>Sort by: </p>
          <select value={sortOrder} onChange={handleSortOrderChange}>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
            <option value="AZ">Name: A to Z</option>
            <option value="ZA">Name: Z to A</option>
          </select>
        </div>
        <CardProductHome />
      </div>
      {/* <div className='image'>
                <p style={{ display: 'block', fontSize: '1.8rem' }}
                    className='quality_offer'>Top Quality Offer Summer
                </p>
            </div> */}
    </>
  );
}
