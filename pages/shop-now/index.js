import React from "react";
import ShopNow from "../../components/ShopNow/ShopNow";
import Category from "../../components/HomeClone/Category";
import Trending from "../../components/HomeClone/Trending";
import Animator from "../../components/UI/Animator";
const index = () => {
  return (
    <Animator>
      <ShopNow
        heading={"Shop Now"}
        description={
          "Shop from our extensive variety of authentic local products"
        }
      />
      <Category />
      <Trending />
    </Animator>
  );
};

export default index;
