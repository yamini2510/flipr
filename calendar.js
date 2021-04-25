import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";

export default class calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      date: new Date()
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : "";
    return (
      <View style={styles.container}>
          <View>
        <Text style={styles.title}>Matches Date</Text>
      </View>
        <CalendarPicker
          date={this.state.date}
          mode="date"
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate={this.state.date}
          maxDate="2021-05-05"
          onDateChange={this.onDateChange}
          selectedDayColor="#2d4b66"
          selectedDayTextColor="#000000"
          todayBackgroundColor="#4E5A65"
          previousTitle="<"
          previousTitleStyle={{ color: "#000000",marginLeft:15,fontSize: 23 }}
          nextTitle=">"
          nextTitleStyle={{ color: "#000000",marginRight:15 ,fontSize: 23}}
        />

        <View>
          <Text>{console.log({ startDate })}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#708090",
    alignItems:'center'

   
  },
  title: {
    marginTop:15,
    color: "black",
    fontSize: 25,
  },
});
