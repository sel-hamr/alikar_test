import React, {useCallback} from 'react';

import {StyleSheet, View, Text, FlatList} from 'react-native';
import {useDispatch} from 'react-redux';
import ItemQuestion from './ItemQuestion';
import {setAnswerSelect} from '../../redux/questions.slice';
import Button from '../Button';

const Content = ({
  IndexCurrentQuestion,
  answerSelect,
  label,
  answers,
  handleClick,
}) => {
  const dispatch = useDispatch();
  const renderItem = ({item, index}) => (
    <ItemQuestion
      title={item.label}
      key={index}
      isActive={answerSelect.index === index ? true : false}
      handelChange={() => {
        dispatch(setAnswerSelect({index, status: item.correct}));
      }}
    />
  );
  return (
    <View style={styles.contentContainer}>
      <Text
        style={{
          marginBottom: 5,
          width: '100%',
          fontSize: 22,
          fontWeight: 'bold',
        }}>
        question {`${IndexCurrentQuestion + 1}`}
      </Text>
      <Text style={{marginBottom: 35, width: '100%', fontSize: 18}}>
        {label}
      </Text>
      <View styles={styles.list}>
        <FlatList data={answers} renderItem={renderItem} />
      </View>
      <Button
        text="Suivant"
        handleClick={() => {
          handleClick(true);
        }}
        style={styles.btnNext}
        isDisable={answerSelect.index === -1 ? true : false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: '5%',
  },
  list: {
    marginTop: 15,
    width: '100%',
  },
  btnNext: {
    marginTop: 75,
  },
});

export default Content;
