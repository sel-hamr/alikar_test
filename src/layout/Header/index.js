import React from 'react';

import {StyleSheet, View, Image, Text} from 'react-native';
const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.imgRow}>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
          }}
          style={styles.img}
        />
      </View>
      <View style={styles.textRow}>
        <Text style={styles.title}>Hi, username</Text>
        <Text style={styles.subtitle}>lorem ipsum</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    paddingHorizontal: '5%',
    height: 200,
    backgroundColor: '#3AB4F2',
    width: '100%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
 
    shadowOffset: {width: -20, height: 40},  
    shadowColor: '#171717',  
    shadowOpacity: 0.2,  
    shadowRadius: 3,  
    elevation: 14,
  },
  imgRow: {
    width: '100%',
    height: 60,
    alignItems: 'flex-end',
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textRow: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 16,
    color: 'black',
  },
});

export default Header;
