import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

const AddProduct = ()=>{
    useEffect(() => {
      const auth = JSON.parse(localStorage.getItem("users"));
      if (auth && auth._id) {
        let getuserId = auth._id;
        setFormData(prevFormData => ({ ...prevFormData, userId: getuserId }));
      }
    }, []);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        userId:'',
        category: '',
        company:'',
        imageURL:''
      });
    
      const onChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });
    
      const validateImage = async () => {
        try {
          const response = await fetch(formData.imageURL);
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('image')) {
            return true;
          } else {
            return false;
          }
        } catch (error) {
          return false;
        }
      };

      const onSubmit = async (e) => {
        e.preventDefault();
        try {
          const str = await validateImage();
          if (str) {
          const result = await axios.post('https://e-dashboard-theta.vercel.app/add-product', formData);
          const resultdata = result.data;
          console.log(resultdata);
          navigate('/')
          } else {
            alert('Please enter a valid image URL');
          }
        } catch (error) {
          console.error(error.response.data);
        }
      };
    return (
        <>



<div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
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
            Image URL
          </label>
          <input
            type="text"
            id="imageURL"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Image URL"
            value={formData.imageURL} 
            onChange={onChange}
            required
          />
        </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Product
        </button>
      </form>
    </div>

        </>
    )
}

export default AddProduct;
