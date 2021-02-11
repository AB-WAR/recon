import {GetCoinData} from './getCoinData';

function SetBinanceTokenRows() {
    let tokenList = [
        "1inch",
        "aave",
        "cardano",
        "adex",
        "aergo",
        "singularitynet",
        "aion",
        "akropolis",
        "algorand",
        "alpha-finance",
        "amber",
        "ankr",
        "aragon",
        "appcoins",
        "ardor",
        "ark",
        "arpa-chain",
        "as-roma",
        "airswap",
        "atletico-madrid",
        "cosmos",
        "audius",
        "concierge-io",
        "avalanche-2",
        "axie-infinity",
        "bakerytoken",
        "balancer",
        "band-protocol",
        "basic-attention-token",
        "bitcoin-diamond",
        "bitcoin-cash-abc-2",
        "bitcoin-cash",
        "blockmason-credit-protocol",
        "beam",
        "bella-protocol",
        "bluzelle",
        "binancecoin",
        "bancor",
        "bounce-token",
        "ethos",
        "bread",
        "bitcoin",
        "btc-standard-hashrate-token",
        "bitcoin-gold",
        "bitshares",
        "bittorrent-2",
        "burger-swap",
        "binance-usd",
        "bzx-protocol",
        "pancakeswap-token",
        "blox",
        "celo-gold",
        "celer-network",
        "chromaway",
        "chiliz",
        "nervos-network",
        "cybermiles",
        "cindicator",
        "cocos-bcx",
        "compound-governance-token",
        "contentos",
        "coti",
        "cover-protocol",
        "cream-2",
        "curve-dao-token",
        "certik",
        "cartesi",
        "cortex",
        "civic",
        "concentrated-voting-power",
        "dash",
        "streamr-datacoin",
        "decred",
        "dent",
        "dexe",
        "dforce-token",
        "digibyte",
        "dia-data",
        "agrello",
        "district0x",
        "dock",
        "dogecoin",
        "polkadot",
        "drep",
        "dusk-network",
        "easyfi",
        "elrond-erd-2",
        "aelf",
        "enjincoin",
        "eos",
        "ethereum-classic",
        "ethereum",
        "everex",
        "fetch-ai",
        "filecoin",
        "fio-protocol",
        "zcoin",
        "flamingo-finance",
        "force-protocol",
        "frontier-token",
        "fantom",
        "ftx-token",
        "funfair",
        "gas",
        "aavegotchi",
        "golem",
        "gochain",
        "groestlcoin",
        "the-graph",
        "gifto",
        "genesis-vision",
        "gxchain",
        "hard-protocol",
        "hedera-hashgraph",
        "hegic",
        "hive",
        "helium",
        "holotoken",
        "icon",
        "aurora-dao",
        "injective-protocol",
        "iostoken",
        "iota",
        "iotex",
        "everipedia",
        "iris-network",
        "just",
        "juventus-fan-token",
        "kava",
        "key",
        "komodo",
        "kyber-network",
        "keep3rv1",
        "kusama",
        "link",
        "loom-network",
        "loopring",
        "lisk",
        "litecoin",
        "lto-network",
        "terra-luna",
        "decentraland",
        "matic-network",
        "moviebloc",
        "moeda-loyalty-points",
        "measurable-data-token",
        "mainframe",
        "mithril",
        "maker",
        "monetha",
        "metal",
        "nano",
        "nebulas",
        "nav-coin",
        "new-bitshares",
        "nucleus-vision",
        "near",
        "neblio",
        "neo",
        "nkn",
        "numeraire",
        "pundi-x",
        "nuls",
        "nexus",
        "openanx",
        "ocean-protocol",
        "og",
        "omisego",
        "harmony",
        "ong",
        "ontology",
        "orion-protocol",
        "simple-token",
        "orchid-protocol",
        "paxos-standard",
        "pax-gold",
        "perlin",
        "red-pulse",
        "pivx",
        "penta",
        "poa-network",
        "polymath-network",
        "power-ledger",
        "populous",
        "prometeus",
        "paris-saint-germain-fan-token",
        "quark-chain",
        "qlink",
        "quantstamp",
        "qtum",
        "ripio-credit-network",
        "raiden-network",
        "reef-finance",
        "republic-protocol",
        "augur",
        "request-network",
        "rif-token",
        "iexec-rlc",
        "oasis-network",
        "reserve-rights-token",
        "thorchain",
        "ravencoin",
        "the-sandbox",
        "siacoin",
        "secret",
        "skale",
        "skycoin",
        "small-love-potion",
        "singulardtv",
        "sonm",
        "status",
        "havven",
        "solana",
        "spartan-protocol-token",
        "serum",
        "steem",
        "storm",
        "storj",
        "stp-network",
        "stratis",
        "blockstack",
        "sun-token",
        "sushi",
        "swerve-dao",
        "swipe",
        "syscoin",
        "tokenclub",
        "theta-fuel",
        "theta-token",
        "time-new-bank",
        "tomochain",
        "tellor",
        "troy",
        "truefi",
        "tron",
        "true-usd",
        "trust-wallet-token",
        "uma",
        "unifi-protocol-dao",
        "uniswap",
        "usd-coin",
        "tether",
        "utrust",
        "vechain",
        "viacoin",
        "viberate",
        "vibe",
        "v-id-blockchain",
        "vite",
        "vethor-token",
        "wabi",
        "wanchain",
        "waves",
        "wink",
        "wing-finance",
        "wrapped-nxm",
        "wepower",
        "wazirx",
        "waltonchain",
        "nem",
        "stellar",
        "monero",
        "ripple",
        "tezos",
        "verge",
        "venus",
        "yearn-finance",
        "yfii-finance",
        "yoyow",
        "zcash",
        "zencash",
        "zilliqa",
        "0x"
    ]
    //let tokenList = [ "neo", "bitcoin", "cardano","1inch","aave","cindicator","cocos-bcx","sonm", "status", "havven", "solana", "spartan-protocol-token", "serum", "steem", "storm", "storj", "stp-network", "stratis", "blockstack"]
    tokenList.forEach((item, index) => {
        setTimeout(() => {
            GetCoinData(item);
        }, 1000*index);
    })
}

export { SetBinanceTokenRows }