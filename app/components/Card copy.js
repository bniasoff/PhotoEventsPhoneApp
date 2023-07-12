// import React, { useState } from "react";
// import { View, StyleSheet, Image} from "react-native";

// import AppText from "./AppText";
// import colors from "../config/colors";
// import DropDownPicker from 'react-native-dropdown-picker';






// function Card({name, place,address, phone,date,start, end, category,charge}) {  
  
// const [open, setOpen] = useState(false);
// const [value, setValue] = useState(['italy', 'spain', 'barcelona', 'finland']);
// const [items, setItems] = useState([
//   {label: 'Spain', value: 'spain'},
//   {label: 'Madrid', value: 'madrid', parent: 'spain'},
//   {label: 'Barcelona', value: 'barcelona', parent: 'spain'},

//   {label: 'Italy', value: 'italy'},
//   {label: 'Rome', value: 'rome', parent: 'italy'},

//   {label: 'Finland', value: 'finland'}
// ]);




// // const [open, setOpen] = useState(false);
// // const [value, setValue] = useState(null);


// // const [open, setOpen] = useState(false);
// // const [value, setValue] = useState(['italy', 'spain', 'barcelona', 'finland']);


// // const [items, setItems] = useState([
// //   {label: 'Apple', value: 'apple'},
// //   {label: 'Banana', value: 'banana'}
// // ]);



//   return (

//     <View style={{
//       backgroundColor: '#171717',
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//       paddingHorizontal: 15
//     }}>
//       <DropDownPicker
//         open={open}
//         value={value}
//         items={items}
//         setOpen={setOpen}
//         setValue={setValue}
//         setItems={setItems}

//         theme="DARK"
//         multiple={true}
//         mode="BADGE"
//         badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
//       />
//     </View>


//     // <View style={styles.card}>     
//     //   <View style={styles.detailsContainer}>

 
//     //      <AppText style={styles.name}>{name}</AppText>
//     //     <AppText style={styles.place}>{place}</AppText>
//     //     <AppText style={styles.address}>{address}</AppText>
       
//     //     <View style={styles.timeContainer}>     
//     //       <AppText style={styles.eventdate}>Date: {date}</AppText>
//     //       <AppText style={styles.eventstart}>Start: {start}</AppText>
//     //       <AppText style={styles.eventend}>End: {end}</AppText>
//     //     </View>

//     //     <AppText style={styles.category}>Category: {category}</AppText>
//     //     <AppText style={styles.charge}>Price: {charge}</AppText> 
//     //   </View>
//     // </View>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     borderRadius: 15,
//     backgroundColor: colors.white,
//     marginBottom: 20,
//     overflow: "hidden",
//   },
//   detailsContainer: {
//     padding: 20,
//   },
//   image: {
//     width: "100%",
//     height: 200,
//   },

//   timeContainer: {
//     flexDirection: "row",
//   },
//   name: {
//     marginBottom: 7,
//     color: colors.primary,
//     fontWeight: "normal",
//     fontSize: 16,
//   },
//  place: {
//     color: colors.secondary,
//     fontWeight: "bold",
//     fontSize: 14,
//     },

//   address: {
//     color: "green",
//     fontWeight: "normal",
//     fontSize: 14,
//   },
//   eventdate: {
//     color: colors.black,
//     fontWeight: "normal",
//     fontSize: 14,
//     marginRight: 10,
//   },
//   eventstart: {
//     color: colors.black,
//     fontWeight: "normal",
//     fontSize: 14,
//     marginRight: 10,
//   },
//   eventend: {
//     color: colors.black,
//     fontWeight: "normal",
//     fontSize: 14,
//   },
//   category: {
//     color: colors.black,
//     fontWeight: "normal",
//     fontSize: 14,
//   },
//   charge: {
//     color: colors.black,
//     fontWeight: "normal",
//     fontSize: 14,
//   },
// });

// export default Card;
