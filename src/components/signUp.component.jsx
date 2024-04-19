import { View, Text, Button, TouchableOpacity, Alert } from "react-native"
import FormElement from "./form.component"
import { useState } from "react"
import { useUsercontext } from "../../context/User.context"

const SignUp = ({ navigation }) => {

    const { register } = useUsercontext()
   
    const [ formData, setFormData] = useState({
        email:'',
        username:'',
        password:'',
    })

    const passwordRegex =/(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?\/\\|])(?=.*[A-Z])/;
   const emailRegex = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,}$/;

    async function FormValidation({email, username, password}){
        if(!username.trim() || !email.trim() || !password.trim()){
            Alert.alert('Note', 'please ensure non of the field is empty')
            return;
        }
        else if(!emailRegex.test(email)){
            Alert.alert('Error', 'you have enter an incorrect email')
            return
        }
        else if(password.trim() < 8) {
            Alert.alert('Error', 'password cannot be less than 8 characters')
            return;
        }
        else if(!passwordRegex.test(password)){
            Alert.alert('Error', 'password must container one capital letter and at least one special character')
            return
        }else{
            await register(formData)
            console.log(formData);
        }
    }

    const handleOnChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        FormValidation(formData)
        
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
           <Text style={{fontSize:40, color:'white', fontWeight:'bold'}}>Sign Up</Text> 
           <FormElement placeholder="username" name="username"  value={ formData.username } onChange={handleOnChange}  type="text"/>
           <FormElement placeholder="email" name="email"  value={ formData.email  } onChange={handleOnChange}  type="text"/>
           <FormElement placeholder="password" name="password"  value={ formData.password } onChange={handleOnChange}  type="text"/>
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
            }}>I already have an account?</Text>
 <Button onPress={() => navigation.navigate("sign-in")} title="CLICK TO LOGIN"/>
                </View>
    
        </View>
    )
}

export default SignUp