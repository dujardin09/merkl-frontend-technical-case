import { createConfig } from 'wagmi'
import { mainnet, optimism, arbitrum, polygon, rootstock, bsc, gnosis, fuse, unichainSepolia, sonicTestnet, redbellyMainnet, manta, fantom, fraxtal, zksync, worldchain, astar, flowMainnet, polygonZkEvm, base, avalanche, linea } from 'wagmi/chains'
import { http } from 'viem'

const chains = [
	mainnet,
	optimism,
	arbitrum,
	polygon,
	rootstock,
	bsc,
	gnosis,
	fuse,
	unichainSepolia,
	sonicTestnet,
	redbellyMainnet,
	manta,
	fantom,
	fraxtal,
	zksync,
	worldchain,
	astar,
	flowMainnet,
	polygonZkEvm,
	base,
	avalanche,
	linea
] as const;

const transports = Object.fromEntries(
	chains.map((chain) => [chain.id, http()])
) as any;

export default createConfig({
  chains,
  transports,
  ssr: true,
} satisfies Parameters<typeof createConfig>[0])
