import type { MetaFunction } from "@remix-run/node";
import { Box, Container, Text, Title } from "dappkit";

export const meta: MetaFunction = () => {
	return [
		{ title: "Merkl Frontend Technical Case" },
		{ name: "description", content: "Do your best !" },
	];
};

export default function Index() {
	return (
		<Container className="bg-main-1 flex justify-center h-full items-center">
			<Box>
        <Title h={3}>Merkl Technical Case</Title>
				<Text>It's so empty here...</Text>
			</Box>
		</Container>
	);
}
