import { useEffect, useState } from "react";
import useTitle from "../../../hook/useTitle";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import AllToy from "./AllToy";

const AllToys = () => {
    const [toys, setToys] = useState([]);

    // Dynamic Url
    useTitle("All Toys || Super Kiddo");

    useEffect(() => {
        fetch('https://toy-marketplace-server-red.vercel.app/allToys')
            .then(res => res.json())
            .then(data => setToys(data.slice(0, 20))) // Set the first 20 toys
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th className="text-center lg:pl-12">Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>View Details button</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {toys.map((toy) => (
                            <AllToy key={toy._id} toy={toy}></AllToy>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllToys;
