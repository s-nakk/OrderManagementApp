import React from 'react';
import './styles.css';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import CustomersDashboard from "../../features/customers/customersDashboard/CustomersDashboard";

const client = new ApolloClient({
  uri: 'http://localhost:5278/graphql/',
  cache: new InMemoryCache({typePolicies: {}})
});

function App() {
  return (
    <ApolloProvider client={client}>
      <CustomersDashboard/>
    </ApolloProvider>
  );
}

export default App;
