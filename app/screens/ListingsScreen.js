import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "black jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];

const listings2 = [
  {
    ID: "61hm8opm68qm2b9i70om2b9kc5h3gbb2ccr34b9kcgsj4p9kchi64dj3c4",
    Name: "Goodman",
    Place: "Bnos Devorah",
    Address: "360 Oak St, Lakewood, NJ 08701, USA",
    Charge: "200",
    Payment: "200",
    Paid: true,
    Bal: "",
    ToDo: "",
    Ready: "",
    Sent: "",
    Date: "10/17/23",
    Start: "19:00:00",
    End: "20:00:00",
    Phone: "214 433 2172",
    Category: "Bar Mitzvah",
    Refferral: "",
    CreatedDate: "5/2/23",
  },
  {
    ID: "60o62oj16dhj6b9mcpgjib9k6phjab9pcoqjgb9i64qm2cpj69gjgdb26k",
    Name: "Hauer",
    Place: "Gissinger",
    Address: "175 Sunset Rd, Lakewood, NJ 08701",
    Charge: "500",
    Payment: "500",
    Paid: false,
    Bal: "",
    ToDo: "",
    Ready: "",
    Sent: "",
    Date: "6/25/23",
    Start: "18:30:00",
    End: "22:00:00",
    Phone: "732 337 9046",
    Category: "Bar Mitzvah",
    Refferral: "",
    CreatedDate: "6/22/23",

    EtagID: "",
  },
];

// getFormattedTime = function (fourDigitTime){
//   var hours24 = parseInt(fourDigitTime.substring(0,2));
//   var hours = ((hours24 + 11) % 12) + 1;
//   var amPm = hours24 > 11 ? 'pm' : 'am';
//   var minutes = fourDigitTime.substring(2);

//   return hours + ':' + minutes +  ' ' + amPm;
// };

// const formattedStart=listings2.map((listing) => ({...listing, Start: getFormattedTime(listing.Start.replace(/:00/,'').replace(/:/g, ''))}));
// const formattedList=formattedStart.map((listing) => ({...listing, End: getFormattedTime(listing.End.replace(/:00/,'').replace(/:/g, ''))}));

function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={formattedList}
        keyExtractor={(formattedList) => formattedList.ID}
        renderItem={({ item }) => (
          <Card
            name={item.Name}
            place={item.Place}
            address={item.Address}
            phone={item.Phone}
            date={item.Date}
            start={item.Start}
            end={item.End}
            category={item.Category}
            charge={"$" + item.Charge}
            payment2={"$" + item.Payment}
            paid={"$" + item.Paid}
          />
        )}
      />
    </Screen>
  );
}
console.log("payment", charge);

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
