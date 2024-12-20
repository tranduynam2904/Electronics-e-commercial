import { useContext } from "react";
import { AppContext } from "../AppContext";
import "./ScrollToTopButton.css";
import { RxDoubleArrowUp } from "react-icons/rx";
export default function ScrollToTop() {
  const { ScrollToTop } = useContext(AppContext);

  return (
    <div className="handle_scrolltop">
      <button onClick={ScrollToTop}>
        <RxDoubleArrowUp />
      </button>
    </div>
  );
}
