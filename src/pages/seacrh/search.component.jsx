import { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput } from "react-native";
import ProductList from "../../components/ProductList/productList.component";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/config/Redux/cartSlice";
import { useFonts, Inter_100Thin } from "@expo-google-fonts/inter";
import { ImageComponent } from "../../components/common/Image.component";
import { ButtonComponent } from "../../components/common/Button.component";



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

    // Function to handle changes in the search input
    const handleSearchInputChange = (text) => {
      setSearchQuery(text);
    };
  
    // Filtered product list based on the search query
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    // Render item function for FlatList
    const renderItem = ({ item }) => (
        <EachProduct productDetail={item}/>
    );
  
    return (
      <View style={styles.container}>
        {/* Search input */}
        <TextInput
          style={[styles.searchInput, { marginTop:50}]}
          placeholder="Search products..."
          value={searchQuery}
          onChangeText={handleSearchInputChange}
        />
        
        {/* FlatList for displaying products */}
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