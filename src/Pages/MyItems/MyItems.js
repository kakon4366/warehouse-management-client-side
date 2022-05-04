import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import PageTitle from "../Shared/PageTitle/PageTitle";

const MyItems = () => {
	const [myProducts, setMyProducts] = useState([]);
	const [user] = useAuthState(auth);
	const [deleteMyProduct, setDeleteMyProduct] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const email = user.email;
		const getMyItems = async () => {
			const url = `https://fierce-garden-50697.herokuapp.com/myproduct?email=${email}`;
			try {
				const { data } = await axios.get(url, {
					headers: {
						authorization: `Bearer ${localStorage.getItem(
							"access_token"
						)}`,
					},
				});
				setMyProducts(data);
			} catch (error) {
				if (
					error.response.status === 401 ||
					error.response.status === 403
				) {
					signOut(auth);
					navigate("/sign-in");
				}
			}
		};
		getMyItems();
	}, []);

	const handleDeleteMyProduct = (id) => {
		if (window.confirm("Are you sure delete this item?")) {
			const url = `https://fierce-garden-50697.herokuapp.com/product/${id}`;
			fetch(url, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((result) => {
					toast.success(result.message);
					setDeleteMyProduct(!deleteMyProduct);
				});
		}
	};

	return (
		<section className="py-20" data-aos="slide-down">
			<PageTitle title="My Items"></PageTitle>
			<div className="container mx-auto">
				<h2 className="text-3xl text-center mb-8">My Items</h2>
				<div className="px-2 w-full lg:w-3/4 xl:w-1/2 mx-auto">
					{myProducts.length > 0 || (
						<h2 className="text-center text-4xl italic text-gray-500 py-8">
							Products Not Available
						</h2>
					)}
					{myProducts.map((myProduct) => (
						<div
							className="border rounded sm:flex mb-4"
							key={myProduct._id}
						>
							<div className="">
								<img
									className="w-full rounded"
									src={myProduct.img}
									alt=""
								/>
							</div>
							<div className="ml-4 sm:flex justify-between items-center w-full my-3">
								<div className="text-lg">
									<h2 className="text-xl">{myProduct.name}</h2>
									<p className="text-sm">{myProduct.quote}</p>
									<h4 className="my-2 text-lg">
										Price: $<span>{myProduct.price}</span>
										<span className="text-sm"> (per KG)</span>
									</h4>
									<p className="text-sm">
										Stock: {myProduct.stock} <span>(KG)</span>
									</p>
									<p className="text-sm">
										Supplier Name: {myProduct.suppliername}
									</p>
								</div>
								<div className="sm:p-4 mt-2 sm:mt-0 flex">
									<button
										onClick={() => {
											navigate(`/update-item/${myProduct._id}`);
										}}
										className="bg-green-200 text-green-600 p-2 rounded-full mr-2"
									>
										<PencilAltIcon className="w-4 h-4"></PencilAltIcon>
									</button>
									<button
										onClick={() =>
											handleDeleteMyProduct(myProduct._id)
										}
										className="bg-red-200 p-2 rounded-full text-red-400"
									>
										<TrashIcon className="w-4 h-4"></TrashIcon>
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default MyItems;
