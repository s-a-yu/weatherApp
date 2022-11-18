const axios = require("axios");
const prompt = require ("prompt-sync")();


var name1 = prompt("Enter a name: ")
var name2 = prompt("Enter another name: ")

const options = {
  method: 'GET',
  url: 'https://love-calculator.p.rapidapi.com/getPercentage',
  params: {sname: name1, fname: name2},
  headers: {
    'X-RapidAPI-Key': '72ef6d7e80msh04b66c719588ef8p1d80fcjsn2114c12667bb',
    'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	//console.log(response.data);
    console.log(response.data.fname + " and " + response.data.sname + " are " + response.data.percentage + "% compatible")
    console.log(response.data.result)
}).catch(function (error) {
	console.error(error);
});