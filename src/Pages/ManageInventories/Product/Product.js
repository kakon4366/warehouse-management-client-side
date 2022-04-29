import React from "react";

const Product = ({ product }) => {
	const { name, price, quote, stock, suppliername, img } = product;
	return (
		<div className="border-2 rounded-md">
			<img className="rounded-t-md" width="100%" src={img} alt={name} />
			<div className="mt-2 p-4">
				<h2 className="text-2xl md:text-3xl ">{name}</h2>
				<p className="text-lg">{quote}</p>
				<h4 className="text-xl mt-4">
					Price: $<span>{price}</span>
				</h4>
				<div className="flex justify-between">
					<div className="italic text-slate-600">
						<p className="text-sm mt-4">
							Stock: <span>{stock}</span>
						</p>
						<p className="text-sm">
							Supplier Name: <span>({suppliername})</span>
						</p>
					</div>
					<button className="bg-orange-400 hover:bg-orange-600 transition-all px-6 text-white rounded">
						Stock Update
					</button>
				</div>
			</div>
		</div>
	);
};

export default Product;
