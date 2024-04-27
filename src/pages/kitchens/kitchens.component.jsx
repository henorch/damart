import { ScrollView, View, Image, Button, Text } from "react-native"
import { Categories } from "../../data";
import ProductList from '../../components/ProductList/productList.component'



const kitchens = Categories[0].products;

const KitchensComponents = () => {
    return(
        <View style={{
            flex:1,
            marginVertical:5,
            width:'100%',
        }}>
            <ProductList categoryField={kitchens}/>
        </View> 
    )
}

export default KitchensComponents