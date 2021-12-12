//This code is based on lecture notes from class.  Study, learn, then replace.  
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({

    username:{
        type: String,
        required:[true, "Username is required"]
    },

    email: {
        type: String,
        required: [true, "Email address is required"]
    },

    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [8, "Passwords must be at least 8 characters"]
    }

}, {timestamps: true})

UserSchema.virtual('confirmPassword')
    .get(()=>this._confirmPassword)
    .set((value)=> this._confirmPassword = value)

UserSchema.pre("validate", function(next){
    console.log("in validate"); 

    if(this.password !== this.confirmPassword) {
        this.invalidate("confirmPassword", "Passwords must match");
        console.log("didn't match");    
    }
    console.log(this.password, this.confirmPassword);
    next();
})

UserSchema.pre("save", function(next){
    console.log("in presave");
    bcrypt.hash(this.password, 10)
        .then((hashedPassword)=>{
            console.log('in hash');
            this.password = hashedPassword;
        next();
        })
});

const User = mongoose.model("User", UserSchema);

module.exports = User;