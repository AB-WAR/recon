import {fetchCoinData} from "./api/dataSource";

const rowSet = [];

export function GetCoinData(token) {
    fetchCoinData(token).then((data) => {
        let coin = [];
        coin = {
            thumbnailImage: data.thumbnailImage,
            tokenName: data.tokenName,
            tokenSymbol:  data.tokenSymbol,
            marketCap : data.marketCap,
            currentPrice : data.currentPrice,
            low_24h : data.low_24h,
            high_24h : data.high_24h,
            atl : data.atl,
            atlDate : data.atlDate,
            ath : data.ath,
            athDate : data.athDate,
            circulatingSupply: data.circulatingSupply,
            totalSupply: data.totalSupply,
            maxSupply: data.maxSupply,
            priceChangePercentage7d : data.priceChangePercentage7d,
            priceChangePercentage14d: data.priceChangePercentage14d,
            priceChangePercentage30d: data.priceChangePercentage30d,
            priceChangePercentage60d: data.priceChangePercentage60d,
            priceChangePercentage200d: data.priceChangePercentage200d,
            priceChangePercentage1y: data.priceChangePercentage1y
        }

        rowSet.push(
            coin
        );
    }).catch(err => console.log("ERROR! in GetCoinData at fetchCoinData", err))
}

export {rowSet}