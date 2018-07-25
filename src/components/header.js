// Import libraries for making a Component

import React from 'react';
import ReactNative from 'react-native';
import {Text, View} from 'react-native';

//Make a component

const Header = () => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}> Albums! </Text>
    </View>
  );
};
//Make the component available to other parts of the app
const styles = {
viewStyle: {
  backgroundColor: 'magenta',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: 50,
  paddingBottom: 50,
},
textStyle: {
  fontSize: 20

}



};
export default Header;
