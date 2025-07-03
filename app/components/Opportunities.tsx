import { Container } from "dappkit";
import { useLoaderData } from "@remix-run/react";
import Opportunity from "./Opportunity";
import { loader } from "~/routes/_index";

export default function Opportunities() {
	const { opportunities } = useLoaderData<typeof loader>();

	console.log(opportunities);
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
