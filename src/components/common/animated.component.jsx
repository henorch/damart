import { Animated, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from '@expo/vector-icons'
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import  Icon  from "react-native-vector-icons/MaterialIcons";
import CartComponent from "../../pages/cart/cart.component";
import ProductList from "../ProductList/productList.component";
import SignIn from "../signIn.component";



const CIRCLE_SIZE = 100;


const Circle = ( { onPress, animatedValue }) => {
    const inputRange = [0, 0.001, 0.5, 0.5005, 1]
    const containerBg = animatedValue.interpolate({
        inputRange,
        outputRange:['gold', 'gold', 'gold', '#444', '#444']
    })

    const circleBg = animatedValue.interpolate({
        inputRange,
        outputRange:['#444', '#444', '#444', 'gold', 'gold']
    })
    return(
        <Animated.View style={[StyleSheet.absoluteFillObject, styles.circleContainer, {
            backgroundColor:containerBg
        }]}>
            <Animated.View style={[styles.circle, {
                backgroundColor:circleBg,
                transform:[
                    {
                        perspective: 400
                    },
                    {rotateY: animatedValue.interpolate({
                        inputRange: [0, 0.5, 1],
                        outputRange: ['0deg', '-90deg', '-180deg']
                    }
                    )
                    },
                    {scale: animatedValue.interpolate({
                        inputRange: [0, 0.5, 1],
                        outputRange: [1,8,1]
                    }
                    )
                },
                {translateX: animatedValue.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [0, 0.5 , 0]
                }
                )
            }
                ]
            }]}>
                <TouchableOpacity onPress={onPress}>
                    <View style={[ styles.circle, styles.circleButton]}>
                    <Icon name="arrow-right-alt" color={'white'} size={28}/>
                    </View>
                </TouchableOpacity>
            </Animated.View>
        </Animated.View>
    )
}

export default function AnimatedComponent(){
const animatedValue =  React.useRef(new Animated.Value(0)).current;
const [index, setIndex] = React.useState(0)
const animation = (toValue) => Animated.timing(animatedValue, {
    toValue,
    duration:3000,
    useNativeDriver: false
});
const onPress = () => {
    setIndex((index === 1 ? 0 : 1));
    animation(index === 1 ? 0 : 1).start()
    };

    return (
        <View style={styles.container}>
            <StatusBar style='auto' hidden/>
            <Circle onPress={onPress} animatedValue={animatedValue}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'flex-start',
    },
    circleContainer: {
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
        pading:8,
        paddingBottom:100,
        backgroundColor:'gold'
    },
    circle: {
        backgroundColor:'#444',
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: CIRCLE_SIZE /2
    },
    circleButton: {
        backgroundColor:"transparent",
        alignItems:'center',
        justifyContent:'center'
    }
});