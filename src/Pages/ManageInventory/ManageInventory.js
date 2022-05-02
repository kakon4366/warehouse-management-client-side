import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageTitle from "../Shared/PageTitle/PageTitle";
import "./manageInventory.css";
import ProductDataTable from "./ProductDataTable/ProductDataTable";

const ManageInventory = () => {
	const [products, setProducts] = useState([]);
	const [deleteProduct, setDeleteProduct] = useState(false);

	useEffect(() => {
		fetch("https://fierce-garden-50697.herokuapp.com/products")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, [deleteProduct]);

	const navigate = useNavigate();

	return (
		<section className="py-20">
			<PageTitle title="Manage Items"></PageTitle>
			<div className="container mx-auto">
				<h2 className="text-3xl text-center">Manage Items</h2>
				<div className="text-center mt-4">
					<button
						onClick={() => navigate("/add-item")}
						className="bg-green-500 py-3 px-6 rounded text-white text-lg"
					>
						Add New Item{" "}
					</button>
				</div>
				<div className="mt-8 overflow-x-auto">
					<table className="manage-table">
						<thead>
							<tr>
								<th>##</th>
								<th>Image</th>
								<th>Product Name</th>
								<th>Price</th>
								<th>Short Description</th>
								<th>Stock</th>
								<th>Sipplier Name</th>
								<th>Action</th>
							</tr>
						</thead>
						{products.map((product, index) => (
							<ProductDataTable
								setProducts={setProducts}
								setDeleteProduct={setDeleteProduct}
								deleteProduct={deleteProduct}
								index={index}
								product={product}
								key={product._id}
							></ProductDataTable>
						))}
					</table>
				</div>
			</div>
		</section>
	);
};

export default ManageInventory;
