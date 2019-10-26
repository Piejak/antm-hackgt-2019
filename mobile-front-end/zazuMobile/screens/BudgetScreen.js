import React from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity, TextInput, Text, Image } from 'react-native';
 
var decimalOnly = /^\s*-?[1-9]\d*(\.\d{1,2})?\s*$/;
var wrong = false
export default class BudgetScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {text: '10000'};
      }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
        <Text style={styles.titleText}>
          How Much Do You Want To Invest?
        </Text>
        <Text style={styles.blurbText}>
          Zazu is not liable for any losses you may incur using this application.
        </Text>
        <Image 
            source={require('../assets/images/stonks.png')}
            style={styles.welcomeImage}></Image>
        <View style={{ padding:15 }}>
        <TextInput
            style={styles.textBox}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            keyboardType="numeric"
        />
        </View>
        <Text style={{color: 'red', padding:5, justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
          {wrong ? 'Please enter a valid budget' : ''}
        </Text>
      <TouchableOpacity onPress={() => {
        if (this.state.text !== '') {
          if (decimalOnly.test(this.state.text)) {
            this.props.navigation.navigate("Sector")
            wrong = false
          } else {
            wrong = true
          }
        } else {
          wrong = true
        }
      }}>
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
                Next: Select Your Sectors
              </Text>
            </View>
        </TouchableOpacity>
      </View>
      </ScrollView>
    );
  }
}

BudgetScreen.navigationOptions = {
  title: 'Budget',
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
    padding: 5,
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
  },
  textBox: { 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1}
});
