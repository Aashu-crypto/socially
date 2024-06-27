import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import HeaderComponent from "@/components/HeaderComponent";
import Animated from "react-native-reanimated";

type Props = {};

const index = (props: Props) => {
  // const scrollX = useRef(new Animated.value(0)).current
  const btnOptions = ["Popular", "Trending", "Following"];

  return (
    <>
      <HeaderComponent />
      <View>
        <Text>Hey</Text>
      </View>
    </>
  );
};

export default index;

const styles = StyleSheet.create({});
