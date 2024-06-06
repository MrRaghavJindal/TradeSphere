import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Myproduct = ()=>{
    const [products,setproduct] = useState([])

    useEffect(()=>{
        getproduct()
    },[])
    
    const getproduct = async()=>{
    try{

        const auth = localStorage.getItem("users");
        let userId = JSON.parse(auth)._id;

        let response = await axios.get(`http://localhost:5000/myproducts/${userId}`);
        let result = response.data;
        setproduct(result)
    }
    catch(err){
        console.log(err);
    }
    }

    const deleteRecord = async(id)=>{
        try{
        let data = await axios.delete(`http://localhost:5000/delete/${id}`);
        getproduct();
        }
        catch(err){
            console.log(err);
        }
    } 
    return(
        <>



<div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product Name
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product Category
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product Company
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product Price
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>

            
                
                {products.length>0?
                products.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                  {item.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                  {item.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                  {item.company}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                  ${item.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                  <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 mr-2 rounded"
                  
                  >
                  <Link to={'/update/'+item._id} >Update</Link>
                  </button>
                  <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                  onClick={()=>deleteRecord(item._id)}
                  >
                  Delete
                  </button>
                  </td>
                  </tr>
                ))
                :
      <></>
                }
            
          </tbody>
        </table>
      </div>
    </div>







            </>
    )
}

export default Myproduct;