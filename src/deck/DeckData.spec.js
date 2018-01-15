import DeckData from './DeckData';

describe('DeckData', () => {
  describe('pop', () => {
    it('should return null if there are no cards', () => {
      const deckData = new DeckData([]);
      expect(deckData.pop()).toBeNull();
    });

    it('should pop a card', () => {
      const deckData = new DeckData(['card1', 'card2']);
      expect(deckData.pop()).toBe('card2');
      deckData.pop();
      expect(deckData.isEmpty).toBeTruthy();
    });
  });

  it('should be null if there is no top card', () => {
    const deckData = new DeckData([]);
    expect(deckData.topCard).toBeNull();
  });

  it('should be the top card', () => {
    const deckData = new DeckData(['card1', 'card2', 'card3']);
    expect(deckData.topCard).toBe('card3');
  });

  it('should not be empty if there are cards in the deck', () => {
    const deckData = new DeckData(['card1']);
    expect(deckData.isEmpty).toBeFalsy();
  });

  it('should shuffle the deck', () => {
    const deckData = new DeckData(['card1', 'card2', 'card3', 'card4']);
    expect(deckData).not.toEqual(deckData.clone.shuffle());
    expect(deckData).not.toEqual(deckData.clone.shuffle());
    expect(deckData).not.toEqual(deckData.clone.shuffle());
  });
});
