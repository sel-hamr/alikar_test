import React, {useCallback} from 'react';
import Card from '../../components/Card';
import Content from '../../components/Content';
import Result from '../../components/Result';
import {useSelector, useDispatch} from 'react-redux';
import Loader from '../../components/Loader';
import {
  getCurrentQuestion,
  setIndexCurrentQuestion,
} from '../../redux/questions.slice';
import useTimer from '../../hooks/useTimer';

const Body = () => {
  const {isFinish, questionsList, IndexCurrentQuestion, answerSelect} =
    useSelector(state => state.questions);
  const {label, answers, time, id} = useSelector(getCurrentQuestion());
  const dispatch = useDispatch();
  const handleClick = useCallback(status => {
    dispatch(setIndexCurrentQuestion(status));
  }, []);
  const timer = useTimer({time: time, onFinish: handleClick, dependency: [id]});
  if (questionsList.length === 0) return <Loader />;
  return !isFinish ? (
    <>
      <Card
        IndexCurrentQuestion={IndexCurrentQuestion}
        questionsList={questionsList}
        timer={timer}
      />
      <Content
        IndexCurrentQuestion={IndexCurrentQuestion}
        answerSelect={answerSelect}
        label={label}
        answers={answers}
        handleClick={handleClick}
      />
    </>
  ) : (
    <Result />
  );
};

export default Body;
