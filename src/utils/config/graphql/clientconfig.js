import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'


const httpLink = new HttpLink({
  uri: "http://192.168.43.104:4000/graphql",
});



const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export default client;