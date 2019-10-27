import React from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity, Switch, Text } from 'react-native';
 
 
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
        <Text style={styles.titleText}>
          Select Sectors and Industries
        </Text>
        <Text style={styles.blurbText}>
          The Time Horizon is how long you plan on keeping your investments before you sell your investments off.
        </Text>
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
                Next: Verify Options
              </Text>
            </View>
        </TouchableOpacity>
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
  title: 'Sectors and Industries',
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