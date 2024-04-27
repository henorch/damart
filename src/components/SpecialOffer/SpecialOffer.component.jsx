import { ScrollView, Text, View } from "react-native"
import SpecialOfferElement from "./specialofferelement.component"
import { gql, useQuery } from '@apollo/client';

const GET_ALL_USERS = gql`
query GET_ALL_PRODUCTS {
  products {
    make
    price
    description
    name
    id
    
  }
}`

const SpecialOffers = [
    {
        id:1,
        image: require('../../ products/40_inche_smasung.png'),
        name:"40'inches Samsung LED Smart Tv",
        description:"40'inches samsung smart tv set, 220 - 240volt 50/60 Hz 130w, well configured with modern apps such as Youtube, Netflix, etc, quality picture with screencast",
        price:"150,000" 
    },
    {
        id:2,
        image:require('../../ products/42_lg.png'),
        name:"42'inches LG Smart Tv",
        description:" 42 inches LG smart Tv webOS, 2021 series, HDcrystal/4K Technology, miracast and wifi connectivity",
        price:"150,000" 
    },
    {
        id:3,
        image:require('../../ products/samsung_46.png'),
        name:"46/48 inche's Samsung Camera TV set",
        description:"46/48 inches Samsung camera tv set, and ethernet connectivity and video recording",
        price:"140,000" 
    },
    {
        id:4,
        image:require('../../ products/spacetech_fan.png'),
        name:"SpaceTek 18' Standing fan",
        description:"18' (460mm) Standing Fan, AC230v 50Hz, 3-132cm high, 60w class T, Quiet and Top Quality motor, High class modern Design",
        price:"20,000" 
    },
    {
        id:5,
        image: require('../../ products/ox_fan.png'),
        name:"OX 18 Plus",
        description:"18' (460mm) Standing Fan, AC230v 50Hz, 3-132cm high, 60w class T, Quiet and Top Quality motor, High class modern Design",
        price:"180,000" 
    }

]




const SpecialOffer = () => {
//   const { loading, error, data } = useQuery(GET_ALL_USERS);
//   if(loading ) return <Text>Is loading p,ease wait</Text>
//   if(error) return <Text>{error.message}</Text>
//   console.log('the data comes from special offers');
//   console.log(data.products);
    return(
        <View 
        style={{
            backgroundColor:"white",
            marginTop:10,
        }}>
            <Text style={{
                fontSize:14,
                fontWeight:'bold',
                padding:10,
            }}>OFFER FOR YOU</Text>
            <ScrollView horizontal={true}
            showsHorizontalScrollIndicator={false}>
                {SpecialOffers.map((offers) => <SpecialOfferElement id={offers.id} image={offers.image} price={offers.price} name={offers.name}/>)}
           </ScrollView>
           </View>   
    )
}
export default SpecialOffer