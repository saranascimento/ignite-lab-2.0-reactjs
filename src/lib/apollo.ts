import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl8gjyxp54her01upayku86d8/master",
  cache: new InMemoryCache(),
});
