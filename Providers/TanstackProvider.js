"use client"
import { QueryClient, QueryClientProvider  } from "@tanstack/react-query";
import { useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const TanstackProvider = ({children}) =>{
    const queryClient = new QueryClient()
    return(
        <QueryClientProvider client = {queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen = {false}/>
        </QueryClientProvider>
    );
}

export default TanstackProvider;