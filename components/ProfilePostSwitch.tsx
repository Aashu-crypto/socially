import {
  StyleSheet,
  Text,
  View,
  Animated,
  FlatList,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Colors, width } from "@/constants/globalStyles";

type Props = {};

const ProfilePostSwitch = (props: Props) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    console.log("scroll", scrollX);
  }, [scrollX]);

  const btn = ["Shots", "Collections"];

  return (
    <View style={{ flex: 1 }}>

      <View>
        <ButtonContainer buttons={btn} scrollX={scrollX} />
      </View>

      <ScrollView
        horizontal
        pagingEnabled
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      >
        {btn.map((x) => (
          <View
            style={{
              flex: 1,
              width: width,
              justifyContent: "center",
              alignItems: "center",
            }}
            key={x}
          >
            <Text>Currently there are No {x}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
function ButtonContainer({ buttons, scrollX }: any) {
  const [btnContainerWidth, setWidth] = useState(0);
  const btnWidth = btnContainerWidth / buttons.length;
  const translateX = scrollX.interpolate({
    inputRange: [0, width],
    outputRange: [0, btnWidth],
  });
  const translateXOpposite = scrollX.interpolate({
    inputRange: [0, width],
    outputRange: [0, -btnWidth],
  });
  return (
    <View
      style={styles.btnContainer}
      onLayout={(e) => {
        setWidth(e.nativeEvent.layout.width),
          console.log(e.nativeEvent.layout.width);
      }}
    >
      <Animated.View
        style={[
          styles.animatedBtnContainer,
          { width: btnWidth, transform: [{ translateX }] },
        ]}
      >
        {buttons.map((btn) => (
          <Animated.View
            style={[
              styles.animatedBtn,
              {
                width: btnWidth,
                transform: [{ translateX: translateXOpposite }],
                justifyContent: "center",
                alignItems: "center",
              },
            ]}
          >
            <Text style={styles.btnTextActive}>{btn}</Text>
          </Animated.View>
        ))}
      </Animated.View>
    </View>
  );
}
export default ProfilePostSwitch;

const styles = StyleSheet.create({
  btnContainer: {
    height: 40,
    borderRadius: 5,
    flexDirection: "row",
    width: "100%",
  },
  btnStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  animatedBtnContainer: {
    height: 40,
    borderRadius: 5,
    flexDirection: "row",
    width: "100%",
    backgroundColor: Colors.brandColor,
  },
  animatedBtn: {
    height: 40,
    justifyContent: "center",
  },
  btnTextActive: {
    fontWeight: "500",
  },
});
