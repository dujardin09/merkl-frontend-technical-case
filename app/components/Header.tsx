import { Container, WalletButton } from "dappkit";

export default function Header() {
	return (
		<Container className="flex justify-between mb-lg">
		<WalletButton />
		</Container>
	)
}
