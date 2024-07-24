import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import DarkMode from "./DarkMode";

export const MenuLinks = [
	{
		id: 1,
		name: "About",
		link: "/#about",
	},
	{
		id: 2,
		name: "Services",
		link: "/#services",
	},
	{
		id: 3,
		name: "Projects",
		link: "/#projects",
	},
	{
		id: 4,
		name: "News",
		link: "/#news",
	},
	{
		id: 5,
		name: "Contact",
		link: "/#contact",
	},
];
const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};
	return (
		<div
			className="relative z-10 w-full dark:bg-black dark:text-white duration-300
    "
		>
			<div className="container py-3 md:py-2">
				<div className="flex justify-between items-center">
					{/* Logo section */}
					<a
						target="_blank"
						href="https://www.youtube.com/channel/UC1H-a1MKEFXRiFlGNLcy7gQ?sub_confirmation=1"
						className="flex items-center gap-3"
					>
						{/* <img src={Logo} alt="" className="w-5" /> */}
						<span className="text-2xl sm:text-3xl font-semibold text-primary dark:text-sky-300">
							Lazuli
						</span>
					</a>
					{/* Desktop view Navigation */}
					<nav className="hidden md:block">
						<ul className="flex items-center gap-8">
							{MenuLinks.map(({ id, name, link }) => (
								<li key={id} className="py-4">
									<a
										href={link}
										className=" text-lg font-medium  hover:rounded-md px-4 py-2 hover:text-white  hover:bg-gradient-to-r from-primary to-sky-400"
									>
										{name}
									</a>
								</li>
							))}
							<DarkMode />
						</ul>
					</nav>
					{/* Mobile view Drawer  */}
					<div className="flex items-center gap-4 md:hidden ">
						<DarkMode />
						{/* Mobile Hamburger icon */}
						{showMenu ? (
							<HiMenuAlt1
								onClick={toggleMenu}
								className=" cursor-pointer transition-all"
								size={30}
							/>
						) : (
							<HiMenuAlt3
								onClick={toggleMenu}
								className="cursor-pointer transition-all"
								size={30}
							/>
						)}
					</div>
				</div>
			</div>
			<ResponsiveMenu showMenu={showMenu} />
		</div>
	);
};

export default Navbar;
