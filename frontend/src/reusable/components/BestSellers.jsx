import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "@/redux/productSlice";
import { dummyProducts } from "@/assets/assets";

const BestSellers = () => {
  // to update products state
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(dummyProducts));
  }, []);

  const { products } = useSelector((store) => store.products);

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-8">
      <p className="text-3xl md:text-4xl font-bold mb-6 bg-red-50 border border-red-100 w-max px-4 py-2 rounded-xl p-8 shadow-sm">
        🌟Best <span className="text-red-600">Sellers</span>
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6">
        {products
          .filter((product) => product.inStock)
          .slice(0, 5)
          .map((product, index) => (
            <ProductCard key={product._id} product={product} index={index} />
          ))}
      </div>
    </div>
  );
};

export default BestSellers;
