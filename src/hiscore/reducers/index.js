import { FinishGame } from '../../game/actions';

export default function index(state = [], action) {
  switch (action.type) {
    case FinishGame:
      return [...state, { player: action.winner, score: action.score }];
  }
  return state;
}
