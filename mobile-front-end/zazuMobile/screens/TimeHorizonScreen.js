import React from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
 
var radio_props = [
  {label: 'Short (0-4 Years)', value: 0 },
  {label: 'Medium (5-14 Years)', value: 1 },
  {label: 'Long (15+ Years)', value: 2 }
];
 
export default class TimeHorizonScreen extends React.Component{
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={(value) => {this.setState({value:value})}}
          style={{paddingLeft: 10}}
        />
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Risk")}>
            <View
              style={{
                backgroundColor: '#2B4162',
                top:5,
                //flex:0,
                alignItems: 'center',
                alignSelf:'center',
                justifyContent: 'center',
                borderRadius: 15,
                padding: 15,
              }}>
              <Text style={{color: 'white', fontSize: 20, fontWeight: '800'}}>
                Next: Select Risk Tolerance
              </Text>
            </View>
        </TouchableOpacity>
      </View>
      </ScrollView>
    );
  }
}

TimeHorizonScreen.navigationOptions = {
  title: 'Time Horizon',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
