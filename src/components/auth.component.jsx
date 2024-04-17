import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SignIn from "./signIn.component"
import SignUp from "./signUp.component"
const Stack = createNativeStackNavigator();

const AuthComponent = () => {
    return(
    <Stack.Navigator initialRouteName="sign-in" screenOptions={{ headerShown: false}}>
            <Stack.Screen name="sign-in" component={SignIn}/>
            <Stack.Screen name="sign-up" component={SignUp}/>
        </Stack.Navigator>
    )
}
export default AuthComponent;