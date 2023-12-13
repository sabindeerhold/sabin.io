import React from "react";
import TawkTo from "@tawk.to/tawk-messenger-react";

const LiveChat = () => {
	return (
		<TawkTo
			accountId="6579f29a07843602b801bc5b"
			chatId="1hhi5nbcv"
			loading={<div>Loading chat...</div>}
		/>
	);
};

export default LiveChat;
