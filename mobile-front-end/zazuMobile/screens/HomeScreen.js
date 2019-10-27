import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Animated
} from 'react-native';

import { MonoText } from '../components/StyledText';
// import { MainWindowNavigator } from '../navigation/MainWindowNavigator'
import { NavigationEvents } from 'react-navigation';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    global.portfolioGenerated = false;
    this.state = {fadeIn1: new Animated.Value(0),
                  fadeIn2: new Animated.Value(0),
                  fadeIn3: new Animated.Value(0),
                  fadeIn4: new Animated.Value(0)};
  }
  fadeIn1() {
    this.state.fadeIn1.setValue(0)
    Animated.timing(
      this.state.fadeIn1,
      {
        toValue: 1,
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
        delay:1000,
        duration: 1000
      }
    ).start(() => {});
  }
  fadeIn3() {
    this.state.fadeIn3.setValue(0)
    Animated.timing(
      this.state.fadeIn3,
      {
        toValue: 1,
        delay:2000,
        duration: 1000
      }
    ).start(() => {});
  }
  fadeIn4() {
    this.state.fadeIn4.setValue(0)
    Animated.timing(
      this.state.fadeIn4,
      {
        toValue: 1,
        delay:3000,
        duration: 1000
      }
    ).start(() => {});
  }
  render() {
    this.fadeIn1();
    this.fadeIn2();
    this.fadeIn3();
    this.fadeIn4();
    return (
      <View colors={['#87CEEEB','#87BCDE']} style={styles.container}>
        
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}> 


          <Animated.View style={{opacity: this.state.fadeIn1}}>
            <Text style={styles.getStartedText}>
              Welcome
            </Text>
          </Animated.View>

          <Animated.View style={{opacity: this.state.fadeIn2}}>
            <Text style={styles.getStartedText}>
              To
            </Text>
          </Animated.View>

          <Animated.View style={{opacity: this.state.fadeIn3}}>
            <Text style={styles.getStartedText}>
              Zazu
            </Text>
          </Animated.View>
          </View>

          <Animated.View style={{opacity: this.state.fadeIn4}}>
          <Text style={styles.subText}>Your Personal Portfolio Optimizer</Text>
          <Text style={styles.subText}>Powered by BlackRock</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("TimeHorizon")}>
            <View
              style={{
                backgroundColor: '#2B4162',
                width:200,
                top:5,
                //flex:0,
                alignItems: 'center',
                alignSelf:'center',
                justifyContent: 'center',
                borderRadius: 15,
                padding: 15,
              }}>
              <Text style={{color: 'white', fontSize: 20, fontWeight: '800'}}>
                Start
              </Text>
            </View>
          </TouchableOpacity>
          <Image 
            source={require('../assets/images/aladdin.png')}
            style={styles.welcomeImage}></Image>
          </Animated.View>

        </ScrollView>

      </View>
    );
  }
}


HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87bcde',
    paddingTop: 100
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
  getStartedContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 50,
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
    fontSize: 60,
    color: '#ffffff',
    top: 0, left: 0, bottom: 0, right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
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
});
