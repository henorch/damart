import { Image, Pressable, Text, View } from "react-native"
import { ImageComponent } from "../common/Image.component"



const SpecialOfferElement = ({ id, image, price, name, }) => {
    return (
        <View  key={id} 
        style={{padding:5,
            shadowColor:'grey',
            shadowOpacity:0.8,
            backgroundColor:"white",
            flex:1,
            flexDirection:'row', 
            margin:5,
            borderRadius:5,
            alignItems:"center",
            height:150
        }}>
            <ImageComponent Imageurl={image} style={{height:140, 
                    width:120,
                    margin:3,
                    backgroundColor:'green'}}/>
                <View style={{ display:'flex', 
                flexDirection:'column',
                height:'100%',
            justifyContent:'center'}} key={id}>
                <Text style={{fontWeight:'bold'}}>{name}</Text>
                <Text>{price}</Text>
                <Text>Discount offer</Text>
                <Pressable title="ADD TO CART"/>
                </View>
            
        </View>   
    )
}

export default SpecialOfferElement