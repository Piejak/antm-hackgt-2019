import React from 'react';
import { ScrollView, StyleSheet, View, Button } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
 
var radio_props = [
  {label: 'Small (ETFS + Bonds)', value: 0 },
  {label: 'Medium (ETS & Stocks)', value: 1 },
  {label: 'Long (Stocks)', value: 2 }
];
 
export default class RiskScreen extends React.Component{
  render() {
    return (
      <ScrollView style={styles.container}>
        {/**
        * Go ahead and delete ExpoLinksView and replace it with your content;
        * we just wanted to provide you with some helpful links.
        */}
        <View>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={(value) => {this.setState({value:value})}}
        />
      <Button 
            title="NEXT ->" 
            onPress={() => this.props.navigation.navigate("Budget")} >
      </Button>
      </View>
      </ScrollView>
    );
  }
}

RiskScreen.navigationOptions = {
  title: 'Select Your Risk Tolerance',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
