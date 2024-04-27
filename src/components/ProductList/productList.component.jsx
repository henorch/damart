import { useNavigation } from "@react-navigation/native";
import { ImageComponent } from "../common/Image.component";
import { ButtonComponent } from "../common/Button.component";7

//redux functions
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/config/Redux/cartSlice";

const { width, height } = Dimensions.get('screen')

import  { View, 
    Text,  
    FlatList, 
    Pressable, 
    Button, 
    StyleSheet, 
    Dimensions
    } from 'react-native'



const EachProduct = ({productDetail}) => { 
    const { image, name, price } = productDetail
    const dispatch = useDispatch()

    const handleAddedd = () => {
        dispatch(addItem(productDetail))
        console.log(productDetail);
     }
    return (
            <View style={styles.conatiner}>
                <View style={[styles.subcontainer, {
                    width:'40%',
                    backgroundColor:'green',
                }]}>

                    <ImageComponent Imageurl={image} />
                </View>
                <View style={[styles.subcontainer, {
                    flex:1,
                    flexDirection:'column'}]}>
                    <Text style={styles.productname}>{name}</Text>
                    <Text style={styles.productprice}>{price}</Text>
                    <View style={{
                    flex:1,
                    flexDirection:'row'}}>
                    {/* <ButtonComponent icon="favorite"/> */}
                    <ButtonComponent 
                    handlePress={handleAddedd}
                    title="ADD TO CART" icon="shopping-cart" color="green"/>
                </View>
                </View>
                
                </View>
    )
}

const ProductList = ({ categoryField }) => {
 const dispatch = useDispatch()
 const navigation = useNavigation()


 const handleAddedd = () => {
    addToCart(item),
    addItem(item)
 }

 return (
    <FlatList
        numColumns={1}
        data={categoryField}
        keyExtractor={item => item.id}
        renderItem={({item}) => 
        ( 
    <Pressable onPress={() => {navigation.navigate("detailscreen", { productDetail : item })}}>
            <EachProduct productDetail={item}/>
        </Pressable>
           )}/>
        )
    }


const styles = StyleSheet.create({
    conatiner:{
        maxHeight: '10vh',
        width:'100%',
        flex:1,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:5,
        borderRadius:5,
        overflow:'hidden',
        padding:10
    },
    productname:{
        fontSize:18,
        fontStyle:'italic'
    },

    productprice: {
        fontSize:22,
        fontWeight:'bold',
        margin:5
    },
    subcontainer: {
        margin:5,
    }
})

export default ProductList;