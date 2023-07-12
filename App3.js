// import React, { useState } from "react";
// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import { Feather } from "@expo/vector-icons";
// // import { Switch } from 'react-native-switch';

// import Switch from "./Switch.js";

// const App = () => {
//   const [isEnabled, setIsEnabled] = useState(false);

//   const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

//   return (
//     <View style={styles.container}>
//       <Switch
//         barHeight={30}
//         switchWidth={50}
//         switchHeight={20}
//         value={isEnabled}
//         onValueChange={toggleSwitch}
//         disabled={false}
//         backgroundActive={"#0095ff"}
//         backgroundInactive={"#d1d1d1"}
//         circleActiveColor={"white"}
//         circleInActiveColor={"white"}
//         // renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
//         changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
//         innerCircleStyle={{
//           borderWidth: 0,
//           alignItems: "center",
//           justifyContent: "center",
//         }} // style for inner animated circle for what you (may) be rendering inside the circle
//         outerCircleStyle={{}} // style for outer animated circle
//         renderActiveText={false}
//         renderInActiveText={false}
//         switchLeftPx={3} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
//         switchRightPx={3} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
//         switchWidthMultiplier={2} // multiplied by the `circleSize` prop to calculate total width of the Switch
//         switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
//       />
//       <Text>{"\n"}</Text>
//       <TouchableOpacity
//         onPress={toggleSwitch}
//         style={{
//           backgroundColor: isEnabled ? "#0095ff" : "#d1d1d1",
//           borderRadius: 100,
//           padding: 10,
//         }}
//       >
//         <Feather
//           name={isEnabled ? "check-circle" : "circle"}
//           size={25}
//           color="white"
//         />
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// export default App;
