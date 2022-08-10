import { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct;
}

const Product = ({ product }: ProductProps) => {
  const [isDetailsShown, setIsDetailsShown] = useState(false);

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} alt={product.title} className="w-1/6" />
      <p> {product.title}</p>
      <span className="font-bold">{product.price}</span>
      <button
        className="py-2 px-4 border bg-yellow-400"
        onClick={() => setIsDetailsShown(!isDetailsShown)}
      >
        {isDetailsShown ? "Hide details" : "Show details"}
      </button>
      {isDetailsShown && <p>{product.description}</p>}
    </div>
  );
};

export default Product;
