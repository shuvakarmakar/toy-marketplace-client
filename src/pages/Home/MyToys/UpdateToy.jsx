import Navbar from "../Shared/Navbar/Navbar";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const UpdateToy = () => {
    const toys = useLoaderData();
    const { _id, price, description, availableQuantity } = toys;

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        fetch(`https://toy-marketplace-server-red.vercel.app/myToys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.modifiedCount) {
                    Swal.fire('Toy Updated Successfully');
                }
                reset(); // Reset the form after successful submission
            })
            .catch(error => {
                console.error(error);
                Swal.fire('Error occurred while updating the toy');
            });
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-purple-400 to-blue-500">
                <h1 className="text-4xl font-bold text-white mb-8">Toy Information Update Form</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-md px-8 py-6 w-96">
                    {/* price */}
                    <div className="w-full pr-2">
                        <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="price">Price (USD)</label>
                        <input className="input input-bordered input-error w-full" defaultValue={price} id="price" type="text" {...register("price")} />
                    </div>

                    <div className="flex mb-6">
                        <div className="w-1/2 pr-2">
                            <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="availableQuantity">Available Quantity</label>
                            <input className="input input-bordered input-error w-full" defaultValue={availableQuantity} id="availableQuantity" type="text" {...register("availableQuantity")} />
                        </div>
                        <div className="w-1/2 pl-2">
                            <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
                            <textarea className="input input-bordered input-error w-full" defaultValue={description} id="description" rows="4" {...register("description")} />
                        </div>
                    </div>

                    {errors.exampleRequired && <span className="text-red-500">This field is required</span>}

                    <button className="btn bg-indigo-500 text-white px-4 py-2 rounded-full w-full" type="submit">Update</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateToy;
