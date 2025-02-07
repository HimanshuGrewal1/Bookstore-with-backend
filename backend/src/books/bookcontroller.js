const Book = require("./bookmodle");

const postabook=async(req,res)=>{
    console.log(req.body)
    try {
        const newbook= await Book({...req.body});
        await newbook.validate();
        await newbook.save();
        res.status(200).send({message:"Book posted successfully",book:newbook})
    } catch (error) {
        console.error("Error creating a book",error);
        res.status(500).send({message:"failed a book"})

    }
}

const getallbook=async(req,res)=>{
    try {
        const books=await Book.find().sort({createdAt:-1});
        res.status(200).json(books)
    } catch (error) {
        console.error("Error fetching book",error);
        res.status(500).send({message:"failed to fetch books"})
    }
}

const getabook=async(req,res)=>{
        try {
            const {id}=req.params;
            const book=await Book.findById(id);
            if(!book){
                res.status(404).send({message:"book not found"})
            }

        res.status(200).json(book);
        } catch (error) {
            console.error("Error geting the book",error);
        res.status(500).send({message:"failed to get the books"})
        }
}

const updateabook=async(req,res)=>{
    try {
        const {id}=req.params;
        const updatebook=await Book.findByIdAndUpdate(id,req.body,{new:true});
        if(!updatebook){
            res.status(404).send({message:"Book not found!"})
        }
        res.status(200).send({
            message:"Book updated successfully",
            book:updatebook
        })
    } catch (error) {
        console.error("Error to update the book",error);
        res.status(500).send({message:"failed to update the books"})
    }
}

const deleteabook=async(req,res)=>{
    try {
        const {id}=req.params;
        const deletebook=await Book.findByIdAndDelete(id);
        if(!deletebook){
            res.status(404).send({message:"Book not found!"})
        }
        res.status(200).send({
            message:"Book deleted successfully",
            book:deletebook
        })
    } catch (error) {
        console.error("Error to delete the book",error);
        res.status(500).send({message:"failed to delete the books"})
    }
}

module.exports={
    postabook,
    getallbook,
    getabook,
    updateabook,
    deleteabook
}