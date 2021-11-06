import libros from "../models/libros.js";


const registerBook = async (req,res) =>{

    if (!req.body.name || !req.body.author || !req.body.category)
        return res.status(400).send("INCOMPLETE DATA")


    const existingBook = await libros.findOne({ name: req.body.name });
    if (existingBook) return res.status(400).send("This Book Already Register");

    const librarySchema = new libros({
        name: req.body.name,
        autor: req.body.author,
        category: req.body.category,
        dbStatus: true,
    });

    const result = await librarySchema.save();
        if (!result) return res.status(400).send("Failed to register book");
    
        res.status(200).send({ result })


};

export default { registerBook };