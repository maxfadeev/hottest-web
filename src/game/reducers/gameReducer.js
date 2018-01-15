import { EvaluateRound, PickCard, StartGame } from '../actions';

const defaultState = {
  activePlayer: 0,
  cards: [null, null],
  scores: [0, 0]
};

function getDefaultState() {
  return defaultState;
}

export default function(state = getDefaultState(), action) {
  switch (action.type) {
    case StartGame:
      return getDefaultState();
    case PickCard:
      return {
        ...state,
        activePlayer: state.activePlayer === 1 ? 0 : 1,
        cards: state.cards.map((k, i) => {
          if (i === state.activePlayer) {
            return action.card;
          }
          return k;
        })
      };

    case EvaluateRound:
      const card1 = state.cards[0].numericValue;
      const card2 = state.cards[1].numericValue;
      const { cards } = getDefaultState();
      let scores = [...state.scores];

      if (card1 > card2) {
        scores[0] += 1;
      } else if (card1 < card2) {
        scores[1] += 1;
      }
      return {
        ...state,
        cards,
        scores
      };
  }
  return state;
}
