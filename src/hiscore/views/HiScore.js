import React from 'react';
import { Text, View } from 'react-native';

const HiScore = ({ hiscore: { player, score } }) => (
  <View style={{ height: 200, backgroundColor: '#afa', margin: 10 }}>
    <Text>HiScore placeholder</Text>
  </View>
);

HiScore.propTypes = {};

export default HiScore;
