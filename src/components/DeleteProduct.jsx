import React, { useState } from "react";
import { useDeleteProductMutation } from "../redux/api";

const DeleteProduct = ({productId}) => {
  const [deleteProduct, { data, isError, isLoading }] = useDeleteProductMutation();
  const [isDeleted, setIsDeleted] = useState(false);
console.log(data)
  if (isError) {
    return <h1>Oopss!We got an error!!</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const handleDeleteProduct = async () => {
    try {

        await deleteProduct(productId);
        
        setIsDeleted(true);
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div>
        {isDeleted ? <h1>{data?.title} successfully deleted</h1> : ""}
        <button onClick={handleDeleteProduct} disabled={isLoading}>Delete Product</button>
    </div>
  );
};

export default DeleteProduct;
