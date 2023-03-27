import { ProcessorConfig } from '../processorConfig'

const config: ProcessorConfig = {
    chainName: 'atlantis',
    dataSource: {
        archive: 'https://elysium-testnet.archive.subsquid.io/graphql',
        chain: 'wss://ws.atlantischain.network'
    },
    blockRange: { from: 4600000 }
}

export default config
