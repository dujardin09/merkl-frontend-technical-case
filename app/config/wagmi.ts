import { http, createClient, custom } from "viem";
import { mainnet, optimism, arbitrum } from "viem/chains";
import { createConfig } from "wagmi";

export default createConfig({
	chains: [mainnet, optimism, arbitrum],
	ssr: true,
	connectors: [],
} satisfies Parameters<typeof createConfig>["0"]);
