

const getUsers=(req,res)=>{
    res.send("Fetching all users");
}

const getUserById=(req,res)=>{
    const id=req.params.id;
    res.send(`Fetching a user with id ${id}`);
}

const postUser=(req,res)=>{
    res.send("Creating a user");
}   

module.exports={
    getUsers,
    getUserById,
    postUser
}