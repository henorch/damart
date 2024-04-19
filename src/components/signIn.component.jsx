import { Button, View, Text, TouchableOpacity, Alert } from "react-native"
import FormElement from "./form.component"
import { useState } from "react"
import { useUsercontext } from "../../context/User.context"
const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{;':"\||,.<>/?])+$/;


const SignIn = ({ navigation }) => {
   const { signIn } = useUsercontext()

   async function FormValidation(username, password){
    if(!username.trim() ){
        Alert.alert('Error', 'username cannot be empty')
        return ;
    }else if (!password.trim()) {
        Alert.alert('Error', 'password cannot be empty')
        return;
    }else{
        await signIn(username, password)
    }
}

    const [ formData, setFormData ] = useState({
        username:'',
        password:''
    })

    const handleOnChange = (name, value) => {
          setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        const { username, password } = formData
        event.preventDefault()
        FormValidation(username, password)

    }

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
           <Text style={{fontSize:40, color:'white', fontWeight:'bold'}}>Sign In</Text> 
            <FormElement placeholder="username" name="username"  value={ formData.username } onChange={handleOnChange}  type="text"/>
            <FormElement placeholder="password" name="password" value={formData.password } onChange={handleOnChange} type="securedText"/>

            <TouchableOpacity
            onPress={handleSubmit}
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
            }}>Do not have an account?</Text>
 <Button onPress={() => navigation.navigate("sign-up")} title="CLICK TO REGISTER"/>
                </View>
    
        </View>

    )
}
export default SignIn