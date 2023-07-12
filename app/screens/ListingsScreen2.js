import React, { useState } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Text,
} from "react-native";

import Screen from "../components/Screen";
import colors from "../config/colors";
import Card from "../components/Card";

import DropdownComponent from "../components/DropDownComponent";

let initialphotoevents = [
  {
    ID: "61hm8opm68qm2b9i70om2b9kc5h3gbb2ccr34b9kcgsj4p9kchi64dj3c4",
    Name: "Goodman",
    Place: "Bnos Devorah",
    Address: "360 Oak St, Lakewood, NJ 08701, USA",
    Charge: "200",
    Payment: "200",
    Paid: true,
    Balance: "200",
    ToDo: true,
    Ready: false,
    Sent: true,
    Date: "6/25/23",
    Start: "18:30:00",
    End: "22:00:00",
    Phone: "732 337 9046",
    Category: "Bar Mitzvah",
    Refferral: "",
    CreatedDate: "6/22/23",
  },

  {
    ID: "60o62oj16dhj6b9mcpgjib9k6phjab9pcoqjgb9i64qm2cpj69gjgdb26k",
    Name: "Hauer",
    Place: "Gissinger",
    Address: "175 Sunset Rd, Lakewood, NJ 08701",
    Charge: "500",
    Payment: "500",
    Paid: false,
    Balance: "100",
    ToDo: false,
    Ready: true,
    Sent: false,
    Date: "6/25/23",
    Start: "18:30:00",
    End: "22:00:00",
    Phone: "732 337 9046",
    Category: "Bar Mitzvah",
    Refferral: "",
    CreatedDate: "6/22/23",
  },
];

function ListingsScreen2(props) {
  const [photoevents, setPhotoevents] = useState(initialphotoevents);

  const event2 = {
      ID: "c8pmac35ccs66b9o6dj38b9k6opj6bb170sj0bb3coo62p1n6dh68e1o68",
      Name: "Mizrahi",
      Place: "Williams Street Shul",
      Address: "60 William Stree, Lakewood, NJ 08701, USAt",
      Charge: "",
      Payment: "500",
      Paid: false,
      Balance: "",
      ToDo: false,
      Ready: true,
      Sent: false,
      Date: "12/30/23",
      Start: "18:30:00",
      End: "22:00:00",
      Phone: "732 337 9046",
      Category: "Bar Mitzvah",
      Refferral: "",
      CreatedDate: "6/22/23",
    },
    // const Addevent = (event2) => {
    // setPhotoevents((photoevents) => [...photoevents, event2]);
    // console.log("photoevents", photoevents[2]);
    // };

    getFormattedTime = function (fourDigitTime) {
      var hours24 = parseInt(fourDigitTime.substring(0, 2));
      var hours = ((hours24 + 11) % 12) + 1;
      var amPm = hours24 > 11 ? "pm" : "am";
      var minutes = fourDigitTime.substring(2);

      return hours + ":" + minutes + " " + amPm;
    };

  const formattedStart = photoevents.map((listing) => ({
    ...listing,
    Start: getFormattedTime(listing.Start.replace(/:00/, "").replace(/:/g, "")),
  }));
  const formattedList = formattedStart.map((listing) => ({
    ...listing,
    End: getFormattedTime(listing.End.replace(/:00/, "").replace(/:/g, "")),
  }));

  const [selectedId, setSelectedId] = useState();

  onPress = (item) => {
    setSelectedId(item.ID);
    console.log(item.ID);
  };

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={formattedList}
        keyExtractor={(formattedList) => formattedList.ID}
        extraData={selectedId}
        renderItem={({ item }) => (
          <React.Fragment>
            <TouchableOpacity onPress={() => onPress(item)}>
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
                payment={"$" + item.Payment}
                paid={item.Paid}
                balance={"$" + item.Balance}
                todo={item.ToDo}
                ready={item.Ready}
                sent={item.Sent}
              />
            </TouchableOpacity>
          </React.Fragment>
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen2;
