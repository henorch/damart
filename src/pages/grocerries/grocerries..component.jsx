import { ScrollView, View } from "react-native"
import ProductList from '../../components/ProductList/productList.component'

const Grocceries = [
    {
        id:1,
        image:"",
        name:"42'inches LG Smart Tv",
        description:"LG smart Tv webOS, 2021 series, HDcrystal/4K Technology",
        price:"180,000" 
    },
    {
        id:2,
        image:"",
        name:"42'inches LG Smart Tv",
        description:"LG smart Tv webOS, 2021 series, HDcrystal/4K Technology",
        price:"180,000" 
    },
    {
        id:3,
        image:"",
        name:"42'inches LG Smart Tv",
        description:"LG smart Tv webOS, 2021 series, HDcrystal/4K Technology",
        price:"180,000" 
    },
    {
        id:4,
        image:"",
        name:"42'inches LG Smart Tv",
        description:"LG smart Tv webOS, 2021 series, HDcrystal/4K Technology, more view of things is special going to start again",
        price:"180,000" 
    },
    {
        id:5,
        image:"",
        name:"42'inches LG Smart Tv",
        description:"LG smart Tv webOS, 2021 series, HDcrystal/4K Technology",
        price:"180,000" 
    },
    {
        id:6,
        image:"",
        name:"42'inches LG Smart Tv",
        description:"LG smart Tv webOS, 2021 series, HDcrystal/4K Technology",
        price:"180,000" 
    },
    {
        id:7,
        image:"",
        name:"42'inches LG Smart Tv",
        description:"LG smart Tv webOS, 2021 series, HDcrystal/4K Technology",
        price:"180,000" 
    },
    {
        id:8,
        image:"",
        name:"42'inches LG Smart Tv",
        description:"LG smart Tv webOS, 2021 series, HDcrystal/4K Technology",
        price:"180,000" 
    },
    {
        id:9,
        image:"",
        name:"42'inches LG Smart Tv",
        description:"LG smart Tv webOS, 2021 series, HDcrystal/4K Technology, more view of things is special going to start again",
        price:"180,000" 
    },
    {
        id:10,
        image:"",
        name:"42'inches LG Smart Tv",
        description:"LG smart Tv webOS, 2021 series, HDcrystal/4K Technology",
        price:"180,000" 
    },
    {
        id:11,
        image:"",
        name:"42'inches LG Smart Tv",
        description:"LG smart Tv webOS, 2021 series, HDcrystal/4K Technology",
        price:"180,000" 
    },
    {
        id:12,
        image:"",
        name:"42'inches LG Smart Tv",
        description:"LG smart Tv webOS, 2021 series, HDcrystal/4K Technology",
        price:"180,000" 
    },
    {
        id:13,
        image:"",
        name:"42'inches LG Smart Tv",
        description:"LG smart Tv webOS, 2021 series, HDcrystal/4K Technology",
        price:"180,000" 
    },
    {
        id:14,
        image:"",
        name:"42'inches LG Smart Tv",
        description:"LG smart Tv webOS, 2021 series, HDcrystal/4K Technology, more view of things is special going to start again",
        price:"180,000" 
    },
    {
        id:15,
        image:"",
        name:"42'inches LG Smart Tv",
        description:"LG smart Tv webOS, 2021 series, HDcrystal/4K Technology",
        price:"180,000" 
    },
    {
        id:16,
        image:"",
        name:"42'inches LG Smart Tv",
        description:"LG smart Tv webOS, 2021 series, HDcrystal/4K Technology",
        price:"180,000" 
    }
]

const GrocerriesComponents = () => {
    return(
        <View style={{
            flex:1,
            width:'100%',
        }}>
            <ProductList categoryField={Grocceries}/>
        </View> 
    )
}

export default GrocerriesComponents