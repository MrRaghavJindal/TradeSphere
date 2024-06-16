import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
const Product = ()=>{
    const [products,setproduct] = useState([])

    const allProducts = localStorage.getItem("products");
    useEffect(()=>{

        if(allProducts)
          {
              setproduct(JSON.parse(allProducts))
          }
          else
          { 
            getproduct()
          }
          
    },[])

    const getproduct = async()=>{
    try{
        let response = await axios.get("http://localhost:5000/products");
        let result = response.data;
        setproduct(result);
        localStorage.setItem("products",JSON.stringify(result));
    }
    catch(err){
        console.log(err)
    }
    }

    return(
      <>
      <Section1/>
    <div className="App">
      <h1>Products</h1>
      <div className="product-grid">
        {products.length>0?
        products.map((products, index) => (
          <div className="card" key={index}>
            <img src={products.imageURL} alt={products.name} className="product-image" />
            <div className="card-content">
              <h2 className="product-name">{products.name}</h2>
              <p className="product-price">{products.price}</p>
              <p className="product-company">{products.company}</p>
              <p className="product-category">{products.category}</p>
            </div>
          </div>
        ))
      :
      <>
      </>
      }
      </div>
    </div>
    <Section2/>
      </>
    )
}

export default Product;