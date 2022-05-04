import React, { useState } from "react";
import { MenuAlt3Icon, XIcon } from "@heroicons/react/solid";
import CustomLink from "../CustomLink/CustomLink";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import logo from "../../../Images/Logo.png";

const Header = () => {
	const [showMenu, setShowMenu] = useState(false);

	const [user] = useAuthState(auth);

	return (
		<header className="bg-green-500 py-5 sticky top-0 z-10 w-full">
			<div className="container mx-auto px-4">
				<nav className="flex justify-between items-center text-white">
					<div className="logo">
						<img width="80px" src={logo} alt="" />
					</div>
					<div className="lg:hidden">
						<button onClick={() => setShowMenu(!showMenu)}>
							{showMenu ? (
								<XIcon className="h-6 w-6 "></XIcon>
							) : (
								<MenuAlt3Icon className="h-6 w-6 "></MenuAlt3Icon>
							)}
						</button>
					</div>
					<ul
						className={`text-lg flex flex-col lg:flex-row absolute lg:static bg-green-500 border-t-2 lg:border-0 border-green-600 lg:bg-transparent left-0 w-full lg:w-auto top-24 text-center lg:flex lg:block py-4 z-50 ${
							showMenu ? "" : "hidden"
						}`}
					>
						<CustomLink className="ml-12" to="/home">
							Home
						</CustomLink>
						<CustomLink className="ml-12" to="/inventories">
							Inventories
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
