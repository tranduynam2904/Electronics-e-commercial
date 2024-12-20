import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { AppProvider } from "./AppContext";
import TabmenuRespond from "./TabmenuRespond/TabmenuRespond";
import ScrollToTop from "./ScrollToTopButton/ScrollToTopButton";

function App() {
  return (
    <AppProvider>
      <div style={{ position: "relative" }} className="container">
        <TabmenuRespond />
        <Header />
        <Footer />
      </div>{" "}
      <ScrollToTop />
    </AppProvider>
  );
}

export default App;
