import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import CartComponent from "../cart/cart.component"
import Checkout from "./delivery .component"
import { cart } from "@expo/vector-icons/MaterialIcons"
import Icon from 'react-native-vector-icons/MaterialIcons';
import DeliveryInfo from "./delivery .component";
import { PaymentMethod } from "./payment.page";
import CartSumary from "./cartsummary.component";



const Tab = createBottomTabNavigator() //This is a page that relate to chart/ chart summary and payment


export const CheckOutComponent = () => {
    return(
        <Tab.Navigator 
        screenOptions={
            
            ({route}) => ({
                headerShown: true,
            tabBarIcon: ({ focused, color, size}) => {
                let iconName;

                if(route.name === 'chartsummary') {
                    iconName = focused ? 'shopping-cart' : 'shopping-cart';
                }else if ( route.name === 'Delivery'){
                    iconName = focused ? 'local-shipping' : 'local-shipping';
                }else {
                    iconName = focused ? 'payment' : 'payment';
                }

                return <Icon name={iconName} size={size} color={color}/>
            },
            tabBarActiveTintColor:'tomato',
            tabBarInactiveTintColor:'gray'
        })}>
            <Tab.Screen name="chartsummary" component={CartSumary} options={{
                headerTitle:'CHART SUMMARY'
            }}/>
            <Tab.Screen name="Delivery" component={DeliveryInfo} options={{
                headerTitle:'DELIVERY INFORMATION'
            }}/>
            <Tab.Screen name="payment" component={PaymentMethod} options={{
                headerTitle:'PAYMENT METHODS AND OPTIONS'
            }}/>
        </Tab.Navigator>
    )
}


