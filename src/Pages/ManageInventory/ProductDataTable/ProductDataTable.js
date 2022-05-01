import React from "react";
import { TrashIcon } from "@heroicons/react/outline";
import { PencilIcon } from "@heroicons/react/solid";

const ProductDataTable = ({ product, index }) => {
	const { img, name, price, quote, stock, suppliername } = product;

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
						<button className="bg-green-200 text-green-600 p-2 rounded-full mr-2">
							<PencilIcon className="w-6 h-6 "></PencilIcon>
						</button>
						<button className="bg-red-200 p-2 rounded-full text-red-400">
							<TrashIcon className="w-6 h-6 "></TrashIcon>
						</button>
					</div>
				</td>
			</tr>
		</tbody>
	);
};

export default ProductDataTable;
