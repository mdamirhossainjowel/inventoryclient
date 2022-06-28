import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Updateproducts = () => {
  let { id } = useParams();
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });
  const [productinfo,setProductinfo]=useState([])
  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((result) => setProductinfo(result));
  }, [id]);
  const onSubmit = async (data) => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    toast.success("Product updated successfully");
  };

  return (
    <><h1 className="text-accent text-3xl text-center">Update {productinfo.name}</h1>
    <h1 className="text-accent text-3xl text-center">Available Quantity:  {productinfo.available_quantity}</h1>
    <h1 className="text-accent text-3xl text-center">Price: {productinfo.price}</h1>

    <div className="card lg:card-side bg-base-100 shadow-xl mx-6 lg:w-2/3 lg:mx-auto my-14">
      <div className="card-body lg:w-1/2 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input input-bordered input-accent w-full max-w-lg mb-3"
            placeholder="Update Name"
            {...register("name")}
          />
          <br />
          <input
            className="input input-bordered input-accent w-full max-w-lg mb-3"
            placeholder="Update Avaliable Quantity"
            {...register("available_quantity")}
          />
          <br />
         
          <input
            className="input input-bordered input-accent w-full max-w-lg mb-3"
            placeholder="Update Price"
            {...register("price")}
          />
          <br />
          <input className="btn btn-primary w-full max-w-lg" type="submit" />
        </form>
      </div>
    </div>
    </>
  );
};

export default Updateproducts;
