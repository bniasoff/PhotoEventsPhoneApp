// import React, { useState, useEffect } from "react";
// import { View, Switch, Text, StyleSheet } from "react-native";

// function AppSwitch({ paid }) {
//   //console.log("paid5", paid);

//   const [Paid, setPaid] = useState(false);

//   useEffect(() => {
//     setPaid(paid);
//     console.log("paid", paid);
//   }, [paid]);

//   const toggleSwitch = () => {
//     setPaid((previousState) => !previousState);
//   };
//   return (
//     //const [Paid, setPaid] = useState(false);

//     <View style={styles.container}>
//       <View style={styles.SwitchContainer}>
//         <View style={styles.Switch}>
//           <Switch
//             trackColor={{ false: "#767577", true: "#81b0ff" }}
//             thumbColor={paid ? "green" : "red"}
//             ios_backgroundColor="#3e3e3e"
//             onValueChange={toggleSwitch}
//             value={Paid}
//           />
//         </View>
//         <Text style={styles.Text}> {Paid ? "" : "Not"} Paid</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     // marginTop: 40,
//     // padding: 20,
//     // backgroundColor: "White",
//   },

//   Text: {
//     // fontSize: 20,
//     // color: "blue",
//     // marginLeft: 20,
//   },
//   SwitchContainer: {
//     //marginTop: -10,
//     flexDirection: "row",
//     // marginLeft: 5,
//     // alignItems: "flex-start",
//   },
//   Switch: {
//     marginTop: -14,
//     marginRight: 5,
//   },
// });
// export default AppSwitch;
