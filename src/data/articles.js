import React from "react";

import { motion } from 'framer-motion';
import cloud1 from "../data/article-assets/cloud1.jpeg";
import cloud2 from "../data/article-assets/cloud2.jpeg";

const blogs = [
	{
		id: 1,
		title: 'INTRODUCTION - 3 Jan 2019',
		content: "According to Gartner’s hype cycle of emerging technologies 2010, Cloud Computing has moved beyond the peak of inflated expectations and will be widely adopted by companies in about two to five years [17]. Due to the anticipated advantages of Cloud Computing, as e. g. high flexibility and low costs many companies do not analyze their decisions carefully [2]. This approach rises risk factors like for instance hidden costs or a vendor-lock-in [17] which discreate the pursued benefits. Thus, companies should conduct anex ante analysis of direct and indirect costs to mitigate certain  risk factors and to be aware of important cost types and factors. In this paper we present a formal mathematical model for the calculation of the Total Cost of Ownership (TCO) of Cloud Computing Services. The TCO is one of the most important cost-oriented approach that is widely spread in both research and practice [22]. The main focus of our model lies in the identification and calculation of cost factors. More precisely, the model  strongly support start – up companies that do not operate an internal IT infrastructure. The calculation results serve as decision support by evaluating Cloud Computing Services and providers on a cost basis we conducted a systematic literature review with which we identified important cost types and factors. The TCO model is prototypically implemented on a website for further evaluation steps and is accessible for the general public. The software tool is able to analyze the cost structure of Cloud Computing Services and thus supports decision makers in validating Cloud Computing Services from a cost perspective. The presented multi-method approach extends the TCO theory and applies deductive and inductive methods to develop a theoretically and practically based model. The paper is structured as follows. In the following section we define the term Cloud Computing and TCO. In Section 2 we discuss related work and the underlying research approach. Furthermore, Section 3 comprises the discussion of our model assumptions, the applied cost structure and the analysis of pricing schemes of real Cloud Computing Services. A conceptual and technical evaluation is presented in Section 6 and we finally draw conclusions by means of limitations, implications and future research."
		,
		image: cloud1, // Replace with your image URLs
	},
	{
		id: 2,
		title: 'Cloud Computing - 3 Jan 2019',
		content: "In a cloud computing, you are not managing hardware and software—that’s the responsibility of an experienced vendor like salesforce.com. The shared infrastructure means it works like a utility: You only pay for what you need, upgrades are automatic, and scaling up or down is easy. Our application only use infrastructure as a service .the cloud owner fixing cost based on amount of data  and periods. In order to determine a pricing model that provides business value to an organization using cloud services, it is necessary to know the direct and indirect costs of providing these services. Costs can be initial or ongoing. Initial costs, also known as capital expenditures, or include the costs to acquire assets such as hardware and facilities.  This calculation scheme is applied for calculate the storage inbound, outbound, data transfer costs. The storage cost is calculation is depended on the user storage capacity and time.  Most cloud storage providers offer hourly (usage-dependent) Component - based rates. The costs incurred depend on the particular pricing.",
		image: cloud2, // Replace with your image URLs
	},
	// Add more blog objects as needed
];

const expandContent = (blogId) => {
	// Function to expand blog content, toggle expanded state, etc.
	// Implement based on your application's logic
};

function article_1() {
	return {
		date: "3 jan 2019",
		title: "Cloud Customer Service for User Sensitive Data",
		description:
			"Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
		keywords: [
			"Cloud Customer Service for User Sensitive Data",
			"Sabin",
			"Sabin Simkhada",
			"Cloud Computing",
		],
		style: ``,
		body: (
			<React.Fragment>
				<div className="article-content">
					{blogs.map((blog) => (
						<motion.div
							key={blog.id}
							className="blog-card"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							onClick={() => expandContent(blog.id)}
						>
							<div className="blog-image">
								<img src={blog.image} width={150} height={150} alt={blog.title} />
							</div>
							<h3>{blog.title}</h3>
							<motion.p
								initial={{ height: 0, opacity: 0 }}
								animate={{ height: 'auto', opacity: 1 }}
								transition={{ duration: 0.5 }}
							>
								{blog.content}
							</motion.p>
							<motion.button
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.3 }}
							>
								Read More
							</motion.button>
						</motion.div>
					))}
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "6 March 2021",
		title: "KPI and Data Mining to Optimize Retail Performance",
		description:
			"AI is transforming the data industry, from improving prediction outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		style: ``,
		keywords: [
			"KPI and Data Mining to Optimize Retail Performance",
			"Sabin",
			"Sabin Simkhada",
			"Data Analysis",
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">The retail sector must consider these factors when planning marketing and advertising strategies. Data mining gives businesses valuable insight into what works, what doesn’t, and how stores can use online shopping habits to drive product sales.

						In the retail industry, data mining is primarily used to analyze and interpret customer data. All this data can reveal actionable information about customer behavior through trends and associations. The data collected can then be used to optimize pricing, gain new customers, and increase loyalty.</div>
					<img
						src="https://media.istockphoto.com/id/1369353083/vector/etl-as-file-extract-transform-load-procedure-explanation-outline-diagram.jpg?s=612x612&w=0&k=20&c=VjPZSSV2st6ebJJNY3ROllxHDa7wWBVmTEBKUUdCy5w=" width={350} height={250}
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
