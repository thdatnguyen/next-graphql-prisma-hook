import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { endpoint, prodEndpoint } from '../config';
// import { LOCAL_STATE_QUERY } from '../components/Cart.component';
function createClient({ headers, initialState }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
    cache: new InMemoryCache().restore(initialState || {}),
    request: (operation) => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },
    // local data
    // clientState: {
    //   resolvers: {
    //     Mutation: {
    //       toggleCart(_, _variables, { cache }) {
    //         // read the cart open value from the cache
    //         const { cartOpen } = cache.readQuery({
    //           query: LOCAL_STATE_QUERY,
    //         });
    //         // write the cart state to the opposite
    //         const data = {
    //           data: { cartOpen: !cartOpen },
    //         };
    //         cache.writeData(data);
    //         return data;
    //       },
    //     },
    //   },
    //   defaults: {
    //     cartOpen: false,
    //   },
    // },
  });
}

export default withApollo(createClient);
