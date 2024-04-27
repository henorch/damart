import { ScrollView, View, Image, Button, Text } from "react-native"
import { Categories } from "../../data";
import ProductList from '../../components/ProductList/productList.component'



const cosmestics = Categories[0].products;

const CosmeticsComponents = () => {
    return(
        <View style={{
            flex:1,
            marginVertical:5,
            width:'100%',
        }}>
            <ProductList categoryField={cosmestics}/>
        </View> 
    )
}

export default CosmeticsComponents