import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ViewerNumber from './ViewerNumber';

const Card = ({questionsList, IndexCurrentQuestion, timer}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.item}>
        <Text>question</Text>
        <ViewerNumber
          color="#1C3879"
          content={`${IndexCurrentQuestion + 1}/${questionsList.length}`}
          type="type1"
        />
      </View>
      <View style={styles.item}>
        <Text>time</Text>
        <View style={{flexDirection: 'row'}}>
          <ViewerNumber color="#1C3879" content={timer?.mins} type="type2" />
          <ViewerNumber
            color="#1C3879"
            content={timer?.secs}
            type="type2"
            style={{marginLeft: 5}}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: -30,
    alignSelf: 'center',
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 15,
    flexDirection: 'row',
    zIndex:20,
    elevation: 15,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Card;
