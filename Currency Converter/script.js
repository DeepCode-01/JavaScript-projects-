const api = ` https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
const fromDropDown = document.getElementById("from-currency-select");
const toDropDown = document.getElementById("to-currency-select");

// dropdown for
currencyCodes.forEach((currency) => {
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  fromDropDown.add(option);
});

currencyCodes.forEach((currency) => {
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  toDropDown.add(option);
});

fromDropDown.value = "USD";
toDropDown.value = "INR";

let convertCurrency = () => {
    const amount = document.querySelector("#amount").value; 
    const fromCurrency = fromDropDown.value;
    const toCurrency = toDropDown.value;
  
    if (amount.length !== 0) {
      fetch(api)
        .then((resp) => resp.json()) 
        .then((data) => {
         let formExchangeRate = data.conversion_rates[fromCurrency];
         const toExchangeRate = data.conversion_rates[toCurrency];

         const convertedAmount = (amount / formExchangeRate) * toExchangeRate;

         result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;

         
        })
        .catch((error) => console.error("Error fetching data:", error)); 
    } else {
      alert("Please fill in the amount.");
    }
  };
  
  let convertButton= document.querySelector("#convert-button")

  convertButton.addEventListener("click", convertCurrency);
window.addEventListener("load", convertCurrency);
