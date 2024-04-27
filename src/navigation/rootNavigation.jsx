import { useState } from 'react';
import AuthComponent from '../components/auth.component';
import { DrawerPanel } from './drawerNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DescriptionComponent from '../pages/description/description.component';
import Checkout from '../pages/checkout .component';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-vector-icons/MaterialCommunityIcons'
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';


const RootStack = createNativeStackNavigator()

const RootNavigation = () => {
    const  count  = useSelector(state => state.cart.items.length)
    const navigation = useNavigation()
    return(
        <RootStack.Navigator > 
    
            <RootStack.Screen name='Drawer' component={DrawerPanel} options={{
                headerShown: false
            }}/>
            <RootStack.Screen name='detailscreen' component={DescriptionComponent}
            //  options={{
            //     headerRight: () => (
            //       <View style={ styles.container }>
                  
               
            //       <Pressable
            //         onPress={() => navigation.navigate('my cart')}
            //         style={[{
            //           backgroundColor:'black',
            //           padding:8
            //         }, styles.icon]}>           
            //           <Icon name="shopping-cart" color='white' size={25}/>
            //           <Text style={{color:'white'}}>{count}</Text>   
            //       </Pressable>
                  
            //       </View>
            //     )
          
            //   }
            // }
            />
            <RootStack.Screen name='checkout' component={Checkout}/>
        </RootStack.Navigator>
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

export default RootNavigation; 