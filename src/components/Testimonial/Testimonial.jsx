import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdStar } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
// import constants from "../../constants";
import person1 from "../../assets/testimonials/person1.jpg";
import person2 from "../../assets/testimonials/person2.jpg";
import person3 from "../../assets/testimonials/person3.jpg";
import person4 from "../../assets/testimonials/person4.jpg";
import person5 from "../../assets/testimonials/person5.jpg";
import person6 from "../../assets/testimonials/person6.jpg";

const responsive = {
	superlargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 4,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	module: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

export default function Testimonial() {
	useEffect(() => {
		AOS.init();
	}, []);

	const Card = ({ image, name, position }) => {
		return (
			<div>
				<div className="flex justify-center flex-col items-center">
					<img
						src={image}
						alt=""
						className="rounded-full w-56 h-56 hover:opacity-75 transition duration-300"
					/>
					<div className="shadow-bg rounded-lg bg-white p-8 text-center h-full">
						<span className="flex justify-center mb-2">
							{[...Array(5)].map((_, index) => (
								<MdStar key={index} className="text-primary text-xl" />
							))}
						</span>
						<p className="py-6 text-sm">
							Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris,
							leite de mula manquis sem cabeça. Quem num gosta di mé, boa gentis
							num é. Pra lá, depois divoltis porris, paradis. Mauris nec dolor
							in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis
							nisl.
						</p>
						<p className="text-textColor text-xl font-semibold">{name}</p>
						<p className="text text-primary py-2 uppercase">{position}</p>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div>
			<div data-aos="fade-up">
				<div>
					<div className="max-w-[1050px] xl:px-0 px-6 mx-auto text-center pt-16">
						<h1 className="text-4xl font-bold">What they are saying</h1>
						<p className="text-primary text-xl mt-8 mb-16">
							Testimonials & reviews
						</p>
						<div>
							<Carousel
								partialVisbile={false}
								swipeable={true}
								draggable={false}
								responsive={responsive}
								ssr={true}
								infinite
								autoPlay={true}
								arrows={true}
								keyBoardControl={true}
								itemClass="carouselItem"
							>
								<Card
									image={person1}
									name="Lisa Suzuki"
									position="Chief Financial Officer (CFO)"
								/>
								<Card
									image={person2}
									name="Shahina Mugabi"
									position="Founder and CEO"
								/>
								<Card
									image={person3}
									name="Hamza Al-Mansoori"
									position="Chief Technology Officer (CTO)"
								/>
								<Card
									image={person4}
									name="Camila Monteiro"
									position="Founder and CEO"
								/>
								<Card
									image={person5}
									name="Mariana Fernandez"
									position="Lawyer"
								/>
								<Card
									image={person6}
									name="John Smith"
									position="Marketing Manager"
								/>
							</Carousel>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
