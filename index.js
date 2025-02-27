// npm init
// npm install @faker-js/faker
// node index.js (sugeneruoja random name terminale)
// npm install fs
// norint pasileist duomenis i terminala reikia rasyti: node.index.js

//https://www.npmjs.com/package/@faker-js/faker
//https://fakerjs.dev/api/

const {faker} = require('@faker-js/faker');
const fs = require('fs');
const readline = require('readline');

// Sugeneruoti netikra varda ir pavarde:
let atsitiktinisVardas = faker.person.firstName();
let atsitiktinePavarde = faker.person.lastName();
console.log(atsitiktinisVardas);
console.log(atsitiktinePavarde);

const jsonToCsv = (jsonArray) => {
    const csvHeader = Object.keys(jsonArray[0]).join(',') + '\n';
    let csvRows = '';
    for (let i = 0; i < jsonArray.length; i++) {
        let csvRow = Object.values(jsonArray[i]).join(',') + '\n';
        csvRows += csvRow;
    }
    return csvHeader + csvRows;
};

function generateUser() {
    return {
        "name": faker.person.firstName(),
        "surname": faker.person.lastName(),
        "phone": faker.phone.number(),
        "email": faker.internet.email(),
        "username": faker.internet.username(),
        "password": faker.internet.password(),
        "birthdate": faker.date.past()
    }
};

// Generuoju 100 netikru users:
// pradzioj susikuriau sita users lentele, bet kai persikeliau sita kodo gabaleli i kitus kodus - sita pirmaji galiu istrinti:
// 1 variantas: 
//     const user = {
//     "name": faker.person.firstName(),
//     "surname": faker.person.lastName(),
//     "phone": faker.phone.number(),
//     "email": faker.internet.email(),
//     "username": faker.internet.username(),
//     "password": faker.internet.password(),
//     "birthdate": faker.date.past() //data praeityje
// };

// generuoju duomenis, nes daug kartu juos naudojam, o pirmieji kurie buvo uzrasyti (trumpesni) galiu istrinti
function generateProduct() {
    return {
    'title': faker.commerce.product(),
    'description': faker.commerce.productDescription(),
    'price': faker.commerce.price()
    }
};

// 1 variantas: 
// const product = {
//     'title': faker.commerce.product(),
//     'description': faker.commerce.productDescription(),
//     'price': faker.commerce.price()
// }

function generateCategory() {
    return {
        'title': faker.commerce.department(),
        'description': faker.commerce.productDescription() 
    }
};

// 1 variantas: 
// const category = {
//     'title': faker.commerce.department(),
//     'description': faker.commerce.productDescription()
// }

function generateToy() {
    return {
        'title': faker.commerce.product(),
        'description': faker.commerce.productDescription(),
        'price': faker.commerce.price() 
    }
};

// 1 variantas: 
// const toy = {
//     'title': faker.commerce.product(),
//     'description': faker.commerce.productDescription(),
//     'price': faker.commerce.price()
// }

// console.log(product);
// console.log(category);

// // generuoju 100 atsitiktiniu vartotoju
// const users = [];
// for(let i=0; i< 100; i++) {
//     let user = {
//         "name": faker.person.firstName(),
//         "surname": faker.person.lastName(),
//         "phone": faker.phone.number(),
//         "email": faker.internet.email(),
//         "username": faker.internet.username(),
//         "password": faker.internet.password(),
//         "birthdate": faker.date.past()
//     }; 
//     users.push(user)
// }

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Kiek duomenu noretumete suvesti i failus?\n', (dataCount) => {
   

    const users = Array.from({ length: dataCount }, generateUser);
    const products = Array.from({ length: dataCount }, generateProduct);
    const categories = Array.from({ length: dataCount }, generateCategory);
    const toys = Array.from({ length: dataCount }, generateToy);
    
    // save data to  json file
    
    fs.writeFileSync('json/users.json', JSON.stringify(users, null, 2));
    fs.writeFileSync('json/products.json', JSON.stringify(products, null, 2));
    fs.writeFileSync('json/categories.json', JSON.stringify(categories, null, 2));
    fs.writeFileSync('json/toys.json', JSON.stringify(toys, null, 2));
    
    // save data to csv
    
    fs.writeFileSync('csv/users.csv', jsonToCsv(users));
    fs.writeFileSync('csv/products.csv', jsonToCsv(products));
    fs.writeFileSync('csv/categories.csv', jsonToCsv(categories));
    fs.writeFileSync('csv/toys.csv', jsonToCsv(toys));
    
    console.log('Data generated successfully'  + dataCount);
    
    
    rl.close();
    })