
import { NavigationContainer } from '@react-navigation/native';
import { CartProvider } from './context/CartContext';
import RootNavigation from './src/navigation/rootNavigation';
import AuthComponent from './src/components/auth.component';
import { useState } from 'react';
import {ApolloProvider} from '@apollo/client';
import client from './src/utils/config/clientconfig';
import { Provider } from 'react-redux';
import store from './src/utils/config/Redux/store';






export default function App() {
  

  const [isAuth, setIsAuth] = useState(false)
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <CartProvider>
          <NavigationContainer>
            {isAuth ? <AuthComponent/> : <RootNavigation/>}
          </NavigationContainer>
        </CartProvider>
      </ApolloProvider>
    </Provider>
  );
}
