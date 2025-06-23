import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api";


// Boiler Code - No need to remember --> Go to RTK Query documentation
// --------------------------------------------------------
import { setupListeners } from '@reduxjs/toolkit/query'
// --------------------------------------------------------

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath] : productsApi.reducer,
    },

    // Boiler Code - No need to remember --> Go to RTK Query documentation
    // --------------------------------------------------------
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
    // --------------------------------------------------------
})

// Boiler Code - No need to remember --> Go to RTK Query documentation
// --------------------------------------------------------
setupListeners(store.dispatch)
// --------------------------------------------------------