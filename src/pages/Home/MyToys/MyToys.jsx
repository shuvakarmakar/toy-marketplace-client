import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import useTitle from "../../../hook/useTitle";
import { AuthContext } from "../../../providers/AuthProvider";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import MyToy from "./MyToy";

const MyToys = () => {

    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    // const [toys, setToys] = useState([]);

    // For Dynamic Url
    useTitle("My Toys || Super Kiddo")

    useEffect(() => {
        fetch(`https://toy-marketplace-server-red.vercel.app/myToys/${user?.email}`)
            .then(result => result.json())
            .then((data) => {
                setMyToys(data);
            })
    }, [user])

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-marketplace-server-red.vercel.app/myToys/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deleteCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            );
                            const remaining = myToys.filter(myT => myT._id !== _id);
                            setMyToys(remaining);
                        }
                    })
                    .catch(error => {
                        console.log(error);
                        Swal.fire(
                            'Error',
                            'Failed to delete the toy.',
                            'error'
                        );
                    });
            }
        });
    };


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
                        <th>Price (USD)</th>
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
                            handleDelete={handleDelete}
                        ></MyToy>)
                    }
                </tbody>
            </table>
            <Footer></Footer>
        </div>
    );
};

export default MyToys;