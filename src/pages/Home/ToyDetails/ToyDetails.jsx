import { useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const ToyDetails = () => {
    const toyData = useLoaderData();
    const { photoUrl, sellerName, sellerEmail, price, ratings, availableQuantity, description, name } = toyData;

    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center mt-10">
                <div className="max-w-lg md:max-w-2xl rounded overflow-hidden shadow-lg">
                    <img className="w-full" src={photoUrl} alt="Toy" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Toy Details</div>
                        <p className="text-gray-700 font-semibold mb-2 text-lg">Toy Name: {name}</p>
                        <p className="text-gray-700 text-base mb-2">Seller: {sellerName}</p>
                        <p className="text-gray-700 text-base mb-2">Email: {sellerEmail}</p>
                        <p className="text-gray-700 text-base mb-2">Price: {price}</p>
                        <p className="text-gray-700 text-base mb-2">Ratings: {ratings}</p>
                        <p className="text-gray-700 text-base mb-2">Available Quantity: {availableQuantity}</p>
                        <p className="text-gray-700 text-base mb-2">Description: {description}</p>
                    </div>
                    <div className="px-6 py-4 flex justify-center md:justify-end">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Buy
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ToyDetails;
