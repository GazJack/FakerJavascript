// npm init
// npm install @faker-js/faker
// node index.js (sugeneruoja random name terminale)

//https://www.npmjs.com/package/@faker-js/faker
//https://fakerjs.dev/api/

const {faker} = require('@faker-js/faker');

// Sugeneruoti netikra varda ir pavarde:
let atsitiktinisVardas = faker.person.firstName();
let atsitiktinePavarde = faker.person.lastName();
console.log(atsitiktinisVardas);
console.log(atsitiktinePavarde);

// Generuoju 100 netikru users:
const user = {
    "name": faker.person.firstName(),
    "surname": faker.person.lastName(),
    "phone": faker.phone.number(),
    "email": faker.internet.email(),
    "username": faker.internet.username(),
    "password": faker.internet.password(),
    "birthdate": faker.date.past() //data praeityje
};
console.log(user);

const product = {
    'title': faker.commerce.product(),
    'description': faker.commerce.productDescription(),
    'price': faker.commerce.price()
}
console.log(product);
