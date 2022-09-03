import React, {useEffect} from 'react';

import {SafeAreaView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import {setQuestionData} from './src/redux/questions.slice';
import Fetch from './src/services/api';
import Header from './src/layout/Header';
import Body from './src/layout/Body';

const App = () => {
  const dispatch = useDispatch();
  const {counterResit} = useSelector(state => state.questions);
  useEffect(() => {
    const data = Fetch();
    dispatch(setQuestionData(data));
  }, [counterResit]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Header />
        <Body />
      </View>
    </SafeAreaView>
  );
};

const MyApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  subContainer: {
    width: '100%',
    height: '100%',
  },
});

export default MyApp;
