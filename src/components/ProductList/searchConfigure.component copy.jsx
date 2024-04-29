import { useNavigation } from "@react-navigation/native";
import { ImageComponent } from "../common/Image.component";
import { ButtonComponent } from "../common/Button.component";

import { useFonts, Inter_100Thin } from "@expo-google-fonts/inter";
//redux functions
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/config/Redux/cartSlice";
import { Categories } from "../../data";
const { width, height } = Dimensions.get('screen')

import  { View, 
    Text,  
    FlatList, 
    Pressable, 
    Button, 
    StyleSheet, 
    Dimensions,
    TextInput
    } from 'react-native'
import { useState } from "react";



const EachProduct = ({productDetail}) => { 
    let [fontsLoaded] = useFonts({
        MyCustomFont: MyCustomFont_Regular,
        Inter:Inter_100Thin, 
    })

    if(!fontsLoaded){
        return <Text>Loading</Text>
    }
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


const electronics = Categories[0].products;
const SearchConfig = ({ categoryField }) => {
 const dispatch = useDispatch()
 const navigation = useNavigation()
const [query, searchQuery] = useState('')

console.log(electronics);
 const handleAddedd = () => {
    addToCart(item),
    addItem(item)
 }

 return (
    <View>
        <View style={{
            backgroundColor:'white',
             marginBottom:10,
             paddingVertical:5,
        }}>
    <TextInput
     style={{
         width:'98%',
         borderRadius:50,
         backgroundColor:'#fffddd',
         padding:5,
         marginTop:0,
     }}
     clearButtonMode="always"
     placeholder=" product search..."
     autoCapitalize="none"
     autoCorrect={false}
     value={searchQuery}
     onChangeText={(query) => handleSearch(query)}
     />
     </View>
 
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
              </View>
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
        fontStyle:'italic',
        fontFamily: 'Inter_100Thin',
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

export default SearchConfig;