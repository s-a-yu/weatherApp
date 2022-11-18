const request = require('request')
const axios = require("axios");
const prompt = require ("prompt-sync")();
const express = require ("express");
 
var name1 = prompt("Enter a Pokemon: ")
 
var name2 = prompt("Enter another Pokemon: ")
 
const url = "https://pokeapi.co/api/v2/pokemon/" + name1
request({ url: url, json:true }, (error, response) => {
 
    if (error) {
        console.log("could not connect to internet")
    } else if (response.body.error) {
        console.log("unable to find location. Try another search")
    } else {
        console.log(name1)
        console.log(response.body.types[0].type.name)
    }
 
})
 
const url2 = "https://pokeapi.co/api/v2/pokemon/" + name2
request({ url: url2, json:true }, (error, response2) => {
 
    if (error) {
        console.log("could not connect to internet")
    } else if (response2.body.error) {
        console.log("unable to find location. Try another search")
    } else {
        console.log(name2)
        console.log(response2.body.types[0].type.name)
    }
 
})
 
 
 
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
 
 
    console.log(response.data.fname + " and " + response.data.sname + " are " + response.data.percentage + "% compatible")
 
    console.log(response.data.result)
 
}).catch(function (error) {
 
	console.error(error);
 
});

