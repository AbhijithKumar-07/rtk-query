import React from 'react'
import { useGetProductByIdQuery } from '../redux/api'

const SpecificProduct = () => {
    const { data, isError, isLoading } = useGetProductByIdQuery(5);

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
      <h1> {data?.brand} </h1>
      <h1> {data?.category} </h1>
      <p> {data?.description} </p>
    </div>
  )
}

export default SpecificProduct
