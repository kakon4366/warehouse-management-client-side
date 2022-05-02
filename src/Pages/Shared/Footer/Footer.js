import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../../../Images/Logo.png";

const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();
	return (
		<footer className="bg-red-600">
			<div className="container mx-auto px-2 py-12 md:grid md:grid-cols-4">
				<div className="col-span-2">
					<img width="150px" src={footerLogo} alt="footer Logo" />
					<p className="md:w-3/4 xl:w-1/2 w-full text-gray-300 mt-4">
						We have all kinds of fresh fruits. We are always aware that we
						can sell fresh fruits to the customer. We do not keep any kind
						of spoiled fruit in the warehouse. Don't worry about any of
						our fruits.
					</p>
				</div>
				<div className="mt-8 md:mt-0">
					<h3 className="font-semibold mb-2 text-gray-50">Useful Link</h3>
					<div className="flex flex-col">
						<p>
							<Link
								className="text-gray-300 hover:text-gray-100"
								to="/inventories"
							>
								Inventories
							</Link>
						</p>
						<p>
							<Link
								className="text-gray-300 hover:text-gray-100"
								to="/manage-items"
							>
								Manage Items
							</Link>
						</p>
						<p>
							<Link
								className="text-gray-300 hover:text-gray-100"
								to="/add-item"
							>
								Add Item
							</Link>
						</p>
						<p>
							<Link
								className="text-gray-300 hover:text-gray-100"
								to="/my-items"
							>
								My Items
							</Link>
						</p>
						<p>
							<Link
								className="text-gray-300 hover:text-gray-100"
								to="/blog"
							>
								Blog
							</Link>
						</p>
					</div>
				</div>
				<div className="mt-8 md:mt-0">
					<h3 className="font-semibold mb-2 text-gray-50">Address</h3>
					<div className="text-gray-300">
						<p>1531 Columbia Mine Road</p>
						<p>WV 26814</p>
						<p>West Virginia</p>
						<div></div>
					</div>
				</div>
			</div>
			<div className="bg-red-800 ">
				<div className="md:flex md:justify-between mditems-center py-4 container mx-auto px-2 ">
					<div className="flex flex-col md:flex-row order-2 text-center md:text-left">
						<p>
							<Link
								className="text-gray-300 hover:text-gray-100 md:mr-8"
								to=""
							>
								Trems and condition
							</Link>
						</p>
						<p>
							<Link className="text-gray-300 hover:text-gray-100 " to="">
								Privacy policy
							</Link>
						</p>
					</div>
					<p className="text-gray-300 order-1 text-center">
						<small>
							Copyright &copy; by Warehouse Management - {year}
						</small>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
