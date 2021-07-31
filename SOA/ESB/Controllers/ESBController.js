const axios = require('axios');

exports.get_axios_reroute = async (req, res) => {

    try {

              const data = await axios({
                  method: 'get',
                  url: req.headers['url'],
                
                  headers: {
                    'x-observatory-auth': req.headers['x-observatory-auth'],
                 },

                  params: {
                    startDate: req.query.startDate,
                    endDate: req.query.endDate,
                    questionTitle: req.query.questionTitle,
                    keyword: req.query.keyword
                  },
                  

                });
                res.status(200).send(data["data"])

              } catch(error){
                res.status(401).send({
          message: "Some error occured"
        })
              } 
    }


exports.post_axios_reroute = async (req, res) => {

  try {        
            const data = await axios({
              method: 'post',
              url: req.headers['url'],

              headers: {
                'x-observatory-auth': req.headers['x-observatory-auth'],
             },
            
              data: {
                email : req.body.email, 
                password : req.body.password,
                keywords : req.body.keywords,
                title : req.body.title,
                content : req.body.content
              },

            })
            res.status(200).send(data["data"])
           }
            catch(error){
              res.status(401).send({
        message: "Some error occured"
      })
            } 
  }