import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddProduct = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    userId: "",
    category: "",
    company: "",
    imageURL: "",
  });

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("users"));
    if (auth && auth._id) {
      setFormData((prev) => ({ ...prev, userId: auth._id }));
    }
  }, []);

  const onChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!image) return alert("Please select an image");

    try {
      // Upload image to Cloudinary
      const imageFormData = new FormData();
      imageFormData.append("file", image);
      imageFormData.append("upload_preset", "Tradesphere");

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/cloudy0/image/upload",
        imageFormData
      );

      const imageUrl = response.data.secure_url;

      // Create new form data object with imageURL
      const updatedFormData = { ...formData, imageURL: imageUrl };

      // Send data to backend
      const result = await axios.post("https://e-dashboard-theta.vercel.app/add-product", updatedFormData);

      alert("Product added successfully!");
      console.log(result.data);

      navigate("/");
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
      <form onSubmit={onSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
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
          <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">
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
          <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">
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
          <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">
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
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
            Upload Image
          </label>
          <input type="file" id="image" onChange={handleFileChange} />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
