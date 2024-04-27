import { ScrollView, View, Image, Button, Text } from "react-native"

import { Categories } from "../../data";


import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ProductList from '../../components/ProductList/productList.component'
import DescriptionComponent from "../description/description.component";
import StackNavigator from "../../navigation/stackNavigation";


const Stack = createNativeStackNavigator();



const electronics = Categories[0].products;

const ElectronicsComponents = () => {
    return(
        <View style={{
            flex:1,
            marginVertical:5,
            width:'100%',
        }}>
            <ProductList categoryField={electronics}/>
        </View> 
    )
}

export default ElectronicsComponents