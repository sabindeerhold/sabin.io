import React from "react";
import { useSpring, animated } from "react-spring";

const SkillBars = () => {
	const languages = [
		{ name: "Java / C / C++", level: "Intermediate" },
		{ name: "JavaScript / TypeScript)", level: "Intermediate" },
		{ name: "Swift / Kotlin", level: "Advanced" },
		{ name: "Go", level: "Advanced" },
		{ name: "SQL / NoSQL", level: "Advanced" },
		{ name: "ETL", level: "Intermediate" },
		{ name: "Python", level: "Advanced" },
		{ name: "BI Tool", level: "Intermediate" },
		{ name: "HTML / CSS", level: "Advanced" },
		// Add more languages as needed
	];

	const fadeAnimation = useSpring({
		opacity: 1,
		from: { opacity: 0 },
	});

	return (
		<animated.div className="skills" style={fadeAnimation}>
			<h2>👨‍💻 PROFESSIONAL SKILLS</h2>
			<ul>
				{languages.map((language, index) => (
					<li key={index}>
						<span>{language.name}</span>
						<span>{language.level}</span>
					</li>
				))}
			</ul>
		</animated.div>
	);
};

export default SkillBars;
