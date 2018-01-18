import React from 'react';
import { Text, View, FlatList } from 'react-native';
import * as PropTypes from 'prop-types';

const HiScore = ({ hiscore }) => (
  <View style={{ height: 200, backgroundColor: '#afa', margin: 10 }}>
    <Text>Player Score</Text>
    {hiscore.map(s => (
      <Text>
        {s.player} {s.score}
      </Text>
    ))}
  </View>
);

HiScore.propTypes = {
  hiscore: PropTypes.arrayOf(
    PropTypes.objectOf({ player: PropTypes.string, score: PropTypes.number })
  ).isRequired
};

export default HiScore;
