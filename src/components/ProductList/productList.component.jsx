import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, TextInput } from "react-native";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/config/Redux/cartSlice";
import { useFonts, Inter_100Thin } from "@expo-google-fonts/inter";
import { ImageComponent } from "../common/Image.component";
import { ButtonComponent } from "../common/Button.component";
import { useNavigation } from "@react-navigation/native";



const EachProduct = ({productDetail}) => { 
    let [fontsLoaded] = useFonts({
        Roboto: Inter_100Thin, 
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
                    <Text style={[styles.productname, {fontFamily:'Roboto'}]}>{name}</Text>
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



const SearchComponent = ({ products }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigation = useNavigation()
    const handleSearchInputChange = (text) => {
      setSearchQuery(text);
    };
  

    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    const renderItem = ({ item }) => (
        <Pressable onPress={() => {navigation.navigate("detailscreen", { productDetail : item })}}>
            <EachProduct productDetail={item}/>
        </Pressable>
    );
  
    return (
      <View style={styles.container}>
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
            onChangeText={handleSearchInputChange}
     />
      
        <FlatList
          data={filteredProducts}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  };
  
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
        fontFamily: 'Roboto',
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

  


export default SearchComponent;