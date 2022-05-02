import React from "react";

const Blog = () => {
	return (
		<section className="py-20">
			<div className="container mx-auto">
				<div className="xl:w-1/2 lg:w-3/4 w-full mx-auto">
					<div className="bg-orange-200 p-4 rounded">
						<h2 className="text-2xl mb-2 italic">
							Difference between javascript and nodejs?
						</h2>
						<p>
							<span className="font-semibold">Ans: </span>
							Javascript: JavaScript is a programming language.
							JavaScript is used on client sites. JavaScript can only run
							on browsers. JavaScript is also called a high level
							programming language. JavaScript has many libraries and
							frameworks that make it easy to develop client sites. Among
							them: React, Angular and Vue.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Blog;
