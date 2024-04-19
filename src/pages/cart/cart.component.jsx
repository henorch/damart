import { FlatList, View, Text, Image, Button, Pressable } from "react-native"

import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";


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
    }}>

<Image source={prodItem.image} style={{ width: "40%",
        backgroundColor:'green',
        marginRight:5,
        height:'100%'}}/>
        <View style={{ width: "60%",
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'space-evenly',
        height:'100%'}}>
            <Text style={{  fontStyle:'italic', fontSize:23}}>{prodItem.name}</Text>
            <Text style={{ fontWeight:'bold', fontSize:30}}>{prodItem.price}</Text>
            <Text style={{fontSize:20}}>Quantity: {1}</Text>
            <Button title="remove" 
            onPress={() => {removeFromCart(idx)
            dispatch(removeItem(idx))}}
            style={{
            
            }}/>
        </View>
      
    </View>
        
        
    )
}
const CartComponent = () => {
    const count = useSelector(state => state.cart.items.length)
    const cartItems =  useSelector(state => state.cart.items)
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
            
        }}>50,000</Text>
    </View>
    <View style={{
        alignSelf:'center',
        display:'flex',
    }}>
    <Pressable
    style={{
        backgroundColor:'blue',
        padding:10,
        width:200,
        alignItems:'center'
    }}
    onPress={() => navigation.navigate('checkout')}
    ><Text style={{
        color:'white'
    }}>Continue To Checkout</Text></Pressable>
    </View>
            </View>
        </View>
    </>
    )
}

export default CartComponent;