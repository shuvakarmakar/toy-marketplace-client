import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import MyToy from "./MyToy";

const MyToys = () => {

    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([])

    useEffect(() => {
        fetch(`https://toy-marketplace-server-red.vercel.app/myToys/${user?.email}`)
            .then(result => result.json())
            .then((data) => {
                setMyToys(data);
            })
    }, [user])

    return (
        <div>
            <Navbar></Navbar>
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
                    {
                        myToys.map(myToy => <MyToy
                            key={myToy._id}
                            myToy={myToy}
                        ></MyToy>)
                    }
                </tbody>
            </table>
            <Footer></Footer>
        </div>
    );
};

export default MyToys;