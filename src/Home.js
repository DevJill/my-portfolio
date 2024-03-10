import { useEffect, useState } from "react";
import Jill from "./img/dill.JPG";
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
						<FaLinkedin
							className="linkedin-icon"
							size="25"
							style={{
								margin: "0 10px",
								cursor: "pointer",
								transition: "0.2s ease-in",
							}}
						/>
						<FaGithub
							className="github-icon"
							size="25"
							style={{
								margin: "0 10px",
								cursor: "pointer",
								transition: "0.2s ease-in",
							}}
						/>
					</div>
				</div>
				<AboutMe />
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
	console.log(scroll);

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

export default Home;
