const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/testDB', {useNewUrlParser: true, useUnifiedTopology: true});


//CRUD operations using mongoose
//Create

// specifies the schema for a collection
const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "All fruits should have a name!"]
    },
    rating: {
        type: Number,
        min: 1,
        max:10
    },
    review: String
});

//Make the Collection
//the string will be pluralized using lodash bts
//and that will be used as the collection name
const Fruit = mongoose.model("Fruit", fruitSchema);

//make a document
const pineapple = new Fruit({
    name: "pineapple",
    rating: 8,
    review: "Spiky"
});

// insert into collection
// pineapple.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "Amy",
    age: 30,
    favFruit: pineapple
});

// person.save();
// Person.updateOne({name: "John"}, {favFruit: pineapple}, (err) => {
//     if(err)
//         console.log(err);
//     else
//         console.log("Update Successful");
// });

// const grape = new Fruit({
//     name: "grape",
//     rating: 8,
//     review: "cool fruit lol"
// });

// const banana = new Fruit({
//     name: "banana",
//     rating: 10,
//     review: "ise gandhi bhi kaa sakta hai bro"
// });

// const mango = new Fruit({
//     name: "mango",
//     rating: 9,
//     review: "messy but tasty"
// });

// Fruit.insertMany([grape, banana, mango], (err) => {
//     if(err)
//         console.log(err);
//     else
//         console.log("Successfully Inserted Fruits");
// });

//Read
Fruit.find((err, fruits) => {
    if(err)
        console.log(err);
    else {
        fruits.forEach(fruit => {
            console.log(`Name: ${fruit.name} | Review: ${fruit.review}`);
        });
        // mongoose.connection.close();
    }
});

//UPDATE
// Fruit.updateOne({name:"banana"}, {review:"gandhi can eat this shiz too"}, (err) => {
//     if(err)
//         console.log(err);
//     else
//         console.log("Successfully Updated!");
// });

//DELETE
Fruit.deleteMany({name: "pineapple"}, (err) => {
    if(err)
        console.log(err);
    else {
        // mongoose.connection.close();
        console.log("Deletion Successful");
    }
});