import React, { useState } from "react";
import { MenuAlt3Icon } from "@heroicons/react/solid";
import CustomLink from "../CustomLink/CustomLink";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
	const [showMenu, setShowMenu] = useState(false);

	const [user] = useAuthState(auth);

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
						className={`text-lg flex flex-col lg:flex-row absolute lg:static bg-yellow-600 lg:bg-transparent left-0 w-full lg:w-auto top-16 text-center lg:flex lg:block z-50 ${
							showMenu ? "" : "hidden"
						}`}
					>
						<CustomLink className="ml-12" to="/home">
							Home
						</CustomLink>
						<CustomLink className="ml-12" to="/inventories">
							Inventory
						</CustomLink>
						{user && (
							<>
								<CustomLink className="ml-12" to="/manage-items">
									Manage Items
								</CustomLink>
								<CustomLink className="ml-12" to="/add-item">
									Add Item
								</CustomLink>
								<CustomLink className="ml-12" to="/my-items">
									My Items
								</CustomLink>
							</>
						)}
						<CustomLink className="ml-12" to="/blog">
							Blog
						</CustomLink>
						{user ? (
							<button onClick={() => signOut(auth)} className="ml-12">
								Logout
							</button>
						) : (
							<>
								<CustomLink className="ml-12" to="/sign-in">
									Sign In
								</CustomLink>
								<CustomLink className="ml-12" to="/sign-up">
									Sign Up
								</CustomLink>
							</>
						)}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
