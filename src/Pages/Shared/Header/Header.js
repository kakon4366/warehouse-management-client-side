import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuAlt3Icon } from "@heroicons/react/solid";

const Header = () => {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<header className="bg-green-600 py-5">
			<div className="container mx-auto">
				<nav className="flex justify-between text-white">
					<div className="logo">
						<h3 className="text-xl">Logo Here</h3>
					</div>
					<div className="lg:hidden">
						<MenuAlt3Icon
							className="h-6 w-6 "
							onClick={() => setShowMenu(!showMenu)}
						>
							Menu
						</MenuAlt3Icon>
					</div>
					<ul
						className={`text-lg flex flex-col lg:flex-row absolute lg:static bg-yellow-600 lg:bg-transparent left-0 w-full lg:w-auto top-16 text-center lg:block z-50 ${
							showMenu ? "" : "hidden"
						}`}
					>
						<Link className="ml-12" to="/home">
							Home
						</Link>
						<Link className="ml-12" to="/manage-inventories">
							Manage Inventories
						</Link>
						<Link className="ml-12" to="/sing-in">
							Sign In
						</Link>
						<Link className="ml-12" to="/sing-up">
							Sign Up
						</Link>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
