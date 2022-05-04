import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../../../Images/Logo.png";
import facebook from "../../../Images/facebook.png";
import linkedin from "../../../Images/linkedin-circle.png";
import twitter from "../../../Images/twitter.png";

const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();
	return (
		<footer className="bg-slate-700">
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
						<p>
							<Link
								className="text-gray-300 hover:text-gray-100"
								to="/sign-in"
							>
								Sign In
							</Link>
						</p>
						<p>
							<Link
								className="text-gray-300 hover:text-gray-100"
								to="/sign-up"
							>
								Sign Up
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
						<div className="flex mt-4">
							<a
								href="https://www.facebook.com/kakon4366/"
								target="_blank"
								className="mr-3 transition-all hover:-translate-y-2"
							>
								<img width="30px" src={facebook} alt="facebook" />
							</a>
							<a
								href="https://www.linkedin.com/in/kakon-barman/"
								target="_blank"
								className="mr-3 transition-all hover:-translate-y-2"
							>
								<img width="30px" src={linkedin} alt="linkedin" />
							</a>
							<a
								href="https://twitter.com/kakon_barman"
								target="_blank"
								className="mr-3 transition-all hover:-translate-y-2"
							>
								<img width="30px" src={twitter} alt="twitter" />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-slate-900 ">
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
							Copyright &copy; by Fruits Strip Warehouse - {year}
						</small>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
