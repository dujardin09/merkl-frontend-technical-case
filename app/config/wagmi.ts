import { createConfig } from 'wagmi'
import { mainnet, optimism, arbitrum, polygon } from 'wagmi/chains'
import { http } from 'viem'

const chains = [mainnet, optimism, arbitrum, polygon] as const;

const transports = Object.fromEntries(
	chains.map((chain) => [chain.id, http()])
) as any;

export default createConfig({
  chains,
  transports,
  ssr: true,
} satisfies Parameters<typeof createConfig>[0])
