import React, { useEffect, useState } from "react";
import TableRow from "../Shared/TableRow";
import {useLocation} from 'react-router-dom';
const ManageProduct = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
const catagory=location.state.data 
  useEffect(() => {
    if(catagory==='default' || catagory==='showall'){
      fetch(`http://localhost:5000/products`)
      .then((res) => res.json())
      .then((result) => setProducts(result));
    }
    else{
      console.log(catagory)
      fetch(`http://localhost:5000/products/${catagory}`)
      .then((res) => res.json())
      .then((result) => setProducts(result));
    }
    
  }, [catagory]);

  return (
    <div className="overflow-x-auto">
      <h1 className="text-accent text-3xl text-center font-bold mb-3">
        Manage Products
      </h1>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Catagory</th>
            <th>Available Quantity</th>
            <th>Price(unit)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <TableRow key={product._id} product={product}></TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProduct;
