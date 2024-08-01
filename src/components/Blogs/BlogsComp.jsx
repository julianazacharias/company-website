import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/blog/blog1.jpg";
import Img2 from "../../assets/blog/blog2.jpg";
import Img3 from "../../assets/blog/blog3.jpg";

const BlogsData = [
	{
		id: 1,
		image: Img1,
		title: "All the kinds of businesses",
		description:
			"“Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Suco de cevadiss deixa as pessoas mais interessantis. Quem num gosta di mé, boa gentis num é.",
		author: "Someone",
		date: "April 22, 2022",
	},
	{
		id: 2,
		image: Img2,
		title: "Making partnerships",
		description:
			"“Sapien in monti palavris qui num significa nadis i pareci latim. Pellentesque nec nulla ligula. Donec gravida turpis a vulputate ultricies. Interagi no mé, cursus quis, vehicula ac nisi. Mé faiz elementum girarzis, nisi eros vermeio.",
		author: "Someone",
		date: "April 22, 2022",
	},
	{
		id: 3,
		image: Img3,
		title: "Build your empire",
		description:
			"“Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Delegadis gente finis, bibendum egestas augue arcu ut est. Per aumento de cachacis, eu reclamis.",
		author: "Someone",
		date: "April 22, 2022",
	},
];

const BlogsComp = () => {
	return (
		<>
			<div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14">
				<section data-aos="fade-up" className="container">
					<h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold">
						Our Blogs
					</h1>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{BlogsData.map((item) => (
							<BlogCard key={item.id} {...item} />
						))}
					</div>
					<div className="text-center">
						<button className="primary-btn bg-gradient-to-r from-primary to-sky-400">
							Visit our BLog
						</button>
					</div>
				</section>
			</div>
		</>
	);
};

export default BlogsComp;
