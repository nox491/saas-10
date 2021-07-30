
const jwt = require('jsonwebtoken')
var fs = require('fs');

const secretToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2MDk5Njk2NjEsImV4cCI6MTY0MTUwNTY2MSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.X0AKkr4AXvRRgg0C9_yjvhOV7najxgQN4xbS57Y7GGQ"

exports.verifyToken = (req, res, next) => {

    const token  = req.headers['x-observatory-auth']
    
    if (!token) res.status(400).send('Missing Token')
    else{
        jwt.verify(token, secretToken, (err, user) => {
            if (err) res.status(401).send('Not Authorized')
            else {
                req.body.email = user.data
                next()
            }
        })
    }
  }