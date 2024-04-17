import { useNavigation } from "@react-navigation/native";
import { useCart } from "../../../context/CartContext";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/config/Redux/cartSlice";


const { View, Text, TouchableOpacity, FlatList, Button, Image, Pressable } = require("react-native")






const ProductList = ({ categoryField }) => {
 const navigation = useNavigation()
 const { addToCart } = useCart()
 const dispatch = useDispatch()

 const handleAddedd = () => {
    addToCart(item),
    addItem(item)
    console.log(item);
 }
 return (
    <FlatList
    numColumns={2}
    data={categoryField}
    keyExtractor={item => item.id}
    renderItem={({item}) => 
    (
        
        <TouchableOpacity
            onPress={() => {
                navigation.navigate("detailscreen", { productDetail : item })
            }} 
        style={{
            width:'45%',
            backgroundColor:'white',
            shadowColor:'#000',
            margin:8,
            borderRadius:5,
            }}>
        <Image source={item.image}
        style={{
            width:'100%',
            height:120,
            backgroundColor:'green'
        }}/>
        <View style={{
            padding:10
        }}>
        <Text style={{
            marginBottom:10,
            fontSize:20,
            textAlign:'center',
            fontWeight:'bold',
            color:'green',
        }}>{item.price}</Text>
        <Text style={{
            fontSize:20,
            textAlign:'center',
            fontWeight:'bold',
            margin:5, 
        }}>{item.name}</Text>
        
        <Pressable 
        onPress={handleAddedd}
        style={{
            backgroundColor:'green'
        }} title="ADD TO CART"/>
        </View>
        </TouchableOpacity>
    )}/>

)
}


export default ProductList;