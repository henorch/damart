import { View, Text, Button, TextInput, TouchableOpacity, ScrollView, Image, FlatList } from "react-native"
import FormElement from "../../components/form.component"
import SignUp from "../../components/signUp.component"
import AuthComponent from "../../components/auth.component"
import SpecialOffer from "../../components/SpecialOffer/SpecialOffer.component"
import Category from "../../components/categories.component"
import DiscountOffer from "../../components/discounted.component"
import Slider from "@react-native-community/slider"
import Carousel from "../../components/common/Carousel.component"


const homeimages = [ 
    {
        id:1,
        src:require('../../mainImages/main1.webp')
    },
    {
        id:2,
        src:require('../../mainImages/main2.webp')
    },
    {
        id:3, 
        src:require('../../mainImages/main3.webp')
    }
]


const HomeImages = () => {
    return(
        <FlatList
        data={homeimages}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) =>
        <View style={{padding:10,
            shadowColor:'grey',
            backgroundColor:"white",
            shadowOpacity:0.8,
            flex:1,
            alignItems:"center",
            margin:5,
            borderRadius:50,
            width:50,
            height:50}}>
            
            <Image source={item.src}
             style={{height:'100%',
            borderRadius:50,
             width:'100%'}}/>
      
            </View>  }/>
    )
}


const HomePage = () => {
    return (
        <ScrollView>
            <Carousel/>
         <HomeImages/>
        <View style={{
            backgroundColor:"#ffdffd"
        }}>
        
        <DiscountOffer/>
         <Category/>
      
         <SpecialOffer/>
        </View>
        </ScrollView>
    )
}

export default HomePage