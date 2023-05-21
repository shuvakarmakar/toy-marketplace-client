import { Link } from "react-router-dom";

const MyToy = ({ myToy, handleDelete }) => {
    const { name, sellerName, subCategory, price, availableQuantity, _id, photoUrl } = myToy || {};
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-20 h-20">
                            {photoUrl && <img src={photoUrl} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{sellerName}</div>
                    </div>
                </div>
            </td>
            <td>
                {name}
            </td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{availableQuantity}</td>
            <th>
                <Link to={`updatetoy/${_id}`}><button className="btn btn-info">Update</button></Link>
                <button onClick={() =>handleDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
        </tr>
    );
};

export default MyToy;