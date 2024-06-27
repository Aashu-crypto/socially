import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/globalStyles";
type Props = {};

const HeaderComponent = (props: Props) => {
  return (
    <SafeAreaView style={{ marginTop: 20, alignItems: "center" }}>
      <Pressable
        style={{
          flexDirection: "row",
          padding: 8,
          alignItems: "center",
          backgroundColor: Colors.greyColor,
          width: "90%",
          borderRadius: 20,
          margin: 10,
        }}
      >
        <EvilIcons name="search" size={24} color={Colors.brandColor} />
        <Text style={{ color: Colors.light.text }}>Search</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({});
