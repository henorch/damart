import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer"
import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
    StyleSheet,
    Switch,
    TextInput,
  } from "react-native";


import Ionicons from "react-native-vector-icons/Ionicons";
import HeaderComponent from "./common/header.component";
import { useState } from "react";

const CustomDrawer = (props) => {

 
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <HeaderComponent/>
                <DrawerItemList {...props}/>
                
            </DrawerContentScrollView>
            <View
        style={{
          borderTopWidth: 1,
          borderTopColor: "#ccc",
          // backgroundColor: colors.cardbackground,
        }}
      >
        <Text style={styles.preferences}>Preferences</Text>
        <View style={styles.switchTextContainer}>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor="#f4f3f4"
            style={{ transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }] }}
          />
          <Text
            style={{
              fontSize: 15,
            }}
          >
            Dark Theme
          </Text>
        </View>
      </View>
      <View style={{ padding: 10, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 5 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 15,

                marginLeft: 5,
              }}
            >
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingVertical: 5 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,

                marginLeft: 5,
              }}
            >
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>

        </View>
    )
}
export default CustomDrawer;

const styles = StyleSheet.create({
   
    switchTextContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginLeft: 7,
      paddingVertical: 2,
    },
    preferences: {
      fontSize: 16,
      color: "#ccc",
      paddingTop: 5,
      fontWeight: "500",
      paddingLeft: 20,
    },
    switchText: {
      fontSize: 17,
      color: "",
      paddingTop: 10,
      fontWeight: "bold",
    },
  });
  