import "./App.css";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import ManageInventories from "./Pages/ManageInventories/ManageInventories";
import SignUp from "./Pages/SingUp/SignUp";
import SignIn from "./Pages/SignIn/SignIn";

function App() {
	return (
		<div>
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/home" element={<Home />}></Route>
				<Route
					path="/manage-inventories"
					element={<ManageInventories />}
				></Route>
				<Route path="/sign-in" element={<SignIn />}></Route>
				<Route path="/sign-up" element={<SignUp />}></Route>
			</Routes>
			<Footer></Footer>
		</div>
	);
}

export default App;
