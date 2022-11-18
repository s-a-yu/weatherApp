// const express = require('express')
// const path = require('path')
// const geocode = require('./geocode.js')
// const forecast = require('./forecast.js')
 
// const publicDirectoryPath = path.join(__dirname, '../public')
// const app = express()
// app.use(express.static(publicDirectoryPath))
// app.set('view engine', 'hbs')
 
// app.get('/', (req, res) => {
//    res.render('index', {
//        title: 'Scope Index!',
//        name: 'Paul & Nicole'
//    })
// })
 
 
// app.get('/weather', (req, res) => {
//    if(!req.query.address){
//        return res.send({
//            error: 'You must provide an address'
//        })
//    }
//     geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
//        if(error){
//            return res.send({error})
//        }
//        forecast(latitude, longitude, (error, forecastData) => {
//            if(error){
//                return res.send({error})
//            }
//             res.send({
//                forcast: forecastData,
//                location,
//                address: req.query.address
//            })
//         })
//     })
// })
 
 
// app.listen(3000, () => {
//    console.log('Server is up on port 3000!')
// })





// fetch("http://localhost:3000/weather?address=" + location).then((response) => {
//    response.json().then((data) => {
//        if(data.error){
//            console.log(data.error)
//        }
//        else{
//            console.log(data.location)
//            console.log(data.forcast)
//        }
//        })
//    })

console.log("hello I exist")
 
const weatherFrom = document.querySelector('form')
const search = document.querySelector('input')
 
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
 
weatherFrom.addEventListener('submit', (e) => {
   e.preventDefault()
   const location = search.value
 
   messageOne.textContent = "loading..."
   messageTwo.textContent = ""
 
 
 
   fetch("http://localhost:3000/weather?address=" + location).then((response) => {
   response.json().then((data) => {
       if(data.error){
           messageOne.textContent = data.error
       }
       else{
           messageOne.textContent = data.location
           console.log(data)
           messageTwo.textContent = data.forcast
       }
       })
   })
 
 
})

