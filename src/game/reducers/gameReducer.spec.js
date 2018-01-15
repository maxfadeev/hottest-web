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
      reducer(
        {},
        {
          type: types.PickCard,
          card: 'card1'
        }
      )
    );
  });
});
