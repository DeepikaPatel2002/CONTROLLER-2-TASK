
const getProducts = (req, res) => {
    res.send("Fetching all products");
}   

const getProductById = (req, res) => {
    const id = req.params.id;
    res.send(`Fetching a product with id ${id}`);
}

const postProduct = (req, res) => {
    res.send("Creating a product");
}   



module.exports = {
   getProducts,
     getProductById,
    postProduct,
     
}