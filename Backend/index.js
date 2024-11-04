const express = require("express");
const app = express();

require("./Utils/db");

const cors = require("cors");

//routes
const userRoutes = require("./Routes/userRoute");
const productRoutes = require("./Routes/productRoutes");

const corsOptions = { origin: "*", methods: ["POST", "GET","PUT","DELETE"], credentials: true }

// apis
app.use(cors());
app.use(express.json(corsOptions));
app.use("",userRoutes);
app.use("",productRoutes);



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

app.listen(5000);
