import React from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
 
var radio_props = [
  {label: 'Long (15+ Years)', value: 0 },
  {label: 'Medium (5-14 Years)', value: 1 },
  {label: 'Short (0-4 Years)', value: 2 }
];
 
export default class TimeHorizonScreen extends React.Component{
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
        <Text style={styles.titleText}>
          Select Time Horizon
        </Text>
        <Text style={styles.blurbText}>
          The Time Horizon is how long you plan on keeping your investments before you sell your investments off.
        </Text>
        <Image 
            source={require('../assets/images/time-horizon.jpg')}
            style={styles.welcomeImage}></Image>
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
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#7F7F7F',
    top: 0, left: 0, bottom: 0, right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  blurbText: {
    fontSize: 20,
    color: '#32292F',
    top: 0, left: 0, bottom: 0, right: 0,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  welcomeImage: {
    width: 300,
    height: 220,
    paddingBottom:50,
    resizeMode: 'contain',
    alignSelf: 'center',
  }
});
