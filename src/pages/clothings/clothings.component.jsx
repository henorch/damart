import { ScrollView, View, Image, Button, Text } from "react-native"

import { Categories } from "../../data";


import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ProductList from '../../components/ProductList/productList.component'
import DescriptionComponent from "../description/description.component";
import StackNavigator from "../../navigation/stackNavigation";
import SearchComponent from "../seacrh/search.component";


const Stack = createNativeStackNavigator();



const clothings = Categories[0].products;

const Clothingsomponents = () => {
    return(
        <View style={{
            flex:1,
            width:'100%',
        }}>
            <ProductList categoryField={clothings}/>
        </View> 
    )
}

export default Clothingsomponents