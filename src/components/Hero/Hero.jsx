import React from "react";
import yellowCar from "../../assets/website/women-hands.jpg";

const Hero = () => {
	return (
		<div className="dark:bg-gray-950 dark:text-white duration-300 ">
			<div className="container min-h-[620px] flex mt-10 sm:mt-0">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
					{/* Image section */}
					<div data-aos="zoom-in" className="order-1 sm:order-2 relative">
						<img
							src={yellowCar}
							alt=""
							className="w-full sm:max-w-[280px] md:max-w-[650px] rounded-xl shadow-md hover:shadow-xl hover:opacity-75 transition duration-300 ease-in-out"
						/>
					</div>

					{/* Text section */}
					<div className="space-y-6 order-2 sm:order-1 xl:pr-36 ">
						<h1
							data-aos="fade-up"
							className="text-4xl sm:text-5xl font-semibold"
							style={{ lineHeight: 1.2 }}
						>
							Make better decisions and assertive changes{" "}
							<span className="text-primary">With Lazuli</span>
						</h1>
						<p data-aos="fade-up" data-aos-delay="200">
							Lazuli offers consulting services that help companies understand
							the market, develop strategies and improve management.
						</p>
						<button
							data-aos="fade-up"
							data-aos-delay="200"
							data-aos-offset="0"
							className="primary-btn bg-gradient-to-bl from-primary to-sky-400"
						>
							Book Appointment
						</button>
						<button
							data-aos="fade-up"
							data-aos-delay="200"
							data-aos-offset="0"
							className="primary-btn bg-gradient-to-br from-primary to-sky-400 m-11"
						>
							Learn More
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
