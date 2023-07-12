import React, { useState, useEffect } from "react";
import { View, Switch, Text, StyleSheet } from "react-native";

function AppSwitch({ val, valText, valTextYes, valTextNo }) {
  const [Val, setVal] = useState(false);

  const [sum, setSum] = useState(0);

  useEffect(() => {
    setVal(val);
    console.log(valText, val);
  }, [val]);

  const toggleSwitch = () => {
    setVal((previousState) => !previousState);

    // setSum((previousState) => previousState + 1);
    // console.log("sum", sum);
  };

  return (
    <View style={styles.container}>
      <View style={styles.SwitchContainer}>
        <View style={styles.Switch}>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={Val ? "green" : "red"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={Val}
          />
        </View>
        <Text style={[styles.text, Val ? styles.valTextYes : styles.valTextNo]}>
          {Val ? valTextYes : valTextNo} {valText}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 40,
    // padding: 20,
    // backgroundColor: "White",
  },

  Text: {
    // fontSize: 20,
    // color: "blue",
    // marginLeft: 20,
  },
  valTextYes: { color: "green" },
  valTextNo: { color: "red" },
  SwitchContainer: {
    //marginTop: -10,
    flexDirection: "row",
    // marginLeft: 5,
    // alignItems: "flex-start",
  },
  Switch: {
    marginTop: -14,
    marginRight: -2,
  },
});
export default AppSwitch;
