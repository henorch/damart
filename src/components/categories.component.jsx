import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";
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
    },
    {
        id:9,
        icon:'kitchen',
        name:"Others"
    },

]
const CategoryElement = ( { icon, id, categoryname }) => {
    const navigation = useNavigation()
    return (
        <Pressable style={styles.elementcontainer}
        onPress={() => {
            console.log(categoryname.toLowerCase());
            navigation.navigate(categoryname.toLowerCase())
            }} key={id}>
               <View style={styles.elementcontent}>    
        <Icon name={icon} color="white" size={25}/>
        </View>
            <Text style={{
                textAlign:"center",
                fontWeight:'bold'
            }}>{categoryname}</Text>
        </Pressable>
    )
}


const Category = () => {
    return(
        <View style={styles.container}>
            <Text style={{
                margin:15,
                fontSize:14,
                fontWeight:'bold'
            }}>ALL CATEGORIES</Text>
        <View style={styles.subcontainer_1}>
            {
            Categories.map(({ icon, id, name}) => <CategoryElement icon={icon} id={id} categoryname={name}/>)
        }

</View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:'white',
        marginVertical:5
    },

    subcontainer_1:{
        display:'flex',
        flexDirection:'row',
        padding:1,
        justifyContent:'center',
        alignItems:'center',
        flexWrap:'wrap'
    },

    elementcontainer: {
        borderWidth:1,
        borderColor:'#ffeeff',
        height:120,
        width:'32%',
        paddingTop:5,
        paddingBottom:5,
        justifyContent:'center',
        alignItems:'center'
    },
    elementcontent: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        borderRadius:20,
        backgroundColor:'blue',
        padding:10,
        opacity:0.9,
        alignItems:'center'
    }
})

export default Category;