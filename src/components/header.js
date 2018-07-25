// Import libraries for making a Component

import React from 'react';
import ReactNative from 'react-native';
import {Text} from 'react-native';

//Make a component

const Header = () => {
  const { textStyle } = styles;

  return <Text style={textStyle}> Albums! </Text>;
};
//Make the component available to other parts of the app
const styles = {

textStyle: {
  fontSize: 20

}

};
export default Header;
