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
  Animated
} from 'react-native';
import { LineChart, YAxis, Grid } from 'react-native-svg-charts'

export default class PerformanceScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {fadeIn1: new Animated.Value(0), date:null, startingCapital:global.budgetFloat};
    this.performance = [];
    this.labels = [];
    this.data = global.performanceData;
    this.months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]
    this.config = {
        line: {
          visible: true,
          strokeWidth: 1,
          strokeColor: "#54a0ff"
        },
        area: {
          visible: false
        },
        tooltip: {
          visible: true,
          labelFontSize: 10
        },
        grid: {
          stepSize: 10000
        },
        yAxis: {
          labelColor: "#54a0ff"
        },
        insetY: 10,
        insetX: 10
      };




  }
  composeChart() {
    console.log(this.state.date);
    let basePerformance = null;
      let numPoints = this.data.resultMap.PORTFOLIOS[0].portfolios[0].returns.performanceChart.length;
      let pointNum = 0;
      this.data.resultMap.PORTFOLIOS[0].portfolios[0].returns.performanceChart.forEach(h => {
        let d = new Date(h[0]);
        if (this.state.date == null || this.state.date == 'Invalid Date') {
          if (numPoints > 1000) {
            if (pointNum % 30 == 0) {
              this.labels.push(`${this.months[d.getMonth()]} ${d.getYear() + 1900}`);
              this.performance.push(Math.round(h[1] * this.state.startingCapital * 100) / 100);
            }
          } else {
            this.labels.push(`${this.months[d.getMonth()]} ${d.getYear() + 1900}`);
            this.performance.push(Math.round(h[1] * this.state.startingCapital * 100) / 100);
          }
        } else if (d >= this.state.date) {
          if (basePerformance == null) {
            basePerformance = h[1];
          }
          if (numPoints > 1000) {
            if (pointNum % 30 == 0) {
              this.labels.push(`${this.months[d.getMonth()]} ${d.getYear() + 1900}`);
              this.performance.push(Math.round(h[1] / basePerformance * this.state.startingCapital * 100) / 100);
            }
          } else {
            this.labels.push(`${this.months[d.getMonth()]} ${d.getYear() + 1900}`);
            this.performance.push(Math.round(h[1] / basePerformance * this.state.startingCapital * 100) / 100);
          }
        }
        pointNum++;
      });
      global.labels = this.labels
      global.performance = this.performance

      // const ctx = document.getElementById('performanceChart');
      // this.createChart(ctx);
  }
  render() {
    if (global.portfolioGenerated === false) {
        global.portfolioGenerated = true;
    }
    const contentInset = { top: 50000, bottom: 0 }
    this.composeChart()
    console.log(global.performance)
    return (
      <View colors={['#87CEEEB','#87BCDE']} style={styles.container}>
    
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}> 

            <Text style={styles.getStartedText}>
              Past Portfolio Performance
            </Text>
            <View style={{ height: 200, flexDirection: 'row' }}>
                <LineChart
                    style={{ flex: 1, marginLeft: 16 }}
                    data={global.performance}
                    svg={{ stroke: 'rgb(134, 65, 244)' }}
                    contentInset={contentInset}
                >
                    <Grid />
                </LineChart>
            </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Portfolio")}>
            <View
              style={{
                backgroundColor: '#CC2936',
                top:5,
                //flex:0,
                alignItems: 'center',
                alignSelf:'center',
                justifyContent: 'center',
                borderRadius: 15,
                padding: 15,
              }}>
              <Text style={{color: 'white', fontSize: 20, fontWeight: '800'}}>
                Return to Portfolio
              </Text>
            </View>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </View>
    );
  }
}


PerformanceScreen.navigationOptions = {
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