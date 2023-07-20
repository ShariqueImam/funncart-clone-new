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
        heading={"Workspace"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam delectus hic molestias alias atque, doloremque velit soluta."
        }
      />
      <ProductList />
    </Animator>
  );
};

export default index;
