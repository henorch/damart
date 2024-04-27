import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ProductList from '../../src/components/ProductList/productList.component'
import DescriptionComponent from "../../src/pages/description/description.component";
import Checkout from "../pages/checkout .component";
import { PaymentMethod } from "../pages/payment.page";
const Stack = createNativeStackNavigator();

const StackNavigator = ({ categoryname }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="detailscreen" component={DescriptionComponent}/>
            <Stack.Screen name='checkout' component={Checkout}/>
            <Stack.Screen name='payment_method' component={PaymentMethod}/>
        </Stack.Navigator>
    )
}

export default StackNavigator;