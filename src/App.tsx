import { useProducts } from "./hooks/products";
import ErrorMessage from "./components/ErrorMessage";
import Loader from "./components/Loader";
import Product from "./components/Product";
import Modal from "./components/Modal";
import CreateProduct from "./components/CreateProduct";
import { useContext } from "react";
import { IProduct } from "./models";
import { ModalContext } from "./context/ModalContext";

function App() {
  const { isModalOpen, open, close } = useContext(ModalContext);
  const { products, isLoading, error, addProduct } = useProducts();

  const createHandler = (product: IProduct) => {
    close();
    addProduct(product);
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {isLoading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
      {isModalOpen && (
        <Modal title="Create new product" onClose={close}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
      {!isModalOpen && (
        <button
          className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
          onClick={open}
        >
          Add product
        </button>
      )}
    </div>
  );
}

export default App;
