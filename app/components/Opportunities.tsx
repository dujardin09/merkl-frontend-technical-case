import { Container, useWalletContext } from "dappkit";
import { useLoaderData, useNavigate, useRevalidator } from "@remix-run/react";
import Opportunity from "./Opportunity";
import { loader } from "~/routes/_index";
import { useEffect, useState } from "react";

export default function Opportunities() {
	const { chainId } = useWalletContext();
	const loaderData = useLoaderData<typeof loader>();
	const [opportunities, setOpportunities] = useState(loaderData.opportunities || []);
	const navigate = useNavigate();

	useEffect(() => {
		if (chainId) {
			navigate(`?chainId=${chainId}`, {replace: true});
		}
	}, [chainId, navigate]);

	useEffect(() => {
		setOpportunities(loaderData.opportunities || []);
	}, [loaderData.opportunities]);

	return (
		<Container>
			{opportunities.map((opportunity) => (
				<Opportunity
					key={ opportunity.id }
					name={ opportunity.name }
					tvl={ opportunity.tvl }
					apr={ opportunity.apr }
				/>
			))}
		</Container>
	)
}
