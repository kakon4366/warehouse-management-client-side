import "./App.css";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import SignUp from "./Pages/SingUp/SignUp";
import SignIn from "./Pages/SignIn/SignIn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ManageInventories from "./Pages/ManageInventories/ManageInventories";
import Inventory from "./Pages/Inventory/Inventory";
// import RequireAuth from "./Pages/Shared/RequireAuth/RequireAuth";

function App() {
	return (
		<div>
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/home" element={<Home />}></Route>
				<Route path="/inventory/:productId" element={<Inventory />}></Route>
				<Route
					path="/manage-inventories"
					element={<ManageInventories />}
				></Route>
				<Route path="/sign-in" element={<SignIn />}></Route>
				<Route path="/sign-up" element={<SignUp />}></Route>
			</Routes>
			<Footer></Footer>
			<ToastContainer></ToastContainer>
		</div>
	);
}

export default App;
