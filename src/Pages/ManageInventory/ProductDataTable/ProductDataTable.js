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
		const url = `http://localhost:5000/product/${id}`;
		fetch(url, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((result) => {
				toast.success(result.message);
				setDeleteProduct(!deleteProduct);
			});
	};

	//handle updata product
	const handleUpdate = (id) => {
		const url = `http://localhost:5000/product/${id}`;
		fetch(url, {
			method: "PUT",
		})
			.then((res) => res.json())
			.then((result) => {
				toast.success(result.message);
				setDeleteProduct(!deleteProduct);
			});
	};

	return (
		<tbody>
			<tr>
				<td>{index + 1}</td>
				<td>
					<img width="150px" src={img} alt="" />
				</td>
				<td>{name}</td>
				<td>{price}</td>
				<td>{quote}</td>
				<td>{stock}</td>
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
