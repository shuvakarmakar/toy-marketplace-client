import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Category></Category>
            <Footer></Footer>
        </div>
    );
};

export default Home;