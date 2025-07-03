import { Box, Text } from "dappkit";

interface opportunityProps {
	name: string,
	tvl: number,
	apr: number
}

export default function Opportunity({ name, tvl, apr}: opportunityProps) {
	return (
		<Box className="flex-row justify-between m-lg p-lg items-center">
			<Text className="text-3xl font-semibold">{name}</Text>
			<div className="flex w-1/5 justify-between">
				<div className="flex-1">
					<Text className="text-xl font-bold">{apr.toFixed(2)}%</Text>
				</div>
				<div className="flex-1">
					<Text className="text-xl font-bold">${(tvl / 1_000_000).toFixed(2)}M</Text>
				</div>
			</div>
		</Box>
	)
}
