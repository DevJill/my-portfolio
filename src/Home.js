import { useEffect, useState } from "react";
import Jill from "./img/dill.JPG";
import BBargs from "./img/BrissyBargains.PNG";
import VVap from "./img/VerdaVap.PNG";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const skillArray = ["HTML5", "CSS3", "ReactJs", "NodeJs", "AWS Basics"];

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
						<p>Jillian Norrie - Junior Frontend Developer</p>
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
			</div>
		</div>
	);
}

function Skills() {
	return (
		<ul className="skills-ul">
			{skillArray.map((skills) => {
				return <li>{skills}</li>;
			})}
		</ul>
	);
}

function AboutMe() {
	const [scroll, setScroll] = useState(false);
	console.log(window.scrollY);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			window.scrollY > 80 ? setScroll(true) : setScroll(false);
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
			window.scrollY > 575 ? setScrollDiv1(true) : setScrollDiv1(false);
			window.scrollY > 675 ? setScrollDiv2(true) : setScrollDiv2(false);
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

export default Home;
