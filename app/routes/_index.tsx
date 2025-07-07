import { Container } from "dappkit";
import Opportunities from "~/components/Opportunities";
import { MerklApi } from "@merkl/api";
import Header from "~/components/Header";
import { LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ request }: LoaderFunctionArgs) {
	const url = new URL(request.url);
	const chainId = url.searchParams.get('chainId') || '1';
	const pageId = url.searchParams.get('pageId') || 0;
	const tokenSymbol = url.searchParams.get('tokenSymbol') || [];

	const merkl = MerklApi("https://api.merkl.xyz/").v4;

	const { data: opportunities } = await merkl.opportunities.index.get({
		query: { chainId, page: Number(pageId), tokens: tokenSymbol }
	});
	if (!opportunities) throw "Could not load opportunities";

	const { data: tokens } = await merkl.tokens.reward({ chainId }).get();
	if (!tokens) throw "Could not load tokens";

	const tokensSorted = tokens
		.filter(token => token.price !== null && token.price !== undefined)
		.sort((a, b) => b.price - a.price)
		.slice(0, 5);

	return { opportunities, tokensSorted };
}

export default function Index() {
	return (
		<Container className="h-full flex justify-center items-center">
			<Container>
				<Header />
				<Opportunities />
			</Container>
		</Container>
	);
}
