import { ScrollView, View, Image, Button, Text } from "react-native"
import { Categories } from "../../data";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ProductList from '../../components/ProductList/productList.component'
import SearchComponent from "../seacrh/search.component";



const interriors = Categories[0].products;

const InterriorsComponents = () => {
    return(
        <View style={{
            flex:1,
            width:'100%',
        }}>
            <SearchComponent/>
            <ProductList products={interriors}/>
        </View> 
    )
}

export default InterriorsComponents