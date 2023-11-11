import React from "react";

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
					<div className="paragraph">Cloud Computing is on-demand access, via the internet, to computing resources-applications, servers (physical and virtual servers), data storage, development tools, networking capabilities, and more-hosted at a remote data center managed by a Cloud Service Provider (CSP).

Instead of keeping files on a proprietary hard drive or local storage device, cloud-based storage makes it possible to save them to a remote database. In other words, we can say, it is the delivery of on-demand computing services-from applications to storage and processing power, typically over the internet. The cloud service provider makes these resources available for a monthly subscription fee on a pay-as-you-go basis.

</div>
					<img
						src="https://1.bp.blogspot.com/-zkuqdfBZfZQ/YKC8kkbktrI/AAAAAAAAAUU/orVi55tJCGcR3qWZDTDYVKGz0X46_ieKgCLcBGAsYHQ/s900/Why-Cloud-Computing-is-Booming-in-the-Market.png"
						alt="cloud-computing"
						className="randImage"
					/>
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
						src="https://media.istockphoto.com/id/1369353083/vector/etl-as-file-extract-transform-load-procedure-explanation-outline-diagram.jpg?s=612x612&w=0&k=20&c=VjPZSSV2st6ebJJNY3ROllxHDa7wWBVmTEBKUUdCy5w="
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
