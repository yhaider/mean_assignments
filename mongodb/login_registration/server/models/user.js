var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var UserSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:[true,"First Name is required."],
        minlength:[2,"First Name must be between 2-255 characters."],
        maxlength:[255,"First Name must be between 2-255 characters."],
    },

    last_name:{
        type:String,
        required:[true,"Last Name is required."],
        minlength:[1,"Last Name must be between 1-255 characters."],
        maxlength:[255,"Last Name must be between 1-255 characters."],
    },

    email: {
        type:String,
        required:[true,"Email is required."],
        minlength:[6,"Email must be at least 6 characters."],
        validate:{
            validator:function(email){
                return email_regex.test(email);
            },
            message:"Invalid E-mail format."
        }
    },

    password: {
        type:String,
        required:[true,"Password is required."],
        minlength:[8,"Password must be at least 8 characters."]
    },

    password_confirm:{
        type:String,
        required:[true,"Password Confirmation is required."],
        minlength:[8,"Password Confirmation must be at least 8 characters."],
        validate:{
            validator:function(value){
                return value == this.password;
            },
            message:"Password and Password Confirmation must match."
        }
    },

    birthday: {
        type:Date,
        required:[true,"Birthday is required."],
        validate:{
            validator:function(value){
                let years = new Date().getFullYear()-value.getFullYear();
                return years >= 18;
            },
            message:"You must be 18 or older."
        }
    }
},{timestamps:true});
// This is the user schema which has the different
// pieces of information we need to store (we get from registration)
// and it has all validations done here



UserSchema.pre('save', function(done){
    bcrypt.hashSync(this.password, bcrypt.genSaltSync(14), function(err, hashedpw){
        if(err){
            console.error(err);
            return
        }
        this.password = hashedpw;
        this.password_confirm = null;
        done();
    });
// This part is activated before a new user is saved to the database
// It encrypts the password by salting it 14 times using bcrypt

});

mongoose.model("User", UserSchema);
