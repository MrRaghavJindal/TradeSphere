import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const UpdateProduct = ()=>{
    const [image, setImage] = useState(null);
    const [formData,setiformData] = useState({
        name:"",
        price:"",
        category:"",
        company:"",
        imageURL:""
    })

    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
      
          getproducts()
   
    },[])

    const getproducts = async ()=>{
        try{
        let response = await axios.get(`https://e-dashboard-theta.vercel.app/product/${params.id}`);
        let result = response.data;
        setiformData({...formData,name:result.name,price:result.price,category:result.category,company:result.company,imageURL:result.imageURL})
        // console.log(result);
        // console.log("I have entered");
        }
        catch(error)
        {
            console.log(error);
        }
    }

    const onChange = (e)=>{ setiformData({...formData,[e.target.id]:e.target.value})}

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setImage(file);
    };

    const onSubmit = async (e)=>{
        e.preventDefault();
        if (!image) return alert("Please select an image");

        try{
        const imageFormData = new FormData();
        imageFormData.append("file", image);
        imageFormData.append("upload_preset", "Tradesphere");

        const imageResponse = await axios.post(
          "https://api.cloudinary.com/v1_1/cloudy0/image/upload",
          imageFormData
        );

        const imageUrl = imageResponse.data.secure_url;

        // Create new form data object with imageURL
        const updatedFormData = { ...formData, imageURL: imageUrl };
        let response = await axios.put(`https://e-dashboard-theta.vercel.app/update/${params.id}`,updatedFormData);
        let result = response.data;
        console.log("ye hai result",result);
        navigate('/')
        }
        catch(error)
        {
            console.log(error);
        }
    }
    return (
<>

<div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Update Product</h1>
      <form onSubmit={onSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="productName" className="block text-gray-700 text-sm font-bold mb-2">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter product name"
            value={formData.name} 
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="productPrice" className="block text-gray-700 text-sm font-bold mb-2">
            Product Price
          </label>
          <input
            type="number"
            id="price"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter product price"
            value={formData.price} 
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="productCategory" className="block text-gray-700 text-sm font-bold mb-2">
            Product Category
          </label>
          <input
            type="text"
            id="category"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter product category"
            value={formData.category} 
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="productCompany" className="block text-gray-700 text-sm font-bold mb-2">
            Product Company
          </label>
          <input
            type="text"
            id="company"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter product company"
            value={formData.company} 
            onChange={onChange}
            required
          />
          <div className="mb-4">
          <label htmlFor="productCompany" className="block text-gray-700 text-sm font-bold mb-2">
            Image
          </label>
          <img src={formData.imageURL} height={100} width={100}></img>
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
            Upload Image
          </label>
          <input type="file" id="image" onChange={handleFileChange} />
        </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Update Product
        </button>
      </form>
    </div>
</>
    )
}

export default UpdateProduct;
