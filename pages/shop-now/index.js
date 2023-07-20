import React from "react";
import ShopNow from "../../components/ShopNow/ShopNow";
import Category from "../../components/HomeClone/Category";
import Trending from "../../components/HomeClone/Trending";
import Animator from "../../components/UI/Animator";
const index = () => {
  return (
    <Animator>
      <ShopNow
        heading={"New Arrivals"}
        description={
          "Thoughtfully designed objects for the workspace, home, and travel."
        }
      />
      <Category />
      <Trending />
    </Animator>
  );
};

export default index;
