import React, {Component} from 'react';
import { View, TextInput, SafeAreaView, Text, Image, ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import Category from "../components/Category";
export default class Explore extends Component {
  render() {
    return (
      <ScrollView scrollEventThrottle={16}> 
        <SafeAreaView style={{ flex: 1 }}>
          <View
            style={{
              backgroundColor: "white",
              height: 80,
              borderBottomWidth: 1,
              borderBottomColor: "#dddddd"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                padding: 10,
                backgroundColor: "white",
                marginHorizontal: 20,
                shadowOffset: { width: 0, height: 0 },
                shadowColor: "black",
                shadowOpacity: 0.2
              }}
            >
              <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Try Maputo"
                placeholderTextColor="grey"
                style={{ flex: 1, fontWeight: "700", backgroundColor: "white" }}
              />
            </View>
          </View>

          <View style={{ flex: 1, backgroundColor: "white", paddingTop: 20 }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "700",
                paddingHorizontal: 20
              }}
            >
              What can we help you find, Kriss?
            </Text>

            <View style={{ height: 130, marginTop: 20 }}>
              <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              > 
              <Category imageUri={require("../img/Home.jpg")} name="Home" />
              <Category
                imageUri={require("../img/Safari.jpg")}
                name="Experiences"
              />
              <Category
                imageUri={require("../img/Food.jpg")}
                name="Resturant"
              />
              </ScrollView>
            </View>

            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: "700" }}>
                Introducing Airbnb Plus
              </Text>
              <Text style={{ fontWeight: "100", marginTop: 10 }}>
                A new selection of homes verified for quality & comfort
              </Text>
            </View>

            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
   <Text style={{ fontSize: 24, fontWeight: "700" }}>
     Introducing Airbnb Plus
   </Text>
   <Text style={{ fontWeight: "100", marginTop: 10 }}>
     A new selection of homes verified for quality & comfort
   </Text>
   <View style={{ width: "100%", height: 200, marginTop: 20 }}>
     <Image
       style={{
         flex: 1,
         height: null,
         width: null,
         resizeMode: "cover",
         borderRadius: 5,
         borderWidth: 1,
         borderColor: "#dddddd"
       }}
       source={require("../img/Home.jpg")}
     />
   </View>
</View>
          </View>
          </SafeAreaView>
      </ScrollView>
    );
  }
}
