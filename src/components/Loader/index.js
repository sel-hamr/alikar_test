import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Loader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading ...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontSize: 26,
  },
});

export default Loader;
