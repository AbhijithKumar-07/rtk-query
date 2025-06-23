import React from "react";
import { useUpdateProductMutation } from "../redux/api";

const UpdateProduct = ({productId}) => {
  const [updateProduct, { data, isError, isLoading }] = useUpdateProductMutation();

  if (isError) {
    return <h1>Oopss!We got an error!!</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const handleUpdateProduct = async () => {
    try {
        const updatedProduct = {
            title: "Title Updated 🍽️",
        }

        await updateProduct({
            id: productId,
            updatedProduct: updatedProduct,
        })
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div>
        <h1> {data?.title} </h1>
        <button onClick={handleUpdateProduct} disabled={isLoading}>Update Product</button>
    </div>
  )
};

export default UpdateProduct;
