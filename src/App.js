import "./App.css";
import Header from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Shop from "./Components/Shop/Shop";
import { Route, Routes } from "react-router-dom";
import Order from "./Components/Order/Order";
import ManageInventory from "./Components/ManageInventory/ManageInventory";
import ReviewOrder from "./Components/ReviewOrder/ReviewOrder";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/home" element={<Shop></Shop>}></Route>
        <Route path="/order" element={<Order></Order> }></Route>
        <Route path="/reviewOrder" element={<ReviewOrder></ReviewOrder> }></Route>
        <Route path="/inventory" element={<ManageInventory></ManageInventory> }></Route>
      </Routes>
    </div>
  );
}

export default App;
