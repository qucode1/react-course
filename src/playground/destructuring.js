//
// Object Destructuring
//

// const person = {
//   name: 'Yannick',
//   age: 25,
//   location: {
//     city: 'Krefeld',
//     temp: 23
//   }
// }
//
// const { name = 'Anonymous', age } = person
// const { city, temp: temperature } = person.location
//
// console.log(`${name} is ${age}`)
// if (city && temperature) console.log(`It's ${temperature}°C in ${city}`)
//
//
// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }
//
// const { name: publisherName = 'Self-Published' } = book.publisher
//
// console.log(publisherName)

//
// Array Destructuring
//

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']
//
// const [, city, state = 'New York', zip] = address
// // only use comma to skip an item
//
// console.log(`You are in ${city}, ${state}.`)


const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75']

const [itemName,, mediumPrice] = item

console.log(`A medium ${itemName} costs ${mediumPrice}`)
