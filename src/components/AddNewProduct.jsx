import React from "react";
import { useAddNewProductMutation } from "../redux/api";

const AddNewProduct = () => {
  const [addNewProduct, { data, isError, isLoading }] = useAddNewProductMutation();

  if (isError) {
    return <h1>Oopss!We got an error!!</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const handleAddProduct = async () => {
    try {
      const newProduct = {
        id: 1,
        title: "Amazing T-Shirt",
        description:
          "This is one of the best and amazing t-shirt in the market",
      };

      await addNewProduct(newProduct);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
        <h1> {data?.id} </h1>
        <h1> {data?.title} </h1>
        <h1> {data?.description} </h1>

      <button onClick={handleAddProduct} disabled={isLoading}>
        Add New Product
      </button>
    </div>
  );
};

export default AddNewProduct;
