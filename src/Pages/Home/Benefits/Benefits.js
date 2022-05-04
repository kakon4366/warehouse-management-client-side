import React from "react";
import {
	BadgeCheckIcon,
	CurrencyDollarIcon,
	TruckIcon,
} from "@heroicons/react/outline";

const Benefits = () => {
	return (
		<section className="py-20">
			<div className="container mx-auto">
				<div>
					<h2 className="text-3xl text-center font-semibold">Benefits</h2>
					<div className="mt-12">
						<h3 className="text-6xl text-center">Why Choose Us</h3>
						<div className="md:grid md:grid-cols-2 gap-8 lg:grid-cols-3 mt-8">
							<div className="flex mt-4 md:mt-0">
								<div className=" mr-4 ">
									<BadgeCheckIcon className="w-20 h-20 bg-green-200 text-green-800 p-4 rounded-full"></BadgeCheckIcon>
								</div>
								<div>
									<h3 className="text-xl font-semibold">
										Fresh Fruits
									</h3>
									<p className="text-md">
										Fresh fruit is always good for the body. That's
										why we always supply fresh fruit to keep its
										quality right.
									</p>
								</div>
							</div>
							<div className="flex mt-4 md:mt-0">
								<div className="mr-4">
									<CurrencyDollarIcon className="w-20 h-20 bg-green-200 text-green-800 p-4 rounded-full"></CurrencyDollarIcon>
								</div>
								<div>
									<h3 className="text-xl font-semibold">Chip Price</h3>
									<p className="text-md">
										We sell the fruits to the buyers at low prices. So
										that everyone can eat these fruits.
									</p>
								</div>
							</div>
							<div className="flex mt-4 md:mt-0">
								<div className="mr-4">
									<TruckIcon className="w-20 h-20 text-green-800 bg-green-200 p-4 rounded-full"></TruckIcon>
								</div>
								<div>
									<h3 className="text-xl font-semibold">
										Integrated Supplier
									</h3>
									<p className="text-md">
										We supply fast so that consumers do not have to
										wait long for fruits.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Benefits;
