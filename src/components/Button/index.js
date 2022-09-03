import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
const Button = ({handleClick, text, isDisable = false, style = {}}) => {
  return (
    <View style={styles.btnContainer}>
      <Pressable
        style={{
          ...styles.btn,
          backgroundColor: isDisable ? '#CFD2CF' : '#3AB4F2',
          ...style,
        }}
        onPress={!isDisable ? handleClick : null}>
        <Text>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    paddingVertical: 15,
    paddingHorizontal: 85,
    borderRadius: 50,
  },
});

export default React.memo(Button);
