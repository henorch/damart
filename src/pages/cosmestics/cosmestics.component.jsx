import { ScrollView, View, Image, Button, Text } from "react-native"
import { Categories } from "../../data";
import ProductList from '../../components/ProductList/productList.component'
import SearchComponent from "../seacrh/search.component";



const cosmestics = Categories[0].products;

const CosmeticsComponents = () => {
    return(
        <View style={{
            flex:1,
            width:'100%',
        }}>
            <ProductList categoryField={cosmestics}/>
        </View> 
    )
}

export default CosmeticsComponents