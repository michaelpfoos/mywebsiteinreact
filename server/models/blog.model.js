const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    category: {
        type: String,
        required: [true, "Category is required"]
    },
    title: {
        type: String,
        required: [true, "Title is required"],
        unique: true
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

//Will index (sort) by category, then title
//This will create a compound index.  
//Unique index causes a duplicate key error in Mongo.  This will be good to debug for a later fix.
//BlogSchema.index({ category: 1, title: -1}, {unique: true});
BlogSchema.index({ category: 1, title: -1});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;