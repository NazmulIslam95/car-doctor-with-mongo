import AboutUs from "../../Components/AboutUs/AboutUs";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Services from "../../Components/Services/services";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
};

export default Home;
