// eslint-disable-next-line no-unused-vars
import React from "react";

import cat from "../../assets/Images/test/categorys/51RWBcopOGL._SX300_SY300_QL70_FMwebp_.webp";

const CategoryCard = () => {
  return (
       <div>
              <div className="">
     <img className="rounded-lg h-56 mb-4" src={cat} alt="" />
          <h3 className="text-black font-semibold">Mate</h3>
      </div>

      <div className="items-center">
        <img className="rounded-lg h-56 mb-4" src={cat} alt="" />
          <h3 className="text-black font-semibold">Mate</h3>
      </div>

      <div className="items-center">
        <img className="rounded-lg h-56 mb-4" src={cat} alt="" />
          <h3 className="text-black font-semibold">Mate</h3>
      </div>

      <div className="items-center">
        <img className="rounded-lg h-56 mb-4" src={cat} alt="" />
          <h3 className="text-black font-semibold">Mate</h3>
      </div>


      <div className="items-center">
        <img className="rounded-lg h-56 mb-4" src={cat} alt="" />
          <h3 className="text-black font-semibold">Mate</h3>
      </div>
       </div>
  );
};

export default CategoryCard;
