import React from "react";

const SignUp = () => {
	return (
		<section className="py-20">
			<div className="container mx-auto">
				<div className="flex justify-center items-center w-full">
					<div className="w-[300px] bg-orange-100 p-4 rounded-lg">
						<h3 className="text-2xl text-center font-semibold">
							Sing Up
						</h3>
						<form action="">
							<div className="flex flex-col text-lg mb-3 mt-4">
								<label htmlFor="name">Name</label>
								<input
									className="border py-1 px-2 mt-1"
									type="text"
									name="name"
									placeholder="Name"
								/>
							</div>
							<div className="flex flex-col text-lg mb-3">
								<label htmlFor="email">Email Address</label>
								<input
									className="border py-1 px-2 mt-1"
									type="text"
									name="email"
									placeholder="Eamil Address"
								/>
							</div>
							<div className="flex flex-col text-lg mb-3">
								<label htmlFor="password">Password</label>
								<input
									className="border py-1 px-2 mt-1"
									type="text"
									name="password"
									placeholder="Password"
								/>
							</div>
							<div className="flex flex-col text-lg mb-3">
								<label htmlFor="confirmPassword">
									Confirm Password
								</label>
								<input
									className="border py-1 px-2 mt-1"
									type="text"
									name="confirmPassword"
									placeholder="Confirm Password"
								/>
							</div>
							<input
								className="bg-orange-500 hover:bg-orange-600 transition-all cursor-pointer w-full text-white py-2 rounded mt-4"
								type="submit"
								value="Sing Up"
							/>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignUp;
