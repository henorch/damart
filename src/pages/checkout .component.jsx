import { useState } from "react"
import { ScrollView, View, StyleSheet, Text, Button, TextInput } from "react-native"
import { Formik } from 'formik';
import * as Yup from 'yup';
import HeaderComponent from "../components/common/header.component";
import { useCart } from "../../context/CartContext";
import { useNavigation } from "@react-navigation/native";



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



const UserInfo = () => {
  const navigation = useNavigation();
  const proceed = (handleSubmit) => {
    handleSubmit,
    navigation.navigate('payment_method')
  }
 return (  
    <View style={{
        backgroundColor:'white',
        margin:4,
        borderRadius:5
    }}>
    <Text style={{
                fontSize:20,
                padding:10,
                margin:10,
                fontWeight:'bold',
            }}>USER/DELIVERY INFO</Text>
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
        <View style={styles.container}>
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

          <Button onPress={proceed} title="Submit" />
        </View>
      )}
    </Formik>
    </View>
 )
}

const ProductSumary = () => {
  const { cartSum } = useCart()
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
        }}> CART SUMMARY </Text>
        <View style={{
            display:'flex',
            justifyContent:'space-around',
            flexDirection:'row'
        }}>
            <Text style={{
                fontSize:25,
            fontWeight:'bold',
        }}>Total Purchase:</Text>
            <Text style={{
                fontSize:25,
                textAlign:'right'
            }}>{ cartSum}</Text>
        </View>
        <View style={{
            display:'flex',
            justifyContent:'space-around',
            flexDirection:'row'
        }}>
            <Text style={{
            fontWeight:'bold',
            fontSize:25,
        }}>Discount:</Text>
            <Text style={{
                fontSize:25,
                textAlign:'right'
            }}>{ cartSum * 0.02}</Text>
        </View>
        <View style={{
            display:'flex',
            justifyContent:'space-around',
            flexDirection:'row'
        }}>
            <Text style={{
            fontWeight:'bold',
            fontSize:25,
        }}>Delivery cost:</Text>
            <Text style={{
                fontSize:25,
                textAlign:'right'
            }}>2000</Text>
        </View>
        <View style={{
            display:'flex',
            justifyContent:'space-around',
            flexDirection:'row',
            borderTopWidth:1,
            marginVertical:10
        }}>
            <Text style={{
            fontWeight:'bold',
            fontSize:25,
        }}>Total Payable:</Text>
            <Text style={{
                fontSize:25,
                textAlign:'right'
            }}>203900</Text>
        </View>
        </View>
    )
}


const Checkout = () => {
    return (
        <ScrollView>
            <View style={{
                flex:1,
                marginTop:10,
                backgroundColor:'gray'
            }}>
            <HeaderComponent/>
            <ProductSumary/>
            <UserInfo/>
            </View>
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    container: {
      padding: 10,
      margin:20,
      marginTop:-20
    },
    input: {
      height: 40,
      marginBottom: 12,
      borderWidth: 1,
      borderColor: '#cccccc',
      padding: 10,
      borderRadius: 5,
    },
    errorText: {
      color: 'red',
      marginBottom: 8,
    },
  });


export default Checkout