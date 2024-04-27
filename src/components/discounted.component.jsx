import { Image, ScrollView, Text, View } from "react-native";
import { Categories } from "../data";


const DiscountOffer = () => {
   
    return (
        <View style={{
            marginTop:5,
            backgroundColor:'white',
        }}>
            <Text style={{
                fontSize:14,
                fontWeight:'bold',
                padding:10,
            }}>TODAY'S DEAL</Text>
            <ScrollView horizontal={true}>
            { Categories[0].products.map(({ image }) => 
            <View style={{padding:5,
                shadowColor:'grey',
                shadowOpacity:0.8,
                backgroundColor:"white",
                flex:1,
                margin:5,
                borderRadius:5,
                alignItems:"center",
                height:150}}>
                <Image source={image} style={{height:140, 
                width:200,
                backgroundColor:'green'}}/>
                </View>
            )}
            </ScrollView>
            </View>
    )
}

export default DiscountOffer;