const INFO = {
	main: {
		title: "Sabin Simkhada | Portfolio",
		name: "Sabin Simkhada",
		email: "sbnsim81@gmail.com",
		logo: "https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/355085933_1957062521318410_4623162743882507697_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3e11qu18wlQAX8b2Cb4&_nc_ht=scontent.fktm10-1.fna&oh=00_AfDyOsxcN52Vs-oYspMaV7xAoN0CflXQf__QNCa6YtqhLQ&oe=65539811",
	},

	socials: {
		github: "https://github.com/sabin-stw",
		linkedin: "https://www.linkedin.com/in/sabin-simkhada-78535217a/",
		instagram: "https://www.instagram.com/itezzz_sabin/",
		stackoverflow: "https://stackoverflow.com/users/18707958/sabin-simkhada",
		facebook: "https://facebook.com/Sbnsim",
	},

	homepage: {
		title: "Mobile & Website Developer | Data Analyst ",
		description:
			"I am a Full Stack developer with expertise in miltiple platforms. I have experience in building scalable, secure and reliable web and mobile applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.",
	},

	about: {
		title: "👋 I’m Sabin Simkhada.",
		welcome: 'Welcome to my portfolio! I am a passionate software engineer dedicated to crafting innovative solutions that drive technological advancement. With a foundation built on Engineering and Information Technology, Specializing in [Java, Kotlin, Flutter, React Native, MERN Stack, Data Visualization, ETL and ongoing].',
		description:
			"From architecting robust systems to implementing elegant algorithms, I'm dedicated to harnessing technology's power to transform ideas into reality. My portfolio showcases a collection of projects that highlight my professional works. Let's embark on a coding adventure together! Whether it's revolutionizing user experiences or optimizing systems, I'm eager to collaborate on projects that push boundaries and shape the future of technology.",
	},

	articles: {
		title: "Exploring Depths: A Dive into My Research Articles",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
		{
			title: "Instride Health",
			description:
				"A Mobile Application built to tackle chronic depression and anxiety-related problems especially targeted teenagers. The user of the application will be able to call their providers and respective caregivers (parents) will be able to view assignments and tasks given by the practitioner. The application is built with Flutter with Golang as the backend.",
			logo: "https://i0.wp.com/instride.health/wp-content/uploads/2021/11/InStride_Health_Video_Thumbnail.png?fit=720%2C405&ssl=1",
			linkText: "View Project",
			link: "https://dev_patient.instride.health/#/",
		},
		{
			title: "Deerhold",
			description: 'Deerhold is a healthcare product, services and analytics company based in Lexington, Massachusetts, USA with a major offshore office in Nepal and development center in Tokyo, Japan. Our strong network of hundreds of software engineers spans these three locations. This talented pool of resources collectively provides you with an unparalleled range of solutions and services around the clock.',
			logo: "https://www.deerhold.com/static/logo-2d8fc8ea6d12bcf33a5fc0e8a090cc32.png",
			linkText: "View Project",
			link: "https://www.deerhold.com/",
		},

		{
			title: "Alinetrip",
			description:
				"Built entirely with Flutter and PHP as the backend, the application helps to find the best and low-cost domestic flights. The user can filter out the flights using various available filters, select the one-way and two-way flights, and complete the payment with different online payments such as Esewa, Khalti, AlinePay, and iCash",
			logo: "https://play-lh.googleusercontent.com/TdBYZe5QTrmNSh4SbKsovK9Fv_ZwlZIquWWNt8pLv8ZnO1XwzTNK0RtHHPBRAxPEQQw=w240-h480-rw",
			linkText: "View Project",
			link: "https://play.google.com/store/apps/details?id=com.eagleeye.alinetrip&hl=en&gl=US",
		},

		{
			title: "Detail Education",
			description:
				"A React-based abroad study project that showcases the different universities and lists them where students can view and book an appointment with the visa officer at an available time. The idea is to provide a platform to get online visa guidance and help interested students search for the best academic providers all over the world.",
			logo: "https://scontent.fktm10-1.fna.fbcdn.net/v/t1.6435-9/120092999_365721351479994_189362655123213221_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=FMDs4euoT1sAX_MHm10&_nc_ht=scontent.fktm10-1.fna&oh=00_AfC9t4G_aeWSLZEQIaHYI4MWoH9jrQ8c1exWeAF7TK_S-Q&oe=65A1392C",
			linkText: "View Project",
			link: "https://detaileducation.edu.np/",
		},

		{
			title: "iCash Nepal",
			description:
				"A project built with Flutter and PHP with the primary aim of providing an online wallet feature to users. It helped users with a range of services like essential utility payments, hotel bookings, movie and domestic flight tickets, events, and many more in collaboration with the Nepal government.",
			logo: "data:image/jpeg;base64,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",
			linkText: "View Project",
			link: "https://play.google.com/store/apps/details?id=com.silkinv.icash&hl=en&gl=US",
		},


	],
};

export default INFO;
