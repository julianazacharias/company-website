import React from "react";
import { SiMusicbrainz } from "react-icons/si";
import { PiStrategy } from "react-icons/pi";
import { CgDanger } from "react-icons/cg";
import { MdAttachMoney } from "react-icons/md";
import { GrWorkshop } from "react-icons/gr";
import { RiTeamFill } from "react-icons/ri";

const skillsData = [
	{
		name: "Marketing intelligence",
		icon: <SiMusicbrainz className="text-4xl text-primary dark:text-sky-400" />,
		link: "#",
		description:
			"Services focused on market analysis: data, opportunities, risks and decision making. This includes market research, segmentation, positioning, and promotional planning",
		aosDelay: "0",
	},
	{
		name: "Strategy",
		icon: <PiStrategy className="text-4xl text-primary dark:text-sky-400" />,
		link: "#",
		description:
			"Consulting services focused on growth and competitiveness. Consultants help businesses define their long-term goals and create a roadmap to achieve them.",
		aosDelay: "200",
	},
	{
		name: "Risk Management",
		icon: <CgDanger className="text-4xl text-primary dark:text-sky-400" />,
		link: "#",
		description:
			"Services focused on structure, business model, this includes developing risk management strategies, conducting risk assessments, and implementing monitoring systems..",
		aosDelay: "300",
	},
	{
		name: "Finances",
		icon: <MdAttachMoney className="text-4xl text-primary dark:text-sky-400" />,
		link: "#",
		description:
			"Lazuli offers expertise in financial planning and analysis, to help businesses manage cash flow, optimize investments, and make informed financial decisions.",
		aosDelay: "400",
	},
	{
		name: "Operational Improvement",
		icon: <GrWorkshop className="text-4xl text-primary dark:text-sky-400" />,
		link: "#",
		description:
			"We implement innovative solutions to streamline workflows, reduce costs, and improve overall efficiency.",
		aosDelay: "500",
	},
	{
		name: "Human Resources",
		icon: <RiTeamFill className="text-4xl text-primary dark:text-sky-400" />,
		link: "#",
		description:
			"Support by developing HR policies, designing compensation and benefits packages, conducting training programs.",
		aosDelay: "600",
	},
];
const Services = () => {
	return (
		<>
			<span id="about"></span>
			<div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
				<div className="container">
					{/* Header */}
					<div className="pb-12 text-center space-y-3">
						<h1
							data-aos="fade-up"
							className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-sky-400"
						>
							Our Services
						</h1>
						<p data-aos="fade-up" className="text-gray-600 dark:text-gray-400">
							We integrate our market, strategy and management skills to achieve
							your company's goal
						</p>
					</div>

					{/* services cards */}
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 px-24">
						{skillsData.map((skill) => (
							<div
								key={skill.name}
								data-aos="fade-up"
								data-aos-delay={skill.aosDelay}
								className="card bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300 ease-in-out"
								style={{ height: "250px", maxWidth: "400px" }}
							>
								<div className="py-4 mx-3">{skill.icon}</div>
								<h1 className="text-lg font-semibold">{skill.name}</h1>
								<p className="text-gray-600 dark:text-gray-400">
									{skill.description}
								</p>
							</div>
						))}
					</div>

					{/* button */}
					<div
						data-aos="fade-up"
						data-aos-delay="400"
						data-aos-offset="0"
						className="text-center mt-4 sm:mt-8"
					>
						<button className="primary-btn bg-gradient-to-r from-primary to-sky-400">
							Learn More
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Services;
