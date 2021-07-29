const db = require("../models");
const User = db.users;
const jwt = require('jsonwebtoken')
var fs = require('fs');
const bcrypt = require('bcrypt')

exports.check_login = (req, res, next) => {

    const user = {
        email: req.body.email,
        password: req.body.password,
      };

      User.findByPk(user.email)
        .then(data => {
      
        if (data == null)
        res.status(401).send({
          message: "Wrong password or email"//no such email in database
        })
        else {
          req.password = data.password
          next()
          }
        
      })
        .catch(err => {
          res.status(500).send({
            message: "Some error occurred while creating the Tutorial."
          });
      });

    }

exports.verifyUser = (req, res, next) => {

    bcrypt.compare(req.body.password, req.password, function(error, res) {
        if(error) 
          {
          res.status(500).send({
          message: "Some error occurred while creating the Tutorial."
          });
          }
        else if(!res) {
          req.body.email=null
          next()
        }
        else {
          next()
        }
      })

}
 
exports.generateToken = (req, res) => {
    
const secretToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2MDk5Njk2NjEsImV4cCI6MTY0MTUwNTY2MSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.X0AKkr4AXvRRgg0C9_yjvhOV7najxgQN4xbS57Y7GGQ"

if(!req.body.email) {
  return res.status(401).send({ message: 'Email or Password is Incorrect'}) //password is incorrect
}
const user_access_token = jwt.sign({data : req.body.email}, secretToken)
    res.json({ user_access_token: user_access_token })
        }
