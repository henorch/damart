const { View, TextInput } = require("react-native")



const FormElement = ({ value, name, placeholder, onChange, type }) => {

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
                name={name}
                type={type}
                value={value} 
                onChangeText={(text) => onChange(name, text)}
                placeholder={placeholder} 
                
                />
        </View>
    )
}
export default FormElement