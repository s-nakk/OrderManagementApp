import React from 'react';
import './styles.css';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import CustomersDashboard from "../../features/customers/customersDashboard/CustomersDashboard";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import HomePage from "../../features/home/HomePage";
import OrdersDashboard from "../../features/orders/ordersDashboard/OrdersDashboard";

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_SCHEMA_URL,
  cache: new InMemoryCache({typePolicies: {}})
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path={"customers"} element={<CustomersDashboard/>}/>
            <Route path={"orders"} element={<OrdersDashboard/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
