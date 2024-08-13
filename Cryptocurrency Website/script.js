let bitcoin = document.getElementById("bitcoin");
let ethereum = document.getElementById("ethereum");
let dogecoin = document.getElementById("dogecoin")

let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method": "GET",
    "headers": {
        "Accept": "application/json",
        "X-Cg-Demo-Api-Key": "CG-aHJe69S9JqZjj9F74oYCKexg"
    }
};

$.ajax(settings).done(function(response) {
    bitcoin.innerHTML = response.bitcoin.usd;
    ethereum.innerHTML = response.ethereum.usd;
    dogecoin.innerHTML = response.dogecoin.usd;
});



