import { ScrollView, View, Image, Button, Text } from "react-native"

import { Categories } from "../../data";
import ProductList from '../../components/ProductList/productList.component'
import SearchComponent from "../seacrh/search.component";



const gadgets = Categories[0].products;

const GadgetComponents = () => {
    return(
        <View style={{
            flex:1,
            width:'100%',
        }}>
            <ProductList categoryField={gadgets}/>
        </View> 
    )
}

export default GadgetComponents