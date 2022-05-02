import React from "react";
import { TrashIcon } from "@heroicons/react/outline";
import { PencilIcon } from "@heroicons/react/solid";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ProductDataTable = ({
	product,
	index,
	setDeleteProduct,
	deleteProduct,
}) => {
	const { _id, img, name, price, quote, stock, suppliername } = product;

	const navigate = useNavigate();

	//handle delete product
	const handleDelete = (id) => {
		if (window.confirm("Are you sure delete this item?")) {
			const url = `https://fierce-garden-50697.herokuapp.com/product/${id}`;
			fetch(url, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((result) => {
					toast.success(result.message);
					setDeleteProduct(!deleteProduct);
				});
		}
	};

	return (
		<tbody>
			<tr>
				<td>{index + 1}</td>
				<td>
					<img width="150px" src={img} alt="" />
				</td>
				<td>{name}</td>
				<td>
					$<span>{price}</span> <span className="text-sm">(per KG)</span>
				</td>
				<td>{quote}</td>
				<td>
					{stock} <span className="text-sm italic"> (KG)</span>
				</td>
				<td>{suppliername}</td>
				<td>
					<div className="flex p-1 items-center justify-center">
						<button
							onClick={() => {
								navigate(`/update-item/${_id}`);
							}}
							className="bg-green-200 text-green-600 p-2 rounded-full mr-2"
						>
							<PencilIcon className="w-6 h-6 "></PencilIcon>
						</button>
						<button
							onClick={() => handleDelete(_id)}
							className="bg-red-200 p-2 rounded-full text-red-400"
						>
							<TrashIcon className="w-6 h-6 "></TrashIcon>
						</button>
					</div>
				</td>
			</tr>
		</tbody>
	);
};

export default ProductDataTable;
