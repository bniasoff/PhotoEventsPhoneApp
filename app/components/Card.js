import { Text, View, StyleSheet, Image, Switch } from "react-native";
import React, { useState, useEffect } from "react";

import AppText from "./AppText";
import colors from "../config/colors";
import DropdownComponent2 from "../components/DropDownComponent";
// import { AppSwitch } from "../components/AppSwitch";
// import { AppText2 } from "../components/AppText2";
import AppSwitch from "./AppSwitch";

//
//
function Card({
  name,
  place,
  address,
  phone,
  date,
  start,
  end,
  category,
  charge,
  payment,
  balance,
  paid,
  todo,
  ready,
  sent,
}) {
  //console.log(paid);

  //const [Paid, setPaid] = useState(false);

  // useEffect(() => {
  //   setPaid(paid);
  //   console.log("paid", paid, name);
  // }, [paid]);

  // const toggleSwitch = () => {
  //   if (Paid) {
  //     setPaid(true);
  //   } else {
  //     setPaid(false);
  //   }
  // };
  // console.log("payment", payment);
  // setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.card}>
      <View style={styles.detailsContainer}>
        <DropdownComponent2 category={category} />

        <View style={styles.InfoContainer1}>
          <AppText style={styles.name}>{name}</AppText>
          <AppText style={styles.phone}>{phone}</AppText>
        </View>

        <AppText style={styles.place}>{place}</AppText>
        <AppText style={styles.address}>{address}</AppText>

        <View style={styles.InfoContainer1}>
          <AppText style={styles.TitleText}>Date:</AppText>
          <AppText style={[styles.eventdate, styles.ValueText]}>{date}</AppText>
          <AppText style={styles.TitleText}>Start:</AppText>
          <AppText style={[styles.eventstart, styles.ValueText]}>
            {start}
          </AppText>
          <AppText style={styles.TitleText}>End:</AppText>
          <AppText style={[styles.eventend, styles.ValueText]}>{end}</AppText>
        </View>
        <View style={styles.InfoContainer2}>
          <AppText style={styles.TitleText}>Price:</AppText>
          <AppText style={[styles.charge, styles.ValueText]}>{charge}</AppText>
          <AppText style={styles.TitleText}>Pay:</AppText>
          <AppText style={[styles.charge, styles.ValueText]}>{payment}</AppText>

          <AppText style={styles.TitleText}>Bal:</AppText>
          <AppText style={[styles.charge, styles.ValueText]}>{balance}</AppText>
        </View>
        <View style={styles.InfoContainer3}>
          {/* <AppSwitch
            val={todo}
            valText={""}
            valTextYes={"Done"}
            valTextNo={"Not Done"}
          ></AppSwitch> */}

          <AppSwitch
            val={paid}
            valText={"Paid"}
            valTextYes={""}
            valTextNo={"Not"}
          ></AppSwitch>

          <AppSwitch
            val={ready}
            valText={"Ready"}
            valTextYes={""}
            valTextNo={"Not"}
          ></AppSwitch>

          <AppSwitch
            val={sent}
            valText={"Sent"}
            valTextYes={""}
            valTextNo={"Not"}
          ></AppSwitch>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    // padding: 2,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },

  TitleText: {
    color: "blue", //"#fc5c65
    fontWeight: "bold",
    fontSize: 14,
    marginRight: 2,
  },
  ValueText: {
    color: "red", //"#fc5c65
    fontWeight: "bold",
    fontSize: 14,
    marginRight: 8,
  },

  InfoContainer1: {
    flexDirection: "row",
  },

  InfoContainer2: {
    flexDirection: "row",
  },
  InfoContainer3: {
    flexDirection: "row",
    marginTop: 6,
    marginLeft: -5,
  },
  name: {
    // marginBottom: 7,
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 10,
  },
  place: {
    color: "green",
    fontWeight: "bold",
    fontSize: 14,
  },

  address: {
    color: "purple",
    fontWeight: "bold",
    fontSize: 14,
  },

  phone: {
    color: "purple",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 20,
  },
  eventdate: {
    color: "black", //"#fc5c65
    fontWeight: "normal",
    fontSize: 14,
    marginRight: 10,
  },
  eventstart: {
    color: colors.black,
    fontWeight: "normal",
    fontSize: 14,
    marginRight: 10,
  },
  eventend: {
    color: colors.black,
    fontWeight: "normal",
    fontSize: 14,
  },
  category: {
    color: colors.black,
    fontWeight: "normal",
    fontSize: 14,
  },
  charge: {
    color: colors.black,
    fontWeight: "normal",
    fontSize: 14,
  },
  payment: {
    color: colors.black,
    fontWeight: "normal",
    fontSize: 14,
  },

  Paid: { flexDirection: "row" },
});

export default Card;
