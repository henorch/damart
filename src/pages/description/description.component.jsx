import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { addItem} from "../../utils/config/Redux/cartSlice";



const DescriptionComponent = ({ route }) => {
    const { productDetail } = route.params
    const dispatch = useDispatch()

    const handleAddedd = () => {
        dispatch(addItem(productDetail))
        console.log(productDetail);
     }

    return (
        <View style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'white'
        }}>
            {/* image will be here  */}
            <Image source={productDetail.image} style={{
                width:'96%',
                backgroundColor:'green',
                height:'54%',
                margin:5
            }}/> 
        <View style={{flex:1, minheight:'40%', flexDirection:'row'}}>
            <View style={{flex:1}}>

            <View style={{
                transform: 'rotate(-90deg)',
                flex:1,
                margin:-50,
                marginTop:60,
                justifyContent:'center',
                paddingLeft:20,
                alignItems:'center'
            }}>
                <Text style={{
                fontSize:25,
                textAlign:'left',
                fontWeight:'bold',
            }}>SAMSUNG</Text>
            </View>
            </View>

            <View style={{flex:4,
                height:'100%',
                display:'flex',
                flexDirection:"row",
                backgroundColor:'white'
            }}>
            
            <View style={{
                backgroundColor:'white',
                display:'flex'
            }}>
            <View style={{
                backgroundColor:'white',
                margin:2,
                
            }}><Text style={{
                fontSize:25,
                textAlign:'right',
                padding:10,
            }}>{productDetail.name}</Text></View>

             <View style={{
                backgroundColor:'white',
                margin:2,
                width:'100%',
            }}><Text style={{
                fontSize:35,
                textAlign:'right',
                padding:10,
                fontWeight:'bold',
            }}>{ productDetail.price }</Text></View>

            <View style={{
                backgroundColor:'white',
                margin:2,
                width:'100%'
            }}><Text style={{
                fontSize:18,
                textAlign:'justify',
                padding:10,
            }}>{productDetail.description}</Text></View>

            </View>
            </View>
        </View>
        <View style={{
                backgroundColor:'white',
                display:'flex',
                backgroundColor:'purple',
                width:'90%'
            }}>
        <Button 
        onPress={handleAddedd}
        width='90%' title="Add To cart"/>
        </View>
        </View>
    )
}


export default DescriptionComponent