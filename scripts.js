
// let api = `https://v6.exchangerate-api.com/v6/${apiKey}/adeca1812e8d00dba132a2b4/latest/USD`;

// const fromdropdown = document.getElementById('from-currency-select');

// const todropdown = document.getElementById('to-currency-select'); 

// currencies.forEach((currency)=>{
//     const option = document.createElement("option");
//      option.value = currency; 
//      option.text = currency; 
//      fromdropdown.add(option);

// })

// currencies.forEach((currency)=>{
//     const option = document.createElement("option");
//      option.value = currency; 
//      option.text = currency; 
//      todropdown.add(option);

// })

//  fromdropdown.value = "USD"; 
// todropdown.value = "BDT";

// let convertcurrency = () =>{
//     const amount = document.querySelector("#amount").value;
//     const fromcurrency = fromdropdown.value; 
//     const tocurrency = todropdown.value; 

//     if(amount.length != 0){
        
//         fetch(api)
//         .then((res) => res.json())  
//         .then((data)=> {
//              let fromexchange = data.conversion_rates[fromcurrency]; 
//              let toexchange = data.conversion_rates[tocurrency];
//              const convertedamount = (amount / fromexchange ) * toexchange; 
//             result.innerHTML = `${amount} ${fromcurrency} = ${convertedamount.toFixed(2)} ${tocurrency}`
           
//     })
// }   
//     else{
//         alert("please fill in the amount"); 

//     }


// };

// document
// .querySelector("#convert_button")
// .addEventListener("click",convertcurrency);
// window.addEventListener("load", convertcurrency);



let api = `https://v6.exchangerate-api.com/v6/${apiKey}/adeca1812e8d00dba132a2b4/latest/USD`;

const fromdropdown = document.getElementById('from-currency-select');
const todropdown = document.getElementById('to-currency-select');

currencies.forEach((currency) => {
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  fromdropdown.add(option);
});

currencies.forEach((currency) => {
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  todropdown.add(option);
});

fromdropdown.value = "USD";
todropdown.value = "BDT";

let convertCurrency = async () => {
  const amount = document.querySelector("#amount").value;
  const fromCurrency = fromdropdown.value;
  const toCurrency = todropdown.value;

  if (amount.length !== 0) {
    try {
      const response = await fetch(api);
      const data = await response.json();
      const fromExchange = data.conversion_rates[fromCurrency];
      const toExchange = data.conversion_rates[toCurrency];
      const convertedAmount = (amount / fromExchange) * toExchange;
      result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    } catch (error) {
      console.log(error);
      alert("An error occurred while fetching the exchange rates.");
    }
  } else {
    alert("Please fill in the amount");
  }
};

document.querySelector("#convert_button")
.addEventListener("click", convertCurrency);
window.addEventListener("load", convertCurrency);




