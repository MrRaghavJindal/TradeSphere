const express = require("express");
const cors = require("cors");
require("./config");
const user = require("./DB/User");
const product = require("./DB/Product")

const app = express();

app.use(cors
        (
        {
            origin: "*",
            methods: ["POST", "GET","PUT","DELETE"],
            credentials: true
        }
    )
       );
app.use(express.json())
app.post("/register", async (req, res) => {
  let result = new user(req.body);
  let data = await result.save();
//   data = data.toObject();
//   delete data.password;
  console.log(req.body);
  res.send(data);
});


app.post("/check_signup_email", async (req, res) => {
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
});

app.post("/check_signup_username", async (req, res) => {
        if (req.body.username) 
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
    });


app.post("/login", async (req, res) => {
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
});

app.post('/validate-image', async (req, res) => {
        const { imageUrl } = req.body;
        try {
          const response = await axios.head(imageUrl);
          const contentType = response.headers['content-type'];
          if (contentType && contentType.includes('image')) {
            res.status(200).json({ isValid: true });
          } else {
            res.status(400).json({ isValid: false, error: 'Not a valid image URL' });
          }
        } catch (error) {
          res.status(500).json({ isValid: false, error: 'Error validating image URL' });
        }
      });

app.post('/add-product',async(req,res)=>{
        let result = new product(req.body);
        let data = await result.save();
        res.send(data);
})

app.get('/products',async(req,res)=>{
        let result = await product.find();
        if(result.length>0)
        {
        res.send(result);
        }
        else
        {
                res.send({result:"no Product Found"})
        }
})

app.get('/product/:id',async(req,res)=>{
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
})

app.get('/profile/:id', async(req,res)=>{
        let result = await user.find({_id : req.params.id});
        if(result.length>0)
        {
        res.send(result);
        }
        else
        {
                res.send({result:"no Product Found"})
        }
})

app.get('/myproducts/:id', async(req,res)=>{
        let result = await product.find({userId : req.params.id});
        
        if(result.length>0)
        {
        res.send(result);
        }
        else
        {
                res.send({result:"no Product Found"})
        }
})

app.delete('/delete/:id', async(req,res)=>{
        let result =  await product.findByIdAndDelete(req.params.id)
        res.send(result);
})



app.put('/update/:id', async(req,res)=>{
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
})
app.listen(5000);
