import { Container } from "dappkit";
import Opportunities from "~/components/Opportunities";
import { MerklApi } from "@merkl/api";

export async function loader() {
	const { data: opportunities } = await MerklApi(
		"https://api.merkl.xyz/",
	).v4.opportunities.index.get({
		query: { chainId: "1" }
	});

	if (!opportunities) throw "Could not load opportunities";

	return { opportunities };
}

export default function Index() {
	return (
		<Container className="h-full">
			<Opportunities />
		</Container>
	);
}
