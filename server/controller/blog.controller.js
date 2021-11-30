const Blog = require('../models/blog.model');

module.exports = {
    addNewBlog: (req, res)=> {
        Blog.create(req.body)
        .then((newBlog)=>{            
            res.json(newBlog);
        })
        .catch((err)=>{            
            res.status(400).json(err);            
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
    findAllBlogs: (req, res)=> {
        Blog.find({})
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