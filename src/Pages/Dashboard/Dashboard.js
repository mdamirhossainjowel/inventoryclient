import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link,Outlet, useNavigate } from "react-router-dom";


const Dashboard = () => {
  const {
    register,
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });
  const [value, setValue] = useState("default");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const navigate = useNavigate();

  const onSubmit = (data) => {
    navigate(`allcatagory`,{state:{data:data.catagory}});
  
  };
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
    
    
         <br/>
          <form onChange={handleSubmit(onSubmit)}>
          <select
              defaultValue={value}
              onChange={handleChange}
              className="input input-bordered input-accent w-full max-w-lg mb-2"
              {...register("catagory")}
            >
              <option value="default" >
                Choose Catagory
              </option>
              <option value="handbag">Hand Bag </option>
              <option value="importedbag">Imported Bag </option>
              <option value="showall">Show All</option>
            </select>
            </form>
          <li>

            <Link to="addproduct">Add Product</Link>
          </li>
          <li>
            <Link to="managecatagory">Manage Catagory</Link>
          </li>
          <li>
            <Link to="myprofile">My Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
