import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "products", // Api Name
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => {
    return {
      getAllProducts: builder.query({
        query: () => {
          return {
            url: "/products", // API endpoint
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          };
        },
      }),

      getProductById: builder.query({
        query: (id) => {
          return {
            url: `/products/${id}`, // API endpoint
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          };
        },
      }),

      addNewProduct: builder.mutation({
        query: (newProduct) => {
          return {
            url: "/products/add",  // API endpoint
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: newProduct,
          };
        },
      }),

      updateProduct: builder.mutation({
        query: ({id, updatedProduct}) => {
          return {
            url: `/products/${id}`, // API endpoint
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: updatedProduct,
          }
        }
      }),

      deleteProduct: builder.mutation({
        query: (id) => {
          return {
            url: `/products/${id}`,  // API endpoint
            method: 'DELETE',
          }
        }
      }),

    };
  },
});

export const { useGetAllProductsQuery, useGetProductByIdQuery, useAddNewProductMutation, useUpdateProductMutation, useDeleteProductMutation } = productsApi; 


// To "Read" the data in the baseUrl --> We use builder.query()
// To "Change" the data in the baseUrl --> We use builder.mutation()

