// import React, { useState } from "react";
// import { View, Switch, Text } from "react-native";
// import styles from "./Styles";
// // import { StyleSheet } from "react-native";

// export default function App() {
//   const [Paid, setPaid] = useState(false);
//   const toggleSwitch = () => {
//     setPaid((previousState) => !previousState);
//   };
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}> {Paid ? "" : "Not"} Paid</Text>

//       <View style={styles.SwitchContainer}>
//         <Switch
//           trackColor={{ false: "#767577", true: "#81b0ff" }}
//           thumbColor={Paid ? "green" : "red"}
//           ios_backgroundColor="#3e3e3e"
//           onValueChange={toggleSwitch}
//           value={Paid}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // marginTop: StatusBar.currentHeight || 0,
//   },
//   //   item: {
//   //     padding: 20,
//   //     marginVertical: 8,
//   //     marginHorizontal: 16,
//   //   },
//   //   title: {
//   //     fontSize: 32,
//   //   },
// });

// export default App;

import ListingsScreen2 from "./app/screens/ListingsScreen2";
import DropdownScreen from "./app/components/DropDownComponent";

export default function App() {
  return <ListingsScreen2 />;
}

// import React, { useState } from "react";
// import {
//   FlatList,
//   SafeAreaView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
// } from "react-native";

// const DATA = [
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//     title: "First Item",
//   },
//   {
//     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
//     title: "Second Item",
//   },
//   {
//     id: "58694a0f-3da1-471f-bd96-145571e29d72",
//     title: "Third Item",
//   },
// ];

// const Item = ({ item, onPress, backgroundColor, textColor }) => (
//   <TouchableOpacity
//     onPress={onPress}
//     style={[styles.item, { backgroundColor }]}
//   >
//     <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
//   </TouchableOpacity>
// );

// const App = () => {
//   const [selectedId, setSelectedId] = useState();

//   const renderItem = ({ item }) => {
//     const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
//     const color = item.id === selectedId ? "white" : "black";

//     return (
//       <Item
//         item={item}
//         onPress={() => setSelectedId(item.id)}
//         backgroundColor={backgroundColor}
//         textColor={color}
//       />
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         extraData={selectedId}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });

// export default App;
