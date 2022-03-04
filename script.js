const onLoad = async () => { 
    document.getElementById("audusdOutput").innerHTML = 
            (await audUSD()).toFixed(2);
    document.getElementById("xrpaudOutput").innerHTML = 
            (await xrpAUD()).toFixed(2); 
}

/*************************************/
const audUSD = async () => {
    try {
        const res = await fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=AUD&to_currency=USD&apikey=demo`); 
        const data = await res.json(); 
        const rate = parseFloat(data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]); 
        return rate; 

    } catch (error) {
        document.getElementById("audusdOutput").innerHTML = "Unavailable"; 
    }
}

const exchangeAUDUSD = async () => { 
    document.getElementById("audusdOutput").innerHTML = 
            ((await audUSD()) * document.getElementById("audusdInput").value).toFixed(2); 
}

/*************************************/
//TODO: Add AU$ to XRP exchange field. Alpha Vantage only supports XRP to AU$ so I shall need to simply reverse the existing function
const xrpAUD = async () => {
    try {
        const res = await fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=XRP&to_currency=AUD&apikey=demo`); 
        const data = await res.json(); 
        const rate = parseFloat(data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]); 
        return rate; 

    } catch (error) {
        document.getElementById("xrpaudOutput").innerHTML = "Unavailable"; 
    }
}

const exchangeXRPAUD = async () => { 
    document.getElementById("xrpaudOutput").innerHTML = 
            ((await xrpAUD()) * document.getElementById("xrpaudInput").value).toFixed(2); 
}
/*************************************/





