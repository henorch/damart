import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity, Pressable } from 'react-native';
import {  useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomePage from '../pages/home/home.page';
import ElectronicsComponents from '../pages/electronics/electronics.component';
import GrocerriesComponents from '../pages/grocerries/grocerries..component';
import CustomDrawer from '../components/customDrawer.component';
import CartComponent from '../pages/cart/cart.component';
import { useSelector } from 'react-redux';
import Clothingsomponents from '../pages/clothings/clothings.component';
import GadgetComponents from '../pages/gadget/gadgets.component';
import WinesComponents from '../pages/wine/wines.component';
import CosmeticsComponents from '../pages/cosmestics/cosmestics.component';
import InterriorsComponents from '../pages/interriors/interriors.component';
import KitchensComponents from '../pages/kitchens/kitchens.component';


const Drawer = createDrawerNavigator()

export const DrawerPanel = () => {
  const navigation = useNavigation();
  const  count  = useSelector(state => state.cart.items.length)
  
  return(
      <Drawer.Navigator 
          drawerContent={(props) =>  <CustomDrawer {...props}/>}
          screenOptions={{
            headerRight: () => (
              <View style={ styles.container }>
              
            <Pressable style={styles.icon}>    
                <Icon name="favorite" size={25}/>
              </Pressable>

              <Pressable
                onPress={() => navigation.navigate('my cart')}
                style={[{
                  backgroundColor:'black',
                  padding:8
                }, styles.icon]}>           
                  <Icon name="shopping-cart" color='white' size={25}/>
                  <Text style={{color:'white'}}>{count}</Text>   
              </Pressable>
              
              </View>
            )
      
          }
        }
      >
  
        <Drawer.Screen name='Home' component={HomePage}/>
        <Drawer.Screen name='electronics' component={ElectronicsComponents}/>
        <Drawer.Screen name='wine' component={WinesComponents}/>
        <Drawer.Screen name='clothings' component={Clothingsomponents}/>
        <Drawer.Screen name='gadgets' component={GadgetComponents}/>
        <Drawer.Screen name='grocceries' component={GrocerriesComponents}/>
        <Drawer.Screen name='cosmestics' component={CosmeticsComponents}/>
        <Drawer.Screen name='interriors' component={InterriorsComponents}/>
        <Drawer.Screen name='kitchen' component={KitchensComponents}/>
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