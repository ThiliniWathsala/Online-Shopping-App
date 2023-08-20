import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000/server/"}),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "product"
        })
    })
})


export const {useGetAllProductsQuery} = productsApi;   // useGetAllProductsQuery is a custom hook automatically created from getAllProducts 