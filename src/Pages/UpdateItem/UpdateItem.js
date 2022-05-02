import { ArrowLeftIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateItem = () => {
	const [updateProduct, setUpdateProduct] = useState([]);
	const { register, handleSubmit } = useForm();

	const { name, price, stock, suppliername, img, quote } = updateProduct;

	const { productId } = useParams();

	useEffect(() => {
		const url = `https://fierce-garden-50697.herokuapp.com/product/${productId}`;
		fetch(url)
			.then((res) => res.json())
			.then((product) => setUpdateProduct(product));
	}, []);

	const onSubmit = (data) => {
		if (
			!data.name ||
			!data.price ||
			!data.stock ||
			!data.img ||
			!data.suppliername ||
			!data.quote
		) {
			return toast.error("Please touch all fields!");
		}
		const url = `https://fierce-garden-50697.herokuapp.com/product/${productId}`;
		fetch(url, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((result) => {
				toast.success(result.message);
			});
	};

	return (
		<section className="py-20">
			<div className="container mx-auto px-2">
				<button
					onClick={() => window.history.back()}
					className="bg-orange-500 py-2 px-6 rounded text-white flex justify-center items-center"
				>
					<ArrowLeftIcon className="w-6 h-6 mr-2"></ArrowLeftIcon>
					Back To Previous
				</button>
				<div className="text-center md:w-3/4 lg:w-1/2 mx-auto mt-8">
					<h3 className="text-3xl text-center mb-8">Update Item</h3>
					<form
						className="flex flex-col"
						onSubmit={handleSubmit(onSubmit)}
					>
						<input
							defaultValue={name}
							className="mb-3 p-2 rounded border-orange-200 border"
							placeholder="Product Name"
							{...register("name")}
						/>
						<input
							defaultValue={price}
							className="mb-3 p-2 rounded border-orange-200 border"
							placeholder="Product Price"
							{...register("price")}
						/>
						<input
							defaultValue={stock}
							className="mb-3 p-2 rounded border-orange-200 border"
							placeholder="Stock"
							{...register("stock")}
						/>
						<input
							defaultValue={suppliername}
							className="mb-3 p-2 rounded border-orange-200 border"
							placeholder="Supplier Name"
							{...register("suppliername")}
						/>
						<input
							defaultValue={img}
							className="mb-3 p-2 rounded border-orange-200 border"
							placeholder="Product Image"
							{...register("img")}
						/>
						<textarea
							defaultValue={quote}
							className="mb-3 p-2 rounded border-orange-200 border"
							placeholder="Short Description"
							{...register("quote")}
						/>

						<input
							className="bg-green-500 py-2 px-6 rounded text-white text-lg cursor-pointer"
							type="submit"
							value="Update Item"
						/>
					</form>
				</div>
			</div>
		</section>
	);
};

export default UpdateItem;
