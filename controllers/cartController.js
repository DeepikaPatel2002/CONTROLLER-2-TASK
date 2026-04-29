
getCartForUser=(req, res) => {
    const userId = req.params.id;
    res.send(`Fetching cart for user with id ${userId}`);
}

addProductToCart=(req, res) => {
    const userId = req.params.id;
    res.send(`Adding a product to cart for user with id ${userId}`);
}

module.exports = {
    getCartForUser,
    addProductToCart
}