import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import booksRoute from "./routes/books.js";
import dotenv from 'dotenv';

const app = express();
const PORT = 5555;

dotenv.config();

// Middleware for parsing request body
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
    console.log(req);
    return res.status(234).send('Welcome');
})

app.use("/books", booksRoute);

if (process.env.mongoDBURL) {
    mongoose.connect(process.env.mongoDBURL, { dbName: "books-collection" })
        .then(() => {
            console.log("App connected to database");
            app.listen(PORT, () => {
                console.log(`App listening on port ${PORT}`);
            })
        });
}
else {
    console.error("mongoDBURL is not defined.");
}
