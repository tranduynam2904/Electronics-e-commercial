import "./ProductDetailProduct.css";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { Link, useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import "../Header/LapTopCart/LapTopCart.css";
import { AiOutlineTwitter, AiOutlineGooglePlus } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { BsPinterest } from "react-icons/bs";
export default function ProductDetailProduct() {
  const { product, addCart } = useContext(AppContext);
  const { id1 } = useParams();
  const detail = product.find((item) => item.id1 === id1);
  return (
    <div className="handle_detail">
      <h1 style={{ marginBottom: "25px" }}>Product Detail</h1>
      <div className="product_detail">
        <div className="handle_img">
          <img src={detail.image} alt={detail.name}></img>
        </div>
        <div className="handle_detail_info">
          <div className="handle_condition">
            <h4>{detail.name}</h4>
            <p
              style={{ lineHeight: "25px", color: "#FFBA00" }}
              className="review"
            >
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <p style={{ color: "#000" }}>1 Review(s)</p>
            </p>
            <p>
              <span>Condition:</span> New product
            </p>
            <p style={{ lineHeight: "30px" }}>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
          </div>
          <div className="handle_line"></div>
          <div className="handle_stock">
            <p style={{ color: "#4CBB6C", fontWeight: "bold" }}>
              <span>Available In Stock: </span>10 items
            </p>
            <div className="handle_flexinfo">
              <div
                style={{ fontWeight: "bold" }}
                className="handle_originalprice"
              >
                <p style={{ display: "flex", alignItems: "center" }}>
                  Price: ${detail.originalprice}
                </p>
              </div>
              <div className="handle_pricetotal">
                {/* <div className="handle_qty">
                                    <p className="item_qty">{detail.qty}</p>
                                    <p className="handle_btn">
                                        <button className='btnminus' onClick={() => minus(detail.id1)}>-</button>
                                        <button className='btnplus' onClick={() => plus(detail.id1)}>+</button>
                                    </p>
                                </div> */}
              </div>
            </div>

            <div className="button_addtocart">
              <button onClick={() => addCart(detail.id1)}>ADD TO CART</button>
            </div>

            <div className="handle_media">
              <Link className="media facebook">
                <BiLogoFacebook />
              </Link>
              <Link className="media twitter">
                <AiOutlineTwitter />
              </Link>
              <Link className="media google">
                <AiOutlineGooglePlus />
              </Link>
              <Link className="media pinterest">
                <BsPinterest />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
