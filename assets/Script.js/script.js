const currencyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_one = document.getElementById('amount1');
const amountEl_two = document.getElementById('amount2');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the dome
// api key for currency 3e3716909a8c09eed8a04aac
// api key for map AIzaSyB1xW1CKr_tB0XLM3obh_gDVeTLPqI0654
function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;
  //https://v6.exchangerate-api.com/v6/3e3716909a8c09eed8a04aac/latest/USD

  fetch(`https://v6.exchangerate-api.com/v6/3e3716909a8c09eed8a04aac/latest/${currency_one}`)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      const rate = data.conversion_rates[currency_two];
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
}

// Event Listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);
swap.addEventListener('click', () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});

calculate();