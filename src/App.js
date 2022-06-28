import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Homepage/Home";
import Login from "./Pages/Login_Registration/Login";
import Header from "./Pages/Shared/Header";
import Footer from "./Pages/Shared/Footer";

import PagenotFound from "./Pages/Shared/PagenotFound";
import Registration from "./Pages/Login_Registration/Registration";
import Addproduct from "./Pages/Dashboard/Addproduct";
import MyProfile from "./Pages/Dashboard/MyProfile";

import ManageProduct from "./Pages/Dashboard/ManageProduct";
import Updateproducts from "./Pages/Dashboard/Updateproducts";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Dashboard from "./Pages/Dashboard/Dashboard";
function App() {
  return (
    <div className="">
      <Header></Header>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/registration"
          element={<Registration></Registration>}
        ></Route>

        <Route
          path="allproducts"
          element={<ManageProduct></ManageProduct>}
        ></Route>

        <Route path="addproduct" element={<Addproduct></Addproduct>}></Route>
        <Route path="/manageinventory" element={<Dashboard></Dashboard>}>
          <Route path="addproduct" element={<Addproduct></Addproduct>}></Route>

          <Route
            path="allcatagory"
            element={<ManageProduct></ManageProduct>}
          ></Route>

          <Route
            path="allcatagory/updateproducts/:id"
            element={<Updateproducts></Updateproducts>}
          ></Route>
          <Route
            path="myprofile"
            element={<MyProfile></MyProfile>}
          ></Route>
        </Route>

        <Route
          path="updateproducts/:id"
          element={<Updateproducts></Updateproducts>}
        ></Route>

        <Route path="*" element={<PagenotFound></PagenotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
