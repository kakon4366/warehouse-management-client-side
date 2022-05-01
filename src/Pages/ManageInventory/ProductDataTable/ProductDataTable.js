import React from "react";

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
					<button>Edit</button>
					<button>Delete</button>
				</td>
			</tr>
		</tbody>
	);
};

export default ProductDataTable;
