const product = require("../Models/Product")

exports.addProduct = async(req,res)=>{
    let result = new product(req.body);
    let data = await result.save();
    res.send(data);
}

exports.getAllProducts = async(req,res)=>{
    let result = await product.find();
    console.log(result)
    if(result)
    {
    res.send(result);
    }
    else
    {
            res.send({result:"no Product Found"})
    }
}

exports.getProduct = async(req,res)=>{
    let result = await product.findById(req.params.id);
    console.log(result)
    if(result)
    {
    res.send(result);
    }
    else
    {
            res.send({result:"no Product Found"})
    }
}

exports.getMyProducts = async(req,res)=>{
    let result = await product.find({userId : req.params.id});
    
    if(result.length>0)
    {
    res.send(result);
    }
    else
    {
            res.send({result:"no Product Found"})
    }
}

exports.deleteProduct = async(req,res)=>{
    let result =  await product.findByIdAndDelete(req.params.id)
    res.send(result);
}

exports.updateProduct = async(req,res)=>{
    let result = await product.updateOne(
            {_id:req.params.id},
            {$set:req.body}
    )
    if(result)
    {
            res.send(result)
    }
    else
    {
            console.log("not founf")
            res.send({result:"not found"});
    }
}