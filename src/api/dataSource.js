import fetch from "node-fetch";

export const fetchCoinData = async (token) => {
    const responseMarketData = await fetch(
        `https://api.coingecko.com/api/v3/coins/${token}?localization=false`
    );
    const marketData = await responseMarketData.json();
    let tokenData = {
        "thumbnailImage": marketData.image.thumb,
        "tokenName": marketData.name.toUpperCase(),
        "tokenSymbol": marketData.symbol.toUpperCase(),
        "marketCap": marketData.market_data.market_cap.usd/1000000,
        "currentPrice": marketData.market_data.current_price.usd,
        "low_24h": marketData.market_data.low_24h.usd,
        "high_24h": marketData.market_data.high_24h.usd,
        "atl": marketData.market_data.atl.usd,
        "atlDate": marketData.market_data.atl_date.usd,
        "ath": marketData.market_data.ath.usd,
        "athDate": marketData.market_data.ath_date.usd,
        "totalSupply": marketData.market_data.total_supply/1000000,
        "maxSupply": marketData.market_data.max_supply/1000000,
        "circulatingSupply": marketData.market_data.circulating_supply/1000000,
        "priceChangePercentage7d": marketData.market_data.price_change_percentage_7d,
        "priceChangePercentage14d": marketData.market_data.price_change_percentage_14d,
        "priceChangePercentage30d": marketData.market_data.price_change_percentage_30d,
        "priceChangePercentage60d": marketData.market_data.price_change_percentage_60d,
        "priceChangePercentage200d": marketData.market_data.price_change_percentage_200d,
        "priceChangePercentage1y": marketData.market_data.price_change_percentage_1y
    }
    return tokenData;
};