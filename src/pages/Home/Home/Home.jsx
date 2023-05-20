import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import SectionOne from "../ExtraSection/SectionOne";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Category></Category>
            <SectionOne></SectionOne>
            <Footer></Footer>
        </div>
    );
};

export default Home;