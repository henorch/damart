import { Button, Text, View } from "react-native"


export const PaymentMethod  = () => {
    return (
        <View style={{
            backgroundColor:'white',
            margin:4,
            borderRadius:5,
            padding:20
        }}>
        <Text style={{
                fontSize:20,
                padding:10,
                margin:10,
                fontWeight:'bold',
            }}> PAYMENT METHODS </Text>
        <View style={{
            display:'flex',
            justifyContent:'space-evenly',
            flexDirection:'row',
            alignItems:'center',
        }}>
            <View>
            <Text style={{
                fontSize:20
            }}>Instant Payment</Text>
            <View style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-around'
            }}>
                <View style={{
                display:'flex',
                flexWrap:'wrap',
                height:150,
                justifyContent:'space-evenly'
                }}>
                
                <Button margin="10"  title="Transfer Payment"/>
                <Button margin="10" title="Credit Card"/>
                <Button margin="10" title="Payment on Delivery"/>
                </View>
                </View>
            </View>  
            <Text>or</Text>  
            <View>
                <Button title="Pay Instalmental"/>
            </View>
           
        </View>
        </View>
    )
}
