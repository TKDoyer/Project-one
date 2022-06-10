// 8QC5D43wuCxBQp03JkY6f9L9c9yLIVRh

var myHeaders = new Headers();
myHeaders.append("apikey", "8QC5D43wuCxBQp03JkY6f9L9c9yLIVRh");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/exchangerates_data/convert?to=AED&from=USD&amount=100", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  var displayResult

  var myHeaders = new Headers();
myHeaders.append("apikey", "8QC5D43wuCxBQp03JkY6f9L9c9yLIVRh");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

//fetch("https://api.apilayer.com/exchangerates_data/latest?symbols={symbols}&base=USD", requestOptions)
 // .then(response => response.text())
 // .then(result => console.log(result))
 // .catch(error => console.log('error', error));