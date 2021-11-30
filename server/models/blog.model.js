const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    category: {
        type: String,
        required: [true, "Category is required"]
    },
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    posted: {
        type: Date,
        required: [true, "Posted date is required"]
    },
    links: {
        type: [String]
    },
    paragraph: {
        type: [{
            text: {
                type: String
            },
            image: {
                type: String
            }
        }]
    },
    images: {
        type: [String]
    },
    video: {
        type: String
    }

}, {timestamps: true})

//Will index (sort) by date posted then category
//This will create a compound index.  
BlogSchema.index({ category: 1, title: -1}, {unique: true});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;