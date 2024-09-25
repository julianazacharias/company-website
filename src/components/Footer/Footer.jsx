import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterLinks = [
	{
		title: "About",
		link: "/#about",
	},
	{
		title: "Mission",
		link: "/#mission",
	},
	{
		title: "Works",
		link: "/#works",
	},
	{
		title: "Career",
		link: "/#career",
	},
];
const HelpLinks = [
	{
		title: "Customer Support",
		link: "/#support",
	},
	{
		title: "FAQ",
		link: "/#faq",
	},
	{
		title: "Terms & Conditions",
		link: "/#terms",
	},
	{
		title: "Privacy Policy",
		link: "/#policy",
	},
];
const ResourcesLinks = [
	{
		title: "Free Ebooks",
		link: "/#ebooks",
	},
	{
		title: "How To Blog",
		link: "/#blogs",
	},
];
const Footer = () => {
	return (
		<div className="bg-slate-900 text-white">
			<section className="container py-10">
				<div className=" grid md:grid-cols-3 py-5">
					{/* company Details */}
					<div className=" py-8 px-4 ">
						<div>
							<h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
								Lazuli
							</h1>
							<p className="text-sm">
								Business consultancy that helps companies make decisions and
								promote changes.
							</p>
						</div>
						<div className="mt-6">
							<p className="hover:text-sky-300 duration-300">
								<strong>Phone:</strong> +123 456 7890
							</p>
							<p className="hover:text-sky-300 duration-300">
								<strong>Address:</strong> 123 Main St, City, Country
							</p>
						</div>
						{/* Social Handle */}
						<div className="flex items-center gap-4 mt-6">
							<a href="#">
								<FaInstagram className="text-2xl hover:text-sky-300 duration-300" />
							</a>
							<a href="#">
								<FaFacebook className="text-2xl hover:text-sky-300 duration-300" />
							</a>
							<a href="#">
								<FaLinkedin className="text-2xl hover:text-sky-300 duration-300" />
							</a>
						</div>
					</div>
					{/* Links */}
					<div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
						<div className="">
							<div className="py-8 px-4 ">
								<h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
									Company
								</h1>
								<ul className={`flex flex-col gap-3`}>
									{FooterLinks.map((link) => (
										<li
											key={link.title}
											className="cursor-pointer hover:translate-x-1 duration-200 hover:!text-sky-300 space-x-1 text-gray-400 "
										>
											<span>{link.title}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="">
							<div className="py-8 px-4 ">
								<h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
									Support
								</h1>
								<ul className="flex flex-col gap-3">
									{HelpLinks.map((link) => (
										<li
											key={link.title}
											className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-sky-300 space-x-1 text-gray-400 "
										>
											<span>{link.title}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="">
							<div className="py-8 px-4 ">
								<h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
									Resources
								</h1>
								<ul className="flex flex-col gap-3">
									{ResourcesLinks.map((link) => (
										<li
											key={link.title}
											className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-sky-300 space-x-1 text-gray-400 "
										>
											<span>{link.title}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Footer;
