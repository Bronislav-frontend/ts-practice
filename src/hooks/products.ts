import { useState, useEffect } from "react";
import { IProduct } from "../models";
import axios, { AxiosError } from "axios";

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const addProduct = (product: IProduct) => {
    setProducts((prev) => [...prev, product]);
  };

  async function fetchProducts() {
    setIsLoading(true);
    try {
      setError("");
      const { data } = await axios.get<IProduct[]>(
        "https://fakestoreapi.com/products/?limit=10"
      );
      setProducts(data);
      setIsLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setIsLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, isLoading, error, addProduct };
};
