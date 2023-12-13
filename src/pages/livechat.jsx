// import React, { useEffect } from "react";
import React from "react";
import { useEffect } from "react";

const LiveChat = () => {
	useEffect(() => {
		const tawkToScript = document.createElement("script");
		tawkToScript.src =
			"https://embed.tawk.to/6579f29a07843602b801bc5b/default";
		tawkToScript.async = true;
		document.body.appendChild(tawkToScript);

		return () => {
			document.body.removeChild(tawkToScript);
		};
	}, []);

	return <div></div>; // You can customize this placeholder div
};

export default LiveChat;
