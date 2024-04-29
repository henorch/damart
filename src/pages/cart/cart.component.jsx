import { FlatList, View, Text, Image, Button, Pressable, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useCartContext } from "../../../context/cart.context";
import { useEffect, useState } from "react";
import { ButtonComponent } from "../../components/common/Button.component";
import { removeItem } from "../../utils/config/Redux/cartSlice";


const CartElement = ( { prodItem , idx}) => {
    
    const navigation = useNavigation();
    const dispatch = useDispatch()
    return(
        <View style={{ width: "95%",
        height:140,
        padding:2,
        margin:10,
        backgroundColor:'white',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'space-around'
    }}
    key={prodItem.id}
    >

<Image source={prodItem.image} style={{ width: "40%",
        backgroundColor:'green',
        marginRight:5,
        height:'100%'}}/>
        <View style={{ width: "60%",
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'space-evenly',
        height:'100%'}}
        >
            <Text style={{  fontStyle:'italic', fontSize:23}}>{prodItem.name}</Text>
            <Text style={{ fontWeight:'bold', fontSize:30}}>{prodItem.price}</Text>
            <Text style={{fontSize:20}}>Quantity: {prodItem.quantity}</Text>
            <Button title="remove" 
            onPress={() => {
            dispatch(removeItem(prodItem.id))}}
            style={{
            
            }}/>
        </View>
      
    </View>
        
        
    )
}

const CartComponent = () => {
    const { cartItem, products, calculateTotalPrice, setCartItem} = useCartContext()
    const count = useSelector(state => state.cart.items.length)
    const cartItems =  useSelector(state => state.cart.items)
    const [isDisabled, setIsDisable ] = useState(true)
    
  
    useEffect(() => {
        products.push(...cartItems)
         setCartItem({
            customerName:"Oluwaniyi",
            products,
            status: "PENDING",
        })
    }, [])
    
    console.log(cartItem); // Keep this for later time
    const navigation = useNavigation();
    return(
        
        <>
        <View style={{
            flex:1
        }}>
            <View style={{
                flex:5,
            }}>
{ count == 0 ? <View style={{
            width:'100%', 
            height:'100%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }}>
            <Text style={{ fontSize:50, textAlign:'center'}}>Your Cart is currently empty</Text>
        </View> : 
       
        <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => <CartElement prodItem={item} idx={index}/> }
            /> 
    }
            </View>
            <View style={{
                flex:1,
                borderTopWidth:2
            }}>
                
    <View style={{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row', 
        backgroundColor:'#ffddf',
        width:'100%',
        padding:10
    }}>
        <Text style={{
            fontWeight:'bold',
            fontSize:30,
            textAlign:'right'
        }}>Total Price:</Text>
        <Text style={{
            fontWeight:'bold',
            fontSize:30,
            
        }}>{calculateTotalPrice(cartItems)}</Text>
    </View>
    <View style={{
        alignSelf:'center',
        display:'flex',
    }}>
    {count > 0 &&  <Pressable
    style={styles.button}
    onPress={() => {navigation.navigate('checkout')}}
    ><Text style={{
        color:'white'
    }}>Continue To Checkout</Text></Pressable> }
    </View>
            </View>
        </View>
    </>
    )
}


const styles = StyleSheet.create({
    button: {
        backgroundColor:'blue',
        padding:10,
        width:200,
        alignItems:'center'
    },

    disabledButton: {
        backgroundColor:'gray'
    }
})
export default CartComponent;