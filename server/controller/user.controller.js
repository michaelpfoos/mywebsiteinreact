const User = require('../models/user.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    
    // register: (req, res) => {
    //     console.log('in register');
    //     console.log(req.body);
    //     const user = new User(req.body);

    //     user.save()
    //         .then((newUser) => {
    //             console.log(newUser);
    //             console.log('Successfully registered!');
    //             res.json({
    //                 successMessage: "Thank you for registering!",
    //                 user: newUser,
    //             });                
    //         })
    //         .catch((err) => {
    //             console.log('registration not successful');
    //             console.log(err);
    //             res.status(400).json(err);
    //         });            
    // },
    register: (req, res) => {
        console.log('in register');
        //console.log(req.body);
        const count = User.count({});      
        const user = new User(req.body);

        User.count({}, function( err, count){
            if ( count === 0 ) {
                user.save()
                    .then((newUser) => {
                        console.log(newUser);
                        console.log('Successfully registered!');
                        res.json({
                            successMessage: "Thank you for registering!",
                            user: newUser,
                        });                
                    })
                    .catch((err) => {
                        console.log('registration not successful');
                        console.log(err);
                        res.status(400).json(err);
                    });  
            }
            else {
                console.log('There is already an admin on this server.')
                res.status(400).json({
                    message: "There is already an admin on this server"
                })
            }
        })
               
    },

    login: (req, res) => {
        User.findOne({ username: req.body.username }) 
            .then((userRecord) => {
                if (userRecord === null) {
                    res.status(400).json({ message: "Invalid Login Attempt" })
                }
                else {
                    console.log("bcrypt is used here to compare logins")
                    bcrypt
                        .compare(req.body.password, userRecord.password)
                        .then((isPasswordValid)=> {
                            if (isPasswordValid) {
                                
                                console.log("password is valid");
    
                                res.cookie(
                                    "usertoken",
                                    jwt.sign(
                                        {
                                            id: userRecord._id,
                                            email: userRecord.email,
                                            username: userRecord.username //left comma out here don't think we need
                                        },
                                        process.env.JWT_SECRET //left comma out here don't think we need
                                    ),
                                    {
                                        httpOnly: true,
                                        expires: new Date(Date.now() + 90000000)
                                    }
                                ).json({
                                    message: "Successfully Logged in",
                                    userLoggedIn: userRecord.username,
                                    userId: userRecord._id
                                });                            
                            }
                            else {
                                res.status(400).json({
                                    message: "Login and/or Email Invalid"
                                });
                            }
                        }) //Tom has an extra catch beneath this, investigate.
                    }
                }) 
                .catch((err) => {
                    console.log('error');
                    res.status(400).json({ message: "Invalid Attempt" });
                });
    },

    logout: (req, res) => {
        console.log("logging out");
        res.clearCookie("usertoken");
        res.json({
            message: "You have successfully logged out!"
        });
    },

    getOneUser: (req, res) => {
        User.findOne({ _id: req.params.id })
            .then((oneUser) => {
                console.log(oneUser);
                res.json(oneUser);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    }
    
}