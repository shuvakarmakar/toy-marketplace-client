import { useEffect, useState } from "react";
import useTitle from "../../../hook/useTitle";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import AllToy from "./AllToy";

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState("");

    // Dynamic Url
    useTitle("All Toys || Super Kiddo");

    useEffect(() => {
        fetch('https://toy-marketplace-server-red.vercel.app/allToys')
            .then(res => res.json())
            .then(data => setToys(data.slice(0, 20))) // Set the first 20 toys
    }, [])

    const handleSearch = () =>{
            fetch(`http://localhost:5000/toySearchByTitle/${searchText}`)
            .then(res => res.json())
            .then(data =>{
                setToys(data);
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="mb-4 text-center gap-3">
                <input
                    type="text"
                    // value={searchQuery}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search toys"
                    className="px-2 py-1 border border-red-900 rounded"
                />
                <button onClick={handleSearch} className="btn btn-sm btn-primary">Search</button>
            </div>
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
