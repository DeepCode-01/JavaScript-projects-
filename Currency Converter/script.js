const api = ` https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`
const fromDropDown = document.getElementById("from-currency-select");
const toDropDown = document.getElementById("to-currency-select")

// dropdown for
currencyCodes.forEach((currency)=>{

    const option = document.createElement("option");
    option.value= currency;
    option.text = currency;
    fromDropDown.add(option);

})

currencyCodes.forEach((currency)=>{

    const option = document.createElement("option");
    option.value= currency;
    option.text = currency;
    toDropDown.add(option);

})