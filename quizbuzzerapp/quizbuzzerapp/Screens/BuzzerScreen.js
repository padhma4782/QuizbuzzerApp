import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import AppHeader from '../components/AppHeader';
import SoundButton from '../components/SoundButton';


class BuzzerScreen extends React.Component {
   

  render() {
    return (
      <View>
      <AppHeader/>
      <SoundButton color={this.props.navigation.getParam('color')}/>

      </View>
    );
  }
}


export default BuzzerScreen;