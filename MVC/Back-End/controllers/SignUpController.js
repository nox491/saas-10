const db = require("../models");
const Users = db.users;
const bcrypt = require ('bcrypt');

exports.check_signup = (req, res, next) =>{

  console.log(req.body.email)
  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  Users.findByPk(user.email)
  
        .then(data => {
      
          if (data != null)
            res.status(409).send({
            message: "User already exists"
            })
          else {
            next()
            }
        
          })

        .catch(err => {
          res.status(500).send({
            message:
            "Some error occurred. Please try again"
          });
        });
      
}

exports.create = (req, res) => {

  bcrypt.genSalt(10, function(err, salt) {
    if(err) {res.status(500).send({
      message: "Some error occurred. Please try again"
    })}
    else {
        bcrypt.hash(req.body.password, salt, function(err, hash) {

          if(err){
            res.status(500).send({
              message: "Some error occurred. Please try again"
            })
          }
          else {
              // Store user with hashed pass in db
              const user = {
                email: req.body.email,
                password: hash,
              };

              // Save user in the database
              Users.create(user)
              .then(data => {
                res.send(data);
              })
              .catch(err => {
                res.status(500).send({
                message: "Some error occurred while creating the user"
                });
              });
        }
      });
    }
  });
    
   

  };