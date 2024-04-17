import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import {  useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomePage from '../pages/home/home.page';
import ElectronicsComponents from '../pages/electronics/electronics.component';
import GrocerriesComponents from '../pages/grocerries/grocerries..component';
import { useCart } from '../../context/CartContext';
import CustomDrawer from '../components/customDrawer.component';
import SignUp from '../components/signUp.component'; // we remove this later
import CartComponent from '../pages/cart/cart.component';


const Drawer = createDrawerNavigator()

export const DrawerPanel = () => {
  
  
  const navigation = useNavigation();
  const { count } = useCart()
  return(
      <Drawer.Navigator 
      drawerContent={(props) =>  <CustomDrawer {...props}/>}
      screenOptions={{
        headerRight: () => (
          <View style={ styles.container }>
        <TouchableWithoutFeedback style={styles.icon}>    
          <Icon name="search" size={25}/>
          </TouchableWithoutFeedback>
          <TouchableOpacity 
          onPress={() => navigation.navigate('my cart')}
          style={[{
            backgroundColor:'black',
            padding:8
          }, styles.icon]}>           
            <Icon name="shopping-cart" color='white' size={25}/>
            <Text style={{color:'white'}}>{count}</Text>   
          </TouchableOpacity>
  
          </View>
        )
      }}>
  
        <Drawer.Screen name='Home' component={HomePage}/>
        <Drawer.Screen name='electronics' component={ElectronicsComponents}/>
        <Drawer.Screen name='wine' component={GrocerriesComponents}/>
        <Drawer.Screen name='clothings' component={SignUp}/>
        <Drawer.Screen name='gadgets' component={SignUp}/>
        <Drawer.Screen name='grocceries' component={SignUp}/>
        <Drawer.Screen name='cosmestics' component={SignUp}/>
        <Drawer.Screen name='interriors' component={SignUp}/>
        <Drawer.Screen name='kitchen' component={SignUp}/>
  
        <Drawer.Screen name='my cart' component={CartComponent}/>
      </Drawer.Navigator>
    )
  }
  
  const styles = StyleSheet.create({
    container:{
            width:90,
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            marginRight:10
    },
    icon: {
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            borderRadius:20,
            alignItems:'center'
    }
  })