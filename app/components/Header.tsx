import { useLoaderData, useNavigate } from "@remix-run/react";
import { Button, Container, useWalletContext, WalletButton } from "dappkit";
import { loader } from "~/routes/_index";
import Token from "./Token";
import { useState } from "react";

export default function Header() {
	const { chainId, connected } = useWalletContext();
	const { tokensSorted } = useLoaderData<typeof loader>();
	const [selectedToken, setSelectedToken] = useState("no");
	const navigate = useNavigate();

	const handleSelectedToken = (symbol: string) => {
		setSelectedToken(symbol);

		const params = new URLSearchParams();
		params.set('chainId', chainId);
		params.set('pageId', "0");
		params.set('tokenSymbol', symbol);
		navigate(`?${params.toString()}`, {replace: true});
	};

	const handleNoToken = () => {
		setSelectedToken("-1");

		const params = new URLSearchParams();
		params.set('chainId', chainId);
		params.set('pageId', "0");

		navigate(`?${params.toString()}`, {replace: true});
	}

	return (
		<Container className="flex-col">
			<div className="flex justify-between mb-lg">
				<WalletButton />
			</div>
			{connected && <div className="flex justify-center mb-lg">
				<Button
					className={`mx-md p-lg overflow-hidden cursor-pointer p-2 ${selectedToken === "no" ? 'border-dashed' : 'hover:border-dashed'}`}
					onClick={handleNoToken}
				>
					<p>No token</p>
				</Button>
				{tokensSorted.map((token) => (
					<Token
						key={token.id}
						name={token.displaySymbol || ""}
						icon={token.icon}
						onClick={() => handleSelectedToken(token.symbol)}
						isSelected={selectedToken === token.symbol}
					/>
				))}
			</div>}
		</Container>
	)
}
