import reducer from './gameReducer';
import * as types from '../actions/actionTypes';

describe('gameReducer', () => {
  const defaultState = {
    activePlayer: 0,
    cards: [null, null],
    scores: [0, 0]
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(defaultState);
  });

  it('should handle StartGame', () => {
    expect(
      reducer(
        {
          activePlayer: 1,
          cards: ['card1', 'card2'],
          scores: [7, 0]
        },
        { type: types.StartGame }
      )
    ).toEqual(defaultState);
  });

  it('should handle PickCard', () => {
    expect(
      reducer(defaultState, {
        type: types.PickCard,
        card: 'card1'
      })
    ).toEqual({
      activePlayer: 1,
      cards: ['card1', null],
      scores: [0, 0]
    });
  });

  it('should handle EvaluateRound', () => {
    const card1 = { numericValue: 10 };
    const card2 = { numericValue: 9 };
    expect(
      reducer(
        {
          activePlayer: 0,
          cards: [card1, card2],
          scores: [0, 0]
        },
        { type: types.EvaluateRound }
      )
    ).toEqual({
      activePlayer: 0,
      cards: defaultState.cards,
      scores: [1, 0]
    });
  });
});
