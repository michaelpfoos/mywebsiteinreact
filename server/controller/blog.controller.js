const Blog = require('../models/blog.model');


module.exports = {
    addNewBlog: (req, res)=> {
        Blog.create(req.body)
        .then((newBlog)=>{            
            res.json(newBlog);
        })
        .catch((err)=>{            
            res.status(400).json(err);   
            console.log(err);         
        })
    },
    updateBlog: (req, res)=> {
        Blog.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
        )
        .then((updateBlog)=>{
            res.json(updateBlog);
        })
        .catch((err)=>{            
            res.status(400).json(err);            
        })
    },
    //Change this so it only finds the fields you want to display in the index.
    findAllBlogs: (req, res)=> {
        Blog.find({}).collation({locale:'en',strength: 2}).sort({posted:-1})
        .then((findAllBlogs)=>{
            res.json(findAllBlogs);
        })
        .catch((err)=>{
            res.status(400).json(err);
        })
    },
    findOneBlog: (req, res)=>{
        Blog.find({_id: req.params.id})
        .then((oneBlog)=>{
            res.json(oneBlog);
        })
        .catch((err)=>{
            res.status(400).json(err);
        })
    },
    deleteBlog: (req, res)=>{
        Blog.deleteOne({_id: req.params.id})
        .then((deleteBlog)=>{
            res.json(deleteBlog);            
        })
        .catch((err)=>{
            res.status(400).json(err);
        })
    }
}