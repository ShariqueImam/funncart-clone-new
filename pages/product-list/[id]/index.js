import React from "react";
import ShopNow from "../../../components/ShopNow/ShopNow";
import Nav from "../../../components/Navbar/Nav";
import ProductList from "../../../components/ProductList/ProductList";
import Animator from "../../../components/UI/Animator";
const index = () => {
  return (
    <Animator>
      <Nav />
      <ShopNow
        heading={"Table top"}
        description={"This page contains all the items related to table top"}
      />
      <ProductList />
    </Animator>
  );
};

export default index;
