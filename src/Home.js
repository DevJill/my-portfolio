import { useEffect, useState } from "react";
import Jill from "./img/dill.JPG";
import BBargs from "./img/BrissyBargains.PNG";
import VVap from "./img/VerdaVap.PNG";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const skillArray = ["HTML5", "CSS3", "ReactJs", "NodeJs", "AWS Basics"];
const skillArray1 = ["HTML5", "CSS3", "ReactJs"];
const skillArray2 = ["NodeJs", "AWS Basics"];

function Home() {
	const [opacity, setOpacity] = useState(true);

	function op() {
		setOpacity(false);
	}

	// opacity
	// 	? (document.body.style.overflowY = "hidden")
	// 	: (document.body.style.overflowY = "scroll");

	return (
		<div className={opacity ? "body-div" : "body-div body-color"}>
			<div
				className={
					opacity ? "click-to-enter-div" : "click-to-enter-div fade-div"
				}
			>
				<button
					style={{
						display: "inline",
						height: "40%",
						width: "40%",
						cursor: "pointer",
					}}
					onClick={op}
				></button>
				<p style={{ display: "inline" }}>click to enter</p>
			</div>

			<div
				className={
					opacity ? "main-profile-div" : "main-profile-div fade-in-div"
				}
			>
				<div className="profile-grid">
					<img src={Jill} alt="profile pic of Jill" />
					<div className="profile-about-me">
						{window.innerWidth > 600 ? (
							<p>Jillian Norrie - Junior Frontend Developer</p>
						) : (
							<span>
								<p>Jillian Norrie</p>
								<p>Junior Frontend Developer</p>
							</span>
						)}
						<Skills />
						<a href="https://linkedin.com/in/jillian-norrie-8b16621b8">
							<FaLinkedin
								className="linkedin-icon"
								size="25"
								style={{
									margin: "0 10px",
									cursor: "pointer",
									transition: "0.2s ease-in",
								}}
							/>
						</a>
						<a href="https://github.com/DevJill">
							<FaGithub
								className="github-icon"
								size="25"
								style={{
									margin: "0 10px",
									cursor: "pointer",
									transition: "0.2s ease-in",
								}}
							/>
						</a>
					</div>
				</div>
				<AboutMe />
				<Projects />
				<ContactMe />
			</div>
		</div>
	);
}

function Skills() {
	return (
		<ul className="skills-ul">
			<span style={{ display: "block" }}>
				{window.innerWidth > 600
					? skillArray.map((skills) => {
							return <li>{skills}</li>;
					  })
					: skillArray1.map((skills) => {
							return <li style={{ display: "inline" }}>{skills}</li>;
					  })}
			</span>
			<span className="skill-span2" style={{ display: "block" }}>
				{window.innerWidth < 600
					? skillArray2.map((skills) => {
							return <li style={{ display: "inline" }}>{skills}</li>;
					  })
					: ""}
			</span>
		</ul>
	);
}

function AboutMe() {
	const [scroll, setScroll] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			window.scrollY > 80 && window.innerWidth > 600
				? setScroll(true)
				: setScroll(false);
			window.scrollY > 150 && window.innerWidth < 600
				? setScroll(true)
				: setScroll(false);
		});
	}, []);

	return (
		<div
			className={scroll ? "about-me-div fade-in-div" : "about-me-div"}
			style={{ textAlign: "center" }}
		>
			<h2>About Me</h2>
			<p>
				I am an American born, Australian permanent resident. Since arriving in
				Australia in 2019, I have been consistently developing my skills as a
				front-end developer. By now, I have a robust understanding of HTML5,
				CSS3, and JavaScript. Beyond that, I am becoming well versed in using
				the Reactjs library, while also gaining back-end skills such as creating
				AWS lambda functions and properly configuring API gateways. In addition,
				I am due to graduate from Tafe with a certificate IV in Information
				Technology & Web Development in April.
			</p>
			<p>
				I would describe myself as determined and goal oriented. I have a vision
				for my future and I know that I will pave my way there. This future
				includes me having a successful career in web development working on the
				front lines of new and exciting technologies.
			</p>
		</div>
	);
}

function Projects() {
	const [scrollDiv1, setScrollDiv1] = useState(false);
	const [scrollDiv2, setScrollDiv2] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			window.scrollY > 575 && window.innerWidth > 600
				? setScrollDiv1(true)
				: setScrollDiv1(false);
			window.scrollY > 800 && window.innerWidth < 600
				? setScrollDiv1(true)
				: setScrollDiv1(false);
			window.scrollY > 675 && window.innerWidth > 600
				? setScrollDiv2(true)
				: setScrollDiv2(false);
			window.scrollY > 1600 && window.innerWidth < 600
				? setScrollDiv2(true)
				: setScrollDiv2(false);
		});
	}, []);

	return (
		<div className="project-div">
			<div className="project-grid">
				<div
					className={scrollDiv1 ? "project fade-in-div-projects" : "project"}
				>
					<a href="https://brissybargains.com">
						<div className="project1">
							<h2>Project One</h2>
							<img
								className="bbargs-img"
								src={BBargs}
								alt="BrissyBargains website screencap"
							/>
							<p>
								<i>Brissy Bargains</i> is my first passion project that I pushed
								to deployment. I wanted this project to be both meaningful and a
								challenge, so I decided to create a community-centric website
								using only vanilla JavaScript. This was also my first time using
								the leaflet API and pushing an API to deployment in general. I
								found the experience creating this website extremely valuable in
								learning practical coding skills.
							</p>
						</div>
					</a>
				</div>
				<div
					className={scrollDiv2 ? "project fade-in-div-projects" : "project"}
				>
					<a href="https://verdavap.com">
						<div className="project2">
							<h2>Project Two</h2>
							<img
								className="vvap-img"
								src={VVap}
								alt="VerdaVap website screencap"
							/>
							<p>
								<i>VerdaVap</i> is a freelance project that I created from
								scratch. I was the only developer hired for this job, so I was
								in charge of the frontend and backend code. I was also given
								complete creative liberty for the website design, apart from the
								colour palate.
							</p>
							<p>
								Creating this website challenged me on many levels. In the end,
								I gained significant knowledge about the React library, using
								Nodejs to create AWS Lambda functions, correctly configuring AWS
								API Gateways, etc.
							</p>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
}

function ContactMe() {
	const [scroll, setScroll] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			window.scrollY > 1350 && window.innerWidth > 600
				? setScroll(true)
				: setScroll(false);
			window.scrollY > 2600 && window.innerWidth < 600
				? setScroll(true)
				: setScroll(false);
		});
	}, []);

	return (
		<div className={scroll ? "contact-me fade-in-contact" : "contact-me"}>
			<h2>Contact Me</h2>
			<span style={{ display: "block" }}>
				<FaPhone
					className="contact-icon"
					size="20"
					style={{
						display: "inline",
						marginBottom: "-4px",
						marginRight: "10px",
					}}
				/>
				<a href="tel:+610406608397">
					<p style={{ display: "inline" }}>+61 0406 608 397</p>
				</a>
			</span>
			<span style={{ display: "block" }}>
				<MdOutlineEmail
					className="contact-icon"
					size="25"
					style={{
						display: "inline",
						marginBottom: "-10px",
						marginRight: "10px",
					}}
				/>
				<a href="mailto: jillian.business@outlook.com">
					<p style={{ display: "inline" }}>jillian.business@outlook.com</p>
				</a>
			</span>
		</div>
	);
}

export default Home;
