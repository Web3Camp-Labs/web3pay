const GeneralConfig = {
    chainList:[
        {
            onlineChainId: '0x1',
            blockchain: 'ethereum',
            chainName:"Ethereum",
            logo:"https://web3camp.us/LogoCollection/static/media/ethereum-eth.a591fb8fd8f17e30185b.png",
            nativeCurrency: {
                symbol: 'ETH',
            },
        },
        {
            onlineChainId: '0x13881',
            blockchain: 'polygon',
            logo:"https://web3camp.us/LogoCollection/static/media/polygon-matic.bf420de550715d9bb2fe.png",
            chainName: 'Mumbai',
            nativeCurrency: {
                name: 'Mumbai',
                symbol: 'MATIC',
                decimals: 18
            },
            rpcUrls: ['https://matic-mumbai.chainstacklabs.com'],
            blockExplorerUrls: ['https://mumbai.polygonscan.com']
        },
        {
            onlineChainId: '0x38',
            blockchain: 'bsc',
            logo:"https://web3camp.us/LogoCollection/static/media/bnb-bnb.7d07197205e10636c769.png",
            chainName: 'Binance Smart Chain Mainnet',
            nativeCurrency: {
                name: 'Binance Smart Chain Native Token',
                symbol: 'BNB',
                decimals: 18
            },
            rpcUrls: ['https://bsc-dataseed1.binance.org'],
            blockExplorerUrls: ['https://bscscan.com']
        },
        {
            onlineChainId: '0x61',
            blockchain: 'bscTest',
            logo:"https://web3camp.us/LogoCollection/static/media/bnb-bnb.7d07197205e10636c769.png",
            chainName: 'Binance Smart Chain - Testnet',
            nativeCurrency: {
                name: 'Binance Smart Chain Native Token',
                symbol: 'tBNB',
                decimals: 18
            },
            rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
            blockExplorerUrls: ['https://testnet.bscscan.com']
        }
    ]
};
export default GeneralConfig;