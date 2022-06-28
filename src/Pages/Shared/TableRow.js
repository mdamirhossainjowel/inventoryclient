import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const TableRow = (props) => {
  const { product } = props;
  const navigate = useNavigate();

  const handleUpdate = (id) => {
    navigate(`/updateproducts/${id}`);
  };
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    toast.success("Product deleted");
  };

  return (
    <tr>
      <td>
        <div className="avatar">
          <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={product.image} alt="user" />
          </div>
        </div>
      </td>
      <td>{product.name}</td>
      <td>{product.catagory}</td>
      <td>{product.available_quantity}</td>
      <td>{product.price}</td>
      <td>
        <button
          onClick={() => handleUpdate(product._id)}
          className="btn btn-xs"
        >
          Update Product
        </button>
        <button
          onClick={() => handleDelete(product._id)}
          className="btn btn-xs"
        >
          Delete Product
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
