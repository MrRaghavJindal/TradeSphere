import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Loader from './Loader';
import { FaHeart } from 'react-icons/fa';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [likedProducts, setLikedProducts] = useState({});

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
            let response = await axios.get("https://e-dashboard-theta.vercel.app/products");
            let result = response.data;
            setProducts(result);
            localStorage.setItem("products", JSON.stringify(result));
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    const toggleLike = (index) => {
        setLikedProducts((prev) => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    if (loading) return <Loader />;

    return (
        <>
            <Section1 />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-6">Products</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.length > 0 ? (
                        products.map((product, index) => (
                            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
                                <img src={product.imageURL} alt={product.name} className="w-full h-48 object-cover rounded-md" />
                                <div className="mt-4">
                                    <h2 className="text-lg font-semibold">{product.name}</h2>
                                    <p className="text-gray-600">Price: ₹{product.price}</p>
                                    <p className="text-gray-500">Company: {product.company}</p>
                                    <p className="text-gray-500">Category: {product.category}</p>
                                    <div className="flex items-center justify-between mt-4">
                                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Buy</button>
                                        <button onClick={() => toggleLike(index)} className="text-xl transition-colors duration-300" style={{ color: likedProducts[index] ? 'red' : 'grey' }}>
                                            <FaHeart />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No products available</p>
                    )}
                </div>
            </div>
            <Section2 />
        </>
    );
};

export default Product;
