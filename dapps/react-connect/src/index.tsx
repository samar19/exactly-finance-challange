import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import detectEthereumProvider from '@metamask/detect-provider'

interface Props {
  text: string
}
declare let window: any

export const ConnectMetamaskComponent = ({ text }: Props) => {
  const [account, setAccount] = useState('')
  const [chainId, setChainId] = useState('')

  const startApp = (provider: any) => {
    if (provider !== window.ethereum) {
      console.error('Do you have multiple wallets installed?');
    }
    provider.on('accountsChanged', (accounts: any) => {
      // Time to reload your interface with accounts[0]!
      console.log('accounts ', accounts)
      setAccount(accounts[0])
      window.location.reload(false);
    })
    provider.on('chainChanged', (_chainId: string) => {
      console.log('chainChanged ', _chainId)
      setChainId(_chainId)
      window.location.reload(false);
    })
  }

  const bootstrap = async () => {
    const provider: any = await detectEthereumProvider()
    if (provider) {
      // From now on, this should always be true:
      // provider === window.ethereum
      console.log('Ethereum successfully detected!')
      startApp(provider) // initialize your app
      // refer to https://dashboard.alchemyapi.io/composer
      // methods refer to https://docs.alchemy.com/alchemy/apis/ethereum
      const accounts = await provider.request({
        method: 'eth_accounts'
      })
      setAccount(accounts[0])
      const chainId = await provider.request({
        method: 'eth_chainId'
      })
      setChainId(chainId)
    } else {
      console.log('Please install MetaMask!')
    }
  }

  useEffect(() => {
    bootstrap()
  }, [])
  return (
    <div>
      <div className={styles.test}>Connect Component: {text}</div>
      <div>account: {account}</div>
      <div>chainId: {chainId}</div>
    </div>
  )
}
