import { View, Text, Button, TouchableOpacity } from "react-native"
import FormElement from "./form.component"


const SignUp = ({ navigation }) => {
    return(

        <View style={{
            flex:1, 
            width:'100%', 
        }}>
        <View style={{flex:1, 
            backgroundColor:'white',
             display:'flex', 
             flexDirection:'column', 
             justifyContent:'center',
             alignItems:'center'}}>
                <Text style={{ fontSize:40, fontWeight:'bold'}}>DAMART Inc</Text>
                <Text style={{fontSize:18, fontStyle:'italic'}}>Reliable, Affordable and Convenient</Text>
                </View>
        <View style={{flex:1, 
             borderTopLeftRadius:50,
             borderTopRightRadius:50,
             display:'flex', 
             flexDirection:'column', 
             alignItems:'center',
             backgroundColor:'green'}}>
           <Text style={{fontSize:40, color:'white', fontWeight:'bold'}}>Sign Up</Text> 
           <FormElement placeholder="email" value="email" name="email"/>
            <FormElement placeholder="username" value="username" name="username"/>
            <FormElement placeholder="password" value="password" name="password"/>

            <TouchableOpacity
            style={{
                height:40,
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                borderRadius:5,
                minWidth:'80%',
                margin:10,
                backgroundColor:"white"
            }}><Text >Submit</Text></TouchableOpacity>
            <Text style={{
                marginBottom:10
            }}>I already have an account?</Text>
 <Button onPress={() => navigation.navigate("sign-in")} title="CLICK TO LOGIN"/>
                </View>
    
        </View>
    )
}

export default SignUp