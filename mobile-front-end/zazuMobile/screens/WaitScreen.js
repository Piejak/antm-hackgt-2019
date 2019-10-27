import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated
} from 'react-native';
import Axios from 'axios';
import constants from '../constants/Networks.js';

export default class WaitScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {fadeIn1: new Animated.Value(0)};
    this.portfolio = null;
    this.performanceData = null;
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

    componentDidMount() {
        // that's the shit i do like
        Axios.get(`${constants.serverBase}${constants.performanceEndpoint}?positions=${this.posString}`)
            .then((response) => {
              this.performanceData = response.data;
            })
        var riskVal = ''
        var yearLength = 0
        if (global.riskToleranceValue === 0) {
            riskVal = 'low'
        } else {
            riskVal = 'high'
        }

        if (global.timeHorizonValue === 0) {
            yearLength = 6
        } else if (global.timeHorizonValue === 1) {
            yearLength = 4
        } else if (global.timeHorizonValue === 2) {
            yearLength = 2
        }
        Axios.get(`${constants.serverBase}${constants.optimizeEndpoint}?time=${yearLength}&risk=${riskVal}`)
            .then((response) => {
                this.portfolio = response.data
            })
        this.props.navigation.navigate("Risk")
    }
  render() {
    //this.fadeIn1()
    return (
      <View colors={['#87CEEEB','#87BCDE']} style={styles.container}>
    
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}> 
          <Text style={styles.getStartedText}>
            Please Wait
          </Text>
        </View>
        </ScrollView>
      </View>
    );
  }
}


WaitScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87bcde',
    paddingTop: 70
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
});
