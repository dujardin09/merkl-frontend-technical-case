import { Box, Button, Container, useWalletContext } from "dappkit";
import { useLoaderData, useNavigate } from "@remix-run/react";
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
		if (chainId && pageId) {
			navigate(`?chainId=${chainId}&pageId=${pageId}`, {replace: true});
		}
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
				<Button onClick={() => setPageId(pageId - 1)}>Previous</Button>
				<Button onClick={() => setPageId(pageId + 1)}>Next</Button>
			</div>
		</Container>
	)
}
