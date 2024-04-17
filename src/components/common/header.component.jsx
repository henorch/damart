import { Text, View } from "react-native"



const HeaderComponent = () => {
    return(
        <View style={{ width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        margin:-5
    }}>
        <Text style={{
            fontSize:35,
            fontWeight:'bold'
            
        }}> DAMART </Text>
        <Text style={{
            fontStyle:'italic'
        }}>Convience shopping with reliability</Text>
        </View>
    )
}

export default HeaderComponent