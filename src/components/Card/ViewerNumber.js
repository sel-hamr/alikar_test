import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
const ViewerNumber = ({content, color, type, style = {}}) => {
  return (
    <View
      style={{
        ...styles.ViewerNumber,
        width: type === 'type1' ? 70 : 60,
        ...style,
      }}>
      <Text style={{...styles.text, color: color}}>{content}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  ViewerNumber: {
    marginTop: 5,
    borderRadius: 4,
    backgroundColor: '#A6D1E6',
    padding: 10,
    width: 70,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ViewerNumber;
