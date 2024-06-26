import { useState } from "react"
import { ScrollView, View, StyleSheet, Text, Button, TextInput } from "react-native"
import { Formik } from 'formik';
import * as Yup from 'yup';
import HeaderComponent from "../../components/common/header.component";
import { useCartContext } from "../../../context/cart.context";
import { useSelector } from "react-redux";



const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required'),
    address: Yup.string()
      .required('Address is required'),
    email: Yup.string()
      .email('Enter a valid email')
      .required('Email is required'),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Phone number is not valid")
      .required('Phone number is required'),
  });



const DeliveryInfo = () => {


  
 return (  
  
    <View style={styles.container}>
    <Formik
      initialValues={{ name: '', address: '', email: '', phone: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        // Handle form submission
        alert(JSON.stringify(values));
        actions.setSubmitting(false);
      }}
    >
      
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View>
          
          <TextInput
            style={styles.input}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
            placeholder="Name"
          />
          {touched.name && errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

          <TextInput
            style={styles.input}
            onChangeText={handleChange('address')}
            onBlur={handleBlur('address')}
            value={values.address}
            placeholder="Address"
          />
          {touched.address && errors.address && <Text style={styles.errorText}>{errors.address}</Text>}

          <TextInput
            style={styles.input}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder="Email"
            keyboardType="email-address"
          />
          {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

          <TextInput
            style={styles.input}
            onChangeText={handleChange('phone')}
            onBlur={handleBlur('phone')}
            value={values.phone}
            placeholder="Phone Number"
            keyboardType="phone-pad"
          />
          {touched.phone && errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}

          
        </View>
      )}
    </Formik>
    
    </View>
 )
}



// const Checkout = () => {
//   const navigation = useNavigation();
//   const proceed = (handleSubmit) => {
//     handleSubmit,
//     navigation.navigate('payment_method')
//   }
//     return (
//         <ScrollView>
//             <View style={{
//                 flex:1,
//                 marginTop:10,
//                 backgroundColor:'gray'
//             }}>
//             <HeaderComponent/>
//             <ProductSumary/>
//             <UserInfo/>
//             </View>
//             <Button style={{
//               marginTop:40
//             }} onPress={proceed} title="proceed to CheckOut" />
//         </ScrollView>
//     )
// }

const styles = StyleSheet.create({
  table: {
    backgroundColor:'white',
    margin:10,
    padding:20,
    height:200,
    marginBottom: 10, // Optional: Add margin to separate from other elements
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

export default DeliveryInfo