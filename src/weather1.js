/*const request = require ('request')

const url = "http://api.weatherstack.com/current?access_key=981a19418de76d79ee741bee903c3cd5&query=32.8267,-122.4233d3a49883372d3b96bcb6c859a6e202e2, -36&units=f"

request({ url: url, json:true }, (error, response) => {
    //console.log(response.body.current)
    if(error){
        console.log("could not conenct to internet")
    }
    else if(response.body.error){
        console.log("unable to find location")
    }
    else{
        console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees out but it feels like " + response.body.current.feelslike)
    }
    
 })

const url2 = "http://api.mapbox.com/geocoding/v5/mapbox.places/%3Cyourplace%3E.json?proximity=ip&types=place%2Cpostcode%2Caddress&access_token=pk.eyJ1Ijoic2F5dXNheXUiLCJhIjoiY2w5NTB3b2NrMXZ2aTN2bGZ0Z2tja2g4NCJ9.8NQ-lL7uEFb8oa2vVZ2y2g"

request ({url: url2, json:true}, (error, response) => {
    if(error){
        console.log("could not connect to interent")
    }
    else if(response.body.features.length == 0){
        console.log("unable to find location. Try another search")
    }
    else{
        console.log(response.body.features[0].center[0])
        console.log(response.body.features[0].center[1])
    }
    
})

const geocode = (location, callback) => {
    const geocode = "http://api.mapbox.com/geocoding/v5/mapbox.places/" + location + ".json?proximity=ip&types=place%2Cpostcode%2Caddress&access_token=pk.eyJ1Ijoic2F5dXNheXUiLCJhIjoiY2w5NTB3b2NrMXZ2aTN2bGZ0Z2tja2g4NCJ9.8NQ-lL7uEFb8oa2vVZ2y2g"
    request({ url: geocode, json:true }, (error, response) => {
        if(error){
            callback("Cannot connect to location service", undefined)
        }else if(response.body.features.length == 0){
            callback('No locations found', undefined)
  
        }else{
           callback(undefined,{
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
           })
            //console.log(response.body.features[0].center[0])
            //console.log(response.body.features[0].center[1])
  
        }
  
    })
 
    //callback(undefined, "response")
}*/

//const request = require ('request')

// app.get('/weather', (req, res) => {
//     if(!req.query.address){
//         return res.send({
//             error: 'You must provide an address'
//         })
//     }
  
//     res.send({
//         forcast: forecastData,
//         location,
//         address: req.query.address
       
//     })
  
//     geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
//         if(error){
//             return res.send({error})
//         }
//         forecast(latitude, longitude, (error, forecastData) => {
//             if(error){
//                 return res.send({error})
//             }
  
           
  
//         })
  
//     })
//  })
 
 


 



const express = require('express')
const path = require('path')
const geocode = require('./geocode.js')
const forecast = require('./forecast.js')
 
const publicDirectoryPath = path.join(__dirname, '../public')
const app = express()
app.use(express.static(publicDirectoryPath))
app.set('view engine', 'hbs')
 
app.get('/', (req, res) => {
   res.render('index', {
       title: 'Scope Index!',
       name: 'Paul & Nicole'
   })
})
 
 
app.get('/weather', (req, res) => {
   if(!req.query.address){
       return res.send({
           error: 'You must provide an address'
       })
   }
    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
       if(error){
           return res.send({error})
       }
       forecast(latitude, longitude, (error, forecastData) => {
           if(error){
               return res.send({error})
           }
            res.send({
               forcast: forecastData,
               location,
               address: req.query.address
           })
        })
    })
})
 
 
app.listen(3000, () => {
   console.log('Server is up on port 3000!')
})
