import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons';


const Categories = [ 
    {
        id:1,
        icon: "laptop", 
        name:"Electronics"
    }, 
    {
        id:2,
        icon:"soup-kitchen",
        name:"Grocceries"
    },
    {
        id:3,
        icon:'phone-iphone',
        name:"Gadgets"
    },
    {
        id:4,
        icon:'wine-bar',
        name:"Liquors and Wine"
    },
    {
        id:5,
        icon:'checkroom',
        name:"Clothing & Footwares"
    },
    {
        id:6,
        icon:'chair',
        name:"Interior"
    },
    {
        id:7,
        icon:'shopify',
        name:"cosmestics"
    },
    {
        id:8,
        icon:'kitchen',
        name:"Kitchen and Catering"
    }
]
const CategoryElement = ( { icon, id, categoryname }) => {
    const navigation = useNavigation()
    return (
        <TouchableWithoutFeedback style={{
            backgroundColor:'white',

            height:80,
            margin:2,
            width:80,
            justifyContent:'center',
            alignItems:'center'
        }}
        onPress={() => {
            console.log(id);
            page = `${categoryname}`
            console.log(page.toLowerCase());
            navigation.navigate(page.toLowerCase())
        }}
        key={id}>
               <TouchableWithoutFeedback style={{
          display:'flex',
          flexDirection:'row',
          justifyContent:'center',
          borderRadius:20,
          backgroundColor:'blue',
          padding:10,
          opacity:0.9,
          alignItems:'center'
        }}>    
        <Icon name={icon} color="white" size={25}/>
        </TouchableWithoutFeedback>
            <Text style={{
                textAlign:"center"
            }}>{categoryname}</Text>
        </TouchableWithoutFeedback>
    )
}


const Category = () => {
    return(
        <View>
            <Text style={{
                margin:15,
                fontWeight:'bold'
            }}>All categories</Text>
        <View style={{
            display:'flex',
            flexDirection:'row',
            padding:10,
            flexWrap:'wrap'
        }}
        >
            {
            Categories.map(({ icon, id, name}) => <CategoryElement icon={icon} id={id} categoryname={name}/>)
        }

</View>
        </View>
    )
}

export default Category;