import React from 'react';
import { ScrollView, StyleSheet, View, Button, Switch, Text } from 'react-native';
 
 
export default class SectorSelectScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            switchValueCommServices: false,
            switchValueConDisc: false,
            switchValueConStap: false,
            switchValueEnergy: false,
            switchValueFin: false,
            switchValueHealthcare: false,
            switchValueIndustrials: false,
            switchValueInformationTech: false,
            switchValueMaterials: false,
            switchValueRealEstate: false,
            switchValueUtilities: false
        };
      }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
            {/*Comm Services*/}
            <Switch
            style={{marginTop:30}}
            onValueChange = {this.toggleSwitchValueCommServices}
            value = {this.state.switchValueCommServices}/>

            {/*Con Disc*/}
            <Switch
            style={{marginTop:30}}
            onValueChange = {this.toggleSwitchValueConDisc}
            value = {this.state.switchValueConDisc}/>

            {/*Con Stap*/}
            <Switch
            style={{marginTop:30}}
            onValueChange = {this.toggleSwitchValueConStap}
            value = {this.state.switchValueConStap}/>

            {/*Energy*/}
            <Switch
            style={{marginTop:30}}
            onValueChange = {this.toggleSwitchValueEnergy}
            value = {this.state.switchValueEnergy}/>

            {/*Fin*/}
            <Switch
            style={{marginTop:30}}
            onValueChange = {this.toggleSwitchValueFin}
            value = {this.state.switchValueFin}/>

            {/*Healthcare*/}
            <Switch
            style={{marginTop:30}}
            onValueChange = {this.toggleSwitchValueHealthcare}
            value = {this.state.switchValueHealthcare}/>

            {/*Industrials*/}
            <Switch
            style={{marginTop:30}}
            onValueChange = {this.toggleSwitchValueIndustrials}
            value = {this.state.switchValueIndustrials}/>

            {/*InformationTech*/}
            <Switch
            style={{marginTop:30}}
            onValueChange = {this.toggleSwitchValueInformationTech}
            value = {this.state.switchValueInformationTech}/>

            {/*Materials*/}
            <Switch
            style={{marginTop:30}}
            onValueChange = {this.toggleSwitchValueMaterials}
            value = {this.state.switchValueMaterials}/>

            {/*Real Estate*/}
            <Switch
            style={{marginTop:30}}
            onValueChange = {this.toggleSwitchValueRealEstate}
            value = {this.state.switchValueRealEstate}/>

            {/*Utilities*/}
            <Switch
            style={{marginTop:30}}
            onValueChange = {this.toggleSwitchValueUtilities}
            value = {this.state.switchValueUtilities}/>
      <Button 
            title="NEXT ->" 
            onPress={() => this.props.navigation.navigate("Risk")} >
      </Button>
      </View>
      </ScrollView>
    );
  }
    toggleSwitchValueCommServices = (value) => {
        //onValueChange of the switch this function will be called
        this.setState({switchValueCommServices: value})
        //state changes according to switch
        //which will result in re-render the text
    }
    toggleSwitchValueConDisc = (value) => {
        //onValueChange of the switch this function will be called
        this.setState({switchValueConDisc: value})
        //state changes according to switch
        //which will result in re-render the text
    }
    toggleSwitchValueConStap = (value) => {
        //onValueChange of the switch this function will be called
        this.setState({switchValueConStap: value})
        //state changes according to switch
        //which will result in re-render the text
    }
    toggleSwitchValueEnergy = (value) => {
        //onValueChange of the switch this function will be called
        this.setState({switchValueEnergy: value})
        //state changes according to switch
        //which will result in re-render the text
    }
    toggleSwitchValueFin = (value) => {
        //onValueChange of the switch this function will be called
        this.setState({switchValueFin: value})
        //state changes according to switch
        //which will result in re-render the text
    }
    toggleSwitchValueHealthcare = (value) => {
        //onValueChange of the switch this function will be called
        this.setState({switchValueHealthcare: value})
        //state changes according to switch
        //which will result in re-render the text
    }
    toggleSwitchValueIndustrials = (value) => {
        //onValueChange of the switch this function will be called
        this.setState({switchValueIndustrials: value})
        //state changes according to switch
        //which will result in re-render the text
    }
    toggleSwitchValueInformationTech = (value) => {
        //onValueChange of the switch this function will be called
        this.setState({switchValueInformationTech: value})
        //state changes according to switch
        //which will result in re-render the text
    }
    toggleSwitchValueMaterials = (value) => {
        //onValueChange of the switch this function will be called
        this.setState({switchValueMaterials: value})
        //state changes according to switch
        //which will result in re-render the text
    }
    toggleSwitchValueRealEstate = (value) => {
        //onValueChange of the switch this function will be called
        this.setState({switchValueRealEstate: value})
        //state changes according to switch
        //which will result in re-render the text
    }
    toggleSwitchValueUtilities = (value) => {
        //onValueChange of the switch this function will be called
        this.setState({switchValueUtilities: value})
        //state changes according to switch
        //which will result in re-render the text
    }
}

SectorSelectScreen.navigationOptions = {
  title: 'Select Your Time Horizon',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
