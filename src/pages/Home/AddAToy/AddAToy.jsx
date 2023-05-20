import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const AddAToy = () => {

    const { user } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        fetch("https://toy-marketplace-server-red.vercel.app/addAToy", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result);
            if(result.insertedId){
                Swal.fire('Sign Up Complete');
                
            }
        })
        console.log(data);
        reset(); 
    }
    return (
        <>
            <Navbar></Navbar>
            <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-purple-400 to-blue-500">
                <h1 className="text-4xl font-bold text-white mb-8">Toy Form</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-md px-8 py-6 w-96">
                    <div className="mb-6">
                        <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="photoUrl">Picture URL of Toy</label>
                        <input className="input input-bordered input-error w-full" id="photoUrl" type="text" {...register("photoUrl")} />
                    </div>

                    <div className="mb-6">
                        <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name of Toy</label>
                        <input className="input input-bordered input-error w-full" id="name" type="text" {...register("name")} />
                    </div>

                    <div className="flex mb-6">
                        <div className="w-1/2 pr-2">
                            <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="sellerName">Seller Name</label>
                            <input className="input input-bordered input-error w-full" id="sellerName" type="text" {...register("sellerName")} />
                        </div>
                        <div className="w-1/2 pl-2">
                            <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="sellerEmail">Seller Email</label>
                            <input className="input input-bordered input-error w-full" id="sellerEmail" type="text" {...register("sellerEmail")} />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="subCategory">subCategory</label>
                        <select className="input input-bordered input-error w-full" id="subCategory" {...register("subCategory")}>
                            <option value="MathToys">Math Toys</option>
                            <option value="LanguageToys">Language Toys</option>
                            <option value="EngineeringToys">Engineering Toys</option>
                        </select>
                    </div>

                    <div className="flex mb-6">
                        <div className="w-1/2 pr-2">
                            <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="price">Price</label>
                            <input className="input input-bordered input-error w-full" id="price" type="text" {...register("price")} />
                        </div>
                        <div className="w-1/2 pl-2">
                            <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="ratings">Ratings</label>
                            <input className="input input-bordered input-error w-full" id="ratings" type="text" {...register("ratings")} />
                        </div>
                    </div>

                    <div className="flex mb-6">
                        <div className="w-1/2 pr-2">
                            <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="availableQuantity">Available Quantity</label>
                            <input className="input input-bordered input-error w-full" id="availableQuantity" type="text" {...register("availableQuantity")} />
                        </div>
                        <div className="w-1/2 pl-2">
                            <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
                            <textarea className="input input-bordered input-error w-full" id="description" rows="4" {...register("description")} />
                        </div>
                    </div>

                    {errors.exampleRequired && <span className="text-red-500">This field is required</span>}

                    <button className="btn bg-indigo-500 text-white px-4 py-2 rounded-full w-full" type="submit">Submit</button>
                </form>
            </div>

            <Footer></Footer>
        </>
    );
};

export default AddAToy;