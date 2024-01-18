import AboutUs from "../../Components/AboutUs/AboutUs";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Products from "../../Components/Products/Products";
import Services from "../../Components/Services/Services";

const Home = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
        <AboutUs></AboutUs>
        <Services></Services>
        <Products></Products>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
