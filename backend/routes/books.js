import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

router.post("/", async (req,res) => {
    try{
        if( !req.body.title ||
            !req.body.author ||
            !req.body.publishYear ||
            !req.body.noOfPages
            ){
                return res.status(400).send({
                    message: "Send all required fields: title, author, publishYear and noOfPages"
                })
            }
        
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
            noOfPages: req.body.noOfPages
        }

        const book = await Book.create(newBook);
        return res.status(201).send(book);
    }catch(error){
            console.log(error.message);
            res.status(500).send({ message: error.message })
    }
})

router.get("/", async (req,res) => {
    try{
        const books = await Book.find({});
        return res.status(200).json({
            count: books.length,
            data: books
        });
    }
    catch(error){
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
})

router.get("/:bookId", async (req,res) => {
    try{
        const { bookId } = req.params;

        const book = await Book.findById(bookId);

        return res.status(200).json(book);
    }
    catch(error){
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
})

router.put("/:bookId", async (req,res) => {
    try{
        if( !req.body.title || 
            !req.body.author ||
            !req.body.publishYear || 
            !req.body.noOfPages){
                return res.status(400).send({ message: "Send all required fields: title, author, publishYear and noOfPages" });
            }

        const { bookId } = req.params;

        const book = await Book.findByIdAndUpdate(bookId, req.body);

        if(!book){
            return res.status(404).json({ message: "Book not found" });
        }
        
        return res.status(200).send({ 
            book,
            message: "Book updated successfully" 
        });
    }
    catch(error){
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
})

router.delete("/:bookId", async (req, res) => {
    try{
        const { bookId } = req.params;

        const book = await Book.findByIdAndDelete(bookId);

        if(!book){
            return res.status(404).json({ message: "Book not found" });
        }
        
        return res.status(200).send({ 
            message: "Book deleted successfully" 
        });
    }
    catch(error){
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

export default router;