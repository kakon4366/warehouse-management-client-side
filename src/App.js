import "./App.css";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import SignUp from "./Pages/SignUp/SignUp";
import SignIn from "./Pages/SignIn/SignIn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Inventory from "./Pages/Inventory/Inventory";
import Inventories from "./Pages/Inventories/Inventories/Inventories";
import ManageInventory from "./Pages/ManageInventory/ManageInventory";
import AddItem from "./Pages/AddItem/AddItem";
import MyItems from "./Pages/MyItems/MyItems";
import NotFound404 from "./Pages/Shared/NotFound404/NotFound404";
import UpdateItem from "./Pages/UpdateItem/UpdateItem";
import RequireAuth from "./Pages/Shared/RequireAuth/RequireAuth";
import Blog from "./Pages/Blog/Blog";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";

function App() {
	return (
		<div>
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/home" element={<Home />}></Route>
				<Route
					path="/inventory/:productId"
					element={
						<RequireAuth>
							<Inventory />
						</RequireAuth>
					}
				></Route>
				<Route
					path="/update-item/:productId"
					element={
						<RequireAuth>
							<UpdateItem />
						</RequireAuth>
					}
				></Route>
				<Route path="/inventories" element={<Inventories />}></Route>
				<Route
					path="/manage-items"
					element={
						<RequireAuth>
							<ManageInventory />
						</RequireAuth>
					}
				></Route>
				<Route
					path="/add-item"
					element={
						<RequireAuth>
							<AddItem />
						</RequireAuth>
					}
				></Route>
				<Route
					path="/my-items"
					element={
						<RequireAuth>
							<MyItems />
						</RequireAuth>
					}
				></Route>
				<Route path="/blog" element={<Blog />}></Route>
				<Route path="/sign-in" element={<SignIn />}></Route>
				<Route path="/sign-up" element={<SignUp />}></Route>
				<Route path="/forgot-password" element={<ForgotPassword />}></Route>
				<Route path="*" element={<NotFound404 />}></Route>
			</Routes>
			<Footer></Footer>
			<ToastContainer></ToastContainer>
		</div>
	);
}

export default App;
