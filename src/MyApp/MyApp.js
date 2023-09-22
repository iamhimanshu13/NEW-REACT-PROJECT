import { Route, Routes } from "react-router-dom";
import HomePage from "../MyApp/Pages/HomePage.jsx";
import NavBar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";
import CartPage from "./Pages/CartPage.jsx";
import AntiqueSet from "./Pages/ChildPages/Products/AntiqueSet.jsx";
import Bracelet from "./Pages/ChildPages/Products/Bracelet.jsx";
import ChainSet from "./Pages/ChildPages/Products/ChainSet.jsx";
import CoinsForGift from "./Pages/ChildPages/Products/CoinsForGift.jsx";
import DiamondNosepin from "./Pages/ChildPages/Products/DiamondNosepin.jsx";
import GoldNosepin from "./Pages/ChildPages/Products/GoldNosepin.jsx";
import LoveAndEngagement from "./Pages/ChildPages/Products/LoveAndEngagement.jsx";
import Naceless from "./Pages/ChildPages/Products/Naceless.jsx";
import Payal from "./Pages/ChildPages/Products/Payal.jsx";
import Pendants from "./Pages/ChildPages/Products/Pendants.jsx";
import Rings from "./Pages/ChildPages/Products/Rings.jsx";
import Diamond from "./Pages/ChildPages/Diamond.jsx";
import Gold from "./Pages/ChildPages/Gold.jsx";
import Silver from "./Pages/ChildPages/Silver.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import ProductDetailPage from "./Pages/ProductDetailPage.jsx";
import Oranament from "./Pages/ChildPages/Products/Oranament.jsx";

const MyApp = () => {
    return (
      <div>   
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/AntiqueSet" element={<AntiqueSet />} />
          <Route path="/Bracelet" element={<Bracelet />} />
          <Route path="/ChainSet" element={<ChainSet />} />
          <Route path="/CoinsForGift" element={<CoinsForGift />} />
          <Route path="/DiamondNosepin" element={<DiamondNosepin />} />
          <Route path="/GoldNosepin" element={<GoldNosepin />} />
          <Route path="/LoveAndEngagement" element={<LoveAndEngagement />} />
          <Route path="/Naceless" element={<Naceless />} />
          <Route path="/oranament" element={<Oranament />} />
          <Route path="/Payal" element={<Payal />} />
          <Route path="/Pendants" element={<Pendants />} />
          <Route path="/Diamond" element={<Diamond />} />
          <Route path="/Gold" element={<Gold />} />
          <Route path="/Silver" element={<Silver />} />
          <Route path="/Rings" element={<Rings />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/ProductDetailPage" element={<ProductDetailPage />} />
          

        </Routes>
        <Footer />
      </div>
    );
  };

  export default MyApp;