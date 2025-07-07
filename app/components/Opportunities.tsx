import { Box, Button, Container, useWalletContext } from "dappkit";
import { useLoaderData, useNavigate, useSearchParams } from "@remix-run/react";
import Opportunity from "./Opportunity";
import { loader } from "~/routes/_index";
import { useEffect, useState } from "react";

export default function Opportunities() {
	const { chainId } = useWalletContext();
	const loaderData = useLoaderData<typeof loader>();
	const [opportunities, setOpportunities] = useState(loaderData.opportunities || []);
	const [pageId, setPageId] = useState(0);
	const navigate = useNavigate();

	useEffect(() => {
		let chain = "1";
		let page = "0";

		if (chainId != undefined)
			chain = chainId.toString();
		if (pageId != undefined)
			page = pageId.toString();

		const params = new URLSearchParams();

		params.set('chainId', chain);
		params.set('pageId', page);

		navigate(`?${params.toString()}`, {replace: true});
	}, [chainId, pageId, navigate]);

	useEffect(() => {
		setOpportunities(loaderData.opportunities || []);
	}, [loaderData.opportunities]);

	return (
		<Container>
			<Box className="bg-main-4 overflow-y-scroll h-[70vh]">
				{opportunities.map((opportunity) => (
					<Opportunity
						key={ opportunity.id }
						name={ opportunity.name }
						tvl={ opportunity.tvl }
						apr={ opportunity.apr }
					/>
				))}
			</Box>
			<div className="flex justify-between mt-lg">
				<Button onClick={() => setPageId(pageId - 1)} disabled={pageId <= 0}>Previous</Button>
				<Button onClick={() => setPageId(pageId + 1)}>Next</Button>
			</div>
		</Container>
	)
}
