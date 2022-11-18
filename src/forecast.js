// const request = require ('request')

// const forecast = (longitude, latitude) => {
//     const forecast = "http://api.weatherstack.com/current?access_key=981a19418de76d79ee741bee903c3cd5&query="+ latitude +"," +longitude+"&units=f"
//     request({forecast, json: true}, (error, {body}) => {
//         if(error){
//             callback("Cannot connect to weather service", undefined)
//         }else if(body.error){
//             callback('Unable to find location', undefined)
           
//         }else{
  
//             callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degress out.")
//         }
  
     
//     })
 
// }

// module.exports = forecast


const request = require('request')
const forecast = (lat, long, callback) => {
  const url = "http://api.weatherstack.com/current?access_key=981a19418de76d79ee741bee903c3cd5&query=" + long + "," + lat + "&units=f"
  request({url, json: true}, (error, {body}) => {
      if(error){
          callback("Cannot connect to weather service", undefined)
      }else if(body.error){
          callback('Unable to find location', undefined)
        
      }else{
          callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degress out.")
      }
  
  })
}
module.exports = forecast
