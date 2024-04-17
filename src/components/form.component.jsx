const { View, TextInput } = require("react-native")



const FormElement = ({ value, name, placeholder }) => {

    return (
        <View>
            <TextInput 
            style={{
                height:45,
                borderRadius:5,
                padding:5,
                margin:10,
                minWidth:'80%',
                borderWidth:1,
                borderColor:'white'
            }}
                placeholder={placeholder} 
                value={value} 
                name={name}/>
        </View>
    )
}
export default FormElement