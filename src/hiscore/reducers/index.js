import { FinishGame } from '../../game/actions';
import { HI_SCORE_TABLE_MAX } from '../constants';

export default function index(state = [], action) {
  switch (action.type) {
    case FinishGame:
      const scores = [
        ...state,
        { player: action.winner, score: action.score }
      ].sort((a, b) => b.score - a.score);

      if (state.length > HI_SCORE_TABLE_MAX) {
        return scores.slice(0, HI_SCORE_TABLE_MAX);
      }
      return scores;
  }
  return state;
}
