import { Box, Container } from "dappkit";
import Opportunities from "~/components/Opportunities";
import { MerklApi } from "@merkl/api";
import Header from "~/components/Header";
import { LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ request }: LoaderFunctionArgs) {
	const url = new URL(request.url);
	const chainId = url.searchParams.get('chainId') || '1';
	const pageId = url.searchParams.get('pageId') || 0;

	const { data: opportunities } = await MerklApi(
		"https://api.merkl.xyz/",
	).v4.opportunities.index.get({
		query: { chainId, page: Number(pageId) }
	});

	if (!opportunities) throw "Could not load opportunities";

	return { opportunities };
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
