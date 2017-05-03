let connection = require('./models/sequelize-connection')
let Sequelize = require('sequelize')
let Country = require('./models/nick')

//
// Country.all({
//   where: {
//     continent: 'Europe'
//   }
// }).then(function(country) {
//     console.log(country.get());
// })

// Country.all({
//     where: {
//     continent: 'Europe'
//   },
//   order:  'name asc'
// })
//   .then(function(countries){
//   let mapped = countries.map(function(country){
//     return country.get()
//   })
//   console.log(mapped)
// })

// Country.all({
//     where: {
//     code: 'DZA'
//   }
// })
//   .then(function(countries){
//   let mapped = countries.map(function(country){
//     return country.get()
//   })
//   console.log(mapped)
// })
//




// Country.findById(242).then(function(country){
//   country.get()
//   console.log('im here')
//   console.log(country)
//
//   return country
// }).then(function(country){
//     country.name = "afghanistan"  // <-- this is where we update its values
//     console.log(country.name);
//     return country.save() // a promise
//   })
//   .catch(function(error){
//     console.error('error', error);
//   })


//
// let leRaton = Country.create({
//   code: 'RAT',
//   name: 'Raton',
//   continent: 'Europe',
//   region: 'South America'
// }).then(function(country) {
//   console.log(country);
// }).catch(function(error){
//     console.error('error', error);
// })
//   .then(function(country){
//     country.region = "Storyland"  // <-- this is where we update its values
//     return country.save() // a promise
//   })
//   .catch(function(error){
//   })




  Country.findById(242).then(function(country){
    country.get()
    console.log('im here')
    console.log(country)
    return country
  }).then(function(country){
      return country.destroy() // a promise
    })
    .then(function(results) {
      console.log('deleted');
    })
    .catch(function(error){
      console.error('error', error);
    })







connection.authenticate()
  .then(function(){
    console.log('success!')
  })
  .catch(function(error){
    console.log(error)
  })
