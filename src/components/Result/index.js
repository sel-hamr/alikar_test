import React, {useCallback} from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import ViewerNumber from '../Card/ViewerNumber';
import {useSelector, useDispatch} from 'react-redux';
import {setReset} from '../../redux/questions.slice';
import Button from '../Button';

const Result = () => {
  const {questionsList, counterQuestionSuccess} = useSelector(
    state => state.questions,
  );
  const dispatch = useDispatch();
  const handleResit = useCallback(() => {
    dispatch(setReset());
  }, []);
  return (
    <View style={styles.Container}>
      <Text style={styles.textOne}>Felicaitation !</Text>
      <Text style={styles.textTwo}>Voici votre score</Text>
      <ViewerNumber
        color="#1C3879"
        content={`${counterQuestionSuccess}/${questionsList.length}`}
        type="type1"
      />
      <Button
        text="Resit Game"
        handleClick={handleResit}
        style={styles.btnResit}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textOne: {
    marginBottom: 2,
    fontSize: 28,
    fontWeight: 'bold',
  },
  textTwo: {
    marginBottom: 10,
    fontSize: 20,
  },
  btnResit: {
    marginTop: 45,
  },
});

export default Result;
