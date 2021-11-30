const Blog = require('../controller/blog.controller');
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
    app.post("/api/blog/new/", Blog.addNewBlog);
    app.get("/api/blog/", Blog.findAllBlogs);
    app.get("/api/blog/:id", Blog.findOneBlog);
    app.put("/api/blog/:id", Blog.updateBlog);
    app.delete("/api/blog/:id", authenticate, Blog.deleteBlog);
};
