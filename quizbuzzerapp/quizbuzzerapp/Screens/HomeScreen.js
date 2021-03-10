import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import AppHeader from '../components/AppHeader';


class HomeScreen extends React.Component {
   
  goToBuzzerScreen=(buzzerColor)=>{
    this.props.navigation.navigate('BuzzerScreen',{color:buzzerColor})
  }

  render() {
    return (
      <View>
      <AppHeader/>
      <TouchableOpacity style={[styles.button,{backgroundColor:'blue'}]} onPress={()=> {this.goToBuzzerScreen('blue')}}>
        <Text style={styles.buttonText}> Team1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button,{backgroundColor:'red'}]} onPress={()=> {this.goToBuzzerScreen('red')}} >
        <Text style={styles.buttonText}>Team2 </Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button,{backgroundColor:'green'}]} onPress={()=> {this.goToBuzzerScreen('green')}} >
        <Text style={styles.buttonText}>Team3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button,{backgroundColor:'yellow'}]} onPress={()=> {this.goToBuzzerScreen('yellow')}}>
        <Text style={styles.buttonText}>Team4</Text>
      </TouchableOpacity>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    marginTop: 50,
    marginLeft: 100,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    backgroundColor: 'red',
    borderRadius: 100,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 15,
  }
});

export default HomeScreen;