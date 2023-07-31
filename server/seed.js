const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DATABASE_URL);

const Cat=require("./models/cat");

async function seed(){
    await Cat.create(
        {
            name:"Felix",
            color: "grey and white",
            hasClaws: false,
            likes: ["Sleeping in the Sun", "Sipping Milk", "Cat Toys"],
        }
    );
    await Cat.create(
        {
            name:"Goober",
            color: "Red and Black",
            hasClaws: true,
            likes: ["sleeping in the trees", "Killing Children", "Eating Faces"],
        }
    )
    console.log("Kitty")
mongoose.disconnect();
};

seed();



