import { Pressable, StyleSheet, Text } from "react-native"
import { COLOR } from "../../CONSTANT/COLORS"
import Icon from 'react-native-vector-icons/MaterialIcons';

const DefaultColor = COLOR.PRIMARY;


 export const ButtonComponent = ({ handlePress, title, color, icon }) => {
    color ? color : DefaultColor;
    return( <Pressable 
            onPress={handlePress}
            style={[styles.buttonDefault, { backgroundColor:color}]}>
        {!icon ? '' : <Icon name={icon} size={35}/>}
        <Text style={{ color:'white', fontSize:18, fontWeight:'bold', textAlign:'center'
        }}>{!title ? '' : title}</Text></Pressable>
)}

const styles =  StyleSheet.create({
    buttonDefault:{
        padding: 3,
        height:50,
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'

    }
})