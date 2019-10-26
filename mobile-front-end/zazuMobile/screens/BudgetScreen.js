import React from 'react';
import { ScrollView, StyleSheet, View, Button, TextInput } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
 
export default class BudgetScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {text: ''};
      }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
        />
        
      <Button 
            title="NEXT ->" 
            onPress={() => this.props.navigation.navigate("Risk")
            // do some wack verify number shit
            } >
      </Button>
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
});
