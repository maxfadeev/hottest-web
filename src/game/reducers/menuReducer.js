import { FinishGame, StartGame } from '../actions';

const defaultState = {
  isGameInProgress: false,
  winner: null,
  winnerScore: 0
};

export default function(state = defaultState, action) {
  // I wouldn't use the separate constant
  const result = { ...state };
  switch (action.type) {
    case StartGame:
      // It's better to return a new object using the rest operator
      // return { ...state, { isGameInProgress: true } }
      result.isGameInProgress = true;
      return result;

    case FinishGame:
      // same as above
      // return { ...state, {...} }
      result.isGameInProgress = false;
      result.winner = action.winner;
      result.winnerScore = action.score;
      return result;
  }
  return state;
}
