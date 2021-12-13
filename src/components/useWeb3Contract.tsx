import { useCallback } from 'react'
import Web3 from 'web3'

export const ABC_TREASURY_ADDRESS = "0xdc0B4eb507d483B77ECF3B82503D5630037aF3cF"
const ARBITRUM_ETH_RPC = "https://arbitrum-mainnet.infura.io/v3/b2d15a1424b74f158a3ccf9f78f2e8e0"

export function useWeb3Contract(ABI: any) {
  return useCallback(
    (address: string) => {
      const web3 = new Web3(ARBITRUM_ETH_RPC)
      const contract = new web3.eth.Contract(ABI, address)
      return contract
    },
    [ABI]
  )
}