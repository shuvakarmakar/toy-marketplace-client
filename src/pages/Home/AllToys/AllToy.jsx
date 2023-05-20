
const AllToy = ({ toy }) => {
    const { name, sellerName, subCategory, price, availableQuantity, _id, photoUrl } = toy || {};
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
                <button className="btn btn-info">details</button>
            </th>
        </tr>
    );
};

export default AllToy;