/*Snack 1
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
Infine stampa separatamente i 3 array.*/

//array di 10 automobili

const cars = [
    
    {
        brand: "Bmw",
        model: "X5",
        fuel: "Gas"
    },
    {
        brand: "Ferrari",
        model: "Purosangue",
        fuel: "Gas"
    },
    {
        brand: "Porsche",
        model: "Cayenne",
        fuel: "Gas"
    },
    {
        brand: "Ford",
        model: "Mustang",
        fuel: "Diesel"
    },
    {
        brand: "Tesla",
        model: "Model Y",
        fuel: "Electric"
    },
    {
        brand: "Seat",
        model: "Ibiza",
        fuel: "Methane"
    },
    {
        brand: "Skoda",
        model: "Octavia",
        fuel: "Methane"
    },
    {
        brand: "Audi",
        model: "e-tron GT",
        fuel: "Electric"
    },
    {
        brand: "Mini",
        model: "Cooper",
        fuel: "Diesel"
    },
    {
        brand: "Mercedes-benz",
        model: "EQC",
        fuel: "Electric"
    }
]

const gas_cars = cars.filter((car) => {
    return car["fuel"] == "Gas";
})
console.log(gas_cars);

const diesel_cars = cars.filter((car) => {
    return car["fuel"] == "Diesel";
})
console.log(diesel_cars);

const other_cars = cars.filter((car) => {
    return car["fuel"] != Gas && car["fuel"] != Diesel;
})
console.log(other_cars);