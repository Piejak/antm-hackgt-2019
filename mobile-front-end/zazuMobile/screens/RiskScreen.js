import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
 
var radio_props = [
  {label: 'Small (ETFS + Bonds)', value: 0 },
  {label: 'Medium (ETS & Stocks)', value: 1 },
  {label: 'Long (Stocks)', value: 2 }
];
 
export default class RiskScreen extends React.Component{
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
        <Text style={styles.titleText}>
          Select Risk Tolerance
        </Text>
        <Text style={styles.blurbText}>
          Risk Tolerance is your ability to take on risk. Usually higher risk tolerances results in higher long term gain, but a higher risk in losing money in the short term.
        </Text>
        <Image 
            source={require('../assets/images/tradeoff.jpg')}
            style={styles.welcomeImage}></Image>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={(value) => {this.setState({value:value})}}
          style={{paddingLeft: 10}}
        />
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Budget")}>
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
                Next: Determine Your Budget
              </Text>
            </View>
        </TouchableOpacity>
      </View>
      </ScrollView>
    );
  }
}

RiskScreen.navigationOptions = {
  title: 'Risk Tolerance',
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
