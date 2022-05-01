import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AddItem = () => {
	const { register, handleSubmit } = useForm();
	const [user] = useAuthState(auth);

	const onSubmit = (data, e) => {
		data.email = user.email;

		const url = `http://localhost:5000/product`;
		fetch(url, {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				toast.success(data.message);
				e.target.reset();
			});
	};

	return (
		<section className="py-20">
			<div className="container mx-auto px-2">
				<h3 className="text-3xl text-center">Add New Item</h3>
				<div className="text-center md:w-3/4 lg:w-1/2 mx-auto mt-8">
					<form
						className="flex flex-col"
						onSubmit={handleSubmit(onSubmit)}
					>
						<input
							className="mb-3 p-2 rounded border-orange-200 border"
							placeholder="Product Name"
							{...register("name", { required: true })}
						/>
						<input
							className="mb-3 p-2 rounded border-orange-200 border"
							placeholder="Product Price"
							{...register("price", { required: true })}
						/>
						<input
							className="mb-3 p-2 rounded border-orange-200 border"
							placeholder="Stock"
							{...register("stock", { required: true })}
						/>
						<input
							className="mb-3 p-2 rounded border-orange-200 border"
							placeholder="Supplier Name"
							{...register("suppliername", { required: true })}
						/>
						<input
							className="mb-3 p-2 rounded border-orange-200 border"
							placeholder="Product Image"
							{...register("img", { required: true })}
						/>
						<textarea
							className="mb-3 p-2 rounded border-orange-200 border"
							placeholder="Short Description"
							{...register("quote", { required: true })}
						/>

						<input
							className="bg-green-500 py-2 px-6 rounded text-white text-lg cursor-pointer"
							type="submit"
							value="Add Item"
						/>
					</form>
				</div>
			</div>
		</section>
	);
};

export default AddItem;
