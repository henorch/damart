import { Image, StyleSheet } from "react-native"
import { SIZES } from "../../CONSTANT/SIZES"


export const ImageComponent = ({size, Imageurl}) => {
    return <Image source={Imageurl} style={{
        height:'100%',
        width:'100%'
    }} 
    alt='No image'/>
}

const styles = StyleSheet.create({
    imagestyle:{
        borderRadius:5,
        maxHeight:200,
        width:200
        }
})