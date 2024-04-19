import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SignIn from "./signIn.component"
import SignUp from "./signUp.component"
import { USerProvider } from "../../context/User.context";
const Stack = createNativeStackNavigator();

const AuthComponent = () => {
    return(
        <USerProvider>
         <Stack.Navigator initialRouteName="sign-in" screenOptions={{ headerShown: false}}>
                 <Stack.Screen name="sign-in" component={SignIn}/>
                 <Stack.Screen name="sign-up" component={SignUp}/>
         </Stack.Navigator>
        </USerProvider>
    )
}
export default AuthComponent;