
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/navigation/rootNavigation';
import AuthComponent from './src/components/auth.component';
import { useState } from 'react';
import {ApolloProvider} from '@apollo/client';
import client from './src/utils/config/graphql/clientconfig';
import { Provider } from 'react-redux';
import store from './src/utils/config/Redux/store';
import { USerProvider } from './context/User.context';






export default function App() {
  

  const [isAuth, setIsAuth] = useState(true)
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
           <NavigationContainer>
            {isAuth ? <AuthComponent/> : <RootNavigation/>}
          </NavigationContainer>
        </ApolloProvider>
    </Provider>
  );
}
