import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Colors, width } from "@/constants/globalStyles";
import ProfilePostSwitch from "@/components/ProfilePostSwitch";
type Props = {};

const index = (props: Props) => {
  return (
    <View style={{flex:1}}>
      <ImageBackground
        source={require("@/assets/images/headerBackground.png")}
        style={{
          height: 200,
          width: width,
        }}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ color: "#fff" }}>@aashugandotra</Text>
        </View>
        <View style={{ alignItems: "center", top: 30 }}>
          <Image source={require("@/assets/images/Avatar.png")} />
        </View>
      </ImageBackground>
      <View style={{ alignItems: "center", marginTop: 40, gap: 10 }}>
        <Text style={{ color: Colors.dark, fontSize: 18, fontWeight: "600" }}>
          Aashutosh Gandotra
        </Text>
        <Text
          style={{
            color: Colors.darkGreyColor,
            fontSize: 15,
            letterSpacing: 2,
          }}
        >
          Delhi,India
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: Colors.greyColor,
          height: 40,
          width: "90%",
          alignSelf: "center",
          alignItems: "center",
          marginVertical: 20,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            fontSize: 15,
            letterSpacing: 2,
          }}
        >
          <Text style={{ color: Colors.dark, fontSize: 18, fontWeight: "600" }}>
            220
          </Text>{" "}
          Followers
        </Text>
        <Text
          style={{
            fontSize: 15,
            letterSpacing: 2,
          }}
        >
          <Text style={{ color: Colors.dark, fontSize: 18, fontWeight: "600" }}>
            150
          </Text>{" "}
          Following
        </Text>
      </View>
      <ProfilePostSwitch />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
