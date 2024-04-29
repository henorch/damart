import { ScrollView, View, StyleSheet, Text, Button, TextInput } from "react-native"
import { useCartContext } from "../../../context/cart.context";
import { useSelector } from "react-redux";


const CartSumary = () => {
   const { calculateTotalPrice } = useCartContext();
   const cartItems =  useSelector(state => state.cart.items)
   
    return (

      <View style={styles.table}>
      <View style={styles.row}>
        <Text style={[ styles.cell, styles.cell1]}>Total Purchase</Text>
        <Text style={styles.cell}>{calculateTotalPrice(cartItems)}</Text>
        
      </View>
      <View style={styles.row}>
        <Text style={[ styles.cell, styles.cell1]}>Discount</Text>
        <Text style={styles.cell}>{ calculateTotalPrice(cartItems) * 0.02}</Text>

      </View>
      <View style={styles.row}>
        <Text style={[ styles.cell, styles.cell1]}>Delivery Charges</Text>
        <Text style={styles.cell}>2000</Text>
      </View>
      <View style={[styles.row, styles.row1]}>
        <Text style={[ styles.cell, styles.cell1]}>Total Payment</Text>
        <Text style={styles.cell}>{calculateTotalPrice(cartItems) + 2000 - (calculateTotalPrice(cartItems) * 0.02)}</Text>
      </View>
    </View>
     )
}


const styles = StyleSheet.create({
    table: {
      backgroundColor:'white',
      padding:20,
      height:200,
      marginVertical: 5, 
    },
    container: {
      backgroundColor:'white',
      padding:20,
      paddingBottom:40,
      marginVertical:2, 
    },
    row: {
      flexDirection: 'row',
    },
    row1: {
      borderTopWidth:1
      },
    cell1:{
      textAlign:'left'
    },
    cell: {
      flex: 1,
      padding: 10,
      fontWeight:'bold',
      textAlign:'right',
    },
    input:{
      width:'100%',
      padding:10,
      borderWidth:1,
      borderColor:'black',
      margin:5
    },
    header:{
      fontSize: 20,
      fontWeight:'bold',
    }
  });

export default CartSumary