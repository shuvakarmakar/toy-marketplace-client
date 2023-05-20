import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import SectionOne from "../ExtraSection/SectionOne";
import SectionTwo from "../ExtraSection/SectionTwo";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Category></Category>
            <SectionOne></SectionOne>
            <SectionTwo></SectionTwo>
            <Footer></Footer>
        </div>
    );
};

export default Home;