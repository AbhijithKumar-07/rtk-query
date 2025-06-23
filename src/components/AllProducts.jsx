import { Fragment } from "react";
import { useGetAllProductsQuery } from "../redux/api"


const AllProducts = () => {
  const { data, isError, isLoading } = useGetAllProductsQuery();
  
  if(isError) {
    return (
      <h1>Oopss!We got an error!!</h1>
    )
  }

  if(isLoading) {
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <div>
      {data?.products?.map((product) => {
        return (
          <Fragment>
            <h1 key={product.id}> {product.title} </h1>
            <p> {product.description} </p>
          </Fragment>
        )
      })}
    </div>
  )
}

export default AllProducts
