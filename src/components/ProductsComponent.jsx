import { useState, useEffect } from "react";
import PostService from "../services/PostServices";
import CardComponent from "./CardComponent";

function ProductsComponent() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    PostService.getAllProducts()
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-col justify-center items-start gap-5 w-[80%] mx-auto">
      <h2 className="text-slate-900 dark:text-slate-200">All Products</h2>
      <div className="flex flex-wrap justify-center items-center gap-[20px] my-[50px]">
        {products.map((el, i) => {
          return <CardComponent item={el} key={i} />;
        })}
      </div>
    </div>
  );
}

export default ProductsComponent;
