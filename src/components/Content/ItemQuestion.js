import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const ItemQuestion = ({title, isActive, handelChange}) => {
  return (
    <View style={styles.item}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isActive}
          onValueChange={handelChange}
          style={styles.checkbox}
          tintColors={{true: '#3AB4F2'}}
        />
      </View>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: '100%',
    height: 45,
    flexDirection: 'row',
  },
  title: {
    color: 'black',
    width: '100%',
    fontSize:18,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
    width:40,
  },
});

export default ItemQuestion;
