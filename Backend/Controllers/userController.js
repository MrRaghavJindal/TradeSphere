const user = require("../Models/User")

exports.createUser = async (req, res) => {
    let result = new user(req.body);
    let data = await result.save();
    data = data.toObject();
    delete data.password;
    console.log(req.body);
    res.send(data);
  };

 exports.getUserByMailPassword =  async (req, res) => {
    if (req.body.email && req.body.password) 
    {
            let result = await user.findOne(req.body);
            if(result)
            {
            res.send(result);
            } 
            else 
            {
            res.send({ result: "NO USER FIND" });
            }
    } 
    else 
    {
            res.send({ result: "NO USER FIND" });
    }
}

exports.getByMail = async (req, res) => {
            if (req.body.email) 
            {
                    let result = await user.findOne(req.body);
                    if(result)
                    {
                    res.send(result);
                    } 
                    else 
                    {
                    res.send({ result: "NO USER FIND" });
                    }
            } 
            else 
            {
                    res.send({ result: "NO USER FIND" });
            }
    }

exports.getUserById = async(req,res)=>{
    let result = await user.find({_id : req.params.id});
    if(result.length>0)
    {
    res.send(result);
    }
    else
    {
            res.send({result:"no Product Found"})
    }
}