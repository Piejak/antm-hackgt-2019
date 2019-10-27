// big time todo
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  TextInput
} from 'react-native';
import email from 'react-native-email'

export default class PortfolioScreen extends React.Component {
  constructor(props) {
        super(props);
        global.portfolioGenerated = false;
        this.state = {fadeIn1: new Animated.Value(0), fadeIn2: new Animated.Value(0), text:"you@yourmail.com"};
        var allKeys = Object.keys(global.portfolio["0"])
        var yes = 0
        formatString = ""
        emailFormatString = ""
        allKeys.forEach(function (element) {
            if (global.portfolio["0"][element] > 0.01){
                yes = global.portfolio["0"][element] * 100
                formatString += element + " " + yes.toFixed(0) + "%\n"
                emailFormatString += "     " + element + " " + yes.toFixed(0) + "%\n"
            }
        })
        console.log(formatString)
        this.everything = formatString
        this.emailEverything = emailFormatString
    }
  fadeIn1() {
    this.state.fadeIn1.setValue(0)
    Animated.timing(
      this.state.fadeIn1,
      {
        toValue: 1,
        delay:1000,
        duration: 1000
      }
    ).start(() => {});
  }
  fadeIn2() {
    this.state.fadeIn2.setValue(0)
    Animated.timing(
      this.state.fadeIn2,
      {
        toValue: 1,
        delay:2000,
        duration: 1000
      }
    ).start(() => {});
  }
  handleEmail = (emailAddy) => {
    const to = emailAddy // string or array of email addresses
    email(to, {
        // Optional additional arguments
        subject: "My Zazu Generated Portfolio",
        body: `Hello from Zazu!\n\nYou are getting this email as you have generated a portfolio with our Zazu App (Powered by BlackRock Aladdin)\n\nYour parameters were:\n     Time Horizon: ${global.riskToleranceLabel} \n     Risk Tolerance: ${global.riskToleranceLabel} \n     Budget:  $${global.budgetLabel} \n\nThrough Zazu's Magic, we generated the following Portfolio for you\n\n ${this.emailEverything} \n\nThank you for using Zazu!`
    }).catch(console.error)
}
  render() {
    if (global.portfolioGenerated === false) {
        this.fadeIn1();
        this.fadeIn2();
        global.portfolioGenerated = true;
    }
    return (
      <View colors={['#87CEEEB','#87BCDE']} style={styles.container}>
    
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}> 

          <Animated.View style={{opacity: this.state.fadeIn1}}>
            <Text style={styles.getStartedText}>
              Our Recommended Portfolio
            </Text>
            </Animated.View>
            <Animated.View style={{opacity: this.state.fadeIn2}}>
            <Text style={styles.mainText}>
             {this.everything}
            </Text>
        <View style={{ padding: 15 }}>
        <TextInput
            style={styles.textBox}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
        />
        </View>
          <TouchableOpacity onPress={() => this.handleEmail(this.state.text)}>
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
                Email Portfolio
              </Text>
            </View>
          </TouchableOpacity>
          <Text style={{padding:5}}></Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}>
            <View
              style={{
                backgroundColor: '#CC2936',
                width:200,
                top:5,
                //flex:0,
                alignItems: 'center',
                alignSelf:'center',
                justifyContent: 'center',
                borderRadius: 15,
                padding: 15
              }}>
              <Text style={{color: 'white', fontSize: 20, fontWeight: '800'}}>
                Return to Start
              </Text>
            </View>
          </TouchableOpacity>
          </Animated.View>
        </View>
      </ScrollView>
    </View>
    );
  }
}


PortfolioScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87bcde',
    paddingTop: 20
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    top:180,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 35,
    color: '#ffffff',
    fontWeight: 'bold',
    top: 0, left: 0, bottom: 0, right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  mainText: {
    fontSize: 50,
    color: '#ffffff',
    top: 0, left: 0, bottom: 0, right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  verifyText: {
    fontSize: 30,
    color: '#ffffff',
    padding: 10,
    textAlign: 'right'
  },
  verifyTextTitle: {
    fontSize: 30,
    fontStyle: 'italic',
    color: '#ffffff',
    padding: 10,
  },
  subText: {
    color: '#EBEEEF',
    fontSize:15,
    top: 0, left: 0, bottom: 0, right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  textBox: { 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    backgroundColor: "#FFFFFF"}
});

const subject = 'My Zazu Generated Portfolio'
const body = "Hello from Zazu!\n\nYou are getting this email as you have generated a portfolio with our Zazu App (Powered by BlackRock Aladdin)\n\nYour parameters were:\n\tTime Horizon: " + global.timeHorizonLabel + "\n\tRisk Tolerance: " + global.riskToleranceLabel + "\n\tBudget:  " + '$' + global.budgetLabel + "\n\nThrough Zazu's Magic, we generated the following Portfolio for you\n\n" +  this.emailEverything + "\n\nThank you for using Zazu!"
