import {createSlice, createSelector} from '@reduxjs/toolkit';

const initialState = {
  questionsList: [],
  IndexCurrentQuestion: 0,
  counterQuestionSuccess: 0,
  answerSelect: {
    index: -1,
    status: false,
  },
  timeQuestion: 0,
  isFinish: false,
  counterResit: 0,
};

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    setQuestionData: (state, action) => {
      const {payload} = action;
      state.questionsList = payload;
    },
    setIndexCurrentQuestion: (state, {payload = true}) => {
      state.IndexCurrentQuestion = state.IndexCurrentQuestion + 1;
      state.counterQuestionSuccess = state.answerSelect.status
        ? payload
          ? state.counterQuestionSuccess + 1
          : state.counterQuestionSuccess
        : state.counterQuestionSuccess;
      state.isFinish =
        state.questionsList.length === state.IndexCurrentQuestion
          ? true
          : false;
      state.answerSelect = {
        index: -1,
        status: false,
      };
    },
    setAnswerSelect: (state, {payload}) => {
      state.answerSelect = payload;
    },
    setReset: state => {
      state.IndexCurrentQuestion = initialState.IndexCurrentQuestion;
      state.isFinish = initialState.isFinish;
      state.answerSelect = initialState.answerSelect;
      state.counterQuestionSuccess = initialState.counterQuestionSuccess;
      state.questionsList = initialState.questionsList;
      state.counterResit = state.counterResit + 1;
    },
  },
});

export const {
  setQuestionData,
  setIndexCurrentQuestion,
  setAnswerSelect,
  setReset,
} = questionsSlice.actions;

export const getCurrentQuestion = () =>
  createSelector(
    state => state.questions,
    state =>
      state.questionsList?.[state.IndexCurrentQuestion] || {
        label: '',
        answers: [],
      },
  );

export default questionsSlice.reducer;
